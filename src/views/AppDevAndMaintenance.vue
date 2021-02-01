<template>
  <v-container id="app-dev-and-maintenance">
    <v-container v-if="round >= 4">
      <!-- Statistic about current, previous round and cost accounting -->
      <v-row style="height: 400px;">
        <v-col>
          <!-- Previous Round Status -->
          <v-card style="height:100%">
            <v-card-title :style="'background-color:' + teamColor +'!important'" style="color: white">
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
          <v-card style="height:100%">
            <v-card-title :style="'background-color:' + teamColor +'!important'" style="color: white">
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
            :color="teamColor"
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

      <!-- Confirmation Dialog -->
      <v-dialog v-model="confirmChangesDialog" persistant width="30%">
        <template v-slot:activator="{ on, attrs }">
          <v-btn :color="teamColor" rounded dark v-bind="attrs" v-on="on">
            <v-icon left>
              mdi-check-outline
            </v-icon>
            Accept changes
          </v-btn>
        </template>

        <v-card>
          <v-card-text>
          <br>  Are you sure you want to confirm changes?
          </v-card-text>
          <v-divider />
          <v-card-actions>
            <v-spacer />
            <v-btn
              color="primary"
              text
              @click="
                confirmChangesDialog = false;
                confirmChanges();
              "
            >
              <b>Accept</b>
            </v-btn>
            <v-btn color="red" text @click="confirmChangesDialog = false">
             <b>Decline</b>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
    <v-container v-else>
      <h1>Hey, url-hacker, you have no access to this component yet!!</h1>
      <v-icon size="500">mdi-police-badge</v-icon>
    </v-container>
  </v-container>
</template>

<script>
import costAccountingCard from "../components/costAccountingCard";
export default {
  name: "AppDevAndMaintanance",
  components: { costAccountingCard },
  data() {
    return {
      confirmChangesDialog: false,
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
  methods: {
    confirmChanges() {
      // Todo: send data (as oData) to Backend
      console.log("redirect to Dashboard");
      this.$emit("updateProgress", "appDevAndMaintenance", 100);
      this.$router.push({ path: "/dashboard" });
    },
  },
  props: {
    teamColor: String,
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
