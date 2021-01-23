<template>
  <v-container id="app-dev-and-maintenance">
    <v-container v-if="round >= 4">
      <!-- Statistic about current, previous round and cost accounting -->
      <v-row style="height: 400px;">
        <v-col>
          <!-- Previous Round Status -->
          <v-card>
            <v-card-title>
              Previous Round
            </v-card-title>
            <v-card-text>
              <p>Outsourcing company: {{ prevOutsComp }}</p>
              <p>Development cost (EUR): {{ prevDevCost }}</p>
              <p>Application quality (%): {{ prevAppQual }}</p>
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
              <p>Outsourcing company: {{ curOutsComp }}</p>
              <p>Development cost (EUR): {{ curDevCost }}</p>
              <p>Application quality (%): {{ curAppQual }}</p>
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

      <v-divider />

      <!-- Managing Application development and maintenance process -->
      <v-row style="margin-top: 10px;">
        <h2 style="text-align: left;">
          Manage application development and maintenance process
        </h2>
      </v-row>
      <v-row>
        <v-col>
          <v-select
            v-model="selectedCompany"
            :items="outsourcCompany"
            label="Choose assembly line..."
            item-text="name"
          />
        </v-col>

        <v-col>
          <v-text-field
            label="Application costs (EUR)"
            v-model="selectedCompany[0]"
            filled
            disabled
          />
          <v-text-field
            label="Application quality (%)"
            v-model="selectedCompany[1]"
            filled
            disabled
          />
        </v-col>
      </v-row>

      <confirmation-dialog />
    </v-container>
    <v-container v-else>
      <h1>Hey, url-hacker, you have no access to this component yet!!</h1>
      <v-icon size="500">mdi-police-badge</v-icon>
    </v-container>
  </v-container>
</template>

<script>
import costAccountingCard from "../components/costAccountingCard";
import confirmationDialog from "../components/confirmationDialog.vue";
export default {
  name: "AppDevAndMaintanance",
  components: { costAccountingCard, confirmationDialog },
  data() {
    return {
      selectedCompany: "",
      outsourcCompany: [
        {
          name: "Company 1",
          value: ["450", "80"],
        },
        {
          name: "Company 2",
          value: ["580", "95"],
        },
      ],
    };
  },
  props: {
    round: {
      type: Number,
      default: 1,
    },
    prevOutsComp: {
      type: String,
      default: "",
    },
    prevDevCost: {
      type: Number,
      default: 0.0,
    },
    prevAppQual: {
      type: Number,
      default: 0.0,
    },
    curOutsComp: {
      type: String,
      default: "",
    },
    curDevCost: {
      type: Number,
      default: 0.0,
    },
    curAppQual: {
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
