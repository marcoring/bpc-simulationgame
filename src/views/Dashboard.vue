<template>
  <v-app id="dashboard">
    <!-- Burger-Menu -->
    <v-navigation-drawer permanent expand-on-hover fixed>
      <v-list v-for="element in progressElements" :key="element.id" nav dense>
        <v-list-item :id="element.id" :value="element.value" link>
          <v-list-item-icon>
            <v-icon>{{ element.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ element.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

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
          color="light-green darken-4"
          height="20"
          v-model="calculateProgress"
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
                :id="element.id"
                :width="15"
                :rotate="-90"
                :size="100"
                :value="element.value"
                color="teal"
                v-bind="attrs"
                v-on="on"
              >
                {{ element.icon }}
              </v-progress-circular>
            </template>
            <span>{{ element.value }}</span>
          </v-tooltip>
          <h3>{{ element.name }}</h3>
        </v-col>
      </v-row>

      <!-- Cards -->
      <v-row class="pa-6 text-left">
        <v-col>
          <v-card>
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
          <v-card>
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

      <!-- Dialog for Each New Round -->
      <v-dialog v-model="newRoundDialog" persistent width="80%">
        <template v-slot:activator="{ on, attrs }" v-bind="attrs" v-on="on" />

        <v-card>
          <v-card-title class="headline grey lighten-2">
            Round {{ round }}

            <v-spacer />

            <v-img :src="require('@/assets/logo.png')" max-width="100px" />
          </v-card-title>

          <v-card-text>
            <p><u>Rules:</u></p>
            <p>IoT bikes are an innovation.</p>
            <p>
              And they are not very popular yet. The current demand on the whole
              market is 1.000 bikes.
            </p>
            <p>
              <u>Round {{ round }} Settings:</u>
            </p>
            <p>Only standard bikes are available (frame + 10 sensors)</p>
            <p>Following decisions can be made:</p>
            <ul>
              <li>
                Purchaising process: an initial vendor selection has to be made.
              </li>
              <li>
                Sales process: there is an option for an online shop boosts the
                sales numbers
              </li>
            </ul>
          </v-card-text>

          <v-divider />

          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" text @click="newRoundDialog = false">
              Go to Dashboard
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      teamName: "Team Name",
      round: 1,
      progressElements: [
        {
          id: "purchaising",
          name: "Purchaising",
          value: 100,
          icon: "mdi-pine-tree",
        },
        {
          id: "logistics",
          name: "Logistics",
          value: 90,
          icon: "mdi-folder",
        },
        {
          id: "framePreparation",
          name: "Frame Preparation",
          value: 80,
          icon: "mdi-account-multiple",
        },
        {
          id: "sensorsPreparation",
          name: "Sensors Preparation",
          value: 70,
          icon: "mdi-star",
        },
        {
          id: "enginePreparation",
          name: "Engine Preparation",
          value: 60,
          icon: "mdi-account",
        },
        {
          id: "batteryPreparation",
          name: "Battery Preparation",
          value: 50,
          icon: "mdi-battery-charging",
        },
        {
          id: "bikeConstruction",
          name: "Bike Construction",
          value: 40,
          icon: "mdi-account",
        },
        {
          id: "appDevAndMaintenance",
          name: "Application Development and Maintenance",
          value: 30,
          icon: "mdi-account",
        },
        {
          id: "qa",
          name: "Quality Assurance",
          value: 15,
          icon: "mdi-account",
        },
        {
          id: "sales",
          name: "Sales",
          value: 1,
          icon: "mdi-sale",
        },
      ],
      endRoundDialog: false,
      newRoundDialog: false,
    };
  },
  methods: {
    endRound() {
      console.log("End Round");
    },
    newRoundRules() {
      console.log("New Round");
      this.newRoundDialog = true;
    },
  },
  computed: {
    calculateProgress() {
      var sum = 0;
      for (var i = 0; i < this.progressElements.length; i++) {
        sum += this.progressElements[i].value;
      }
      return Math.ceil(sum / this.progressElements.length);
    },
  },
  mounted() {
    console.log("mounted");
    this.newRoundRules();
  },
};
</script>

<style scoped></style>
