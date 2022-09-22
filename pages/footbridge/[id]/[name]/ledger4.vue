<template>
  <div>
    <v-row>
      <v-col v-bind:md="child_extend ? 3 : 0" cols="12">
        <footbridge-side-card-details @isExtend='child_extend = $event' />
      </v-col>
      <v-col v-bind:md="child_extend ? 9 : 12" cols="12">
        <v-card>
          <v-card-text class="text-right pb-0">様式-4</v-card-text>
          <v-card-title class="pb-0">写真台帳</v-card-title>
          <v-row no-gutters class="ma-1">
            <v-col cols="12">
              <v-card-text>
                <v-row no-gutters>
                  <v-col md="6" cols="12">
                    <v-table density="compact" class="ledger">
                      <tbody>
                        <tr>
                          <th class="text-center" style="background-color: transparent;">
                            {{ '撮影方向案内図' }}
                          </th>
                        </tr>
                        <td>
                          <v-card-text>
                            <v-img :src="fbgPictureinfoData.pictureimg" style="height:500px"></v-img>
                          </v-card-text>
                        </td>
                      </tbody>
                    </v-table>
                  </v-col>
                  <v-col v-for="(picture) in fbgPictureList" :key="picture.pictureid" md="6" cols="12">
                    <v-card class="rounded-0">
                      <v-table density="compact" class="ledger">
                        <tbody>
                          <tr>
                            <th class="text-center" style="background-color: transparent;">
                              {{ '撮影方向' }}
                            </th>
                            <th class="text-center" style="background-color: transparent;">
                              {{ picture.createnumstring }}
                            </th>
                          </tr>
                          <td colspan="2">
                            <v-card-text>
                              <v-img :src="picture.pictureimg" style="height:500px"></v-img>
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
import footbridgeService from '~~/services/footbridge-service';
import { Fbg2Picture } from "~~/types/footbridge";
import { Fbg2Pictureinfo } from "~~/types/footbridge";

const child_extend = ref(true);

//写真台帳情報
let fbgPictureList = ref<Fbg2Picture[]>([
  {
    pictureid: 1,
    pictnumber: 1,
    createnumstring: '[No1]',
    pictureimg: '../../../../assets/img/dmg/fbg4view2.jpg',
  },
  {
    pictureid: 2,
    pictnumber: 2,
    createnumstring: '[No2]',
    pictureimg: '../../../../assets/img/dmg/fbg4view3.jpg',
  },
  {
    pictureid: 3,
    pictnumber: 3,
    createnumstring: '[No3]',
    pictureimg: '../../../../assets/img/dmg/fbg4view4.jpg',
  },
]);

//撮影方向案内図帳情報
let fbgPictureinfoData = ref<Fbg2Pictureinfo>(
  {
    id: 1,
    pictureimg: '../../../../assets/img/dmg/fbg4view1.jpg'
  }
);

//現在の歩道橋IDを取得
const route = useRoute();
const bridgeId = parseInt(route.params.id as string);

/**
 * 各表のデータを取得
 * ログインしていない場合モックデータを表示します。
 */
function getData() {
  const authState = useAuthUser();
  if (authState.state.value.isLogin) {
    //写真台帳情報取得
    footbridgeService.getPictureList(bridgeId).then(s => {
      fbgPictureList.value = s.data;
      console.log(fbgPictureList);
    });

    //取得データ分ループ
    fbgPictureList.value.forEach((picture) => {
      //撮影方向図取得
      footbridgeService.getPictureImageUrl(bridgeId, picture.pictureid).then((url) => {
        picture.pictureimg = url;
      });
    });

    //撮影方向案内図情報取得
    footbridgeService.getPictureinfoData(bridgeId).then(s => {
      fbgPictureinfoData.value = s.data;
      console.log(fbgPictureinfoData);
    });

    //撮影方向図取得
    footbridgeService.getPictureinfoImageUrl(bridgeId, fbgPictureinfoData.value.id).then((url) => {
      fbgPictureinfoData.value.pictureimg = url;
    });
  }
}

//データ取得
getData();
</script>