<template>
  <v-app id="purchaising">
    <v-container>
      <!-- Purchasing Process -->
      <v-row style="margin-top: 10px;">
        <h2 style="text-align: left;">Manage purchaising process</h2>
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
export default {
  name: "Purchaising",
  props: {
    progressElements: Array,
  },
};
</script>
