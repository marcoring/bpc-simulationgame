<template>
  <div>
    <v-flex class="pa-6 pb-3 text-center">
      <v-img
        :src="require('@/assets/logo.png')"
        style="width: 30%; height: 30%"
        class="mx-auto justify-center"
      />
    </v-flex>

    <div id="app">
      <v-app id="inspire">
        <div class="text-center">
          <v-btn v-btn-style rounded color="#4E9455" dark link to="dashboard">
            Go to Dashboard
          </v-btn>
        </div>
      </v-app>
    </div>
  </div>
</template>

<script>
export default {
  data() {},
};
</script>

<style>
#inspire img {
  width: 100%;
}
</style>
