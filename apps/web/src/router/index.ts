import { createRouter, createWebHistory } from "vue-router";

import AskView from "@/views/AskView.vue";
import HistoryView from "@/views/HistoryView.vue";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/ask",
      name: "ask",
      component: AskView,
    },
    {
      path: "/history",
      name: "history",
      component: HistoryView,
    },
  ],
});

export default router;
