<template>
  <div>
    <v-row>
      <v-col v-bind:md="child_extend ? 3 : 0" cols="12">
        <footbridge-side-card-details @isExtend='child_extend = $event' selectTab="inspection" />
      </v-col>
      <v-col v-bind:md="child_extend ? 9 : 12" cols="12">
        <v-card>
          <div class="d-flex ml-2">
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
              <v-row no-gutters class="ma-1">
                <v-col cols="12">
                  <v-card-text>
                    <v-row no-gutters>
                      <v-col v-for="photo in photos" :key="photo.img" md="6" cols="12">
                        <v-card class="rounded-0">
                          <v-table density="compact" class="ledger">
                            <tbody>
                              <tr>
                                <th style="background-color: transparent;">径間番号</th>
                                <td>{{ photo.spanno }}</td>
                                <th style="background-color: transparent;">写真番号</th>
                                <td>{{ photo.pictno }}</td>
                              </tr>
                              <tr>
                                <th style="background-color: transparent;">部材名</th>
                                <td>{{ photo.partname }}</td>
                                <th style="background-color: transparent;">損傷の種類</th>
                                <td>{{ photo.damagekind }}</td>
                              </tr>
                              <tr>
                                <th style="background-color: transparent;">状況</th>
                                <td>{{ photo.situation }}</td>
                                <th style="background-color: transparent;">判定</th>
                                <td>{{ photo.judgeid }}</td>
                              </tr>
                              <td colspan="4">
                                <v-card-text>
                                  <v-img :src="photo.img" style="height:350px"></v-img>
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
            </v-window-item>
            <v-window-item v-for="(photo, i) in photos" :key="i" :value="photo.spanno">
              <v-row no-gutters class="ma-1">
                <v-col cols="12">
                  <v-card-text>
                    <v-row no-gutters>
                      <v-col md="6" cols="12">
                        <v-card class="rounded-0">
                          <v-table density="compact" class="ledger">
                            <tbody>
                              <tr>
                                <th style="background-color: transparent;">径間番号</th>
                                <td>{{ photo.spanno }}</td>
                                <th style="background-color: transparent;">写真番号</th>
                                <td>{{ photo.pictno }}</td>
                              </tr>
                              <tr>
                                <th style="background-color: transparent;">部材名</th>
                                <td>{{ photo.partname }}</td>
                                <th style="background-color: transparent;">損傷の種類</th>
                                <td>{{ photo.damagekind }}</td>
                              </tr>
                              <tr>
                                <th style="background-color: transparent;">状況</th>
                                <td>{{ photo.situation }}</td>
                                <th style="background-color: transparent;">判定</th>
                                <td>{{ photo.judgeid }}</td>
                              </tr>
                              <td colspan="4">
                                <v-card-text>
                                  <v-img :src="photo.img" style="height:350px"></v-img>
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
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
import footbridgeService from '~~/services/footbridge-service';
import { Fbg2Periodinsppicture } from "~~/types/footbridge";

//セレクトボックス初期値
const select = ref('全て');

//現在の歩道橋IDを取得
const route = useRoute();
const bridgeId = parseInt(route.params.id as string);
const photos = ref<Fbg2Periodinsppicture[]>([
  {
    periodinspid: 1,
    id: 1,
    spanno: '1',
    pictno: 1,
    partname: '橋名板（漢字）',
    damagekind: '-',
    situation: '(状況)',
    judgeid: '-',
    img: '../../../../assets/img/dmg/fbg4inspect1.jpg',
  },
  {
    periodinspid: 1,
    id: 2,
    spanno: '2',
    pictno: 1,
    partname: '橋名板（かな）',
    damagekind: '-',
    situation: '(状況)',
    judgeid: '-',
    img: '../../../../assets/img/dmg/fbg4inspect2.jpg',
  },
  {
    periodinspid: 1,
    id: 3,
    spanno: '3',
    pictno: 1,
    partname: '橋歴板',
    damagekind: '-',
    situation: '(状況)',
    judgeid: '-',
    img: '../../../../assets/img/dmg/fbg4inspect3.jpg',
  },
  {
    periodinspid: 1,
    id: 4,
    spanno: '4',
    pictno: 1,
    partname: '橋歴板',
    damagekind: '-',
    situation: '(状況)',
    judgeid: '-',
    img: '../../../../assets/img/dmg/fbg4inspect4.jpg',
  },
  {
    periodinspid: 1,
    id: 5,
    spanno: '5',
    pictno: 1,
    partname: '下面',
    damagekind: '-',
    situation: '(状況)',
    judgeid: '-',
    img: '../../../../assets/img/dmg/fbg4inspect5.jpg',
  },
  {
    periodinspid: 1,
    id: 6,
    spanno: '6',
    pictno: 1,
    partname: '主桁',
    damagekind: '表面積_中',
    situation: '腐食',
    judgeid: 'b',
    img: '../../../../assets/img/dmg/fbg4inspect6.jpg',
  },
  {
    periodinspid: 1,
    id: 6,
    spanno: '6',
    pictno: 2,
    partname: '主桁',
    damagekind: '表面積_中',
    situation: '腐食',
    judgeid: 'b',
    img: '../../../../assets/img/dmg/fbg4inspect6.jpg',
  },
]);

const getPageNumber = (facilities) => {
  let nums = new Array<String>;
  nums.push('全て')
  facilities.forEach(page => {
    //コンボボックスのリストに重複無しで追加
    if (nums.indexOf(page.spanno) < 0) {
      nums.push(page.spanno);
    }
  });
  return nums;
};

//TODO:モック終了後、ログイン状態の判定は削除。
const authState = useAuthUser();
if (authState.state.value.isLogin) {
  //データ取得
  footbridgeService.getPeriodInsppictureList(bridgeId).then(s => {
    photos.value = s.data;
    console.log(photos);
  })

  //取得データ分ループ
  photos.value.forEach((photo) => {
    footbridgeService.getPeriodInsppictureImageUrl(bridgeId, photo.periodinspid, photo.id).then((url) => {
      photo.img = url;
    });
  });
}

const child_extend = ref(true);
</script>