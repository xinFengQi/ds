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
                :copyable="{ text: giteeDsAccessToken }"
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
import localStorgeData from "@/sevices/localStorge.data";
import  { getGiteeKey, getGiteeArrKey   } from "@/sevices/gitee.api"
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
      localStorgeData.getLocalVariable(key).then((v) => {
        if (v && v !== "null") {
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
      localStorgeData.setLocalVariable("__gitee_all_ds_flag", newV);
    },
    giteeDsPublicFlag: function (newV, oldV) {
      if (newV === oldV) {
        return;
      }
      localStorgeData.setLocalVariable("__gitee_all_ds_pubilc_flag", newV);
    },
    giteeDsAccessToken: function (newV, oldV) {
      if (newV === oldV) {
        return;
      }
      localStorgeData.setLocalVariable("__gitee_all_ds_access_token", newV);
    },
    giteeDsOwner: function (newV, oldV) {
      if (newV === oldV) {
        return;
      }
      localStorgeData.setLocalVariable("__gitee_all_ds_owner", newV);
    },
    giteeDsRepo: function (newV, oldV) {
      if (newV === oldV) {
        return;
      }
      localStorgeData.setLocalVariable("__gitee_all_ds_repo", newV);
    },
  },
  methods: {
    quickSetting: function () {
      const dsFlags = ["booksMarks", "codes", "tasklist"];
      const dsGiteeFlags = ["booksMarks", "codes", "tasklist"];
      const dsPublicFlags = ["booksMarks", "codes", "tasklist"];

      console.log("一键设置");

      const setGiteeFlag = (arr) => {
        const mapData = {
          0: this.giteeDsAccessToken,
          1: this.giteeDsOwner,
          2: this.giteeDsRepo,
        };
        arr.forEach((ar, index) => {
          localStorgeData.setLocalVariable(ar, mapData[index]);
        });
      };
      dsFlags
        .map((v) => getGiteeKey(v, "private_flag"))
        .forEach((v) => {
          localStorgeData.setLocalVariable(v, this.giteeDsFlag);
        });
      dsPublicFlags
        .map((v) => getGiteeKey(v, "public_flag"))
        .forEach((v) => {
          localStorgeData.setLocalVariable(v, this.giteeDsPublicFlag);
        });
      dsGiteeFlags
        .map((v) => getGiteeArrKey(v, "private"))
        .forEach((v) => {
          setGiteeFlag(v);
        });
      dsGiteeFlags
        .map((v) => getGiteeArrKey(v, "public"))
        .forEach((v) => {
          setGiteeFlag(v);
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
