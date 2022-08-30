<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <assemblywalkway-side-card-details />
      </v-col>
      <v-col md="9" cols="12">
        <roadfacility-protocol9></roadfacility-protocol9>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
       /*TODO:BEで取得したデータを保持
      <roardfacility-protocol9>に値を渡す*/
    }
  },
})
</script>