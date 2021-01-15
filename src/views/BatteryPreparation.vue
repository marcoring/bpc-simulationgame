<template>
  <v-app id="battery-preparation">
    <v-container v-if="round >= 3">
      <!-- custom component with statistic about current, previous round and cost accounting -->
      <prev-cur-round-stats
        :prevAsmLine="'SmartLine'"
        :prevAsmLineCost="0.0"
        :prevNumOfAsmLines="0"
        :prevProdCosts="0.0"
        :prevProdCapac="0.0"
        :prevQuality="0.0"
        :prevWorkload="0.0"
        :prevSafety="0.0"
        :curAsmLine="'SmartLine'"
        :curAsmLineCost="0.0"
        :curNumOfAsmLines="0"
        :curProdCosts="0.0"
        :curProdCapac="0.0"
        :curQuality="0.0"
        :curWorkload="0.0"
        :curSafety="0.0"
        :budget="150000.0"
        :runningCosts="0.0"
        :avgProdCostBike="'Incomplete'"
        :estimatedQual="0.0"
        :maxProdCapac="'Incomplete'"
        :overDemand="40000.0"
      />

      <!-- Managing battery preparation process -->
      <v-row style="margin-top: 10px;">
        <h2 style="text-align: left;">Manage battery preparation process</h2>
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
import prevCurRoundStats from "../components/prevCurRoundStats.vue";
export default {
  components: { prevCurRoundStats },
  name: "battery-preparation",
  data() {
    return {};
  },
  props: {
    progressElement: Array,
    round: Number,
  },
};
</script>
