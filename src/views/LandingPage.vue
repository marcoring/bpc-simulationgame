<template>
  <div>
    <v-flex class="text-center">
      <v-img
        :src="require('@/assets/logo.png')"
        style="width: 25%; height: 25%"
        class="mx-auto align-center justify-center"
      />
    </v-flex>
<div class="mt-6">
    <v-container fluid>
      <v-row align="center" justify="center">
     <v-col
            cols="12"
            sm="6"
            md="4"
          >
            <v-text-field
              label="Enter TEAM NAME"
              solo
              dense
            ></v-text-field>
          </v-col>
           </v-row>
    </v-container>
</div>

    
<div>
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col
          cols="12"
            sm="6"
            md="4"
        >
          <v-select
            :items="items"
            label="Choose TEAM COLOR ..."
            solo
            dense
          ></v-select>
        </v-col>
      </v-row>
    </v-container>
</div>

    <div>
        <div class="text-center">
          <v-btn v-btn-style rounded color="#4E9455" dark link to="dashboard">
            Go to Dashboard
          </v-btn>
        </div>
    </div>

  </div>
</template>

<script>
export default {
    data: () => ({ 
    items: ['Red', 'Blue', 'Green', 'Orange'],
    })
}
</script>

<style>
#inspire img {
  width: 100%;
}
</style>
