<template>
  <v-app>
    <div>
      <v-flex class="text-center">
        <v-img
          :src="require('@/assets/logo.png')"
          style="width: 25%; height: 25%"
          class="mx-auto align-center justify-center"
        />
      </v-flex>

      <v-form ref="form" v-model="valid" lazy-validation>
        <div class="mt-6">
          <v-container fluid>
            <v-row align="center" justify="center">
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="teamName"
                  label="Enter TEAM NAME"
                  :rules="[(v) => !!v || 'Name is required']"
                  required
                  solo
                  dense
                >
                </v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </div>

        <div>
          <v-container fluid>
            <v-row align="center" justify="center">
              <v-col cols="12" sm="6" md="4">
                <v-select
                  v-model="teamColor"
                  :items="items"
                  label="Choose TEAM COLOR ..."
                  :rules="[(v) => !!v || 'Color is required']"
                  required
                  solo
                  dense
                >
                </v-select>
              </v-col>
            </v-row>
          </v-container>
        </div>

        <div>
          <div class="text-center">
            <v-btn @click="onDashboard" rounded color="#4E9455" dark link>
              Go to Dashboard
            </v-btn>
          </div>
        </div>
      </v-form>
    </div>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    teamName: "",
    teamColor: null,
    items: ["Red", "Blue", "Green", "Orange"],
    valid: true,
    rules: {
      required: (value) => !!value || "Required!",
    },
  }),
  methods: {
    onDashboard() {
      if (this.$refs.form.validate()) {
        this.$emit("teamSelected", this.teamName, this.teamColor);
        this.$router.push("dashboard");
      }
    },
  },
};
</script>

<style>
#inspire img {
  width: 100%;
}
</style>
