<template>
  <v-card class="rfaTable">
    <v-card-text class="text-center text-h6">箇所別記録表({{formInfo.facilityType}})</v-card-text>
    <v-container>
      <v-sheet class="d-flex">
        <div>
          <v-sheet>{{ formInfo.nationStyle }}</v-sheet>
        </div>
        <v-sheet class="ml-auto">
          <!--TODO:{{ null }}の箇所はBEで取得した値を表示する-->
          <v-table density="compact">
            <tbody>
              <tr>
                <th class="text-center">地建・都道府県名</th>
                <td class=" text-center">{{ null }}</td>
              </tr>
              <tr>
                <th class=" text-center">管理機関名</th>
                <td class=" text-center">{{ null }}</td>
              </tr>
              <tr>
                <th class=" text-center">管理機関コード</th>
                <td class=" text-cneter">{{ null }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-sheet>
      </v-sheet>
      <v-table density="compact">
        <thead>
          <tr>
            <th class=" text-center" colspan="2">施設管理番号</th>
            <td>{{ null }}</td>
            <th class=" text-center">点検対象項目</th>
            <td colspan="2">{{ null }}</td>
            <th class=" text-center">路線名</th>
            <td colspan="2">{{ null }}</td>
            <th class=" text-center">距離標(自)</th>
            <td>{{ null }}</td>
            <th class=" text-center">(至)</th>
            <td colspan="2">{{ null }}</td>
            <td>{{ null }}</td>
            <td class=" text-center" colspan="2">延長 {{ null }} m</td>
          </tr>
          <tr>
            <th class=" text-center">事業区分</th>
            <td>{{ null }}</td>
            <th class=" text-center">道路種別</th>
            <td>{{ null }}</td>
            <th class=" text-center">現道・旧道区分</th>
            <td>{{ null }}</td>
            <th class=" text-center">所在地</th>
            <td colspan="2">{{ null }}</td>
            <th class=" text-center">位置目印</th>
            <td>{{ null }}</td>
            <th class=" text-center">北緯</th>
            <td colspan="2">{{ null }}</td>
            <th class=" text-center">東経</th>
            <td colspan="2">{{ null }}</td>
          </tr>
          <tr>
            <th class=" text-center" colspan="2">事前通行規制区分</th>
            <td>{{ null }}</td>
            <th class=" text-center">規制基準</th>
            <td>連続 {{ null }}mm</td>
            <td>時間 {{ null }}mm</td>
            <th class=" text-center">交通量</th>
            <th class=" text-center">平日</th>
            <td>{{ null }}台/12h</td>
            <th class=" text-center">休日</th>
            <td>{{ null }}台/12h</td>
            <th class=" text-center">DID区間</th>
            <td>{{ null }}</td>
            <th class=" text-center">バス路線</th>
            <td>{{ null }}</td>
            <th class=" text-center">迂回路</th>
            <td>{{ null }}</td>
          </tr>
        </thead>
      </v-table>
      <v-row no-gutters>
        <v-col cols="6" class="border">
          <v-card elevation="0" class="rounded-0 rfaCardText">
            <v-card-text>現状写真・スケッチ(既設対策工、位置目印との位置関係が分かるもの)</v-card-text>
            <v-card-text>(ファイル名:{{ null }})</v-card-text>
            <v-container>
              <v-img :src="null" />
            </v-container>
          </v-card>
        </v-col>
        <v-col cols="6" class="border">
          <v-card elevation="0" class="rounded-0 rfaCardText">
            <v-card-text>位置図</v-card-text>
            <v-card-text>(ファイル名:{{ null }})</v-card-text>
            <v-container>
              <v-img :src="null" />
            </v-container>
          </v-card>
        </v-col>
        <v-col cols="6" class="border">
          <v-table density="compact">
            <tbody>
              <tr>
                <th>特記事項</th>
                <td colspan="2">{{ null }}</td>
              </tr>
              <tr>
                <th>点検実施</th>
                <td>{{ null }}</td>
                <td>(天候:{{ null }})</td>
              </tr>
              <tr>
                <th>調査方法</th>
                <td colspan="2">{{ null }}</td>
              </tr>
              <tr>
                <th>所見:(評価理由)</th>
                <td colspan="2">{{ null }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-col>
        <v-col cols="6">
          <v-table density="compact">
            <tbody>
              <tr>
                <th class=" text-center">罹災履歴</th>
                <td>{{ disasterInfo.history }}</td>
              </tr>
              <tr>
                <th class=" text-center">重複点検対策項目</th>
                <td>{{ disasterInfo.inspelist }}</td>
              </tr>
              <tr>
                <th class=" text-center">有・無</th>
                <td>{{ disasterInfo.presence }}</td>
              </tr>
              <tr>
                <th class=" text-center">平成　年度点検結果</th>
                <td>{{ disasterInfo.insResult1 }}</td>
              </tr>
              <tr>
                <th class=" text-center">平成　年度点検結果</th>
                <td>{{ disasterInfo.insResult2 }}</td>
              </tr>
              <tr>
                <th class=" text-center">干想災害地域</th>
                <td>{{ disasterInfo.area }}</td>
              </tr>
              <tr>
                <th class=" text-center">捜索対策工</th>
                <td>{{ disasterInfo.search }}</td>
              </tr>
              <tr>
                <td colspan="2">地震時の安定性(拓積・崩壊のみ)：安定・不安定</td>
              </tr>
            </tbody>
          </v-table>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { rfaNation1And2 } from '~~/types';

export default defineComponent({
  props: {
    formInfo: rfaNation1And2
  },
  data(){
    return{
      //TODO:このデータはpropsで受け取る
      disasterInfo: {
        history: '有(1.被災履歴記録表参照、2.詳細不明：　　　　　　　　　　　）・無(H８年度以降）',
        inspelist: '対応施設管理番号：',
        presence: '落石・崩壊・岩石崩壊・雪崩・土石流・盛土・擁壁・橋梁・地吹雪・その他',
        insResult1: '評点（　　　点） 対応: （完了・施工中・未着手）',
        insResult2: '評点（　　　点）   総合評価：',
        area: null,
        search: '工種：　　　　　規格：　　　　　　数量：　　　　　概算工費：　　　　百万円',
      },
    }
  }
})
</script>