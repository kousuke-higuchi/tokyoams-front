<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <assemblywalkway-side-card-details select-tab="ledger" />
      </v-col>
      <v-col md="9" cols="12">
        <roadfacility-ledger1 title="組立歩道施設台帳" :rfaRepairList="rfaRepairs"></roadfacility-ledger1>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
import { RfaRepair } from '~~/types';
import rfaRepairJson from '~~/assets/rfaRepair.json';

const rfaRepairs = ref(rfaRepairJson as Array<RfaRepair>);

</script>
