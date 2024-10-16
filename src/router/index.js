import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import GraphicsView from "@/views/GraphicsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/graphics",
      name: "graphics",
      component: GraphicsView,
    },
  ],
});

export default router;
