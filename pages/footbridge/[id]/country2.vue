<template>
  <div>
    <v-row>
      <v-col v-bind:md="child_extend ? 3 : 0" cols="12">
        <footbridge-side-card-details @isExtend='child_extend = $event' selectTab="country"/>
      </v-col>
      <v-col v-bind:md="child_extend ? 9 : 12" cols="12">
        <v-card>
          <div class="d-flex">
            <v-row>
              <v-col>
                <v-card-text>別紙2 様式1様式2 <span style="float:right;">様式2</span><br>
                  状況写真（損傷状況）<br>
                  ○部材単位の判定区分がⅡ、Ⅲ又はⅣの場合には、直接関連する不具合の写真を記載のこと。<br>
                  ○写真は、不具合の程度が分かるように添付すること。
                </v-card-text>
              </v-col>
            </v-row>
          </div>
          <v-row no-gutters class="ma-1">
            <v-col cols="12">
              <v-row no-gutters>
                <v-col v-for="imgDetail in imgDetails" :key="imgDetail.img" md="6" cols="12">
                  <v-card class="rounded-0" @click="setmap(imgDetail.damagemap)">
                    <v-table density="compact" class="ledger">
                      <tbody>
                        <tr>
                          <th class="text-center" style="background-color: transparent;">{{ imgDetail.dmageTitle }}</th>
                        </tr>
                        <v-card-text>{{ imgDetail.picTitle }}
                          <v-img :src="imgDetail.img" style="height:350px"></v-img>
                        </v-card-text>
                      </tbody>
                    </v-table>
                  </v-card>
                </v-col>
              </v-row>
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
let imgDetails = ref([
  {
    img: '../../assets/img/dmg/fbg1P002view1.jpg',
    damagemap: '../../assets/img/dmg/damagemap1.jpg',
    imgNumber: 1,
    picTitle: '写真1',
    dmageTitle: '下部構造（根巻きコンクリート）【判定区分：Ⅱ】',
  },
  {
    img: '../../assets/img/dmg/fbg1P002view2.jpg',
    damagemap: '../../assets/img/dmg/damagemap2.jpg',
    imgNumber: 2,
    picTitle: '写真2',
    dmageTitle: '階段部（主桁）【判定区分：Ⅱ】',
  },
  {
    img: '../../assets/img/dmg/fbg1P002view3.jpg',
    damagemap: '../../assets/img/dmg/damagemap3.jpg',
    imgNumber: 3,
    picTitle: '写真3',
    dmageTitle: '階段部（主桁との接合部）【判定区分：Ⅱ】',
  },
  {
    img: '../../assets/img/dmg/fbg1P002view4.jpg',
    damagemap: '../../assets/img/dmg/damagemap4.jpg',
    imgNumber: 4,
    picTitle: '写真4',
    dmageTitle: '階段部（橋台）【判定区分：Ⅱ】',
  },
]);

const setmap = (damagemap) => {
  dmgmap = damagemap;
};

const child_extend = ref(true);
const onDownloadLedgerClick = () => {
  console.debug('downloadLedger');
};
</script>