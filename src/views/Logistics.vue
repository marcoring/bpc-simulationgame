<template>
  <v-app id="logistics">
    <v-container>
      <!-- Statistic about current and previous round -->
      <v-row>
        <v-col>
          <!-- Previous Round Status -->
          <v-card>
            <v-card-title>
              Previous Round
            </v-card-title>
            <v-card-text>
              <p>Transport company: {{ prevTranspComp }}</p>
              <p>Delivery costs (EUR): {{ prevDelCosts }}</p>
              <p>Quality of delivery (%): {{ prevQualDel }}</p>
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
              <p>Transport company: {{ curTranspComp }}</p>
              <p>Delivery costs (EUR): {{ curDelCosts }}</p>
              <p>Quality of delivery (%): {{ curQualDel }}</p>
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

      <!-- Managing logistic process -->
      <v-row style="margin-top: 10px;">
        <h2 style="text-align: left;">Manage logistic process</h2>
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
  </v-app>
</template>

<script>
import costAccountingCard from "../components/costAccountingCard";
export default {
  name: "logistics",
  components: { costAccountingCard },
  data() {
    return {
      prevTranspComp: "Ebike GmBh",
      prevDelCosts: 0.0,
      prevQualDel: 0.0,
      curTranspComp: "Ebike GmBh",
      curDelCosts: 0.0,
      curQualDel: 0.0,
      budget: 150000.0,
      runningCosts: 0.0,
      avgProdCostBike: "Incomplete",
      estimatedQual: 0.0,
      maxProdCapac: "Incomplete",
      overDemand: 40000.0,
    };
  },
  props: {
    progressElements: Array,
  },
};
</script>
