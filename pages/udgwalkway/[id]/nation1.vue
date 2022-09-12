<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <underground-walkway-side-card-details select-tab="nation" />
      </v-col>
      <v-col md="9" cols="12">
        <roadfacility-nation1and2 :form-info="nation1Info"></roadfacility-nation1and2>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { RfaNation1And2 } from '~~/types'
export default defineComponent({
  data() {
    return {
      nation1Info: {
        facilityType:'擁壁',
        nationStyle: '【様式-国1】'
      } as RfaNation1And2,
      /*TODO:BEで取得したデータを保持
      <roadfacility-nation1and2>に値を渡す*/
    }
  }
})
</script>