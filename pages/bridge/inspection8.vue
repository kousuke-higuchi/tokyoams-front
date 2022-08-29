<template>
  <v-row>
    <v-col md="3" cols="12">
      <bridge-side-card-details selectTab="inspection" />
    </v-col>
    <v-col md="9" cols="12">
      <v-card elevation="3">
        <div class="d-flex">
          <v-card-title>
            <div class="font-weight-bold">点検調書損傷図</div>
          </v-card-title>
          <v-card-actions>
            <v-select label="径間番号" v-model="select" :items="histItems" item-title="select" variant="outlined"
              density="compact" hide-details="false"></v-select>
          </v-card-actions>
        </div>
        <v-card-text>
          <v-img src="../../assets/img/dmg/bridgeDetail2_7_3.jpg"></v-img>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      select: '全て',
      histItems: ['全て', '1', '2', '3'],
    }
  },
})
</script>
