<template>
  <v-container id="prev-cur-round-stats">
    <!-- Statistic about current, previous round and cost accounting -->
    <v-row>
      <v-col>
        <!-- Previous Round Status -->
        <v-card style="height:100%">
          <v-card-title :style="'background-color:' + teamColor +'!important'" style="color: white">
            Previous Round
          </v-card-title>
          <v-card-text>
            <p>Assembly line: {{ prevAsmLine }}</p>
            <p>Assembly line costs (EUR): {{ prevAsmLineCost }}</p>
            <p>Number of assembly lines: {{ prevNumOfAsmLines }}</p>
            <p>Production costs (EUR): {{ prevProdCosts }}</p>
            <p>Production capacity (PC): {{ prevProdCapac }}</p>
            <p>Quality (%): {{ prevQuality }}</p>
            <p>Workload (%): {{ prevWorkload }}</p>
            <p>Safety (%): {{ prevSafety }}</p>
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
            <p>Assembly line: {{ curAsmLine }}</p>
            <p>Assembly line costs (EUR): {{ curAsmLineCost }}</p>
            <p>Number of assembly lines: {{ curNumOfAsmLines }}</p>
            <p>Production costs (EUR): {{ curProdCosts }}</p>
            <p>Production capacity (PC): {{ curProdCapac }}</p>
            <p>Quality (%): {{ curQuality }}</p>
            <p>Workload (%): {{ curWorkload }}</p>
            <p>Safety (%): {{ curSafety }}</p>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col>
        <!-- Cost Accounting -->
        <cost-accounting-card
          :teamColor="teamColor"
          style="height:100%"
          :budget="budget"
          :runningCosts="runningCosts"
          :avgProdCostBike="avgProdCostBike"
          :estimatedQual="estimatedQual"
          :maxProdCapac="maxProdCapac"
          :overDemand="overDemand"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import costAccountingCard from "./costAccountingCard";
export default {
  name: "prev-cur-round-stats",
  components: { costAccountingCard },
  props: {
    teamColor: String,
    prevAsmLine: {
      type: String,
      default: "",
    },
    prevAsmLineCost: {
      type: Number,
      default: 0.0,
    },
    prevNumOfAsmLines: {
      type: Number,
      default: 0.0,
    },
    prevProdCosts: {
      type: Number,
      default: 0.0,
    },
    prevProdCapac: {
      type: Number,
      default: 0.0,
    },
    prevQuality: {
      type: Number,
      default: 0.0,
    },
    prevWorkload: {
      type: Number,
      default: 0.0,
    },
    prevSafety: {
      type: Number,
      default: 0.0,
    },
    curAsmLine: {
      type: String,
      default: "",
    },
    curAsmLineCost: {
      type: Number,
      default: 0.0,
    },
    curNumOfAsmLines: {
      type: Number,
      default: 0.0,
    },
    curProdCosts: {
      type: Number,
      default: 0.0,
    },
    curProdCapac: {
      type: Number,
      default: 0.0,
    },
    curQuality: {
      type: Number,
      default: 0.0,
    },
    curWorkload: {
      type: Number,
      default: 0.0,
    },
    curSafety: {
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
