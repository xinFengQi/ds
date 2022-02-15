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
      <a-form-item label="标题">
        <a-input v-model:value="formState.title" />
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
interface FormState {
  title: string;
  preface: string;
  fullText: string;
}
export default defineComponent({
  setup() {
    const formState: UnwrapRef<FormState> = reactive({
      title: "",
      preface: "",
      fullText: "",
    });
    const onSubmit = () => {
      console.log("submit!", toRaw(formState));
    };

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
