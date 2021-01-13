<template>
  <v-app id="dashboard">
    <v-container>
      <!-- Header -->
      <v-row class="pa-3 text-left">
        <v-col>
          <h1>Dashboard</h1>
          <h3>{{ teamName }}</h3>
        </v-col>
        <v-img
          :src="require('@/assets/logo.png')"
          max-width="100px"
          class="mx-auto justify-left"
        />

        <v-spacer />

        <!-- End-Round Button with Dialog-Call -->
        <v-dialog v-model="endRoundDialog" persistent width="50%">
          <template v-slot:activator="{ on, attrs }">
            <v-btn rounded color="primary" dark v-bind="attrs" v-on="on">
              End Round
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="headline grey lighten-2">
              Round {{ round }}
            </v-card-title>

            <v-card-text>
              <p>Do you really want to end the current round?</p>
              <p>
                You won't be able to make any changes until the next round has
                started!
              </p>
            </v-card-text>

            <v-divider />

            <v-card-actions>
              <v-spacer />
              <v-btn color="red lighten-2" text @click="endRoundDialog = false">
                Go Back
              </v-btn>

              <v-btn
                color="primary"
                text
                @click="
                  endRoundDialog = false;
                  endRound();
                "
              >
                End Round
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>

      <!-- Linear Progress-Bar -->
      <v-row class="pa-6 text-left">
        <h2>Round {{ round }}</h2>
        <v-progress-linear
          style="border-radius: 10px"
          color="light-green darken-4"
          height="20"
          :value="calculateProgress"
          rounded
          striped
        >
          <strong>{{ calculateProgress }}%</strong>
        </v-progress-linear>
      </v-row>

      <!-- Circular Progress-Bars with Pop-Overs -->
      <v-row class="pa-10 text-center">
        <v-col v-for="element in progressElements" :key="element.id">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-progress-circular
                v-show="element.requiredRound <= round"
                :round="round"
                :id="element.id"
                :width="15"
                :rotate="-90"
                :size="100"
                :value="element.value"
                @click="$router.push(element.id)"
                style="cursor: pointer;"
                color="teal"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon color="teal" large>{{ element.icon }}</v-icon>
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
          <v-card rounded>
            <v-card-title>Cost accounting</v-card-title>
            <v-card-text>
              <p>Budget (EUR): 100.000,00</p>
              <p>Running costs (EUR): 222.222,22</p>
              <p>Avg.Prod.Cost per Bike (EUR): Incomplete</p>
              <p>Estimated Quality: 21.29</p>
              <p>Max.Production Capacity (PC): Incomplete</p>
              <p>Overall Demand (PC): 40000.00</p>
            </v-card-text>
          </v-card>
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
export default {
  data() {
    return {
      endRoundDialog: false,
    };
  },
  methods: {
    endRound() {
      console.log("End of Round #" + this.round);
      /*
        Future Work:
        enable connection with ABAP-server and send
        post-request about current round-ending.
      */
      if (this.round >= 6) {
        // End Game
        this.$emit("roundUpdate", 1);
        console.log("End Game");
      } else {
        this.$emit("roundUpdate", ++this.round);
      }
    },
  },
  computed: {
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
          // (Purchaising, Logistics, Frame Preparation, Sensors Preparation, Bike Construction, Sales)
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
