<template>
  <v-app id="sales">
    <v-container>
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

      <!-- Managing sales process -->
      <v-tabs v-model="salesTabs" centered>
        <v-tab>
          Manage Sales Activities
        </v-tab>
        <v-tab>
          Manage Sales Prices
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="salesTabs">
        <v-tab-item>
          <v-row>
            <v-col>
              <v-select
                v-model="selectedSalesActivities"
                :items="salesActivities"
                label="Additional sales activities"
                item-text="name"
              />

              <v-slider
                v-model="numOfSalesPers"
                label="Number of Sales Persons"
                step="1"
                :min="1"
                :max="10"
                ticks="always"
                tick-size="5"
                thumb-label="always"
                :thumb-size="24"
              />
            </v-col>

            <v-col>
              <v-text-field
                label="Base salary (EUR)"
                v-model="selectedSalesActivities[0]"
                filled
                disabled
              />
              <v-text-field
                label="Sales Cost (EUR)"
                v-model="selectedSalesActivities[1]"
                filled
                disabled
              />
              <v-text-field
                label="Sales Capacity (PC)"
                v-model="selectedSalesActivities[2]"
                filled
                disabled
              />
            </v-col>
          </v-row>
        </v-tab-item>

        <v-tab-item> </v-tab-item>
      </v-tabs-items>

      <confirmation-dialog />
    </v-container>
  </v-app>
</template>

<script>
import prevCurRoundStats from "../components/prevCurRoundStats.vue";
import confirmationDialog from "../components/confirmationDialog.vue";
export default {
  name: "sales",
  components: { prevCurRoundStats, confirmationDialog },
  data() {
    return {
      salesTabs: null,
      selectedSalesActivities: "",
      numOfSalesPers: 1,
      salesActivities: [
        {
          name: "Sales Activity 1",
          value: ["100", "50", "200"],
        },
        {
          name: "Sales Activity 2",
          value: ["300", "100", "600"],
        },
        {
          name: "Sales Activity 3",
          value: ["500", "250", "2000"],
        },
      ],
    };
  },
  props: {
    progressElement: Array,
  },
};
</script>
