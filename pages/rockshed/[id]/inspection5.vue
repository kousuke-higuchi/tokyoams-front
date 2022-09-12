<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <rockshed-side-card-details select-tab="protocol" />
      </v-col>
      <v-col md="9" cols="12">
        <rockshed-ledger2-inspe5 :block-imgs="sectionImgs"></rockshed-ledger2-inspe5>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { RockshedBlockImg } from '~~/types';

export default defineComponent({
  data() {
    return {
      sectionImgs: [
        { blockId: 1, imgfile: null },
        { blockId: 2, imgfile: null },
        { blockId: 3, imgfile: null },
      ] as Array<RockshedBlockImg>,
    }
  }
})
</script>