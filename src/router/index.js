import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Bitimen from "../views/Bitimen.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/bitimen",
    name: "Bitimen",
    component: Bitimen,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
