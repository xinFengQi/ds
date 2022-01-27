<script lang="tsx">
import { Vue, prop } from "vue-class-component";
import { LayoutMenu } from "@/model/layout.model";
import { Prop } from "vue-property-decorator";

export default class LayoutMainMenu extends Vue {
  @Prop({
    default: () => {
      return [];
    },
  })
  menu!: LayoutMenu[];

  gotoItem = (data: LayoutMenu) => {
    this.$emit("menuClick", data);
  };
  private getMenu(menu: LayoutMenu[]) {
    return menu.map((v) => {
      if (v.children && v.children.length) {
        return (
          <a-sub-menu key={v.name}>
            <span>{v.name} </span>
            {this.getMenu([...v.children])}
          </a-sub-menu>
        );
      } else {
        return (
          <a-menu-item key={v.name} onclick={() => this.gotoItem(v)}>
            <span>{v.name}</span>
          </a-menu-item>
        );
      }
    });
  }

  render() {
    return (
      <a-menu theme="dark" mode="inline">
        {this.getMenu([...this.menu])}
      </a-menu>
    );
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.LayoutMainMenu_main {
  width: 100%;
  height: 100%;
}
</style>
