<template>
  <div>
    <v-row>
      <v-col v-bind:md="child_extend ? 3 : 0" cols="12">
          <tunnel-side-card-details @isExtend='child_extend = $event' />
      </v-col>
    <v-col v-bind:md="child_extend ? 9 : 12" cols="12">
        <tunnel-ledger2-inspection5 :block-imgs="sectionImgs"></tunnel-ledger2-inspection5>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { tunnelBlockImg } from '~~/types';

export default defineComponent({
  data() {
    return {
      child_extend: true,
      sectionImgs: [
        { blockId: 1, imgfile: '../../assets/img/dmg/tnl2view1.jpg' },
        { blockId: 2, imgfile: '../../assets/img/dmg/tnl2view1.jpg' },
        { blockId: 3, imgfile: '../../assets/img/dmg/tnl2view1.jpg' },
      ] as Array<tunnelBlockImg>,
    }
  }
})
</script>