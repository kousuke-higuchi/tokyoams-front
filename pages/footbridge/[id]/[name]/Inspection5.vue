<template>
  <div>
    <v-row>
      <v-col v-bind:md="child_extend ? 3 : 0" cols="12">
        <footbridge-side-card-details @isExtend='child_extend = $event' selectTab="inspection" />
      </v-col>
      <v-col v-bind:md="child_extend ? 9 : 12" cols="12">
        <v-card>
          <v-card-title>橋梁名：さんぷる施設　管理事務所：A事務所 管理工区：B工区</v-card-title>
          <div class="d-flex">
            <v-sheet>
              <v-container>径間番号</v-container>
            </v-sheet>
            <v-sheet class="ma-1">
              <v-select v-model="select" :items="getPageNumber(photos)" item-title="page" variant="outlined"
                density="compact" hide-details>
              </v-select>
            </v-sheet>
          </div>
          <v-window v-model="select">
            <v-window-item value="全て">
              <v-container v-for="(photo, i) in photos" :key="i">
                <v-card class="d-flex" elevation="0">
                  <v-container class="border">
                    <v-img :src="photo.img"></v-img>
                  </v-container>
                </v-card>
              </v-container>
            </v-window-item>
            <v-window-item v-for="(photo, i) in photos" :key="i" :value="photo.spanid">
              <v-container>
                <v-card class="d-flex" elevation="0">
                  <v-container class="border">
                    <v-img :src="photo.img"></v-img>
                  </v-container>
                </v-card>
              </v-container>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
import footbridgeService from '~~/services/footbridge-service';
import { Fbg2Periodinspdamage } from "~~/types/footbridge";

const child_extend = ref(true);

//セレクトボックス初期値
const select = ref('全て');
//現在の歩道橋IDを取得
const route = useRoute();
const bridgeId = parseInt(route.params.id as string);
const photos = ref<Fbg2Periodinspdamage[]>([
  { periodinspid: 1, spanid: 1, id: 1, img: '../../../../assets/img/dmg/fbgi5dmg1.jpg' },
  { periodinspid: 1, spanid: 2, id: 1, img: '../../../../assets/img/dmg/fbgi5dmg1.jpg' },
  { periodinspid: 1, spanid: 3, id: 1, img: '../../../../assets/img/dmg/fbgi5dmg1.jpg' },
  { periodinspid: 1, spanid: 3, id: 2, img: '../../../../assets/img/dmg/fbg4inspect2.jpg' },
]);

//セレクトボックスの項目取得
const getPageNumber = (facilities) => {
  let nums = new Array<String>;
  nums.push('全て')
  facilities.forEach(page => {
    //径間番号を重複無しでコンボボックスの値として取得
    if (nums.indexOf(page.spanid) < 0) {
      nums.push(page.spanid);
    }
  });
  return nums;
};

//TODO:モック終了後、ログイン状態の判定は削除。
const authState = useAuthUser();
if (authState.state.value.isLogin) {
  //データ取得
  footbridgeService.getPeriodinspdamageList(bridgeId).then(s => {
    photos.value = s.data;
    console.log(photos);
  })

  //取得データ分ループ
  photos.value.forEach((photo) => {
    footbridgeService.getPeriodinspdamageImageUrl(bridgeId, photo.periodinspid, photo.spanid, photo.id).then((url) => {
      photo.img = url;
    });
  });
}
</script>