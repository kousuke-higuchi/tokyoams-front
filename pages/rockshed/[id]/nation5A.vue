<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <rockshed-side-card-details select-tab="nation"/>
      </v-col>
      <v-col md="9" cols="12">
        <roadfacility-nation5-a></roadfacility-nation5-a>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      /*TODO:BEで取得したデータを保持
      <roadfacility-nation5-a>に値を渡す*/
    }
  }
})
</script>