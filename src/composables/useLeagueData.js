import { reactive, toRefs } from "vue";
import LeagueService from "@/services/LeagueService";

const state = reactive({
  matches: [],
  teams: [],
});

const leagueService = new LeagueService();

async function fetchData() {
  await leagueService.fetchData();
  state.matches = leagueService.getMatches();
  state.teams = leagueService.getLeaderboard();
}

export function useLeagueData() {
  return { ...toRefs(state), fetchData };
}
