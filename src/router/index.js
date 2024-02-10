import { createRouter, createWebHistory } from "vue-router";
import PageSchedule from "@/components/PageSchedule.vue";
import PageLeaderboard from "@/components/PageLeaderboard.vue";
import PageNotFound from "@/components/PageNotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: PageSchedule,
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
    component: PageLeaderboard,
    meta: { title: "League Standings" },
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
