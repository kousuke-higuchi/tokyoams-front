<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <rockshed-side-card-details />
      </v-col>
      <!--テーブルのスタイルを設定する共通のcssができ次第、それを利用したスタイルの設定方法に変更する-->
      <v-col md="9" cols="12">
        <v-card>
          <!--DBカラムが判明次第,値を設定する-->
          <v-container>
            <v-table density="compact" :style="{ whiteSpace: 'nowrap' }">
              <tbody>
                <tr>
                  <th class="border bg-grey-lighten-3 text-center">
                    <v-sheet class="text-caption bg-grey-lighten-3">フリガナ</v-sheet>
                    <v-sheet class="bg-grey-lighten-3">施設名</v-sheet>
                  </th>
                  <td class="border" colspan="6">
                    <v-sheet class="text-caption">{{ null }}</v-sheet>
                    <v-sheet>{{ null }}</v-sheet>
                  </td>
                  <th class="border bg-grey-lighten-3 text-center">路線名</th>
                  <td class="border" colspan="2">{{ null }}</td>
                  <th class="border bg-grey-lighten-3 text-center" rowspan="5">管理事務所</th>
                  <td class="border">{{ null }}</td>
                  <th class="border bg-grey-lighten-3 text-center">管理番号</th>
                  <td class="border">{{ null }}</td>
                </tr>
                <tr>
                  <th class="border bg-grey-lighten-3 text-center" rowspan="4">所在地</th>
                  <th class="border bg-grey-lighten-3 text-center" rowspan="2">自</th>
                  <td class="border" rowspan="2">{{ null }}</td>
                  <th class="border bg-grey-lighten-3 text-center" rowspan="4">
                    <v-sheet class="bg-grey-lighten-3">位置情報</v-sheet>
                    <v-sheet class="bg-grey-lighten-3 text-caption">(世界測地系)</v-sheet>
                  </th>
                  <th class="border bg-grey-lighten-3 text-center" rowspan="2">起点</th>
                  <th class="border bg-grey-lighten-3 text-center">緯度</th>
                  <td class="border">{{ null }}</td>
                  <th class="border bg-grey-lighten-3 text-center" rowspan="4">距離標</th>
                  <th class="border bg-grey-lighten-3 text-center" rowspan="2">自</th>
                  <td class="border" rowspan="2">{{ null }}</td>
                  <td class="border" rowspan="2">{{ null }}</td>
                  <th class="border bg-grey-lighten-3 text-center" rowspan="2">調書更新年月日</th>
                  <td class="border" rowspan="2">{{ null }}</td>
                </tr>
                <tr>
                  <th class="border bg-grey-lighten-3 text-center">経度</th>
                  <td class="border">{{ null }}</td>
                </tr>
                <tr>
                  <th class="border bg-grey-lighten-3 text-center" rowspan="2">至</th>
                  <td class="border" rowspan="2">{{ null }}</td>
                  <th class="border bg-grey-lighten-3 text-center" rowspan="2">終点</th>
                  <th class="border bg-grey-lighten-3 text-center">緯度</th>
                  <td class="border">{{ null }}</td>
                  <th class="border bg-grey-lighten-3 text-center" rowspan="2">至</th>
                  <td class="border" rowspan="2">{{ null }}</td>
                  <td class="border" rowspan="2">{{ null }}</td>
                  <td class="border" rowspan="2" colspan="2"></td>
                </tr>
                <tr>
                  <th class="border bg-grey-lighten-3 text-center">経度</th>
                  <td class="border">{{ null }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-container>
          <v-container>
            <v-row no-gutters>
              <v-col md="4" cols="12" class="border">
                <v-table density="compact" :style="{ whiteSpace: 'nowrap' }">
                  <tbody>
                    <tr>
                      <th class="border bg-grey-lighten-3 text-center" rowspan="9" style="writing-mode: vertical-rl;">
                        路線情報</th>
                      <th class="border bg-grey-lighten-3 text-center" colspan="3">道路規格</th>
                      <td class="border" colspan="6">{{ '　種　級　設計速度　　km/h' }}</td>
                    </tr>
                    <tr>
                      <th class="border bg-grey-lighten-3 text-center" colspan="3">調査年</th>
                      <td class="border" colspan="6">{{ '　年　区間番号　' }}</td>
                    </tr>
                    <tr>
                      <th class="border bg-grey-lighten-3 text-center" colspan="3">交通量</th>
                      <td class="border" colspan="6">{{ '　台' }}</td>
                    </tr>
                    <tr>
                      <th class="border bg-grey-lighten-3 text-center" colspan="3">大型車混入率</th>
                      <td class="border" colspan="6">{{ ' %' }}</td>
                    </tr>
                    <tr>
                      <th class="border bg-grey-lighten-3 text-center" colspan="3">荷重制限</th>
                      <td class="border" colspan="6">{{ ' t' }}</td>
                    </tr>
                    <tr>
                      <th class="border bg-grey-lighten-3 text-center" colspan="3">緊急輸送道路の指定</th>
                      <td class="border" colspan="6">{{ null }}</td>
                    </tr>
                    <tr>
                      <th class="border bg-grey-lighten-3 text-center" colspan="3">優先確保ルートの指定</th>
                      <td class="border" colspan="6">{{ null }}</td>
                    </tr>
                    <tr>
                      <th class="border bg-grey-lighten-3 text-center" colspan="3">事前通行規制・迂回路</th>
                      <td class="border" colspan="3">{{ null }}</td>
                      <td class="border" colspan="3">{{ null }}</td>
                    </tr>
                    <tr>
                      <th class="border bg-grey-lighten-3 text-center" colspan="3">融雪剤等散布区間</th>
                      <td class="border" colspan="6">{{ null }}</td>
                    </tr>
                    <tr>
                      <th class="border bg-grey-lighten-3 text-center" rowspan="13" style="writing-mode: vertical-rl;">
                        構造諸元共通情報</th>
                      <th class="border bg-grey-lighten-3 text-center" colspan="3">施設種別</th>
                      <td class="border" colspan="6">{{ '洞門' }}</td>
                    </tr>
                    <tr>
                      <th class="border bg-grey-lighten-3 text-center" colspan="3">延長/ブロック数</th>
                      <td class="border" colspan="3">{{ null }}m</td>
                      <td class="border" colspan="3">{{ null }}ブロック</td>
                    </tr>
                    <tr>
                      <th class="border bg-grey-lighten-3 text-center" rowspan="2">内空断面</th>
                      <th class="border bg-grey-lighten-3 text-center" colspan="2">全幅員/車道幅員</th>
                      <td class="border" colspan="3">{{ null }}m</td>
                      <td class="border" colspan="3">{{ null }}m</td>
                    </tr>
                    <tr>
                      <th class="border bg-grey-lighten-3 text-center" colspan="2">有効高/建築限界</th>
                      <td class="border" colspan="3">{{ null }}m</td>
                      <td class="border" colspan="3">{{ null }}m</td>
                    </tr>
                    <tr>
                      <th class="border bg-grey-lighten-3 text-center" rowspan="2">上部工</th>
                      <th class="border bg-grey-lighten-3 text-center" colspan="2">使用材料/形式</th>
                      <td class="border" colspan="3">{{ null }}</td>
                      <td class="border" colspan="3">{{ null }}</td>
                    </tr>
                    <tr>
                      <th class="border bg-grey-lighten-3 text-center" colspan="2">頂版形式/勾配</th>
                      <td class="border" colspan="3">{{ null }}</td>
                      <td class="border" colspan="3">{{ null }}%</td>
                    </tr>
                    <tr>
                      <th class="border bg-grey-lighten-3 text-center" rowspan="2">下部工</th>
                      <th class="border bg-grey-lighten-3 text-center">山側</th>
                      <th class="border bg-grey-lighten-3 text-center">駆体/基礎</th>
                      <td class="border" colspan="3">{{ null }}</td>
                      <td class="border" colspan="3">{{ null }}</td>
                    </tr>
                    <tr>
                      <th class="border bg-grey-lighten-3 text-center">谷側</th>
                      <th class="border bg-grey-lighten-3 text-center">駆体/基礎</th>
                      <td class="border" colspan="3">{{ null }}</td>
                      <td class="border" colspan="3">{{ null }}</td>
                    </tr>
                    <tr>
                      <th class="border bg-grey-lighten-3 text-center" colspan="2">緩衝材</th>
                      <th class="border bg-grey-lighten-3 text-center">種類/厚さ/面積</th>
                      <td class="border" colspan="2">{{ null }}</td>
                      <td class="border" colspan="2">{{ null }}m</td>
                      <td class="border" colspan="2">{{ null }}m2</td>
                    </tr>
                    <tr>
                      <th class="border bg-grey-lighten-3 text-center" colspan="2">飛散防止材</th>
                      <th class="border bg-grey-lighten-3 text-center">種類/厚さ/面積</th>
                      <td class="border" colspan="2">{{ null }}</td>
                      <td class="border" colspan="2">{{ null }}m</td>
                      <td class="border" colspan="2">{{ null }}m2</td>
                    </tr>
                    <tr>
                      <th class="border bg-grey-lighten-3 text-center" colspan="2">照明</th>
                      <th class="border bg-grey-lighten-3 text-center">種類/灯数</th>
                      <td class="border" colspan="4">{{ null }}</td>
                      <td class="border" colspan="2">{{ null }}カ所</td>
                    </tr>
                    <tr>
                      <th class="border bg-grey-lighten-3 text-center" colspan="3">海岸からの距離</th>
                      <td class="border" colspan="6">{{ null }}m</td>
                    </tr>
                    <tr>
                      <th class="border bg-grey-lighten-3 text-center" colspan="3">谷側条件</th>
                      <td class="border" colspan="6">{{ null }}</td>
                    </tr>
                  </tbody>
                </v-table>
              </v-col>
              <v-col md="4" cols="12" class="border">
                <v-table density="compact" :style="{ whiteSpace: 'nowrap' }">
                  <tbody>
                    <tr>
                      <th class="border bg-grey-lighten-3 text-center" style="writing-mode: vertical-rl;" rowspan="10">
                        設計条件情報</th>
                      <th class="border bg-grey-lighten-3 text-center" rowspan="3">道路線形</th>
                      <th class="border bg-grey-lighten-3 text-center">縦断勾配</th>
                      <td class="border" colspan="6">{{ null }}%</td>
                    </tr>
                    <tr>
                      <th class="border bg-grey-lighten-3 text-center">横断勾配</th>
                      <td class="border" colspan="6">{{ null }}%</td>
                    </tr>
                    <tr>
                      <th class="border bg-grey-lighten-3 text-center">曲線半径</th>
                      <td class="border" colspan="6">半径{{ null }}m 区間長{{ null }}m</td>
                    </tr>
                    <tr>
                      <th class="border bg-grey-lighten-3 text-center" colspan="2">供用開始日</th>
                      <td class="border" colspan="3">{{ null }}</td>
                      <td class="border" colspan="3">{{ null }}</td>
                    </tr>
                    <tr>
                      <th class="border bg-grey-lighten-3 text-center" rowspan="2">
                        適用<br />評価基準
                      </th>
                      <th class="border bg-grey-lighten-3 text-center">上部工</th>
                      <td class="border" colspan="6">{{ null }}</td>
                    </tr>
                    <tr>
                      <th class="border bg-grey-lighten-3 text-center">下部工</th>
                      <td class="border" colspan="6">{{ null }}</td>
                    </tr>
                    <tr>
                      <th class="border bg-grey-lighten-3 text-center" colspan="2">落石耐久(落石重量/落下工/衝撃力)</th>
                      <td class="border" colspan="2">{{ null }}kN</td>
                      <td class="border" colspan="2">{{ null }}m</td>
                      <td class="border" colspan="2">垂直{{ null }}kN/個</td>
                    </tr>
                    <tr>
                      <th class="border bg-grey-lighten-3 text-center" colspan="2">地震荷重(水平震度)</th>
                      <td class="border" colspan="6">{{ null }}</td>
                    </tr>
                    <tr>
                      <th class="border bg-grey-lighten-3 text-center" colspan="2">デブリ荷重</th>
                      <td class="border" colspan="6">{{ null }}m</td>
                    </tr>
                    <tr>
                      <th class="border bg-grey-lighten-3 text-center" colspan="2">その他荷重</th>
                      <td class="border" colspan="6">{{ null }}kN/m3</td>
                    </tr>
                    <tr>
                      <th class="border bg-grey-lighten-3 text-center" rowspan="8" style="writing-mode: vertical-rl;">
                        維持管理情報</th>
                      <th class="border bg-grey-lighten-3 text-center" rowspan="4">斜面状況</th>
                      <th class="border bg-grey-lighten-3 text-center">斜面長/影状/勾配</th>
                      <td class="border" colspan="2">{{ null }}m</td>
                      <td class="border" colspan="2">{{ null }}</td>
                      <td class="border" colspan="2">{{ null }}</td>
                    </tr>
                    <tr>
                      <th class="border bg-grey-lighten-3 text-center">浮石の状況</th>
                      <td class="border" colspan="6">{{ null }}</td>
                    </tr>
                    <tr>
                      <th class="border bg-grey-lighten-3 text-center">斜面地表状況</th>
                      <td class="border" colspan="6">{{ null }}</td>
                    </tr>
                    <tr>
                      <th class="border bg-grey-lighten-3 text-center">地質地盤の状況</th>
                      <td class="border" colspan="6">{{ null }}</td>
                    </tr>
                    <tr>
                      <th class="border bg-grey-lighten-3 text-center" rowspan="2">鋼部材防食</th>
                      <th class="border bg-grey-lighten-3 text-center">防食工法/塗装系</th>
                      <td class="border" colspan="3">{{ null }}</td>
                      <td class="border" colspan="3">{{ null }}</td>
                    </tr>
                    <tr>
                      <th class="border bg-grey-lighten-3 text-center">塗装面積</th>
                      <td class="border" colspan="6">{{ null }}m2 (高欄含む全塗装面積)</td>
                    </tr>
                    <tr>
                      <th class="border bg-grey-lighten-3 text-center">RC・PC部材</th>
                      <th class="border bg-grey-lighten-3 text-center">セメント種類/W/C</th>
                      <th class="border bg-grey-lighten-3 text-center">下部C</th>
                      <td class="border">{{ null }}</td>
                      <td class="border">{{ null }}%</td>
                      <th class="border bg-grey-lighten-3 text-center">上部C</th>
                      <td class="border">{{ null }}</td>
                      <td class="border">{{ null }}%</td>
                    </tr>
                    <tr>
                      <th class="border bg-grey-lighten-3 text-center">PC部材</th>
                      <th class="border bg-grey-lighten-3 text-center">鋼材/PC or PRC</th>
                      <th class="border bg-grey-lighten-3 text-center">主梁</th>
                      <td class="border">{{ null }}</td>
                      <td class="border">{{ null }}</td>
                      <th class="border bg-grey-lighten-3 text-center">柱1</th>
                      <td class="border">{{ null }}</td>
                      <td class="border">{{ null }}</td>
                    </tr>
                    <tr>
                      <th class="border bg-grey-lighten-3 text-center" colspan="3">占用物件</th>
                      <td class="border" colspan="6">名称:{{ null }} 管理者:{{ null }} 更新年次:{{ null }}</td>
                    </tr>
                  </tbody>
                </v-table>
              </v-col>
              <v-col md="4" cols="12" class="border">
                <v-table density="compact">
                  <tbody>
                    <tr>
                      <th class="border bg-grey-lighten-3 text-center" nowrap>総点検結果</th>
                      <td class="border" nowrap>{{ null }}</td>
                    </tr>
                    <tr>
                      <th class="border bg-grey-lighten-3 text-center" nowrap>災害履歴の有無</th>
                      <td class="border" nowrap>{{ null }}</td>
                    </tr>
                    <tr>
                      <th class="border bg-grey-lighten-3 text-center">点検履歴(特記事項は備考欄に記載)</th>
                      <td class="border">{{ null }}</td>
                    </tr>
                    <tr>
                      <th class="border bg-grey-lighten-3 text-center">補修履歴(特記事項は備考欄に記載)</th>
                      <td class="border">
                        <v-textarea 
                        v-model="repairNote"
                        :placeholder="repairNote"
                        variant="plain"
                        hint="補修履歴を入力してください"
                        persistent-hint
                        ></v-textarea>
                      </td>
                    </tr>
                  </tbody>
                </v-table>
              </v-col>
              <v-col md="4" cols="12">
                <v-card class="border elevation-0 rounded-0" min-height="275">
                  <v-card-text class="text-center">現地写真　全景</v-card-text>
                  <v-container>
                    <v-img :src="panoramicphoto" />
                  </v-container>
                </v-card>
              </v-col>
              <v-col md="4" cols="12">
                <v-card class="border elevation-0 rounded-0" min-height="275">
                  <v-card-text class="text-center">現地写真　近影</v-card-text>
                  <v-container>
                    <v-img :src="recentphoto" />
                  </v-container>
                </v-card>
              </v-col>
              <v-col md="4" cols="12">
                <v-card class="border elevation-0 rounded-0" min-height="100">
                  <v-card-text class="text-center">位置図</v-card-text>
                  <v-container>
                    <v-img :src="locationImg" />
                  </v-container>
                </v-card>
                <v-table density="compact" :style="{ whiteSpace: 'nowrap' }">
                  <tbody>
                    <tr>
                      <th class="border bg-grey-lighten-3 text-center">道路台帳番号</th>
                      <td class="border">図面番号{{ null }} 区間順序番号{{ null }}</td>
                    </tr>
                    <tr v-for="item in locationTable" :key="item.title">
                      <th class="border bg-grey-lighten-3 text-center">{{ item.title }}</th>
                      <td class="border">{{ item.note }}</td>
                    </tr>
                  </tbody>
                </v-table>
              </v-col>
            </v-row>
          </v-container>
          <v-container>
            <v-sheet class="d-flex">
              <v-card-text class="border bg-grey-lighten-3 text-center pa-1">
                健全度の判定<br />
                (総合評価)
              </v-card-text>
              <v-card-text class="border pa-1">{{ null }}</v-card-text>
              <v-card-text class="border bg-grey-lighten-3 text-center">所見</v-card-text>
              <v-card-text class="border pa-1">{{ null }}</v-card-text>
            </v-sheet>
          </v-container>
          <div class="d-flex justify-end">
            <v-btn class="ma-2" color="primary" @click="onclickRegistrationBtn()">登録</v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      repairNote: null,
      panoramicphoto: null,
      recentphoto: null,
      locationImg: null,
      locationTable: [
        { title: '事業種別', note: null },
        { title: '設計者', note: null },
        { title: '施工者', note: null },
        { title: 'マイクロフィルム番号', note: null },
      ]
    }
  },
  methods: {
    //TODO:登録機能を持たせる
    onclickRegistrationBtn() {
      console.debug("RegistrationBtnが押下されました。repairNote:" + this.repairNote);
    },
  }
})
</script>