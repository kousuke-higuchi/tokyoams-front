<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <utilitytunnel-side-card-details select-tab="ledger" />
      </v-col>
      <v-col md="9" cols="12">
        <roadfacility-ledger3></roadfacility-ledger3>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      /*TODO:BEで取得したデータを保持
      <roardfacility-ledger3>に値を渡す*/
    }
  },
})
</script>