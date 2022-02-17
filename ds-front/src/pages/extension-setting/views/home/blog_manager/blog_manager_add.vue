<template>
  <div class="blog_add_main">
    <span>上传md文件:</span>
    <input type="file" @change="inputChangeSingle" />

    <a-form
      class="add_form"
      :model="formState"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
    >
      <a-form-item label="大分类">
        <a-select
          v-model:value="formState.belongTo"
          style="width: 100%"
          placeholder="请选择分类"
          :options="belongTos"
        >
        </a-select>
      </a-form-item>
      <a-form-item label="标题">
        <a-input v-model:value="formState.title" />
      </a-form-item>
      <a-form-item label="分类">
        <a-select
          v-model:value="formState.classify"
          style="width: 100%"
          placeholder="请选择分类"
          :options="classifyTags"
        >
        </a-select>
      </a-form-item>
      <a-form-item label="标签">
        <a-select
          v-model:value="formState.tags"
          mode="multiple"
          style="width: 100%"
          placeholder="请选择标签"
          :options="tagTags"
        >
        </a-select>
      </a-form-item>
      <a-form-item label="序言">
        <a-textarea v-model:value="formState.preface" :auto-size="true" />
      </a-form-item>
      <a-form-item label="全文">
        <a-textarea v-model:value="formState.fullText" :auto-size="true" />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="onSubmit">确定</a-button>
        <a-button style="margin-left: 10px">取消</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRaw, UnwrapRef } from "vue";
import { getAll, addOrUpdateData, getMdHtml } from "@/sevices/gitee.api";
import moment from "moment";
import { message } from "ant-design-vue";

interface FormState {
  title: string;
  preface: string;
  fullText: string;
  classify: string;
  tags: string[];
  belongTo: string;
}
export default defineComponent({
  props: {
    giteeData: Object,
  },
  data() {
    return {
      classifyTags: [],
      tagTags: [],
      belongTos: [{ value: "项目" }, { value: "博客" }],
    };
  },
  setup(props: any, context) {
    const newDate = moment().format("YYYY_MM_DD HH:mm");
    const formState: UnwrapRef<FormState> = reactive({
      title: "",
      preface: "",
      fullText: "",
      classify: "",
      tags: [],
      belongTo: "博客",
    });
    const onSubmit = () => {
      const { classify, tags, title, fullText, preface, belongTo } =
        toRaw(formState);
      const fileName = `${belongTo}_$_${newDate}_$_${classify}_$_${title}_$_${tags.join(
        ";"
      )}`;
      console.log("submit!", toRaw(formState));
      getAll(
        props.giteeData.access,
        props.giteeData.owner,
        props.giteeData.repo,
        "blog",
        belongTo === "博客" ? "blog_list" : "blog_project_list"
      ).then((v: any) => {
        let blogList: any[] = [];
        if (v.content) {
          blogList = JSON.parse(decodeURIComponent(atob(v.content)))[0];
        }
        const index = blogList.findIndex((bg: any) => bg.fileName === fileName);
        Promise.all([
          getMdHtml(props.giteeData.access, preface),
          getMdHtml(props.giteeData.access, fullText),
        ]).then((allText) => {
          const inputData = {
            classify,
            fileName,
            title,
            tags,
            preface,
            prefaceHtml: allText[0],
            belongTo,
          };
          if (index > -1) {
            blogList[index] = inputData;
          } else {
            blogList = [inputData, ...blogList];
          }
          saveBlog(blogList, { ...toRaw(formState), fileName, fullTextHtml: allText[1] });
        });
      });
    };

    function getHtmlMd() {}

    function saveBlog(blogList: any[], alldata: any) {
      addOrUpdateData(
        props.giteeData.access,
        props.giteeData.owner,
        props.giteeData.repo,
        "blog",
        alldata.belongTo === "博客" ? "blog_list" : "blog_project_list",
        blogList
      ).then((v: any) => {
        console.log("新增结果", v);
        message.success("目录新增成功");
        addOrUpdateData(
          props.giteeData.access,
          props.giteeData.owner,
          props.giteeData.repo,
          "blog",
          alldata.fileName,
          alldata
        ).then((v: any) => {
          console.log("新增结果", v);
          message.success("内容新增成功");
          context.emit("success", true);
        });
      });
    }

    function handlerUpload(ev: any) {
      // 对编码的字符串转化base64
      console.log(ev.target.result);
      const base64Data = ev.target.result.split(";base64,")[1];
      formState.fullText = decodeURIComponent(escape(atob(base64Data)));
      const mdContents = formState.fullText
        .split("\r\n")
        .map((v) => v.trim())
        .filter((v) => v);
      console.log(mdContents);
      formState.title = mdContents[0].replace(/^#*./, "").trim();
      const prefaceStartIndex = mdContents.findIndex((v) => v === "## 序言");
      const prefaceEndIndex = mdContents.findIndex((v) => v === "## 正文");
      formState.preface = mdContents
        .slice(prefaceStartIndex + 1, prefaceEndIndex)
        .join("\r\n");
    }

    const inputChangeSingle = (event: any) => {
      var reader = new FileReader();
      console.log(event.target.files);
      reader.onload = (ev: any) => {
        if (!event.target.files.length) {
          return;
        }
        handlerUpload(ev);
      };
      reader.readAsDataURL(event.target.files[0]);
    };
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      formState,
      onSubmit,
      inputChangeSingle,
    };
  },
  mounted() {
    if (!this.giteeData) {
      throw "BlogManagerAdd组件的giteeData参数错误";
    }
    let getGiteeData: any = {};
    getAll(
      this.giteeData.access,
      this.giteeData.owner,
      this.giteeData.repo,
      "blog",
      "blog_setting"
    ).then((v: any) => {
      if (v.content) {
        getGiteeData = JSON.parse(decodeURIComponent(atob(v.content)))[0];
        if (getGiteeData.classifyTags) {
          this.classifyTags = [...getGiteeData.classifyTags].map((v) => {
            return { value: v };
          }) as any;
        }
        if (getGiteeData.tagTags) {
          this.tagTags = [...getGiteeData.tagTags].map((v) => {
            return { value: v };
          }) as any;
        }
      }
      console.log(v, getGiteeData, "博客设置");
    });
  },
  methods: {},
});
</script>

<style scoped>
.blog_add_main {
  margin-top: 30px;
}
.add_form {
  margin-top: 30px;
}
</style>>
