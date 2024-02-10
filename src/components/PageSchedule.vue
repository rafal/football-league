<template>
  <h1>{{ $route.meta.title }}</h1>
  <PageScheduleTable :matches="matches" />
</template>

<script>
import PageScheduleTable from "@/components/PageScheduleTable.vue";
import LeagueService from "@/services/LeagueService";

export default {
  name: "PageSchedule",
  components: {
    PageScheduleTable,
  },
  data() {
    return {
      matches: [],
    };
  },
  async created() {
    const leagueService = new LeagueService();
    await leagueService.fetchData();
    this.matches = leagueService.getMatches();
  },
};
</script>
