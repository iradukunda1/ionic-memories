import { createRouter, createWebHistory } from "@ionic/vue-router";
// import Home from "../views/Home.vue";
import Memories from "../pages/memoryPage.vue";

const routes = [
  {
    path: "/",
    redirect: "/memories",
  },
  // {
  //   path: "/home",
  //   name: "Home",
  //   component: Home,
  // },
  {
    path: "/memories",
    name: "Memory",
    component: Memories,
  },
  {
    path: "/memories/:id",
    component: () => import("../pages/memoryDetails.vue"),
  },
  {
    path: "/memories/add",
    component: () => import("../components/memories/createMemory.vue"),
  },
  {
    path: "/message/:id",
    component: () => import("../views/ViewMessage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
