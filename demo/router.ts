// @ts-nocheck
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const index = () => import("./components/amis/index.vue");
const form = () => import("./components/amis/form.vue");
const table = () => import("./components/amis/table.vue");
const card = () => import("./components/amis/card.vue");
const carousel = () => import("./components/amis/carousel.vue");
const task = () => import("./components/amis/task.vue");

const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: "/index" },
  { path: "/index", name: "index", component: index },
  { path: "/form", name: "form", component: form },
  { path: "/table", name: "table", component: table },
  { path: "/card", name: "card", component: card },
  { path: "/carousel", name: "carousel", component: carousel },
  { path: "/task", name: "task", component: task },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
