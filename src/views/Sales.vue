<template>
  <v-app id="sales">
    <v-container>
      <!-- Statistic about current, previous round and cost accounting -->
      <v-row>
        <v-col>
          <!-- Previous Round Status -->
          <v-card>
            <v-card-title>
              Previous Round
            </v-card-title>
            <v-card-text>
              <p>
                Sales price per Standard bike (EUR): {{ prevPriceStandardBike }}
              </p>
              <p>
                Sales price per Standard Pro bike (EUR):
                {{ prevPriceStandardProBike }}
              </p>
              <p>
                Sales price per Premium bike (EUR): {{ prevPricePremiumBike }}
              </p>
              <p>Current sales activities: {{ prevCurSalesActiv }}</p>
              <p>Sales costs (EUR): {{ prevSalesCosts }}</p>
              <p>Number of sales persons: {{ prevNumOfSalesPers }}</p>
              <p>Sales capacity (PC): {{ prevSalesCapac }}</p>
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
              <p>
                Sales price per Standard bike (EUR): {{ curPriceStandardBike }}
              </p>
              <p>
                Sales price per Standard Pro bike (EUR):
                {{ curPriceStandardProBike }}
              </p>
              <p>
                Sales price per Premium bike (EUR): {{ curPricePremiumBike }}
              </p>
              <p>Current sales activities: {{ curCurSalesActiv }}</p>
              <p>Sales costs (EUR): {{ curSalesCosts }}</p>
              <p>Number of sales persons: {{ curNumOfSalesPers }}</p>
              <p>Sales capacity (PC): {{ curSalesCapac }}</p>
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

      <!-- Managing sales process -->
      <v-row style="margin-top: 10px;">
        <h2 style="text-align: left;">
          Manage Sales process
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
  </v-app>
</template>

<script>
import costAccountingCard from "../components/costAccountingCard";
export default {
  name: "sales",
  components: { costAccountingCard },
  props: {
    prevPriceStandardBike: {
      type: Number,
      default: 0.0,
    },
    prevPriceStandardProBike: {
      type: Number,
      default: 0.0,
    },
    prevPricePremiumBike: {
      type: Number,
      default: 0.0,
    },
    prevCurSalesActiv: {
      type: String,
      default: "",
    },
    prevSalesCosts: {
      type: Number,
      default: 0.0,
    },
    prevNumOfSalesPers: {
      type: Number,
      default: 0,
    },
    prevSalesCapac: {
      type: Number,
      default: 0.0,
    },
    curPriceStandardBike: {
      type: Number,
      default: 0.0,
    },
    curPriceStandardProBike: {
      type: Number,
      default: 0.0,
    },
    curPricePremiumBike: {
      type: Number,
      default: 0.0,
    },
    curCurSalesActiv: {
      type: String,
      default: "",
    },
    curSalesCosts: {
      type: Number,
      default: 0.0,
    },
    curNumOfSalesPers: {
      type: Number,
      default: 0,
    },
    curSalesCapac: {
      type: Number,
      default: 0.0,
    },
  },
};
</script>
