<template>
  <v-card id="roundRulesCard">
    <v-card-title :style="'background-color:' + teamColor +'!important'" style="color: white">
      Round {{ round }}

      <v-spacer />

      <v-img
        v-if="headerImage"
        :src="require('../assets/logo.png')"
        max-width="100px"
      />
    </v-card-title>

    <!-- Round Rules -->
    <v-card-text>
      <div v-if="generalRules">
        <h3><br>General Rules:</h3>
        <p>{{ rules.generalRules }}</p>
      </div>

      <div>
        <br><h2>Rules</h2><br>
        <p>{{ findRoundRules }}</p>
        <ul>
          <li v-for="item in findRoundKeywords" :key="item">
            {{ item }}
          </li>
        </ul>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
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
  computed: {
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
  props: {
    teamColor: String,
    round: Number,
    generalRules: Boolean,
    headerImage: Boolean,
  },
};
</script>