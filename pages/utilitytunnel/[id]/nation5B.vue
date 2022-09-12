<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <utilitytunnel-side-card-details select-tab="nation" />
      </v-col>
      <v-col md="9" cols="12">
        <roadfacility-nation5-b></roadfacility-nation5-b>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      /*TODO:BEで取得したデータを保持
      <roadfacility-nation5-b>に値を渡す*/
    }
  }
})
</script>