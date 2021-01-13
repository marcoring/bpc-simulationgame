<template>
  <v-app id="battery-preparation">
    <v-container v-if="round >= 2">
      <h1>Battery Preparation</h1>
    </v-container>
    <v-container v-else>
      <h1>Hey, url-hacker, you have no access to this component yet!!</h1>
      <v-icon size="500">mdi-police-badge</v-icon>
    </v-container>
  </v-app>
</template>

<script>
export default {
  props: {
    round: {
      type: Number,
      default: 1,
    },
  },
};
</script>
