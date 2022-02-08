<template>
  <div class="logo-wrap">
    <a class="avatar" href="/"
      ><div
        class="bg"
        style="
          opacity: 0;
          background-image: url(https://cdn.jsdelivr.net/gh/cdn-x/placeholder@1.0.2/avatar/round/rainbow64@3x.webp);
        "
      ></div>
      <img
        no-lazy=""
        class="avatar"
        :src="layoutData.logo"
        onerror="javascript:this.classList.add('error');this.src='https://cdn.jsdelivr.net/gh/cdn-x/placeholder@1.0.1/image/2659360.svg';"
    /></a>
    <a class="title" href="/">
      <div class="main">{{ layoutData.title }}</div>
      <div class="sub normal cap">{{ layoutData.secondTitle }}</div>
      <div class="sub hover cap" style="opacity: 0">xaoxuu.com</div></a
    >
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import store from "../store";

export default class LogoWrap extends Vue {
  mounted() {
   
  }

  get layoutData() {
    return store.getters.getLayoutData;
  }
}
</script>

<style scoped lang="less">
.logo-wrap {
  margin: 1rem 0;
  display: flex;
  align-items: center;
  overflow: hidden;
  a.avatar {
    display: block;
    position: relative;
    width: 50px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 50px;
    overflow: hidden;
    margin-right: 1rem;
    div.bg {
      transition: opacity 0.2s ease-out;
      -moz-transition: opacity 0.2s ease-out;
      -webkit-transition: opacity 0.2s ease-out;
      -o-transition: opacity 0.2s ease-out;
      position: absolute;
      opacity: 0 !important;
      z-index: -1;
    }
    div.bg {
      width: 100%;
      height: 100%;
      background-size: cover;
    }
    img.avatar {
      margin: 2px;
      object-fit: cover;
      width: calc(100% - 2 * 2px);
      height: calc(100% - 2 * 2px);
      border-radius: calc(100% - 2 * 2px);
    }
  }
  a {
    color: inherit;
    display: flex;
    align-items: center;
  }
  a.title {
    font-size: 1.75rem;
    font-weight: 900;
    color: inherit;
    line-height: 1.2;
    font-family: system-ui, "Microsoft Yahei", "Segoe UI", -apple-system, Roboto,
      Ubuntu, "Helvetica Neue", Arial, "WenQuanYi Micro Hei", sans-serif;
    display: block;
    position: relative;
    .main {
      color: var(--text-p0);
    }
    .sub {
      color: var(--text-p1);
      transition: opacity 0.2s ease-out, transform 0.2s ease-out;
      -moz-transition: opacity 0.2s ease-out, transform 0.2s ease-out;
      -webkit-transition: opacity 0.2s ease-out, transform 0.2s ease-out;
      -o-transition: opacity 0.2s ease-out, transform 0.2s ease-out;
      white-space: nowrap;
    }
    .hover {
      position: absolute;
      bottom: 0;
      transform: translateY(8px);
      overflow: visible;
    }
  }
}
</style>