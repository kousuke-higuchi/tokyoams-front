<template>
  <v-card>
    <v-card-text class="text-center text-h6">防災カルテ様式A</v-card-text>
    <v-sheet class="d-flex">
      <div>
        <v-sheet>【様式-国5】</v-sheet>
      </div>
      <v-sheet class="ml-auto rfaTable">
        <!--TODO:{{ null }}の箇所はBEで取得した値を表示する-->
        <v-table density="compact">
          <tbody>
            <tr>
              <th>地建・都道府県名</th>
              <td>{{ null }}</td>
            </tr>
            <tr>
              <th>管理機関名</th>
              <td>{{ null }}</td>
            </tr>
            <tr>
              <th>管理機関コード</th>
              <td>{{ null }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-sheet>
    </v-sheet>
    <v-table density="compact" class="ledger">
      <thead>
        <tr>
          <th colspan="2">管理施設番号</th>
          <td>{{ null }}</td>
          <th>点検対象項目</th>
          <td colspan="2">{{ null }}</td>
          <th>路線名</th>
          <td colspan="2">{{ null }}</td>
          <th>距離標(自)</th>
          <td>{{ null }}</td>
          <th>距離標(至)</th>
          <td colspan="2">{{ null }}</td>
          <td>{{ null }}</td>
          <td colspan="2">延長 {{ null }} m</td>
        </tr>
        <tr>
          <th>事業区分</th>
          <td>{{ null }}</td>
          <th>道路種別</th>
          <td>{{ null }}</td>
          <th>現道・旧道区分</th>
          <td>{{ null }}</td>
          <th>所在地</th>
          <td colspan="2">{{ null }}</td>
          <th>位置目印</th>
          <td>{{ null }}</td>
          <th>北緯</th>
          <td colspan="2">{{ null }}</td>
          <th>東経</th>
          <td colspan="2">{{ null }}</td>
        </tr>
        <tr>
          <th colspan="2">事前通行規制区間設定</th>
          <td>{{ null }}</td>
          <th>規制基準</th>
          <td>連続 {{ null }}mm</td>
          <td>時間 {{ null }}mm</td>
          <th>交通量</th>
          <th>平日</th>
          <td>{{ null }}台/12h</td>
          <th>休日</th>
          <td>{{ null }}台/12h</td>
          <th>DID区間</th>
          <td>{{ null }}</td>
          <th>バス路線</th>
          <td>{{ null }}</td>
          <th>迂回路</th>
          <td>{{ null }}</td>
        </tr>
      </thead>
    </v-table>
    <div class="border">
      <v-row>
        <v-col cols="9" class="textbox rfaCardText">
          <v-sheet>【点検地点位置図】※スケッチと位置を明記する</v-sheet>
          <v-img :src="null" />
        </v-col>
        <v-col cols="3">
          <v-table class="ledger">
            <thead>
              <tr>
                <th colspan="2" nowrap>専門技術者による点検</th>
              </tr>
              <tr>
                <th nowrap>着目すべき変状</th>
                <th nowrap>点検内容の要点</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ null }}</td>
                <td>{{ null }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-col>
      </v-row>
      <div :style="{ whiteSpace: 'nowrap' }">
        <v-row>
          <v-col cols="9" class="rfaCardText">
            <v-sheet>[専門技術者のコメント]</v-sheet>
            <v-sheet>{{ null }}</v-sheet>
          </v-col>
          <v-col cols="3" class="rfaCardText">
            <v-container>
              <v-table class="ledger">
                <tbody>
                  <tr>
                    <td class="text-right">1</td>
                    <td>対策工が必要</td>
                  </tr>
                  <tr>
                    <td class="text-right">2</td>
                    <td>カルテ対応</td>
                  </tr>
                </tbody>
              </v-table>
              <v-sheet class="overflow-x-auto">1、2のどちらか対応するものに〇印</v-sheet>
            </v-container>
          </v-col>
        </v-row>
      </div>
    </div>
    <v-table density="compact" class="ledger">
      <thead>
        <tr>
          <th nowrap>着目すべき変状</th>
          <th nowrap>点検の時期</th>
          <th nowrap>想定される災害形態</th>
          <th nowrap>変状が出た時の対応</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </v-table>
    <v-table density="compact" class="ledger">
      <tbody>
        <tr>
          <th>作成年月日</th>
          <td>{{ null }} (天候:{{ null }}) </td>
          <th>専門技術者</th>
          <td>{{ null }}</td>
          <th>会社名</th>
          <td>{{ null }}</td>
          <td>連絡先 {{ null }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<script lang="ts">
export default defineComponent({
  // props:{
  //TODO:表示するデータを取得する
  // }
})
</script>