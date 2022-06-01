<template>
  <div class="sidebar">
    <div class="list">
      <div class="title">vue-amis-sdk</div>
      <hr style="border: 0; height: 1px; background: #ddd" />

      <div style="color: #666; font-weight: 500; font-size: 15px">
        This project is based on veaury and mainly focuses on the encapsulation of amis-editor
      </div>
    </div>

    <ul>
      <router-link :to="'index'">
        <li>简单页面</li>
      </router-link>
      <router-link :to="'form'">
        <li>表单展示模式</li>
      </router-link>
      <router-link :to="'table'">
        <li>表格高度自适应</li>
      </router-link>
      <router-link :to="'card'">
        <li>卡片模式</li>
      </router-link>
      <router-link :to="'carousel'">
        <li>轮播图</li>
      </router-link>
      <router-link :to="'task'">
        <li>异步任务</li>
      </router-link>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar"
});
</script>

<style scoped>
.sidebar {
  width: 280px;
  height: 100%;
  position: absolute;
  background-color: #fff;
  box-shadow: 3px 0 6px rgba(0, 0, 0, 0.24);
}

.sidebar .list {
  margin-top: 80px;
}

.sidebar .list div {
  padding-left: 15px;
  padding-right: 10px;
  padding-top: 5px;
}

.sidebar .title {
  font-size: 19px;
  font-weight: 900;
}

.sidebar ul {
  margin-top: 25px;
  padding: 0;
}

.sidebar ul li {
  list-style: none;
  height: 45px;
  padding: 5px 25px;
  line-height: 45px;
  cursor: pointer;
  border: 0;
  outline: none;
  text-decoration: none !important;
}

.sidebar ul li:hover {
  background: #eee;
  color: rgb(63, 81, 181);
}

.router-link-active li {
  background: #ddd;
  color: rgb(63, 81, 181);
}
</style>
