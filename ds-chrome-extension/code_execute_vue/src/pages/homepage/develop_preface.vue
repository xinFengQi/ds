<template>
  <div class="developPrefaceMain">
    <a-typography-title>序言</a-typography-title>
    <a-typography-paragraph>
      基于vue的chrome扩展的工具集合,目前主要的功能是书签及脚本执行;
    </a-typography-paragraph>
    <a-typography-title :level="2">开发者测试数据</a-typography-title>
    <a-typography-paragraph>
      <blockquote>
        <div class="writer_content">
          <div class="input_conlone">
            <label>个人标识:</label>
            <span class="input_value">
              <a-typography-paragraph
                v-model:content="giteeDsFlag"
                editable
                :copyable="{ text: giteeDsFlag }"
              >
                <template v-slot:editableIcon>
                  <HighlightTwoTone />
                </template>
                <template v-slot:editableTooltip>点击编辑文本</template>
              </a-typography-paragraph>
            </span>
          </div>
        </div>

        <div class="writer_content">
          <div class="input_conlone">
            <label>用户授权码:</label>
            <span class="input_value">
              <a-typography-paragraph
                v-model:content="giteeDsAccessToken"
                editable
                :copyable="{ text: giteeDsFlag }"
              >
                <template v-slot:editableIcon>
                  <HighlightTwoTone />
                </template>
                <template v-slot:editableTooltip>点击编辑文本</template>
              </a-typography-paragraph>
            </span>
          </div>
        </div>

        <div class="writer_content">
          <div class="input_conlone">
            <label>仓库所属空间地址:</label>
            <span class="input_value">
              <a-typography-paragraph
                v-model:content="giteeDsOwner"
                editable
                :copyable="{ text: giteeDsOwner }"
              >
                <template v-slot:editableIcon>
                  <HighlightTwoTone />
                </template>
                <template v-slot:editableTooltip>点击编辑文本</template>
              </a-typography-paragraph>
            </span>
          </div>
        </div>

        <div class="writer_content">
          <div class="input_conlone">
            <label>仓库路径:</label>
            <span class="input_value">
              <a-typography-paragraph
                v-model:content="giteeDsRepo"
                editable
                :copyable="{ text: giteeDsRepo }"
              >
                <template v-slot:editableIcon>
                  <HighlightTwoTone />
                </template>
                <template v-slot:editableTooltip>点击编辑文本</template>
              </a-typography-paragraph>
            </span>
          </div>
        </div>

        <div class="writer_content">
          <div class="input_conlone">
            <label>公共标识:</label>
            <span class="input_value">
              <a-typography-paragraph
                v-model:content="giteeDsPublicFlag"
                editable
                :copyable="{ text: giteeDsPublicFlag }"
              >
                <template v-slot:editableIcon>
                  <HighlightTwoTone />
                </template>
                <template v-slot:editableTooltip>点击编辑文本</template>
              </a-typography-paragraph>
            </span>
          </div>
        </div>
        <a-button type="primary" @click="quickSetting">一键设置</a-button>
      </blockquote>
    </a-typography-paragraph>
  </div>
</template>

<script>
import { HighlightTwoTone } from "@ant-design/icons-vue";
import chromeUtil from "../../chrome_lib/chrome_util";

export default {
  name: "developPreface",
  props: {},
  components: {
    HighlightTwoTone,
  },
  data() {
    return {
      giteeDsFlag: "dongfubao",
      giteeDsPublicFlag: "dongfubao_trrt",
      giteeDsAccessToken: "e9694199cc954120b37d5d449a56a752",
      giteeDsOwner: "dongfubao",
      giteeDsRepo: "ct",
    };
  },
  mounted() {
    const datas = {
      __gitee_all_ds_flag: "giteeDsFlag",
      __gitee_all_ds_pubilc_flag: "giteeDsPublicFlag",
      __gitee_all_ds_access_token: "giteeDsAccessToken",
      __gitee_all_ds_owner: "giteeDsOwner",
      __gitee_all_ds_repo: "giteeDsRepo",
    };
    Object.keys(datas).forEach((key) => {
      chromeUtil.getLocalVariable(key).then((v) => {
        if(v && v !== 'null') {
          this[datas[key]] = v;
        }
      });
    });
  },
  watch: {
    giteeDsFlag: function (newV, oldV) {
      if (newV === oldV) {
        return;
      }
      chromeUtil.setLocalVariable("__gitee_all_ds_flag", newV);
    },
    giteeDsPublicFlag: function (newV, oldV) {
      if (newV === oldV) {
        return;
      }
      chromeUtil.setLocalVariable("__gitee_all_ds_pubilc_flag", newV);
    },
    giteeDsAccessToken: function (newV, oldV) {
      if (newV === oldV) {
        return;
      }
      chromeUtil.setLocalVariable("__gitee_all_ds_access_token", newV);
    },
    giteeDsOwner: function (newV, oldV) {
      if (newV === oldV) {
        return;
      }
      chromeUtil.setLocalVariable("__gitee_all_ds_owner", newV);
    },
    giteeDsRepo: function (newV, oldV) {
      if (newV === oldV) {
        return;
      }
      chromeUtil.setLocalVariable("__gitee_all_ds_repo", newV);
    },
  },
  methods: {
    quickSetting: function () {
      console.log("一键设置");
      const dsFlags = ["__gitee_ds_flag", "__gitee_code_ds_flag"];
      const dsPublicFlags = [
        "__gitee_ds_pubilc_flag",
        "__gitee_code_ds_pubilc_flag",
      ];
      const dsAccessTokens = [
        "__gitee_access_token",
        "__gitee_public_access_token",
        "__gitee_code_access_token",
        "__gitee_code_public_access_token",
      ];
      const dsOwners = [
        "__gitee_owner",
        "__gitee_public_owner",
        "__gitee_code_owner",
        "__gitee_code_public_owner",
      ];
      const dsRepos = [
        "__gitee_repo",
        "__gitee_public_repo",
        "__gitee_code_repo",
        "__gitee_code_public_repo",
      ];

      dsFlags.forEach((v) => {
        chromeUtil.setLocalVariable(v, this.giteeDsFlag);
      });

      dsPublicFlags.forEach((v) => {
        chromeUtil.setLocalVariable(v, this.giteeDsPublicFlag);
      });
      dsAccessTokens.forEach((v) => {
        chromeUtil.setLocalVariable(v, this.giteeDsAccessToken);
      });
      dsOwners.forEach((v) => {
        chromeUtil.setLocalVariable(v, this.giteeDsOwner);
      });
      dsRepos.forEach((v) => {
        chromeUtil.setLocalVariable(v, this.giteeDsRepo);
      });
    },
  },
};
</script>


<style scoped>
.developPrefaceMain {
  text-align: left;
}
</style>
