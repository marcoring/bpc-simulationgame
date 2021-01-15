<template>
  <v-app>
    <v-main>
      <!-- Burger-Menu -->
      <v-navigation-drawer
        v-if="currentRouteName !== 'LandingPage'"
        app
        permanent
        expand-on-hover
        fixed
      >
        <v-list-item to="dashboard">
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item>

        <v-divider />

        <v-list v-for="element in progressElements" :key="element.id" nav dense>
          <v-list-item
            v-show="element.requiredRound <= round"
            :round="round"
            :id="element.id"
            :value="element.value"
            :to="element.id"
          >
            <v-list-item-icon>
              <v-icon>{{ element.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ element.name }}</v-list-item-title>
          </v-list-item>
        </v-list>

        <v-divider />

        <v-list-item @click="rulesDialog = true">
          <v-list-item-icon>
            <v-icon>mdi-help-circle-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Round Rules</v-list-item-title>
        </v-list-item>
      </v-navigation-drawer>

      <!-- Header -->
      <v-row v-if="currentRouteName !== 'LandingPage'" class="pa-3 text-left">
        <v-col>
          <h1>{{ currentRouteName }}</h1>
          <h3>{{ teamName }}</h3>
        </v-col>
        <v-img
          :src="require('@/assets/logo.png')"
          max-width="100px"
          class="mx-auto justify-left"
          @click="openSecretDialog"
        />

        <v-spacer />

        <!-- Button (End-Round: for Dashboard-view and Go-Back for other) -->
        <v-dialog
          v-if="currentRouteName === 'Dashboard'"
          v-model="endRoundDialog"
          persistent
          width="50%"
        >
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

        <!-- Go-Back (to Dashboard) Button for all components-views -->
        <v-btn
          v-if="currentRouteName !== 'Dashboard'"
          rounded
          color="primary"
          dark
          @click="redirectToDashboard"
        >
          Go Back to Dashboard
        </v-btn>
      </v-row>

      <!-- Router (and values as props to pass them to child) -->
      <router-view
        :round="round"
        :teamName="teamName"
        :progressElements="progressElements"
        @roundUpdate="roundUpdate"
      />

      <!-- Dialog with Rules for Each New Round -->
      <v-dialog
        v-if="!(currentRouteName === 'LandingPage')"
        v-model="rulesDialog"
        persistent
        width="80%"
      >
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
            <v-btn color="primary" text @click="rulesDialog = false">
              Go to Dashboard
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- Easter-egg secret Dialog -->
      <v-dialog v-model="secretDialog" persistent width="50%">
        <template v-slot:activator="{ on, attrs }" v-bind="attrs" v-on="on" />

        <v-card>
          <v-card-title class="headline grey lighten-2">
            Congratulations! You have found secret Dialog!
          </v-card-title>

          <v-card-text>
            <h2>© Technical University Munich (TUM)</h2>
          </v-card-text>

          <v-divider />

          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" text @click="secretDialog = false">
              Close Dialog
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      teamName: "Buy Cycle @TUM-team",
      round: 1,
      rulesDialog: false,
      endRoundDialog: false,
      secretDialog: false,
      progressElements: [
        {
          id: "purchaising",
          name: "Purchaising",
          value: 99,
          icon: "mdi-pine-tree",
          requiredRound: 1,
        },
        {
          id: "logistics",
          name: "Logistics",
          value: 99,
          icon: "mdi-pine-tree",
          requiredRound: 1,
        },
        {
          id: "framePreparation",
          name: "Frame Preparation",
          value: 99,
          icon: "mdi-pine-tree",
          requiredRound: 1,
        },
        {
          id: "sensorsPreparation",
          name: "Sensors Preparation",
          value: 99,
          icon: "mdi-pine-tree",
          requiredRound: 1,
        },
        {
          id: "enginePreparation",
          name: "Engine Preparation",
          value: 0,
          icon: "mdi-pine-tree",
          requiredRound: 3,
        },
        {
          id: "batteryPreparation",
          name: "Battery Preparation",
          value: 0,
          icon: "mdi-pine-tree",
          requiredRound: 2,
        },
        {
          id: "bikeConstruction",
          name: "Bike Construction",
          value: 99,
          icon: "mdi-pine-tree",
          requiredRound: 1,
        },
        {
          id: "appDevAndMaintenance",
          name: "Application Development and Maintenance",
          value: 0,
          icon: "mdi-pine-tree",
          requiredRound: 4,
        },
        {
          id: "qualityAssurance",
          name: "Quality Assurance",
          value: 0,
          icon: "mdi-pine-tree",
          requiredRound: 2,
        },
        {
          id: "sales",
          name: "Sales",
          value: 99,
          icon: "mdi-pine-tree",
          requiredRound: 1,
        },
      ],
    };
  },
  methods: {
    openSecretDialog() {
      console.log("Easter egg!");
      this.secretDialog = true;
    },
    roundUpdate(value) {
      console.log("Round-update");
      this.round = value;
    },
    newRoundRules() {
      console.log("New Round Rules");
      this.rulesDialog = true;
    },
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
    redirectToDashboard() {
      console.log("redirect to Dashboard");
      this.$router.push({ path: "/dashboard" });
    },
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
  mounted() {
    console.log("mounted");
    this.newRoundRules();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
