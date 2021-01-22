<template>
  <v-app id="logistics">
    <v-container>
      <!-- Statistic about current and previous round -->
      <v-row style="height: 350px;">
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

      <v-divider />

      <!-- Managing logistic process -->
      <v-row style="margin-top: 10px;">
        <h2 style="text-align: left;">Manage logistic process</h2>
      </v-row>
      <v-row>
        <v-col>
          <v-select
            v-model="selectedCompany"
            :items="transportCompanies"
            label="Choose transportation company..."
            item-text="name"
          />
        </v-col>

        <v-col>
          <v-text-field
            v-model="selectedCompany[0]"
            label="Delivery costs (EUR)"
            filled
            disabled
          />
          <v-text-field
            v-model="selectedCompany[1]"
            label="Quality of delivery (%)"
            filled
            disabled
          />
        </v-col>
      </v-row>

      <confirmation-dialog />
    </v-container>
  </v-app>
</template>

<script>
import confirmationDialog from "../components/confirmationDialog.vue";
import costAccountingCard from "../components/costAccountingCard";
export default {
  name: "logistics",
  components: { confirmationDialog, costAccountingCard },
  data() {
    return {
      transportCompanies: [
        {
          name: "Company 1",
          value: ["200", "81"],
        },
        {
          name: "Company 2",
          value: ["400", "97"],
        },
        {
          name: "Company 3",
          value: ["150", "77"],
        },
      ],
      selectedCompany: "",
      confirmChangesDialog: false,
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
  methods: {
    getCosts() {
      console.log(this.selectedCompany);
      console.log(this.selectedCompany.text);
      console.log(this.selectedCompany.costs);
      console.log(this.selectedCompany.quality);

      if (!this.selectedCompany) {
        return null;
      } else {
        return this.selectedCompany.costs;
      }
    },
    getQuality() {
      return this.selectedCompany.quality;
    },
    confirmChanges() {
      console.log("Purchaising-changes COMPLETED");
      // Todo: send data (as oData) to Backend
      console.log("redirect to Dashboard");
      this.$router.push({ path: "/dashboard" });
    },
  },
  props: {
    progressElements: Array,
  },
};
</script>
