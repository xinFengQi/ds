<template>
  <div>
    <a-page-header
      class="page_header"
      title="是否启动个人gitee远程数据储存"
      sub-title="使用gitee远程数据存储后，可以在远程读取或者存储书签数据"
    />
    <div class="writer_content">
      <a-switch
        v-model:checked="giteeMarks_private_open"
        @change="giteePrivateOpenChange($event)"
      />
      <div class="setting_tool" v-if="giteeMarks_private_open">
        <a-button type="primary" @click="uploadBookMarks"
          >根据下面内容上传本地书签</a-button
        >
      </div>
    </div>

    <div v-if="giteeMarks_private_open">
      <a-page-header
        class="page_header"
        title="个人唯一标识"
        sub-title="根据此标识去gitee读取文件和存储数据，所以标识一样会数据通用"
      />
      <div class="writer_content">
        <div class="input_conlone">
          <label>设置标识:</label>
          <span class="input_value">
            <a-typography-paragraph v-model:content="giteeDsFlag" editable>
              <template v-slot:editableIcon>
                <HighlightTwoTone />
              </template>
              <template v-slot:editableTooltip>点击编辑文本</template>
            </a-typography-paragraph>
          </span>
        </div>
      </div>

      <GiteeSettingForm :giteeData="giteeData"></GiteeSettingForm>
    </div>

    <a-page-header
      class="page_header"
      title="是否启动公共gitee远程数据储存"
      sub-title="使用gitee远程数据存储后，可以在远程读取或者存储书签数据"
    />
    <div class="writer_content">
      <a-switch
        v-model:checked="giteeMarks_public_open"
        @change="giteePublicOpenChange($event)"
      />
    </div>

    <div v-if="giteeMarks_public_open">
      <a-page-header
        class="page_header"
        title="公共唯一标识"
        sub-title="根据此标识去gitee读取文件和存储数据，公共标识会将书签内容加入个人书签显示"
      />
      <div class="writer_content">
        <div class="input_conlone">
          <label>设置标识:</label>
          <span class="input_value">
            <a-typography-paragraph
              v-model:content="giteeDsPublicFlag"
              editable
            >
              <template v-slot:editableIcon>
                <HighlightTwoTone />
              </template>
              <template v-slot:editableTooltip>点击编辑文本</template>
            </a-typography-paragraph>
          </span>
        </div>
      </div>

      <GiteeSettingForm :giteeData="giteePublicData"></GiteeSettingForm>
    </div>
  </div>
</template>

<script>
import { HighlightTwoTone } from "@ant-design/icons-vue";
import localStorgeData from "@/sevices/localStorge.data";
import browerExtensionService from "@/sevices/brower_extension.services"
import { reactive, toRefs } from "vue";
import GiteeSettingForm from "@/components/GiteeSettingForm.vue";
import { getGiteeKey, getGiteeObjectKey } from "@/sevices/gitee.api";
export default {
  name: "bookmarksSetting",
  components: {
    HighlightTwoTone,
    GiteeSettingForm,
  },
  setup() {
    const state = reactive({
      giteeMarks_private_open: false,
      giteeMarks_public_open: false,
    });

    return { ...toRefs(state) };
  },
  data() {
    return {
      giteeDsFlag: "",
      giteeData: getGiteeObjectKey("booksMarks", "private"),
      giteeDsPublicFlag: "",
      giteePublicData: getGiteeObjectKey("booksMarks", "public"),
    };
  },
  mounted() {
    localStorgeData
      .getLocalVariable(getGiteeKey("booksMarks", "private_open"))
      .then((isShow) => {
        this.giteeMarks_private_open =
          typeof isShow === "string" ? Boolean(isShow) : isShow;
      });
    localStorgeData
      .getLocalVariable(getGiteeKey("booksMarks", "public_open"))
      .then((isShow) => {
        this.giteeMarks_public_open =
          typeof isShow === "string" ? Boolean(isShow) : isShow;
      });
    localStorgeData
      .getLocalVariable(getGiteeKey("booksMarks", "private_flag"))
      .then((v) => {
        this.giteeDsFlag = v;
      });
    localStorgeData
      .getLocalVariable(getGiteeKey("booksMarks", "public_flag"))
      .then((v) => {
        this.giteeDsPublicFlag = v;
      });
  },
  watch: {
    giteeDsFlag: function (newV, oldV) {
      if (newV === oldV) {
        return;
      }
      console.log("存在变化", newV, oldV);
      localStorgeData.setLocalVariable(
        getGiteeKey("booksMarks", "private_flag"),
        newV
      );
    },
    giteeDsPublicFlag: function (newV, oldV) {
      if (newV === oldV) {
        return;
      }
      console.log("存在变化", newV, oldV);
      localStorgeData.setLocalVariable(
        getGiteeKey("booksMarks", "public_flag"),
        newV
      );
    },
  },
  methods: {
    uploadBookMarks: function () {
      // 上传功能暂时未做
      browerExtensionService.uploadBookMarks().then((v) => {
        if (v) {
          alert("更新成功");
        }
      });
    },
    giteePrivateOpenChange: function (ev) {
      localStorgeData.setLocalVariable(
        getGiteeKey("booksMarks", "private_open"),
        ev
      );
    },
    giteePublicOpenChange: function (ev) {
      localStorgeData.setLocalVariable(
        getGiteeKey("booksMarks", "public_open"),
        ev
      );
    },
  },
};
</script>

<style scope>
.setting_tool {
  display: flex;
  margin-top: 5px;
  margin-left: 24px;
}
.page_header {
  height: 50px;
  display: flex;
  align-items: center;
}

.writer_content {
  margin-left: 24px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.input_conlone {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.input_value {
  margin-left: 4px;
  margin-right: 30px;
  min-width: 250px;
  display: flex;
  align-items: center;
}

.ant-typography {
  margin-bottom: 0px !important;
}
</style>
