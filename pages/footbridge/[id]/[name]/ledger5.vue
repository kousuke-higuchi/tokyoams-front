<template>
  <div>
    <v-row>
      <v-col v-bind:md="child_extend ? 3 : 0" cols="12">
        <footbridge-side-card-details @isExtend='child_extend = $event' />
      </v-col>
      <v-col v-bind:md="child_extend ? 9 : 12" cols="12">
        <v-card>
          <v-card-text class="text-right pb-0">様式-5</v-card-text>
          <v-card-title class="pb-0">平面図</v-card-title>
          <v-container v-for="photo in photos" :key="photo.id">
            <v-card class="d-flex" elevation="0">
              <v-container class="border">
                <v-img :src="photo.img"></v-img>
              </v-container>
            </v-card>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
import footbridgeService from '~~/services/footbridge-service';
import { Fbg2Floorplan } from "~~/types/footbridge";

const child_extend = ref(true);

//現在の歩道橋IDを取得
const route = useRoute();
const bridgeId = parseInt(route.params.id as string);
const photos = ref<Fbg2Floorplan[]>([
  { id: 1, img: '../../../../assets/img/dmg/fbg5planview1.jpg' },
  { id: 2, img: '../../../../assets/img/dmg/fbg5planview1.jpg' },
]);

//TODO:モック終了後、ログイン状態の判定は削除。
const authState = useAuthUser();
if (authState.state.value.isLogin) {
  //データ取得
  footbridgeService.getFloorplanList(bridgeId).then(s => {
    photos.value = s.data;
    console.log(photos);
  })

  //取得データ分ループ
  photos.value.forEach((photo) => {
    //画像取得
    footbridgeService.getFloorpnanImageUrl(bridgeId, photo.id).then((url) => {
      photo.img = url;
    });
  });
}
</script>