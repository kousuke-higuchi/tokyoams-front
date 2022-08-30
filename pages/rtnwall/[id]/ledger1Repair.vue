<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <rtnwall-side-card-details />
      </v-col>
      <v-col md="9" cols="12">
        <roadfacility-ledger1-repair :rfaRepairData="rfaRepairs" ></roadfacility-ledger1-repair>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { rfaRepair } from '~~/types';
import rfaRepairJson from '~~/assets/rfaRepair.json';

export default defineComponent({
  data() {
    return {
      rfaRepairs:JSON.parse(JSON.stringify(rfaRepairJson)) as Array<rfaRepair>,
    };
  },
})
</script>
