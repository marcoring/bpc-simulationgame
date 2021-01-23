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
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item>

        <v-divider />

        <v-list v-for="element in calculatedProgressElements" :key="element.id" nav dense>
          <v-list-item
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
      <v-row v-if="currentRouteName !== 'LandingPage'" class="pa-3 mx-3 text-left justify-space-between">
        <v-col class="d-flex flex-column justify-start align-start">
          <h1>{{ currentRouteName }}</h1>
          <h3>{{ teamName }}</h3>
          <h3>{{ teamColor }}</h3>
        </v-col>

        <v-col class="d-flex justify-center align-center">
          <v-img
            :src="require('@/assets/logo.png')"
            max-width="100px"
            class="mx-auto justify-left"
            @click="openSecretDialog"
          />
        </v-col>
        <!-- Go-Back (to Dashboard) Button for all components-views -->

        <v-col class="d-flex justify-end align-center">
          <v-btn
            v-if="currentRouteName !== 'Dashboard'"
            rounded
            color="primary"
            dark
            @click="redirectToDashboard"
          >
            Go Back to Dashboard
          </v-btn>

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
        </v-col>
      </v-row>
      <!-- ******************************************************************************************* -->

      <!-- Router (and values as props to pass them to child) -->
      <v-app>
        <router-view
          :round="round"
          :teamName="teamName"
          :progressElements="progressElements"
          @teamSelected="setTeam"
        />
      </v-app>

      <!-- ******************************************************************************************* -->

      <!-- Dialog with Rules for Each New Round -->
      <v-dialog
        v-if="!(currentRouteName === 'LandingPage')"
        v-model="rulesDialog"
        persistent
        width="80%"
      >
        <template v-slot:activator="{ on, attrs }" v-bind="attrs" v-on="on" />

        <v-card>
          <!-- Round Rules -->
          <roundRules :generalRules="true" :headerImage="true" :round="round" />

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
            <h2>© Technical University Munich (TUM) 2021</h2>
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
import roundRules from "./components/roundRules.vue";
export default {
  name: "App",
  components: { roundRules },
  data() {
    return {
      teamName: "Test",
      teamColor: "",
      round: 1,
      rulesDialog: false,
      endRoundDialog: false,
      secretDialog: false,
      progressElements: [
        {
          id: "purchasing",
          name: "Purchasing",
          value: 99,
          icon: "mdi-shopping-outline",
          requiredRound: 1,
        },
        {
          id: "logistics",
          name: "Logistics",
          value: 99,
          icon: "mdi-truck",
          requiredRound: 1,
        },
        {
          id: "framePreparation",
          name: "Frame Preparation",
          value: 99,
          icon: "mdi-bicycle",
          requiredRound: 1,
        },
        {
          id: "sensorsPreparation",
          name: "Sensors Preparation",
          value: 99,
          icon: "mdi-chip",
          requiredRound: 1,
        },
        {
          id: "enginePreparation",
          name: "Engine Preparation",
          value: 0,
          icon: "mdi-pac-man",
          requiredRound: 3,
        },
        {
          id: "batteryPreparation",
          name: "Battery Preparation",
          value: 0,
          icon: "mdi-battery-charging-high",
          requiredRound: 2,
        },
        {
          id: "bikeConstruction",
          name: "Bike Construction",
          value: 99,
          icon: "mdi-tools",
          requiredRound: 1,
        },
        {
          id: "appDevAndMaintenance",
          name: "Application Development and Maintenance",
          value: 0,
          icon: "mdi-cellphone",
          requiredRound: 4,
        },
        {
          id: "qualityAssurance",
          name: "Quality Assurance",
          value: 0,
          icon: "mdi-quality-high",
          requiredRound: 2,
        },
        {
          id: "sales",
          name: "Sales",
          value: 99,
          icon: "mdi-currency-eur",
          requiredRound: 1,
        },
      ],
      rules: {
        generalRules:
          "The game is aimed at teaching Business Process Change (BPC) in the context of the digital transformation on the example of a bike manufacturing company. It is designed to be played in teams. The game consists of six rounds, during which the players make various decisions in up to ten process steps: Purchasing, Logistics, Frame Preparation, Sensor Preparation, Battery Preparation, Engine Preparation, Bike Construction, Application Development, Quality Assurance, and Sales. The decisions are different in every round. More details on each round can be read in the corresponding section. If you have any questions regarding the particular input field, just hover the mouse over the questionmark next to it. This will give you an explanation of the field's purpose. The goal of the game is to design the production and sales of the IoT bikes in a way that it is possible to earn more than the other teams. After each round, the profit for each team will be calculated. The team with the highest profit at the end of the sixth round is the winner." +
          "In order to save the data for each process step, the player has to click the 'Confirm' button at the bottom of the screen. Otherwise, the data WILL NOT be saved. However, the impact of the entered data on the budget, running cost, and production capacity will be visible in the lower cost accounting section. This should help the players with their decision making. The upper part of the screen displays the latest data. Clicking on the button in the top right corner will return the player to the main screen." +
          "Be careful when choosing the 'Safety' parameter in the different production steps. If this parameter is too low, the number of defective bikes could be tremendous, which makes it impossible to sell many bikes despite of all the efforts. A parameter that can influence the sales numbers is the quality of a bicycle. However, all process steps have a different influence on the final product quality, depending on the round that is being played. Listen carefully to the information in the introduction to the round, this might give you some hints which steps are more important than others." +
          "After all necessary data has been submitted, do not forget to click the 'End round' button in the top right corner of the main screen. Be careful - changes will be IMPOSSIBLE after clicking this button. This will notify the teacher that a team is ready and allow him to start the simulation. The player will be notified about the simulation results. After that, he or she will be able to view the statistics of the simulated round, the revenue and the sales numbers of all competing teams, and the game will be unlocked for the input of data for the next round.",
        round1Rules:
          "The first round is an introductory round. IoT bikes are an innovation and they are not very popular yet. The current demand on the whole market is 1.000 bikes. For now, only standard bikes are available, which consist of a frame and ten sensors. In this round, the following important decisions can be made:",
        round1Keywords: [
          "Purchasing process: An initial vendor selection has to be made for the required components to produce the bikes.",
          "Production processes: It can be decided how many assembly lines should be used in the different production steps.",
          "Sales process: There is an option for an Online Shop which boosts the sales numbers.",
        ],
        round2Rules:
          "Every team gets 100.000 EUR on the top of the profit they earned during the first round. It will help everyone who suffered from big losses. At this stage, IoT bikes are starting to gain popularity. The demand grows up to 6.000 bikes. Furthermore, it is now possible to produce Standard Pro bikes, that contain a battery as further component. New features for the current round are as follows:",
        round2Keywords: [
          "Production processes: An additional production step is required to prepare the batteries for production. Furthermore, it is possible to buy automated assembly lines in which the production process is cheaper and the capacity is better.",
          "Quality assurance: There is a possibility to choose between internal and external vendors.",
          "Sales process: Online marketing is available to make sales more efficient. Furthermore, sales can be split to two different products (Standard and Standard Pro).",
        ],
        round3Rules:
          "Finally, IoT Bikes have a great success and the demand increases up to 35.000 bikes. Furthermore, Premium bikes can be produced by now, which additionally contain an engine. New features for the current round are as follows:",
        round3Keywords: [
          "Production processes: An additional production step is required to prepare the engines for production. Furthermore, automated assembly lines with predictive maintenance are available (improved capacity and less expenses).",
          "Sales process: Automatic market analyser base on deep learning can be chosen. Moreover, sales can be split to three different products (Standard, Standard Pro, Premium)",
          "Quality assurance: some external vendors now offer a robot-based solution for the Quality assurance process.",
        ],
        round4Rules:
          "The popularity of IoT Bikes reaches towards its peak. Demand has risen up to 40.000 bikes. New features for round four are as follows:",
        round4Keywords: [
          "Production processes: Smart assembly lines (robots move parts between them) are available.",
          "Sales process: Drone-based delivery to the customers can be chosen additionally.",
          "Application development and maintenance: One can choose an appropriate outsourcing company for application development.",
        ],
        round5Rules:
          "The growth of popularity only increases slightly, up to 45.000 bikes. The teams have the possibility to establish their offerings and further increase their profit.",
        round6Rules:
          "The growth of popularity only increases slightly, up to 50.000 bikes. The teams have the possibility to establish their offerings and further increase their profit.",
      },
    };
  },
  methods: {
    setTeam(name, color) {
      this.teamName = name;
      this.teamColor = color;
    },
    openSecretDialog() {
      console.log("Easter egg!");
      this.secretDialog = true;
    },
    roundUpdate(round) {
      console.log("Round-update");
      this.round = round;
    },
    newRoundRules() {
      console.log("New Round Rules");
      this.rulesDialog = true;
    },
    endRound() {
      console.log("End of Round #" + this.round);
      /*
        Future Work (TODO):
        enable connection with ABAP-server and send
        post-request about current round-ending.
      */
      if (this.round >= 6) {
        // End Game
        this.roundUpdate(1);
        console.log("End Game");
      } else {
        this.roundUpdate(++this.round);
        this.rulesDialog = true;
      }
    },
    redirectToDashboard() {
      console.log("redirect to Dashboard");
      this.$router.push({ path: "/dashboard" });
    },
  },
  computed: {
    calculatedProgressElements() {
      return this.progressElements.filter(element => element.requiredRound <= this.round)
    },
    currentRouteName() {
      return this.$route.name;
    },
    findRoundRules() {
      switch (this.round) {
        case 1:
          return this.rules.round1Rules;
        case 2:
          return this.rules.round2Rules;
        case 3:
          return this.rules.round3Rules;
        case 4:
          return this.rules.round4Rules;
        case 5:
          return this.rules.round5Rules;
        case 6:
          return this.rules.round6Rules;
        default:
          return this.rules.round1Rules;
      }
    },
    findRoundKeywords() {
      switch (this.round) {
        case 1:
          return this.rules.round1Keywords;
        case 2:
          return this.rules.round2Keywords;
        case 3:
          return this.rules.round3Keywords;
        case 4:
          return this.rules.round4Keywords;
        case 5:
          return null;
        case 6:
          return null;
        default:
          return null;
      }
    },
  },
  created(){
    // Navigate to main path when app is started
    if(this.$route.path !== "/") {
      this.$router.push("/");
    }
  },
  mounted() {
    console.log("mounted");
    this.newRoundRules();
  }
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
