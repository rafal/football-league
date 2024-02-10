<template>
  <h1>{{ $route.meta.title }}</h1>
  <PageScheduleTable :matches="matches" />
</template>

<script>
import PageScheduleTable from "@/components/PageScheduleTable.vue";
import { inject } from "vue";

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
    const leagueData = inject("leagueData");
    if (!leagueData.matches.length) {
      await leagueData.fetchData();
    }
    this.matches = leagueData.matches;
  },
};
</script>
