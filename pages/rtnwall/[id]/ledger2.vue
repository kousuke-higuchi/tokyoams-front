<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <rtnwall-side-card-details />
      </v-col>
      <v-col md="9" cols="12">
        <roadfacility-ledger2></roadfacility-ledger2>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      /*TODO:DBのテーブル,カラムが判明次第BEで取得したデータを保持
      <roardfacility-ledger2>に値を渡す*/
    }
  },
})
</script>