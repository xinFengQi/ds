<template>
  <div class="blog_managersetting_main">
    <div class="blog_managersetting_col">
      新增博客分类:
      <a-input
        class="blog_managersetting_input"
        v-model:value="classify"
        placeholder="请输入"
      />
      <a-button type="primary" @click="addClassify">确定</a-button>
    </div>
    <TagsShow :tags="classifyTags" v-slot="{ item }">
      <span class="tag_class">
        <CloseOutlined @click="deleteClassifyTags(item)" />
      </span>
    </TagsShow>
    <div class="blog_managersetting_col">
      新增博客标签:
      <a-input
        class="blog_managersetting_input"
        v-model:value="tag"
        placeholder="请输入"
      />
      <a-button type="primary" @click="addTag">确定</a-button>
    </div>
    <TagsShow :tags="tagTags" v-slot="{ item }">
      <span class="tag_class">
        <CloseOutlined @click="deletetagTags(item)" />
      </span>
    </TagsShow>
    <div class="setting_btu">
      <a-button type="primary" @click="syncSetting()">同步设置</a-button>
    </div>
  </div>
</template>

<script>
import { CloseOutlined } from "@ant-design/icons-vue";
import TagsShow from "@/components/TagsShow.vue";
import { getAll, addOrUpdateData } from "@/sevices/gitee.api";
import { message } from "ant-design-vue";
export default {
  name: "BlogManagerSetting",
  components: {
    CloseOutlined,
    TagsShow,
  },
  props: {
    giteeData: Object,
  },
  data() {
    return {
      getGiteeData: {},
      classify: "",
      tag: "",
      classifyTags: [],
      tagTags: [],
    };
  },
  mounted() {
    if (!this.giteeData) {
      throw "giteeData数据未传入";
    }
    getAll(
      this.giteeData.access,
      this.giteeData.owner,
      this.giteeData.repo,
      "blog",
      "blog_setting"
    ).then((v) => {
      if (v.content) {
        this.getGiteeData = JSON.parse(decodeURIComponent(atob(v.content)))[0];
        if (this.getGiteeData.classifyTags) {
          this.classifyTags = [...this.getGiteeData.classifyTags];
        }
        if (this.getGiteeData.tagTags) {
          this.tagTags = [...this.getGiteeData.tagTags];
        }
      }
      console.log(v, this.getGiteeData, "博客设置");
    });
  },
  methods: {
    addClassify: function () {
      if (!this.classify) {
        return;
      }
      if (this.classifyTags.findIndex((v) => v === this.classify) > -1) {
        message.warn("存在重复");
        return;
      }
      this.classifyTags.push(this.classify);
      this.classify = "";
    },
    deleteClassifyTags: function (item) {
      this.classifyTags = this.classifyTags.filter((v) => v !== item);
    },
    addTag: function () {
      if (!this.tag) {
        return;
      }
      if (this.tagTags.findIndex((v) => v === this.tag) > -1) {
        message.warn("存在重复");
        return;
      }
      this.tagTags.push(this.tag);
      this.tag = "";
    },
    deletetagTags: function (item) {
      this.tagTags = this.tagTags.filter((v) => v !== item);
    },
    // 同步设置
    syncSetting: function () {
      this.getGiteeData.classifyTags = this.classifyTags.map((v) => v);
      this.getGiteeData.tagTags = this.tagTags.map((v) => v);
      addOrUpdateData(
        this.giteeData.access,
        this.giteeData.owner,
        this.giteeData.repo,
        "blog",
        "blog_setting",
        this.getGiteeData
      ).then((v) => {
        console.log("新增结果", v);
        message.success("同步成功");
      });
    },
  },
};
</script>

<style scoped>
.blog_managersetting_main {
  margin-right: 50px;
}
.blog_managersetting_col {
  display: flex;
  align-items: center;
  margin: 5px 5px;
}
.blog_managersetting_input {
  width: 200px;
  margin: 0px 20px;
}
.tag_class {
  cursor: pointer;
}
.setting_btu {
  margin-top: 10px;
}
</style>>
