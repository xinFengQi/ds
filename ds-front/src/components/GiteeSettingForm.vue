<template>
  <div class="GiteeSettingForm">
    <a-page-header
      class="page_header"
      title="gitee设置"
      sub-title="书签的数据存储使用的是gitee,接口使用的是gitee的公开api"
    />

    <div class="writer_content">
      <div class="input_conlone">
        <label>用户授权码[access_token]:</label>
        <span class="input_value">
          <a-typography-paragraph v-model:content="getGiteeAccess" editable>
            <template v-slot:editableIcon>
              <HighlightTwoTone />
            </template>
            <template v-slot:editableTooltip>点击编辑文本</template>
          </a-typography-paragraph>
        </span>
      </div>
      <div class="input_conlone">
        <label>仓库所属空间地址(企业、组织或个人的地址path)[owner]:</label>
        <span class="input_value">
          <a-typography-paragraph v-model:content="getGiteeOwner" editable>
            <template v-slot:editableIcon>
              <HighlightTwoTone />
            </template>
            <template v-slot:editableTooltip>点击编辑文本</template>
          </a-typography-paragraph>
        </span>
      </div>
      <div class="input_conlone">
        <label>仓库路径(path)[repo]:</label>
        <span class="input_value">
          <a-typography-paragraph v-model:content="getGiteeRepo" editable>
            <template v-slot:editableIcon>
              <HighlightTwoTone />
            </template>
            <template v-slot:editableTooltip>点击编辑文本</template>
          </a-typography-paragraph>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { HighlightTwoTone } from "@ant-design/icons-vue";
import localStorgeData from "@/sevices/localStorge.data";


export default {
  components: {
    HighlightTwoTone,
  },
  name: "GiteeSettingForm",
  props: {
    giteeData: Object,
  },
  data() {
    return {
      getGiteeAccess: "",
      getGiteeOwner: "",
      getGiteeRepo: "",
    };
  },
  mounted() {
    if (!this.giteeData) {
      throw "没有参数,报错";
    }
    if (this.giteeData.accessToken) {
      localStorgeData
        .getLocalVariable(this.giteeData.accessToken.varName)
        .then((v) => {
          this.getGiteeAccess = v;
        });
    }
    if (this.giteeData.owner) {
      localStorgeData.getLocalVariable(this.giteeData.owner.varName).then((v) => {
        this.getGiteeOwner = v;
      });
    }

    if (this.giteeData.repo) {
      localStorgeData.getLocalVariable(this.giteeData.repo.varName).then((v) => {
        this.getGiteeRepo = v;
      });
    }
  },
  watch: {
    getGiteeAccess: function (newV, oldV) {
      if (newV === oldV) {
        return;
      }
      console.log("存在变化", newV, oldV);
      if (this.giteeData.accessToken && this.giteeData.accessToken.varName) {
        localStorgeData.setLocalVariable(this.giteeData.accessToken.varName, newV);
      }
    },
    getGiteeOwner: function (newV, oldV) {
      if (newV === oldV) {
        return;
      }
      console.log("存在变化", newV, oldV);
      if (this.giteeData.owner && this.giteeData.owner.varName) {
        localStorgeData.setLocalVariable(this.giteeData.owner.varName, newV);
      }
    },
    getGiteeRepo: function (newV, oldV) {
      if (newV === oldV) {
        return;
      }
      console.log("存在变化", newV, oldV);
      if (this.giteeData.repo && this.giteeData.repo.varName) {
        localStorgeData.setLocalVariable(this.giteeData.repo.varName, newV);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.GiteeSettingForm {
}
</style>
