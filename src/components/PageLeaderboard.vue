<template>
  <PageLeaderboardTable :teams="teams" />
</template>

<script>
import PageLeaderboardTable from "@/components/PageLeaderboardTable.vue";
import { inject } from "vue";

export default {
  name: "PageLeaderboard",
  components: {
    PageLeaderboardTable,
  },
  data() {
    return {
      teams: [],
    };
  },
  async created() {
    const leagueData = inject("leagueData");
    if (!leagueData.teams.length) {
      await leagueData.fetchData();
    }
    this.teams = leagueData.teams;
  },
};
</script>
