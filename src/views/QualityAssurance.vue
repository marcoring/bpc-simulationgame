<template>
  <v-app id="quality-assurance">
    <v-container v-if="round >= 2">
      <!-- Statistic about current, previous round and cost accounting -->
      <v-row>
        <v-col>
          <!-- Previous Round Status -->
          <v-card>
            <v-card-title>
              Previous Round
            </v-card-title>
            <v-card-text>
              <p>Internal/External: {{ prevInternExtern }}</p>
              <p>Yearly costs (EUR): {{ prevYearCost }}</p>
              <p>Quality (%): {{ prevQual }}</p>
              <p>Number of employees: {{ prevNumOfEmpl }}</p>
              <p>QA capacity (PC): {{ prevQACap }}</p>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col>
          <!-- Current Round Status -->
          <v-card>
            <v-card-title>
              Current Round
            </v-card-title>
            <v-card-text>
              <p>Internal/External: {{ curInternExtern }}</p>
              <p>Yearly costs (EUR): {{ curYearCost }}</p>
              <p>Quality (%): {{ curQual }}</p>
              <p>Number of employees: {{ curNumOfEmpl }}</p>
              <p>QA capacity (PC): {{ curQACap }}</p>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col>
          <!-- Cost Accounting -->
          <cost-accounting-card
            :budget="10.0"
            :runningCosts="222.222"
            :avgProdCostBike="'Incomplete'"
            :estimatedQual="21.29"
            :maxProdCapac="'Incomplete'"
            :overDemand="40000.0"
          />
        </v-col>
      </v-row>

      <!-- Managing Quality Assurance process -->
      <v-row style="margin-top: 10px;">
        <h2 style="text-align: left;">
          Manage Quality Assurance process
        </h2>
        <v-col>
          <!-- -->
          <v-card></v-card>
        </v-col>

        <v-col>
          <!-- -->
          <v-card></v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-else>
      <h1>Hey, url-hacker, you have no access to this component yet!!</h1>
      <v-icon size="500">mdi-police-badge</v-icon>
    </v-container>
  </v-app>
</template>

<script>
import costAccountingCard from "../components/costAccountingCard";
export default {
  components: { costAccountingCard },
  props: {
    round: {
      type: Number,
      default: 1,
    },
    prevInternExtern: {
      type: String,
      default: "",
    },
    prevYearCost: {
      type: Number,
      default: 0.0,
    },
    prevQual: {
      type: Number,
      default: 0.0,
    },
    prevNumOfEmpl: {
      type: Number,
      default: 0,
    },
    prevQACap: {
      type: Number,
      default: 0.0,
    },
    curInternExtern: {
      type: String,
      default: "",
    },
    curYearCost: {
      type: Number,
      default: 0.0,
    },
    curQual: {
      type: Number,
      default: 0.0,
    },
    curNumOfEmpl: {
      type: Number,
      default: 0,
    },
    curQACap: {
      type: Number,
      default: 0.0,
    },
    budget: {
      type: Number,
      default: 0.0,
    },
    runningCosts: {
      type: Number,
      default: 0.0,
    },
    avgProdCostBike: {
      type: String,
      default: "",
    },
    estimatedQual: {
      type: Number,
      default: 0.0,
    },
    maxProdCapac: {
      type: String,
      default: "",
    },
    overDemand: {
      type: Number,
      default: 0.0,
    },
  },
};
</script>
