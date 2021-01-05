<template>
  <div>
    <v-row class="pa-3 text-left">
      <v-col>
        <h1>Dashboard</h1>
        <h3>{{ teamName }}</h3>
      </v-col>
      <v-img
        :src="require('@/assets/logo.png')"
        style="width: 50px; height: 50px; text-align: left"
        class="mx-auto justify-left"
      />
      <v-spacer />
      <v-btn rounded color="#4E9455" dark @click="endRound"> End Round </v-btn>
    </v-row>

    <v-row class="pa-6 text-left">
      <h2>Round {{ round }}</h2>
      <v-progress-linear
        color="light-green darken-4"
        height="20"
        v-model="calculateProgress"
        rounded
        striped
      >
        <strong>{{ calculateProgress }}%</strong>
      </v-progress-linear>
    </v-row>

    <v-row class="pa-10 text-center">
      <v-col v-for="element in progressElements" :key="element.id">
        <v-progress-circular
          :id="element.id"
          :width="15"
          :rotate="-90"
          :size="100"
          :value="element.value"
          color="teal"
        >
          {{ element.value }}
        </v-progress-circular>
        <h3>{{ element.name }}</h3>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teamName: "Team Name",
      round: 1,
      progressElements: [
        { id: "purchaising", name: "Purchaising", value: 15 },
        { id: "delivery", name: "Delivery", value: 45 },
      ],
    };
  },
  methods: {
    endRound() {
      console.log("End Round");
    },
  },
  computed: {
    calculateProgress() {
      var sum = 0;
      for (var i = 0; i < this.progressElements.length; i++) {
        sum += this.progressElements[i].value;
      }
      return Math.ceil(sum / this.progressElements.length);
    },
  },
};
</script>

<style scoped></style>
