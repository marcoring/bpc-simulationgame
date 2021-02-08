<template>
  <v-container id="purchasing">
    <!-- Statistic about current and previous round -->
    <v-row>
      <v-col>
        <!-- Previous Round Data -->
        <v-card>
          <v-card-title
            :style="'background-color:' + teamColor + '!important'"
            style="color: white"
          >
            Previous Round Data
            <v-spacer />
            <v-text-field
              v-model="searchPrevRound"
              append-icon="mdi-magnify"
              label="Search"
              color="white"
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
          <v-card-title
            :style="'background-color:' + teamColor + '!important'"
            style="color: white"
          >
            Current Round Data
            <v-spacer />
            <v-text-field
              v-model="searchCurRound"
              append-icon="mdi-magnify"
              label="Search"
              color="white"
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
        <v-select
          v-model="selectedVendor"
          :items="vendors"
          :color="teamColor"
          label="Choose vendor..."
          item-text="name"
        />
        <v-slider
          v-model="quality.val"
          :label="quality.label"
          :color="teamColor"
          :min="1"
          :max="100"
          :thumb-color="teamColor"
          thumb-label="always"
          :track-color="'teamColor' + 'lighten-3'"
          :track-fill-color="teamColor"
        >
          <template v-slot:append>
            <v-text-field
              v-model="quality.val"
              class="mt-0 pt-0"
              hide-details
              single-line
              :min="1"
              :thumb-size="24"
              :max="100"
              type="number"
              style="width: 60px"
            />
          </template>
        </v-slider>
      </v-col>

      <v-col>
        <v-text-field
          label="Frame: Cost per material (EUR)"
          :value="calculateCostPerMaterial(selectedVendor[0])"
          filled
          disabled
        />
        <v-text-field
          label="Sensors: Cost per material (EUR)"
          :value="calculateCostPerMaterial(selectedVendor[1])"
          filled
          disabled
        />
      </v-col>

      <v-col>
        <v-slider
          v-model="amount.frames"
          label="Frames: Amount (PC)"
          :color="teamColor"
          :min="1"
          :max="100"
          :thumb-color="teamColor"
          :thumb-size="24"
          thumb-label="always"
          :track-color="'teamColor' + 'lighten-3'"
          :track-fill-color="teamColor"
        >
          <template v-slot:append>
            <v-text-field
              v-model="amount.frames"
              class="mt-0 pt-0"
              hide-details
              single-line
              :min="1"
              :max="100"
              type="number"
              style="width: 60px"
            />
          </template>
        </v-slider>

        <v-slider
          v-model="amount.sensors"
          label="Sensor: Amount (PC)"
          :color="teamColor"
          :min="1"
          :max="100"
          :thumb-color="teamColor"
          thumb-label="always"
          :thumb-size="24"
          :track-color="'teamColor' + 'lighten-3'"
          :track-fill-color="teamColor"
        >
          <template v-slot:append>
            <v-text-field
              v-model="amount.sensors"
              class="mt-0 pt-0"
              hide-details
              single-line
              :min="1"
              :max="100"
              type="number"
              style="width: 60px"
            />
          </template>
        </v-slider>
      </v-col>

      <v-col>
        <v-text-field
          label="Frame: Total cost (EUR)"
          :value="calculateTotalCost(selectedVendor[0], amount.frames)"
          filled
          disabled
        />
        <v-text-field
          label="Sensors: Total cost (EUR)"
          :value="calculateTotalCost(selectedVendor[1], amount.sensors)"
          filled
          disabled
        />
      </v-col>
    </v-row>

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
          <br />
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
            <b>Accept</b>
          </v-btn>
          <v-btn color="red" text @click="confirmChangesDialog = false">
            <b>Decline</b>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: "Purchaising",
  data() {
    return {
      confirmChangesDialog: false,
      selectedVendor: "",
      vendors: [
        {
          name: "Bavaria eBike",
          value: ["242", "22"],
        },
        {
          name: "eBikesDE",
          value: ["180", "14"],
        },
      ],
      quality: { label: "Quality (%)", val: 50 },
      amount: {
        frames: { label: "Frame: Amount (PC)", val: 1 },
        sensors: { label: "Sensor: Amount (PC)", val: 1 },
      },
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
  methods: {
    confirmChanges() {
      // Todo: send data (as oData) to Backend
      console.log("redirect to Dashboard");
      this.$emit("updateProgress", "purchasing", 100);
      this.$router.push({ path: "/dashboard" });
    },
    calculateCostPerMaterial(selectedVendor) {
      // material * quality
      if (typeof selectedVendor === "undefined") {
        return "";
      } else {
        return (selectedVendor * (1 + this.quality.val / 100)).toFixed(2);
      }
    },
    calculateTotalCost(selectedVendor, amount) {
      // costPerMaterial * amount
      if (typeof selectedVendor === "undefined") {
        return "";
      } else {
        return (this.calculateCostPerMaterial(selectedVendor) * amount).toFixed(
          2
        );
      }
    },
  },
  props: {
    progressElements: Array,
    teamColor: String,
  },
};
</script>
