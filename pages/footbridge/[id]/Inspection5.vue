<template>
  <div>
    <v-row>
      <v-col v-bind:md="child_extend ? 3 : 0" cols="12">
        <footbridge-side-card-details @isExtend='child_extend = $event' selectTab="inspection"/>
      </v-col>
      <v-col v-bind:md="child_extend ? 9 : 12" cols="12">
        <v-card>
          <div class="d-flex">
            <v-row>
              <v-col>
                <v-card-title>橋梁名：さんぷる施設　管理事務所：A事務所 管理工区：B工区</v-card-title>
              </v-col>
            </v-row>
          </div>
          <v-row no-gutters class="ma-1">
            <v-col md="12" cols="12">
              <v-card-text>
                <v-row no-gutters>
                  <v-col md="2" cols="12">
                    <v-card-text>径間番号</v-card-text>
                  </v-col>
                  <v-col md="2" cols="12">
                    <v-select v-model="select.number" :items="numbers" item-title="select.number" variant="outlined"
                      density="compact" hide-details="false"></v-select>
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col>
                    <v-card-text>
                      <v-row>
                        <v-img src="../../assets/img/dmg/fbg6view1.jpg"></v-img>
                      </v-row>
                    </v-card-text>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
import { continueStatement } from "@babel/types";

let dmgmap = ref('../../assets/img/dmg/damagemap1.jpg');
const select = ref({ number: 1 });
const numbers = ref(['全て', 1, 2, 3, 4, 5]);

const setmap = (damagemap) => {
  dmgmap.value = damagemap;
};

const child_extend = ref(true);
const onDownloadLedgerClick = () => {
  console.debug('downloadLedger');
};
</script>