<template>
  <v-row>
    <v-col v-bind:md="child_extend ? 3 : 0" cols="12">
      <!-- <p> {{ child_extend }}</p> -->
      <tunnel-side-card-details @isExtend='child_extend = $event' selectTab="country" />
    </v-col>
    <v-col v-bind:md="child_extend ? 9 : 12" cols="12">
      <v-card elevation="3" class="ledger">
        <v-card-text class="d-flex">
          <v-sheet>別紙3 点検票記録様式 (2)大型カルバート</v-sheet>
          <v-sheet class="ml-auto">様式1(その1)</v-sheet>
        </v-card-text>
        <v-container>
          <v-card-text>施設名・所在地・管理者名等</v-card-text>
          <v-table density="compact">
            <thead>
              <tr>
                <th rowspan="2" class="text-center">施設名</th>
                <th rowspan="2" class="text-center">路線名</th>
                <th rowspan="2" colspan="2" class="text-center">所在地</th>
                <th rowspan="2" class="text-center">起点側</th>
                <th class="text-center">緯度</th>
                <td>{{  '35°67’32.1”'  }}</td>
              </tr>
              <tr>
                <th class="text-center">経度</th>
                <td>{{  '139°76’21.9”'  }}</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {{  '日比谷地下自動車道'  }}<br />
                  (フリガナ){{  'ヒビヤ'  }}
                </td>
                <td>{{  '04 日比谷豊洲埠頭東雲'  }}</td>
                <td colspan="5">千代田区有楽町二丁目</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th class="text-center">管理者名</th>
                <th class="text-center">点検実施年月日</th>
                <th class="text-center">代替路の有無</th>
                <th class="text-center">自専道or一般道</th>
                <th colspan="2" class="text-center">緊急輸送道路</th>
                <th class="text-center">占用物件(名称)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{  '第一建設事務所'  }}</td>
                <td>{{  '2019.1.18'  }}</td>
                <td></td>
                <td></td>
                <td colspan="2"></td>
                <td></td>
              </tr>
            </tbody>
          </v-table>
          <div>部材単位の診断(各部材ごとに最悪値を記入)</div>
          <div class="d-flex">
            <v-sheet class="ml-auto border bg-grey-lighten-3">点検者</v-sheet>
            <v-sheet class="border" style="min-width: 5em;">源静夫</v-sheet>
            <v-sheet class="border bg-grey-lighten-3">点検責任者</v-sheet>
            <v-sheet class="border" style="min-width: 5em;">出木杉英寿</v-sheet>
          </div>
          <v-table density="compact">
            <thead>
              <tr>
                <th colspan="4" class="text-center">点検時に記録</th>
                <th colspan="3" class="text-center">措置後に記録</th>
              </tr>
              <tr>
                <th class="text-center">部材名</th>
                <th class="text-center">判定区分<br />(Ⅰ~Ⅳ)</th>
                <th class="text-center">変状の種類<br />(Ⅱ以上の場合に記載)</th>
                <th class="text-center">備考(写真番<br />号、位置等が分<br />かるように記載)</th>
                <th class="text-center">措置後の<br />判定区分</th>
                <th class="text-center">変状の種類</th>
                <th class="text-center">措置及び判定<br />実施年月日</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in parts" :key="item.partName">
                <th class="text-center">{{ item.partName }}</th>
                <td class="text-center">{{ item.judge }}</td>
                <td>{{ item.accident }}</td>
                <td class="text-center">{{ item.note }}</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </v-table>
          <div class="mt-4">施設毎の健全性の診断(対策区分Ⅰ~Ⅳ)</div>
          <v-table density="compact">
            <thead>
              <tr>
                <th colspan="2" class="text-center">点検時に記録</th>
                <th colspan="2" class="text-center">措置後に記録</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center">(判断区分)<br />{{ 'Ⅲ' }}</td>
                <td>(所見等)<br />{{ '激しいうきが見られる' }}</td>
                <td>(再判定区分)<br /></td>
                <td>(再判定実施年月日)<br /></td>
              </tr>
            </tbody>
          </v-table>
          <div class="mt-4">全景写真(起点側、終点側を記載すること)</div>
          <v-row no-gutters class="border">
            <v-col cols="4">
              <v-table density="compact">
                <thead>
                  <tr>
                    <th class="text-center">建設年次</th>
                    <th class="text-center">延長</th>
                    <th class="text-center">幅員</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-center">{{'S43'}}</td>
                    <td class="text-center">{{'407m'}}</td>
                    <td class="text-center">{{'5.80m'}}</td>
                  </tr>
                </tbody>
              </v-table>
            </v-col>
            <v-col cols="4">
              <v-container>
                <v-img src="../../assets/img/dmg/tnlCountry1view1.jpg"></v-img>
                <v-card-text class="text-center">起点側</v-card-text>
              </v-container>
            </v-col>
            <v-col cols="4">
              <v-container>
                <v-img src="../../assets/img/dmg/tnlCountry1view2.jpg"></v-img>
                <v-card-text class="text-center">終点側</v-card-text>
              </v-container>
            </v-col>
          </v-row>
          <v-card-text class="pa-0 text-caption">※建設年次が不明な場合は不明と記入する</v-card-text>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      child_extend: true,
      //部材単位の診断テーブル
      parts: [
        { partName: 'カルバート本体', judge: 'Ⅲ', accident: '滴水', note: '27-7', },
        { partName: '継手', judge: 'Ⅲ', accident: 'うき', note: '10-3', },
        { partName: 'ウイング', judge: 'Ⅱ', accident: 'うき', note: '1-2', },
        { partName: 'その他', judge: 'Ⅱ', accident: '脱落', note: '5-1', },
      ]
    }
  }
})
</script>