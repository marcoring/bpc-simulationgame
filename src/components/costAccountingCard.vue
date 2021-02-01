<template>
  <!-- Cost Accounting Card -->
  <v-card rounded id="cost-accounting-card">
    <v-card-title :style="'background-color:' + teamColor +'!important'" style="color: white">Cost Accounting</v-card-title>
    <v-card-text>
      <br>
      <p>Budget (EUR): {{ budget }}</p>
      <p>Running costs (EUR): {{ runningCosts }}</p>
      <p>Avg. Prod. Cost per Bike (EUR): {{ avgProdCostBike }}</p>
      <p>Estimated Quality: {{ estimatedQual }}</p>
      <p>Max. Production Capacity (PC): {{ maxProdCapac }}</p>
      <p>Overall Demand (PC): {{ overDemand }}</p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "cost-accounting-card",
  props: {
    teamColor: String,
    budget: {
      type: Number,
      default: 0,
    },
    runningCosts: {
      type: Number,
      default: 0,
    },
    avgProdCostBike: {
      type: String,
      default: "",
    },
    estimatedQual: {
      type: Number,
      default: 0,
    },
    maxProdCapac: {
      type: String,
      default: "",
    },
    overDemand: {
      type: Number,
      default: 0,
    },
  },
};
</script>
