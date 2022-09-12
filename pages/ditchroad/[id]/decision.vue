<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <ditchroad-side-card-details select-tab="protocol" />
      </v-col>
      <v-col md="9" cols="12">
        <roadfacility-decision title="掘割道路"></roadfacility-decision>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      /*TODO:BEで取得したデータを保持
      <roardfacility-protoco10>に値を渡す*/
    }
  },
})
</script>
