import HomePage from "@/pages/HomePage.vue";
import { createWebHistory, createRouter } from "vue-router";

const routes = [
    { path: "/", component: HomePage},

];

export const router = createRouter({
    history: createWebHistory(),
    routes,
  });