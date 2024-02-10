<template>
  <div class="leaderboard-table">
    <table>
      <thead>
        <tr>
          <th class="left-align team-column"><div>Team Name</div></th>
          <th class="center-align matches-played-column"><div>MP</div></th>
          <th class="center-align goals-for-column"><div>GF</div></th>
          <th class="center-align goals-against-column"><div>GA</div></th>
          <th class="center-align goals-difference-column"><div>GD</div></th>
          <th class="center-align points-column"><div>Points</div></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="team in teams" :key="team.teamName">
          <td class="left-align team-column">
            <div>
              <img
                :src="`https://flagsapi.codeaid.io/${team.teamName}.png`"
                alt="Team Flag"
                class="team-flag"
              /><span>{{ team.teamName }}</span>
            </div>
          </td>
          <td class="center-align matches-played-column">
            <div>{{ team.matchesPlayed }}</div>
          </td>
          <td class="center-align goals-for-column">
            <div>{{ team.goalsFor }}</div>
          </td>
          <td class="center-align goals-against-column">
            <div>{{ team.goalsAgainst }}</div>
          </td>
          <td class="center-align goals-difference-column">
            <div>
              <span>{{ team.goalsFor - team.goalsAgainst }}</span>
            </div>
          </td>
          <td class="center-align points-column">
            <div>
              <span>{{ team.points }}</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    teams: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.leaderboard-table table {
  width: 100%;
  border-collapse: collapse;
  color: #4b5c68; /* Font color for the table */
}

.leaderboard-table th {
  background-color: #e4edf2; /* Table header background color */
  font-size: 12px; /* Font size for table headers */
  font-weight: bold; /* Bold font for table headers */
  padding: 8px;
  height: 40px; /* Set header row height */
  white-space: nowrap; /* Keep header content on a single line */
}

.leaderboard-table td {
  padding: 8px;
  border-bottom: 1px solid #e4edf2; /* Bottom border color of cells */
  font-size: 14px; /* Default font size for table cells */
  height: 70px; /* Set non-header row height */
  vertical-align: top; /* Align content to the top of the cell */
}

/* Flexbox for content alignment within cell divs */
.leaderboard-table th > div,
.leaderboard-table td > div {
  display: flex;
  align-items: center; /* Vertically center the content */
  height: 100%;
}

.leaderboard-table .left-align > div {
  justify-content: flex-start; /* Align to start for left-aligned columns */
}

.leaderboard-table .center-align > div {
  justify-content: center;
}

.leaderboard-table .right-align > div {
  justify-content: flex-end; /* Align to end for right-aligned columns */
}
td.team-column > div {
  font-weight: bold;
  font-size: 16px;
}

td.points-column {
  font-weight: bold;
  font-size: 16px;
  color: #0363ec;
}

.goals-difference-column {
  display: none; /* Hide column by default */
}

img.team-flag {
  height: 37px;
  width: 53px;
  margin-right: 10px;
}

@media (max-width: 500px) {
  .goals-for-column {
    display: none;
  } /* Hide column on smaller screens */
  .goals-against-column {
    display: none;
  } /* Hide column on smaller screens */
  .goals-difference-column {
    display: block;
  } /* display column */
}
</style>
