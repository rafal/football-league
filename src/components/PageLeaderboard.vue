<template>
  <h1>{{ $route.meta.title }}</h1>
  <PageLeaderboardTable :teams="teams" />
</template>

<script>
import PageLeaderboardTable from "@/components/PageLeaderboardTable.vue";
import LeagueService from "@/services/LeagueService";

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
    const leagueService = new LeagueService();
    await leagueService.fetchData();
    this.teams = leagueService.getLeaderboard();
  },
};
</script>
