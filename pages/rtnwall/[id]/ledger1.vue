<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <rtnwall-side-card-details select-tab="ledger" />
      </v-col>
      <v-col md="9" cols="12">
        <roadfacility-ledger1 title="擁壁施設台帳" :rfaRepairData="rfaRepairs"></roadfacility-ledger1>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>

import { RfaRepair } from '~~/types';
import rfaRepairJson from '~~/assets/rfaRepair.json';

console.log("rtnwall ledger1 ", rfaRepairJson);

const rfaRepairs = ref(rfaRepairJson as Array<RfaRepair>);
</script>
