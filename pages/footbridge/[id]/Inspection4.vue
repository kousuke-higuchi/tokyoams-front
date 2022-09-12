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
                <v-card-title>橋梁名：サンプル橋　管理事務所：A事務所 管理工区：B工区</v-card-title>
              </v-col>
            </v-row>
          </div>
          <v-row no-gutters class="ma-1">
            <v-col md="9" cols="12">
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
                  <v-col v-for="imgDetail in imgDetails" :key="imgDetail.img" md="6" cols="12">
                    <v-card class="rounded-0" @click="setmap(imgDetail.damagemap)">
                      <v-table density="compact" class="ledger">
                        <tbody>
                          <tr>
                            <th style="background-color: transparent;">径間番号</th>
                            <td>{{ imgDetail.trackNumber }}</td>
                            <th style="background-color: transparent;">写真番号</th>
                            <td>{{ imgDetail.imgNumber }}</td>
                          </tr>
                          <tr>
                            <th style="background-color: transparent;">部材名</th>
                            <td>{{ imgDetail.cmpName }}</td>
                            <th style="background-color: transparent;">損傷の種類</th>
                            <td>{{ imgDetail.damageType }}</td>
                          </tr>
                          <tr>
                            <th style="background-color: transparent;">状況</th>
                            <td>{{ imgDetail.situation }}</td>
                            <th style="background-color: transparent;">判定</th>
                            <td>{{ imgDetail.judgment }}</td>
                          </tr>
                          <td colspan="4">
                            <v-card-text>
                              <v-img :src="imgDetail.img" style="height:350px"></v-img>
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
const select = ref({ number: 1 });
const numbers = ref(['全て', 1, 2, 3, 4, 5]);
const imgDetails = [
  {
    img: '../../assets/img/dmg/fbg4inspect1.jpg',
    damagemap: '../../assets/img/dmg/damagemap1.jpg',
    trackNumber: 1,
    cmpName: '橋名板（漢字）',
    situation: '-',
    imgNumber: 1,
    damageType: '(状況)',
    judgment: '-',
  },
  {
    img: '../../assets/img/dmg/fbg4inspect2.jpg',
    damagemap: '../../assets/img/dmg/damagemap2.jpg',
    trackNumber: 1,
    cmpName: '橋名板（かな）',
    situation: '-',
    imgNumber: 2,
    damageType: '(状況)',
    judgment: '-',
  },
  {
    img: '../../assets/img/dmg/fbg4inspect3.jpg',
    damagemap: '../../assets/img/dmg/damagemap3.jpg',
    trackNumber: 1,
    cmpName: '橋歴板',
    situation: '-',
    imgNumber: 3,
    damageType: '(状況)',
    judgment: '-',
  },
  {
    img: '../../assets/img/dmg/fbg4inspect4.jpg',
    damagemap: '../../assets/img/dmg/damagemap4.jpg',
    trackNumber: 1,
    cmpName: '橋歴板',
    situation: '-',
    imgNumber: 4,
    damageType: '(状況)',
    judgment: '-',
  },
  {
    img: '../../assets/img/dmg/fbg4inspect5.jpg',
    damagemap: '../../assets/img/dmg/damagemap4.jpg',
    trackNumber: 1,
    cmpName: '下面',
    situation: '-',
    imgNumber: 5,
    damageType: '(状況)',
    judgment: '-',
  },
  {
    img: '../../assets/img/dmg/fbg4inspect6.jpg',
    damagemap: '../../assets/img/dmg/damagemap4.jpg',
    trackNumber: 1,
    cmpName: '主桁',
    situation: '表面積_中',
    imgNumber: 6,
    damageType: '腐食',
    judgment: 'b',
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