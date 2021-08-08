<template>
  <div>
    <div class="setting_tool">
      <a-button type="primary" @click="uploadBookMarks">根据下面内容获取脚本</a-button>
    </div>
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

    <a-page-header
      class="page_header"
      title="gitee设置"
      sub-title="脚本的数据存储使用的是gitee,接口使用的是gitee的公开api"
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

        <a-page-header
      class="page_header"
      title="公共唯一标识"
      sub-title="根据此标识去gitee读取文件和存储数据，公共标识会将脚本内容加入个人脚本显示"
    />
    <div class="writer_content">
      <div class="input_conlone">
        <label>设置标识:</label>
        <span class="input_value">
          <a-typography-paragraph v-model:content="giteeDsPublicFlag" editable>
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
import chromeUtil from "../../chrome_lib/chrome_util";
import chrome_gitee_util from '../../chrome_lib/chrome_gitee_util';

export default {
  name: "codeSetting",
  components: {
    HighlightTwoTone,
  },
  data() {
    return {
      giteeDsFlag: "",
      getGiteeAccess: "",
      getGiteeOwner: "",
      getGiteeRepo: "",
      giteeDsPublicFlag: ""
    };
  },
  mounted() {
    chromeUtil.getLocalVariable("__gitee_ds_flag").then((v) => {
      this.giteeDsFlag = v || "dongfubao";
    });
    chromeUtil.getLocalVariable("__gitee_access_token").then((v) => {
      this.getGiteeAccess = v || "e9694199cc954120b37d5d449a56a752";
    });
    chromeUtil.getLocalVariable("__gitee_owner").then((v) => {
      this.getGiteeOwner = v || "dongfubao";
    });
    chromeUtil.getLocalVariable("__gitee_repo").then((v) => {
      this.getGiteeRepo = v || "ct";
    });
  },
  watch: {
    giteeDsFlag: function (newV, oldV) {
      if (newV === oldV) {
        return;
      }
      console.log("存在变化", newV, oldV);
      chromeUtil.setLocalVariable("__gitee_ds_flag", newV);
    },
    getGiteeAccess: function (newV, oldV) {
      if (newV === oldV) {
        return;
      }
      console.log("存在变化", newV, oldV);
      chromeUtil.setLocalVariable("__gitee_access_token", newV);
    },
    getGiteeOwner: function (newV, oldV) {
      if (newV === oldV) {
        return;
      }
      console.log("存在变化", newV, oldV);
      chromeUtil.setLocalVariable("__gitee_owner", newV);
    },
    getGiteeRepo: function (newV, oldV) {
      if (newV === oldV) {
        return;
      }
      console.log("存在变化", newV, oldV);
      chromeUtil.setLocalVariable("__gitee_repo", newV);
    },
  },
  methods: {
    uploadBookMarks: function() {
      chrome_gitee_util.uploadBookMarks().then(v => {
        if(v) {
          alert('更新成功')
        }
      })
    }
  },
};
</script>

<style scope>
.setting_tool{
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
