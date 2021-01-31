<template>
  <v-container id="sales">
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

    <!-- Manage Sales Activities -->
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
              :color="teamColor"
              :thumb-color="teamColor"
              :thumb-size="24"
            >
              <template v-slot:append>
                <v-text-field
                  v-model="numOfSalesPers"
                  class="mt-0 pt-0"
                  hide-details
                  single-line
                  :min="1"
                  :max="10"
                  type="number"
                  style="width: 60px"
                />
              </template>
            </v-slider>
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

      <!-- Manage Sales Prices -->
      <v-tab-item>
        <v-row>
          <v-col>
            <v-text-field
              label="Standard"
              type="number"
              min="0"
              v-model="standardPrice"
            />
            <v-text-field
              label="Standard Pro"
              type="number"
              min="0"
              v-model="standardProPrice"
            />
            <v-text-field
              label="Premium"
              type="number"
              min="0"
              v-model="premiumPrice"
            />
          </v-col>
        </v-row>
      </v-tab-item>
    </v-tabs-items>

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
          Are you sure you want to confirm changes?
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
            Accept
          </v-btn>
          <v-btn color="red" text @click="confirmChangesDialog = false">
            Declaine
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import prevCurRoundStats from "../components/prevCurRoundStats.vue";
export default {
  name: "sales",
  components: { prevCurRoundStats },
  data() {
    return {
      confirmChangesDialog: false,
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
      standardPrice: 0.0,
      standardProPrice: 0.0,
      premiumPrice: 0.0,
    };
  },
  methods: {
    confirmChanges() {
      // Todo: send data (as oData) to Backend
      console.log("redirect to Dashboard");
      this.$emit("updateProgress", "sales", 100);
      this.$router.push({ path: "/dashboard" });
    },
  },
  props: {
    progressElement: Array,
    teamColor: String,
  },
};
</script>
