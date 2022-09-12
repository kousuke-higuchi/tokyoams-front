<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <plankroad-side-card-details select-tab="nation" />
      </v-col>
      <v-col md="9" cols="12">
        <roadfacility-nation5-c></roadfacility-nation5-c>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      /*TODO:BEで取得したデータを保持
      <roadfacility-nation5-c>に値を渡す*/
    }
  }
})
</script>