<template>
  <div>
    <v-row>
      <v-col v-bind:md="child_extend ? 3 : 0" cols="12">
        <footbridge-side-card-details @isExtend='child_extend = $event' selectTab="country" />
      </v-col>
      <v-col v-bind:md="child_extend ? 9 : 12" cols="12">
        <v-card>
          <v-card-text>
            <div>別紙2 様式1様式2
              <span style="float:right;">様式2</span><br>
              状況写真（損傷状況）<br>
              ○部材単位の判定区分がⅡ、Ⅲ又はⅣの場合には、直接関連する不具合の写真を記載のこと。<br>
              ○写真は、不具合の程度が分かるように添付すること。
            </div>
            <v-row no-gutters class="ma-1">
              <v-col cols="12">
                <v-row no-gutters>
                  <v-col v-for="(minitryinsppicture, i) in fbgMinitryinsppictureList" :key="i" md="6" cols="12">
                    <v-card class="rounded-0">
                      <v-table density="compact" class="ledger">
                        <tbody>
                          <tr>
                            <th class="text-center" style="background-color: transparent;">
                              {{minitryinsppicture.createParts }}
                              【判定区分：{{minitryinsppicture.judgeinspect}}】
                            </th>
                          </tr>
                          <td>
                            <v-card-text>写真{{ minitryinsppicture.photonumber }}
                              <v-img :src="minitryinsppicture.pictureimg" style="height:350px"></v-img>
                            </v-card-text>
                          </td>
                        </tbody>
                      </v-table>
                    </v-card>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
import footbridgeService from '~~/services/footbridge-service';
//JSONファイル
import { Fbg2Minitryinsppicture } from "~~/types/footbridge";

//現在の歩道橋IDを取得
const route = useRoute();
const bridgeId = parseInt(route.params.id as string);
//TODO:モック作業が終わり次第モック用データは削除
//国様式2情報
//let fbgMinitryinsppictureList = ref<Fbg2Minitryinsppicture[]>();
let fbgMinitryinsppictureList = ref<Fbg2Minitryinsppicture[]>([
  {
    minitryid: 2,
    id: 1,
    photonumber: '1',
    judgeinspect: 'Ⅱ',
    createParts: '下部構造（根巻きコンクリート）',
    pictureimg: '../../../../assets/img/dmg/fbg1P002view1.jpg'
  },
  {
    minitryid: 2,
    id: 2,
    photonumber: '2',
    judgeinspect: 'Ⅱ',
    createParts: '階段部（主桁）',
    pictureimg: '../../../../assets/img/dmg/fbg1P002view2.jpg'
  },
  {
    minitryid: 2,
    id: 3,
    photonumber: '3',
    judgeinspect: 'Ⅱ',
    createParts: '階段部（主桁との接合部）',
    pictureimg: '../../../../assets/img/dmg/fbg1P002view3.jpg'
  },
  {
    minitryid: 2,
    id: 4,
    photonumber: '4',
    judgeinspect: 'Ⅱ',
    createParts: '階段部（橋台）',
    pictureimg: '../../../../assets/img/dmg/fbg1P002view4.jpg'
  },
]);

/**
 * 各表のデータを取得
 * ログインしていない場合モックデータをセットします。
 */
function getData() {
  const authState = useAuthUser();
  if (authState.state.value.isLogin) {
    //国様式2情報取得
    footbridgeService.getMinitryinsppictureList(bridgeId).then(s => {
      fbgMinitryinsppictureList.value = s.data;
      console.log(fbgMinitryinsppictureList);
    })

    //取得データ分ループ
    for (let i = 0; i < fbgMinitryinsppictureList.value.length; i++) {
      //国様式2の画像取得
      footbridgeService.getMinitryinsppictureImageUrl(bridgeId,
        fbgMinitryinsppictureList.value[i].minitryid, fbgMinitryinsppictureList.value[i].id).then((url) => {
          fbgMinitryinsppictureList.value[i].pictureimg = url;
        });
    }
  }
}

const child_extend = ref(true);

//データ取得
getData();
</script>