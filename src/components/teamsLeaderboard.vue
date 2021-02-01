<template>
  <v-card rounded id="teams-leaderboard">
    <v-card-title :style="'background-color:' + teamColor +'!important'" style="color: white">Teams Leaderboard</v-card-title>
    <v-data-table
      :headers="leaderboardHeaders"
      :items="leaderboardItems"
      hide-default-footer
      disable-filtering
      disable-sort
    >
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  name: "teams-leaderboard",
  data() {
    return {
      leaderboardHeaders: [
        {
          text: "Position",
          align: "start",
          sortable: false,
          filterable: false,
          divider: true,
          value: "position",
        },
        { text: "Team Name", value: "teamName" },
        { text: "Team Color", value: "teamColor" },
        { text: "Budget (EUR)", value: "budget" },
        { text: "Bikes Sold", value: "bikesSold" },
      ],
      leaderboardItems: [
        {
          position: "1",
          teamName: "Team buy-cycle",
          teamColor: "#FF0000",
          budget: "100.000.000",
          bikesSold: "150.000",
        },
        {
          position: "2",
          teamName: "Another Team",
          teamColor: "#0000FF",
          budget: "50.000.000",
          bikesSold: "80.000",
        },
        {
          position: "3",
          teamName: "Loosers-team",
          teamColor: "#00FF26",
          budget: "-20.000",
          bikesSold: "35.000",
        },
      ],
    };
  },
  props: {
    teamColor: String,
  },
};
</script>
