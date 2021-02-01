<template>
  <v-container id="dashboard">
    <!-- Linear Progress-Bar -->
    <v-row class="pa-6 text-left">
      <h2>Round {{ round }}</h2>
      <v-progress-linear
        style="border-radius: 10px"
        :color="teamColor"
        height="30"
        :value="calculateProgress"
        rounded
        striped
      >
        <strong>{{ calculateProgress }}%</strong>
      </v-progress-linear>
    </v-row>

    <!-- Circular Progress-Bars with Pop-Overs -->
    <v-row class="pa-10 text-center">
      <v-col v-for="element in calculatedProgressElements" :key="element.id">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-progress-circular
              :round="round"
              :id="element.id"
              :width="15"
              :rotate="-90"
              :size="100"
              :value="element.value"
              @click="$router.push(element.id)"
              style="cursor: pointer;"
              :color="teamColor"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon color="black" large>{{ element.icon }}</v-icon>
            </v-progress-circular>
          </template>
          <span>{{ element.value }}</span>
        </v-tooltip>
        <h3 v-show="element.requiredRound <= round">{{ element.name }}</h3>
      </v-col>
    </v-row>

    <!-- Cards -->
    <v-row class="pa-6 text-left">
      <v-col>
        <cost-accounting-card 
          style="height:100%"
          :budget="10.0"
          :runningCosts="222.222"
          :avgProdCostBike="'Incomplete'"
          :estimatedQual="21.29"
          :maxProdCapac="'Incomplete'"
          :overDemand="40000.0"
          :teamColor="teamColor"
        />
      </v-col>
      <v-col>
        <roundRules
          style="height:100%"
          :generalRules="false"
          :headerImage="false"
          :round="round"
          :teamColor="teamColor"
        />
      </v-col>
    </v-row>

    <!-- Leaderboard -->
    <v-row class="pa-6 text-left">
      <v-col>
        <teams-leaderboard :teamColor="teamColor" />
      </v-col>
    </v-row>

    <!-- Charts -->
    <v-row class="pa-6 text-left">
      <v-col>
        <v-card>
          <v-card-title :style="'background-color:' + teamColor +'!important'" style="color: white"> Budget distribution </v-card-title>
          <pie-chart />
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title :style="'background-color:' + teamColor +'!important'" style="color: white"> Budget changes </v-card-title>
          <line-chart />
        </v-card>
      </v-col>
    </v-row>

    <v-row class="pa-6 text-left">
      <v-col>
        <v-card>
          <v-card-title :style="'background-color:' + teamColor +'!important'" style="color: white">Current round statistic</v-card-title>
          <bar-chart />
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title :style="'background-color:' + teamColor +'!important'" style="color: white">All rounds comparison</v-card-title>
          <radar-chart />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import costAccountingCard from "../components/costAccountingCard.vue";
import roundRules from "../components/roundRules.vue";
import teamsLeaderboard from "../components/teamsLeaderboard.vue";
import lineChart from "../components/charts/lineChart.vue";
import pieChart from "../components/charts/pieChart.vue";
import barChart from "../components/charts/barChart.vue";
import radarChart from "../components/charts/radarChart.vue";

export default {
  components: {
    costAccountingCard,
    roundRules,
    teamsLeaderboard,
    lineChart,
    pieChart,
    barChart,
    radarChart,
  },
  data() {
    return {};
  },
  computed: {
    calculatedProgressElements() {
      return this.progressElements.filter(
        (element) => element.requiredRound <= this.round
      );
    },
    calculateProgress() {
      const prEl = this.progressElements;
      var sum = 0;
      var stepsNumber = 0;
      var isPrElAllowed = false;
      for (var i = 0; i < prEl.length; i++) {
        isPrElAllowed = this.round >= prEl[i].requiredRound;
        sum += isPrElAllowed ? prEl[i].value : 0;
        stepsNumber += isPrElAllowed ? 1 : 0;
      }
      return Math.ceil(sum / stepsNumber);
    },
    determineStepsNumber() {
      /*
        In each new round (totally 6) user
        gets some new production-steps
      */
      switch (this.round) {
        case 1:
          // (Purchasing, Logistics, Frame Preparation, Sensors Preparation, Bike Construction, Sales)
          return 6;
        case 2:
          // + (Battery Preparation, Quality Assurance)
          return 8;
        case 3:
          // + (Engine Preparation)
          return 9;
        case (4, 5, 6):
          // + (Application Development and Maintenance)
          return 10;
        default:
          // invalid case
          return 0;
      }
    },
  },
  props: {
    round: Number,
    progressElements: Array,
    teamName: String,
    teamColor: String,
  },
};
</script>

<style scoped></style>
