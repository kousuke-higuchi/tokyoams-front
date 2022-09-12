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
                <v-card-text class="text-right">様式-4</v-card-text>
              </v-col>
            </v-row>
          </div>
          <div class="d-flex">
            <v-row>
              <v-col>
                <v-card-title>写真台帳　橋梁番号　01130010　橋梁名　青葉歩道橋</v-card-title>
              </v-col>
            </v-row>
          </div>
          <v-row no-gutters class="ma-1">
            <v-col cols="12">
              <v-card-text>
                <v-row no-gutters>
                  <v-col v-for="imgDetail in imgDetails" :key="imgDetail.img" md="6" cols="12">
                    <v-card class="rounded-0" @click="setmap(imgDetail.damagemap)">
                      <v-table density="compact" class="ledger">
                        <tbody>
                          <tr>
                            <th class="text-center" style="background-color: transparent;">{{ imgDetail.picTitle }}</th>
                            <th v-if="imgDetail.imgNumber != 1" class="text-center"
                              style="background-color: transparent;">
                              <div>{{ imgDetail.number }}</div>
                            </th>
                          </tr>
                          <td colspan="2">
                            <v-card-text>
                              <v-img :src="imgDetail.img" style="height:500px"></v-img>
                            </v-card-text>
                          </td>
                        </tbody>
                      </v-table>
                    </v-card>
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
const imgDetails = [
  {
    img: '../../assets/img/dmg/fbg4view1.jpg',
    damagemap: '../../assets/img/dmg/damagemap1.jpg',
    imgNumber: 1,
    picTitle: '撮影方向案内図',
  },
  {
    img: '../../assets/img/dmg/fbg4view2.jpg',
    damagemap: '../../assets/img/dmg/damagemap2.jpg',
    imgNumber: 2,
    picTitle: '撮影方向',
    number: '[No 1]',
  },
  {
    img: '../../assets/img/dmg/fbg4view3.jpg',
    damagemap: '../../assets/img/dmg/damagemap3.jpg',
    imgNumber: 3,
    picTitle: '撮影方向',
    number: '[No 2]',
  },
  {
    img: '../../assets/img/dmg/fbg4view4.jpg',
    damagemap: '../../assets/img/dmg/damagemap4.jpg',
    imgNumber: 4,
    picTitle: '撮影方向',
    number: '[No 3]',
  },
];

const setmap = (damagemap) => {
  dmgmap.value = damagemap;
};

const child_extend = ref(true);
const onDownloadLedgerClick = () => {
  console.debug('downloadLedger');
};    
</script>