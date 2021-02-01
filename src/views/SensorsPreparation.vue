<template>
  <v-container id="sensors-preparation">
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
      :teamColor="teamColor"
    />

    <v-divider />

    <!-- Managing sensor preparation process -->
    <v-row style="margin-top: 10px;">
      <h2 style="text-align: left;">Manage sensor preparation process</h2>
    </v-row>
    <v-row>
      <v-col>
        <v-select
          v-model="selectedLine"
          :items="assemblyLines"
          label="Choose assembly line..."
          :color="teamColor"
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
          :color="teamColor"
          :thumb-color="teamColor"
          :thumb-size="24"
          :track-color="'teamColor'+'lighten-3'"
          :track-fill-color="teamColor"
        >
          <template v-slot:append>
            <v-text-field
              v-model="numOfLines"
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

        <v-slider
          v-model="quality.val"
          :label="quality.label"
          :color="teamColor"
          :thumb-color="teamColor"
          :min="1"
          :max="100"
          :thumb-size="24"
          thumb-label="always"
          :track-color="'teamColor'+'lighten-3'"
          :track-fill-color="teamColor"
        >
          <template v-slot:append>
            <v-text-field
              v-model="quality.val"
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
          v-model="workload.val"
          :label="workload.label"
          :color="teamColor"
          :thumb-color="teamColor"
          :min="1"
          :max="100"
          :thumb-size="24"
          thumb-label="always"
          :track-color="'teamColor'+'lighten-3'"
          :track-fill-color="teamColor"
        >
          <template v-slot:append>
            <v-text-field
              v-model="workload.val"
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
          v-model="safety.val"
          :label="safety.label"
          :color="teamColor"
          :thumb-color="teamColor"
          :min="1"
          :max="100"
          :thumb-size="24"
          thumb-label="always"
          :track-color="'teamColor'+'lighten-3'"
          :track-fill-color="teamColor"
        >
          <template v-slot:append>
            <v-text-field
              v-model="safety.val"
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
        <br>  Are you sure you want to confirm changes?
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
import prevCurRoundStats from "../components/prevCurRoundStats.vue";
export default {
  components: { prevCurRoundStats },
  name: "sensors-preparation",
  data() {
    return {
      confirmChangesDialog: false,
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
  methods: {
    confirmChanges() {
      // Todo: send data (as oData) to Backend
      console.log("redirect to Dashboard");
      this.$emit("updateProgress", "sensorsPreparation", 100);
      this.$router.push({ path: "/dashboard" });
    },
  },
  props: {
    progressElement: Array,
    teamColor: String,
  },
};
</script>
