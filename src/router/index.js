import { createRouter, createWebHistory } from "vue-router";
import PageSchedule from "@/components/PageSchedule.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: PageSchedule,
    meta: { title: "League Schedule" },
  },
  {
    path: "/schedule",
    name: "Schedule",
    component: PageSchedule,
    meta: { title: "League Schedule" },
  },
  {
    path: "/leaderboard",
    name: "Leaderboard",
    component: () => import("@/components/PageLeaderboard.vue"),
    meta: { title: "League Standings" },
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import("@/components/PageNotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
