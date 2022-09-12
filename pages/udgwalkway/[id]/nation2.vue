<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <underground-walkway-side-card-details select-tab="nation" />
      </v-col>
      <v-col md="9" cols="12">
        <roadfacility-nation1and2 :form-info="nation2Info"></roadfacility-nation1and2>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { RfaNation1And2 } from '~~/types';
export default defineComponent({
  data() {
    return {
      nation2Info: {
        facilityType:'盛土',
        nationStyle: '【様式-国2】'
      } as RfaNation1And2
      /*TODO:BEで取得したデータを保持
      <roadfacility-nation1and2>に値を渡す*/
    }
  }
})
</script>