<template>
  <v-app id="dashboard">
    <v-container>
      <!-- Linear Progress-Bar -->
      <v-row class="pa-6 text-left">
        <h2>Round {{ round }}</h2>
        <v-progress-linear
          style="border-radius: 10px"
          color="#4E9455"
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
                color="#4E9455"
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
            :budget="10.0"
            :runningCosts="222.222"
            :avgProdCostBike="'Incomplete'"
            :estimatedQual="21.29"
            :maxProdCapac="'Incomplete'"
            :overDemand="40000.0"
          />
        </v-col>
        <v-col>
          <v-card rounded>
            <v-card-title>Rules Round {{ round }}</v-card-title>
            <v-card-text>
              <p>
                IoT bikes are innovation. And they are not very popular yet. The
                current demand of the Whole market is 1.000 bikes.
              </p>
              <p>
                Round 1: Only standard bikes are available (frame + 10 sensors).
              </p>
              <p>Following decisions can be made:</p>
              <ul>
                <li>
                  Purchasing process: An initial vendor selection has to be
                  made.
                </li>
                <li>
                  Sales process: There is an option for an Online shop which
                  boosts the sales numbers.
                </li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import costAccountingCard from "../components/costAccountingCard.vue";
export default {
  components: { costAccountingCard },
  data() {
    return {};
  },
  methods: {},
  computed: {
    calculatedProgressElements(){
      return this.progressElements.filter(element => element.requiredRound <= this.round);
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
  },
};
</script>

<style scoped></style>
