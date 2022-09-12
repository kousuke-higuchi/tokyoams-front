<template>
  <div>
    <v-row>
      <v-col v-bind:md="child_extend ? 3 : 0" cols="12">
        <footbridge-side-card-details @isExtend='child_extend = $event' />
      </v-col>
      <v-col v-bind:md="child_extend ? 9 : 12" cols="12">
        <v-card>
          <div class="d-flex">
            <v-row>
              <v-col>
                <v-card-text class="text-right">様式-6</v-card-text>
              </v-col>
            </v-row>
          </div>
          <v-card-title>
            <v-row class="justify-start mt-1 ml-3">立面図</v-row>
            <v-row class="justify-center mt-1 ml-3">橋梁番号　01130010</v-row>
            <v-row class="justify-end mt-1 mr-3">橋梁名　青葉歩道橋</v-row>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-img src="../../assets/img/dmg/fbg6view1.jpg"></v-img>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
const child_extend = ref(true);
const onDownloadLedgerClick = () => {
  console.debug('downloadLedger');
};
</script>