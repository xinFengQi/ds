<template>
  <div>
    <div class="setting_tool">
      <a-button type="primary" @click="uploadBookMarks"
        >根据下面内容获取脚本</a-button
      >
    </div>
    <a-page-header
      class="page_header"
      title="是否启动个人gitee远程数据储存"
      sub-title="使用gitee远程数据存储后，可以在远程读取或者存储书签数据"
    />
    <div class="writer_content">
      <a-switch
        v-model:checked="giteeCodes_private_open"
        @change="giteePrivateOpenChange($event)"
      />
    </div>
    <div v-if="giteeCodes_private_open">
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
        v-model:checked="giteeCodes_public_open"
        @change="giteePublicOpenChange($event)"
      />
    </div>

    <div v-if="giteeCodes_public_open">
      <a-page-header
        class="page_header"
        title="公共唯一标识"
        sub-title="根据此标识去gitee读取文件和存储数据，公共标识会将脚本内容加入个人脚本显示"
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
import chromeUtil from "../../chrome_lib/chrome_util";
import chrome_gitee_util from "../../chrome_lib/chrome_gitee_util";
import GiteeSettingForm from "../../components/GiteeSettingForm.vue";

export default {
  name: "codeSetting",
  components: {
    HighlightTwoTone,
    GiteeSettingForm,
  },
  data() {
    return {
      giteeCodes_private_open: false,
      giteeCodes_public_open: false,
      giteeDsFlag: "",
      giteeDsPublicFlag: "",
      giteeData: {
        accessToken: {
          varName: "__gitee_code_access_token",
        },
        owner: {
          varName: "__gitee_code_owner",
        },
        repo: {
          varName: "__gitee_code_repo",
        },
      },
      giteePublicData: {
        accessToken: {
          varName: "__gitee_code_public_access_token",
        },
        owner: {
          varName: "__gitee_code_public_owner",
        },
        repo: {
          varName: "__gitee_code_public_repo",
        },
      },
    };
  },
  mounted() {
    chromeUtil.getLocalVariable("__giteeCodes_private_open").then((isShow) => {
      this.giteeCodes_private_open =
        typeof isShow === "string" ? Boolean(isShow) : isShow;
    });
    chromeUtil.getLocalVariable("__giteeCodes_public_open").then((isShow) => {
      this.giteeCodes_public_open =
        typeof isShow === "string" ? Boolean(isShow) : isShow;
    });
    chromeUtil.getLocalVariable("__gitee_code_ds_flag").then((v) => {
      this.giteeDsFlag = v;
    });

    chromeUtil.getLocalVariable("__gitee_code_ds_pubilc_flag").then((v) => {
      this.giteeDsPublicFlag = v;
    });
  },
  watch: {
    giteeDsFlag: function (newV, oldV) {
      if (newV === oldV) {
        return;
      }
      console.log("存在变化", newV, oldV);
      chromeUtil.setLocalVariable("__gitee_code_ds_flag", newV);
    },
    giteeDsPublicFlag: function (newV, oldV) {
      if (newV === oldV) {
        return;
      }
      console.log("存在变化", newV, oldV);
      chromeUtil.setLocalVariable("__gitee_code_ds_pubilc_flag", newV);
    },
  },
  methods: {
    uploadBookMarks: function () {
      chrome_gitee_util.uploadBookMarks().then((v) => {
        if (v) {
          alert("更新成功");
        }
      });
    },
    giteePrivateOpenChange: function (ev) {
      chromeUtil.setLocalVariable("__giteeCodes_private_open", ev);
    },
    giteePublicOpenChange: function (ev) {
      chromeUtil.setLocalVariable("__giteeCodes_public_open", ev);
    },
  },
};
</script>

<style scope>
.setting_tool {
  display: flex;
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
