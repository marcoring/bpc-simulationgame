<template>
  <v-container id="confirmation-dialog">
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
         <br> Are you sure you want to confirm changes?
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
            Accept
          </v-btn>
          <v-btn color="red" text @click="confirmChangesDialog = false">
            Decline
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: "confirmation-dialog",
  props: {
    round: Number,
    progressElements: Array,
    teamName: String,
    teamColor: String,
  },
  data() {
    return {
      confirmChangesDialog: false,
    };
  },
  methods: {
    confirmChanges() {
      // Todo: send data (as oData) to Backend
      console.log("redirect to Dashboard");
      this.$emit("updateProgress", this.$route.name, 100);
      this.$router.push({ path: "/dashboard" });
    },
  },
};
</script>
