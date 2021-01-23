<template>
  <v-container id="purchaising">
    <!-- Statistic about current and previous round -->
    <v-row>
      <v-col>
        <!-- Previous Round Data -->
        <v-card>
          <v-card-title>
            Previous Round Data
            <v-spacer />
            <v-text-field
              v-model="searchPrevRound"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headersRound"
            :items="dataPrevRound"
            :search="searchPrevRound"
          />
        </v-card>
      </v-col>

      <v-col>
        <!-- Current Round Data -->
        <v-card>
          <v-card-title>
            Current Round Data
            <v-spacer />
            <v-text-field
              v-model="searchCurRound"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headersRound"
            :items="dataCurrentRound"
            :search="searchCurRound"
          />
        </v-card>
      </v-col>
    </v-row>

    <v-divider />

    <!-- Managing purchaising process -->
    <v-row style="margin-top: 10px;">
      <h2 style="text-align: left;">Manage purchaising process</h2>
    </v-row>
    <v-row>
      <v-col>
        <v-select :items="vendors" label="Choose vendor..." />
        <v-slider
          v-model="quality.val"
          :label="quality.label"
          :thumb-color="'primary'"
          thumb-label="always"
        />
      </v-col>

      <v-col>
        <v-data-table
          :headers="headersPurchaising"
          :items="dataPurchaising"
        />
      </v-col>
    </v-row>

    <confirmation-dialog />
  </v-container>
</template>

<script>
import confirmationDialog from "../components/confirmationDialog.vue";
export default {
  name: "Purchaising",
  components: { confirmationDialog },
  data() {
    return {
      vendors: ["Vendor 1", "Vendor 2", "Vendor 3"],
      quality: { label: "Quality (%)", val: 50, color: "primary" },
      headersPurchaising: [
        { text: "Material", value: "material" },
        { text: "Cost per material (EUR)", value: "costPerMat" },
        { text: "Amount (PC)", value: "amount" },
        { text: "Total cost (EUR)", value: "totalCost" },
      ],
      dataPurchaising: [
        {
          material: "material 1",
          costPerMat: "500",
          amount: "55",
          totalCost: "27.500",
        },
        {
          material: "material 2",
          costPerMat: "100",
          amount: "80",
          totalCost: "8.000",
        },
      ],
      searchPrevRound: "",
      searchCurRound: "",
      headersRound: [
        { text: "Material", value: "material" },
        { text: "Vendor", value: "vendor" },
        { text: "Quality (%)", value: "quality" },
        { text: "Amount (PC)", value: "amount" },
        { text: "Total Cost (EUR)", value: "totalCost" },
        { text: "Cumulative Stock", value: "cumulativeStock" },
      ],
      dataPrevRound: [
        {
          material: "Battery",
          vendor: "ElectricRider",
          quality: "12.00",
          amount: "3",
          totalCost: "1192.80",
          cumulativeStock: "53",
        },
        {
          material: "Engine",
          vendor: "ElectricRider",
          quality: "12.00",
          amount: "4",
          totalCost: "470.40",
          cumulativeStock: "44",
        },
      ],
      dataCurrentRound: [
        {
          material: "Frame",
          vendor: "ElectricRider",
          quality: "21.00",
          amount: "3",
          totalCost: "231.90",
          cumulativeStock: "23",
        },
        {
          material: "Engine",
          vendor: "ElectricRider",
          quality: "8.00",
          amount: "10",
          totalCost: "2333.00",
          cumulativeStock: "77",
        },
      ],
    };
  },
  props: {
    progressElements: Array,
  },
};
</script>
