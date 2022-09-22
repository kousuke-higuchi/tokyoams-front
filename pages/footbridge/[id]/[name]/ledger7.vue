<template>
  <div>
    <v-row>
      <v-col v-bind:md="child_extend ? 3 : 0" cols="12">
        <footbridge-side-card-details @isExtend='child_extend = $event' />
      </v-col>
      <v-col v-bind:md="child_extend ? 9 : 12" cols="12">
        <v-card>
          <div class="d-flex">
            <v-card-title>周辺環境案内図</v-card-title>
            <v-row>
              <v-col>
                <v-card-text class="text-right">様式-7</v-card-text>
              </v-col>
            </v-row>
          </div>
          <v-card-title>
            <v-row class="justify-start mt-1 ml-3">01130010</v-row>
            <v-row class="justify-center mt-1 ml-3">橋梁名　青葉歩道橋</v-row>
            <v-row class="justify-end mt-1 mr-3">指定通学路　有　九段小学校</v-row>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col class="cell">
                  <v-card-text>
                    <v-img src="../../../../assets/img/dmg/fbg7view1.jpg"></v-img>
                  </v-card-text>
                </v-col>
                <v-col cols="3" class="cell">
                  <v-row class="cell">
                    <v-col>
                      <v-card-text>
                        <v-img src="../../../../assets/img/dmg/fbg7view2.jpg"></v-img>
                      </v-card-text>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-card-text class="text-center">1:2,500</v-card-text>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-container>
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