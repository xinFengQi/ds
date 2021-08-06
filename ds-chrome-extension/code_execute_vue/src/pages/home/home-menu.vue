<template>
  <div>
    <a-menu
      mode="inline"
      v-model:selectedKeys="selectedKeys"
      :inline-collapsed="collapsed"
    >
      <a-menu-item
        v-for="item in machineMenu"
        :key="item.dateAdded + ''"
        @click="getClickMenu(item)"
      >
        <span>{{ item.title }}</span>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
import chromeUtil from "../../chrome_lib/chrome_util";
import axios from "axios";

export default {
  name: "homeMenu",
  data() {
    return {
      selectedKeys: [],
      machineMenu: [],
    };
  },
  mounted() {
    // 先去获取本地书签
    const getBook = chromeUtil.getBookmarks();
    const getDsFlag = chromeUtil.getLocalVariable("__gitee_ds_flag");
    const getGiteeAccess = chromeUtil.getLocalVariable("__gitee_access_token");
    const getGiteeOwner = chromeUtil.getLocalVariable("__gitee_owner");
    const getGiteeRepo = chromeUtil.getLocalVariable("__gitee_repo");

    Promise.all([
      getBook,
      getDsFlag,
      getGiteeAccess,
      getGiteeOwner,
      getGiteeRepo,
    ]).then((v) => {
      console.log(v, "========================");
      v[1] = "dongfubao";
      v[2] = "e9694199cc954120b37d5d449a56a752";
      v[3] = "dongfubao";
      v[4] = "ct";
      if (v[1] && v[2] && v[3] && v[4]) {
        const getMatkBookUrl = `https://gitee.com/api/v5/repos/${v[3]}/${v[4]}/contents/chrome_bookMark%2F${v[1]}.json?access_token=${v[2]}`;
        axios.get(getMatkBookUrl).then((httpV) => {
          if (
            httpV.data &&
            ((Array.isArray(httpV.data) && httpV.data.length > 0) ||
              !Array.isArray(httpV.data))
          ) {
            let oldContent = JSON.parse(
              decodeURIComponent(atob(httpV.data.content))
            ).map((olDa) => {
              return {
                ...olDa,
                title: olDa.title || olDa.dateAdded,
                dateAdded: olDa.dateAdded,
              };
            });
            if (v[0]) {
              oldContent = oldContent.filter(
                (de) => (de.dateAdded !== v[0].dateAdded && de.children[0].dateAdded !== v[0].children[0].dateAdded)
              );
              this.machineMenu = [
                {
                  ...v[0],
                  title: "本地书签",
                  dateAdded: v[0].dateAdded,
                },
                ...oldContent,
              ];
            } else {
              this.machineMenu = [...oldContent];
            }
            console.log("内容是", this.machineMenu);
            this.$emit("getShowMenu", this.machineMenu[0]);
            this.selectedKeys = [this.machineMenu[0].dateAdded + ""];
          }
        });
      } else {
        if (v[0]) {
          this.machineMenu = [
            {
              ...v[0],
              title: "本地书签",
              dateAdded: v[0].dateAdded,
            },
          ];
          this.selectedKeys = [this.machineMenu[0].dateAdded + ""];
        }
      }
    });
  },
  methods: {
    getClickMenu(data) {
      this.$emit("getShowMenu", data);
    },
  },
};
</script>

<style scope>
</style>
