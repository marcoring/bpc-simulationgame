<template>
  <v-container id="battery-preparation">
    <v-container v-if="round >= 2">
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
        style="height: 500px;"
      />

      <v-divider />

      <!-- Managing battery preparation process -->
      <v-row style="margin-top: 10px;">
        <h2 style="text-align: left;">Manage battery preparation process</h2>
      </v-row>
      <v-row>
        <v-col>
          <v-select
            v-model="selectedLine"
            :items="assemblyLines"
            label="Choose assembly line..."
            item-text="name"
          />

          <v-text-field
            label="Assembly costs (EUR)"
            v-model="selectedLine[0]"
            filled
            disabled
          />
          <v-text-field
            label="Production costs (EUR)"
            v-model="selectedLine[1]"
            filled
            disabled
          />
          <v-text-field
            label="Production capacity (PC)"
            v-model="selectedLine[2]"
            filled
            disabled
          />
        </v-col>

        <v-col>
          <v-slider
            v-model="numOfLines"
            label="Number of Assembly Lines"
            step="1"
            :min="1"
            :max="10"
            ticks="always"
            tick-size="5"
            thumb-label="always"
            :thumb-size="24"
          />

          <v-slider
            v-model="quality.val"
            :label="quality.label"
            :thumb-color="'primary'"
            :thumb-size="24"
            thumb-label="always"
          />
          <v-slider
            v-model="workload.val"
            :label="workload.label"
            :thumb-color="'primary'"
            :thumb-size="24"
            thumb-label="always"
          />
          <v-slider
            v-model="safety.val"
            :label="safety.label"
            :thumb-color="'primary'"
            :thumb-size="24"
            thumb-label="always"
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
import prevCurRoundStats from "../components/prevCurRoundStats.vue";
import confirmationDialog from "../components/confirmationDialog.vue";
export default {
  components: { prevCurRoundStats, confirmationDialog },
  name: "battery-preparation",
  data() {
    return {
      selectedLine: "",
      numOfLines: 1,
      quality: { label: "Quality (%)", val: 50, color: "primary" },
      workload: { label: "Workload (%)", val: 50, color: "primary" },
      safety: { label: "Safety (%)", val: 50, color: "primary" },
      assemblyLines: [
        {
          name: "Assembly Line 1",
          value: ["100", "50", "200"],
        },
        {
          name: "Assembly Line 2",
          value: ["300", "100", "600"],
        },
        {
          name: "Assembly Line 3",
          value: ["500", "250", "2000"],
        },
      ],
    };
  },
  props: {
    progressElement: Array,
    round: Number,
  },
};
</script>
