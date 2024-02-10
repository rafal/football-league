<template>
  <div class="schedule-table">
    <table>
      <thead>
        <tr>
          <th class="date-column"><div>Date/Time</div></th>
          <th class="left-align stadium-column"><div>Stadium</div></th>
          <th class="right-align home-team"><div>Home Team</div></th>
          <th class="center-align results-column"></th>
          <th class="left-align away-team"><div>Away Team</div></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="match in matches" :key="match.matchDate">
          <td class="date-column">
            <div>
              <span
                v-bind="{ innerHTML: formatDate(match.matchDate).dateString }"
              ></span>
              <span style="height: 0.25em"></span>
              <!-- Add a small space between date and time -->
              <span
                v-bind="{ innerHTML: formatDate(match.matchDate).timeString }"
              ></span>
            </div>
          </td>
          <td class="left-align stadium-column">
            <div>{{ match.stadium }}</div>
          </td>
          <td class="right-align home-team">
            <div>
              {{ match.homeTeam }}
              <img
                :src="`https://flagsapi.codeaid.io/${match.homeTeam}.png`"
                alt="Home Team Flag"
                class="team-flag home-team-flag"
              />
            </div>
          </td>
          <td class="center-align results-column">
            <div>
              <span v-if="match.matchPlayed"
                >{{ match.homeTeamScore }} : {{ match.awayTeamScore }}</span
              >
              <span v-else>- : -</span>
            </div>
          </td>
          <td class="left-align away-team">
            <div>
              <img
                :src="`https://flagsapi.codeaid.io/${match.awayTeam}.png`"
                alt="Away Team Flag"
                class="team-flag away-team-flag"
              />
              {{ match.awayTeam }}
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
    matches: {
      type: Array,
      required: true,
    },
  },
  methods: {
    formatDate(timestamp) {
      const date = new Date(timestamp);
      const day = date.getDate(); // Day without leading zero
      const month = date.getMonth() + 1; // Month without leading zero
      const year = date.getFullYear();
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");

      // Returning an object with separate date and time
      return {
        dateString: `${day}.${month}.${year}`,
        timeString: `${hours}:${minutes}`,
      };
    },
  },
};
</script>

<style scoped>
.schedule-table table {
  width: 100%;
  border-collapse: collapse;
  color: #4b5c68; /* Font color for the table */
}

.schedule-table th {
  background-color: #e4edf2; /* Table header background color */
  font-size: 12px; /* Font size for table headers */
  font-weight: bold; /* Bold font for table headers */
  padding: 8px;
  height: 40px; /* Set header row height */
  white-space: nowrap; /* Keep header content on a single line */
}

.schedule-table td {
  padding: 8px;
  border-bottom: 1px solid #e4edf2; /* Bottom border color of cells */
  font-size: 14px; /* Default font size for table cells */
  height: 70px; /* Set non-header row height */
  vertical-align: top; /* Align content to the top of the cell */
}

/* Flexbox for content alignment within cell divs */
.schedule-table th > div,
.schedule-table td > div {
  display: flex;
  flex-direction: row; /* Align content horizontally for team names and flags */
  justify-content: flex-end; /* Default alignment to the end (right) */
  align-items: center; /* Vertically center the content */
  height: 100%;
}

.schedule-table .home-team > div,
.schedule-table .away-team > div {
  justify-content: space-between; /* Distribute space between team name and flag */
}

.schedule-table .left-align > div {
  justify-content: flex-start; /* Align to start for left-aligned columns */
}

.schedule-table .center-align > div {
  justify-content: center; /* Center align for results column */
}

.schedule-table .right-align > div {
  justify-content: flex-end; /* Align to end for right-aligned columns */
}

/* Specific font size for the bold columns */
td.results-column,
td.home-team,
td.away-team {
  font-size: 16px;
  font-weight: bold;
}

.schedule-table tr:nth-child(even) {
  background-color: #f6f7f7; /* Background color for even rows */
}

/* Specific Flexbox Adjustment for Date Column Cells */
.schedule-table .date-column > div {
  flex-direction: column; /* Stack content vertically in Date column */
  justify-content: center; /* Center content vertically */
  align-items: flex-end; /* Align content to the right */
}
th.date-column,
td.date-column {
  max-width: 70px;
}

th.stadium-column,
td.stadium-column {
  padding-left: 32px;
}

th.results-column,
td.results-column {
  min-width: 56px;
}

.team-flag {
  height: 37px;
  width: 53px;
}

.home-team-flag {
  margin-left: 10px; /* Space before the away team name */
}
.away-team-flag {
  margin-right: 10px; /* Space before the away team name */
}

@media (max-width: 750px) {
  .stadium-column {
    display: none;
  } /* Hide stadium column on small screens */
}

@media (max-width: 500px) {
  .date-column {
    display: none;
  } /* Hide date column on smaller screens */
}

@media (max-width: 465px) {
  td.results-column,
  td.home-team,
  td.away-team {
    font-size: 14px;
    font-weight: bold;
  }

  .team-flag {
    height: 25px;
    width: 35px;
  }
}
</style>
