<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <rockshed-side-card-details select-tab="ledger" />
      </v-col>
      <v-col md="9" cols="12">
        <v-card class="rfaTable">
          <!--DBカラムが判明次第,値を設定する-->
          <v-container>
            <v-table density="compact">
              <tbody>
                <tr>
                  <th>
                    フリガナ<br />施設名
                  </th>
                  <td colspan="6">
                    <v-sheet class="text-caption">{{  null  }}</v-sheet>
                    <v-sheet>{{  null  }}</v-sheet>
                  </td>
                  <th>路線名</th>
                  <td colspan="2">{{  null  }}</td>
                  <th rowspan="5">管理事務所</th>
                  <td>{{  null  }}</td>
                  <th>管理番号</th>
                  <td>{{  null  }}</td>
                </tr>
                <tr>
                  <th rowspan="4">所在地</th>
                  <th rowspan="2">自</th>
                  <td rowspan="2">{{  null  }}</td>
                  <th rowspan="4">
                    位置情報<br />(世界測地系)
                  </th>
                  <th rowspan="2">起点</th>
                  <th>緯度</th>
                  <td>{{  null  }}</td>
                  <th rowspan="4">距離標</th>
                  <th rowspan="2">自</th>
                  <td rowspan="2">{{  null  }}</td>
                  <td rowspan="2">{{  null  }}</td>
                  <th rowspan="2">調書更新年月日</th>
                  <td rowspan="2">{{  null  }}</td>
                </tr>
                <tr>
                  <th>経度</th>
                  <td>{{  null  }}</td>
                </tr>
                <tr>
                  <th rowspan="2">至</th>
                  <td rowspan="2">{{  null  }}</td>
                  <th rowspan="2">終点</th>
                  <th>緯度</th>
                  <td>{{  null  }}</td>
                  <th rowspan="2">至</th>
                  <td rowspan="2">{{  null  }}</td>
                  <td rowspan="2">{{  null  }}</td>
                  <td rowspan="2" colspan="2"></td>
                </tr>
                <tr>
                  <th>経度</th>
                  <td>{{  null  }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-container>
          <v-container>
            <v-row no-gutters>
              <v-col class="border" md="4" cols="12">
                <v-table density="compact">
                  <tbody>
                    <tr>
                      <th rowspan="9" style="writing-mode: vertical-rl;">
                        路線情報</th>
                      <th colspan="3">道路規格</th>
                      <td colspan="6">{{  '　種　級　設計速度　　km/h'  }}</td>
                    </tr>
                    <tr>
                      <th colspan="3">調査年</th>
                      <td colspan="6">{{  '　年　区間番号　'  }}</td>
                    </tr>
                    <tr>
                      <th colspan="3">交通量</th>
                      <td colspan="6">{{  '　台'  }}</td>
                    </tr>
                    <tr>
                      <th colspan="3">大型車混入率</th>
                      <td colspan="6">{{  ' %'  }}</td>
                    </tr>
                    <tr>
                      <th colspan="3">荷重制限</th>
                      <td colspan="6">{{  ' t'  }}</td>
                    </tr>
                    <tr>
                      <th colspan="3">緊急輸送道路の指定</th>
                      <td colspan="6">{{  null  }}</td>
                    </tr>
                    <tr>
                      <th colspan="3">優先確保ルートの指定</th>
                      <td colspan="6">{{  null  }}</td>
                    </tr>
                    <tr>
                      <th colspan="3">事前通行規制・迂回路</th>
                      <td colspan="3">{{  null  }}</td>
                      <td colspan="3">{{  null  }}</td>
                    </tr>
                    <tr>
                      <th colspan="3">融雪剤等散布区間</th>
                      <td colspan="6">{{  null  }}</td>
                    </tr>
                    <tr>
                      <th rowspan="13" style="writing-mode: vertical-rl;">
                        構造諸元共通情報</th>
                      <th colspan="3">施設種別</th>
                      <td colspan="6">{{  '洞門'  }}</td>
                    </tr>
                    <tr>
                      <th colspan="3">延長/ブロック数</th>
                      <td colspan="3">{{  null  }}m</td>
                      <td colspan="3">{{  null  }}ブロック</td>
                    </tr>
                    <tr>
                      <th rowspan="2">内空断面</th>
                      <th colspan="2">全幅員/車道幅員</th>
                      <td colspan="3">{{  null  }}m</td>
                      <td colspan="3">{{  null  }}m</td>
                    </tr>
                    <tr>
                      <th colspan="2">有効高/建築限界</th>
                      <td colspan="3">{{  null  }}m</td>
                      <td colspan="3">{{  null  }}m</td>
                    </tr>
                    <tr>
                      <th rowspan="2">上部工</th>
                      <th colspan="2">使用材料/形式</th>
                      <td colspan="3">{{  null  }}</td>
                      <td colspan="3">{{  null  }}</td>
                    </tr>
                    <tr>
                      <th colspan="2">頂版形式/勾配</th>
                      <td colspan="3">{{  null  }}</td>
                      <td colspan="3">{{  null  }}%</td>
                    </tr>
                    <tr>
                      <th rowspan="2">下部工</th>
                      <th>山側</th>
                      <th>駆体/基礎</th>
                      <td colspan="3">{{  null  }}</td>
                      <td colspan="3">{{  null  }}</td>
                    </tr>
                    <tr>
                      <th>谷側</th>
                      <th>駆体/基礎</th>
                      <td colspan="3">{{  null  }}</td>
                      <td colspan="3">{{  null  }}</td>
                    </tr>
                    <tr>
                      <th colspan="2">緩衝材</th>
                      <th>種類/厚さ/面積</th>
                      <td colspan="2">{{  null  }}</td>
                      <td colspan="2">{{  null  }}m</td>
                      <td colspan="2">{{  null  }}m2</td>
                    </tr>
                    <tr>
                      <th colspan="2">飛散防止材</th>
                      <th>種類/厚さ/面積</th>
                      <td colspan="2">{{  null  }}</td>
                      <td colspan="2">{{  null  }}m</td>
                      <td colspan="2">{{  null  }}m2</td>
                    </tr>
                    <tr>
                      <th colspan="2">照明</th>
                      <th>種類/灯数</th>
                      <td colspan="4">{{  null  }}</td>
                      <td colspan="2">{{  null  }}カ所</td>
                    </tr>
                    <tr>
                      <th colspan="3">海岸からの距離</th>
                      <td colspan="6">{{  null  }}m</td>
                    </tr>
                    <tr>
                      <th colspan="3">谷側条件</th>
                      <td colspan="6">{{  null  }}</td>
                    </tr>
                  </tbody>
                </v-table>
              </v-col>
              <v-col class="border" md="4" cols="12">
                <v-table density="compact">
                  <tbody>
                    <tr>
                      <th style="writing-mode: vertical-rl;" rowspan="10">
                        設計条件情報</th>
                      <th rowspan="3">道路線形</th>
                      <th>縦断勾配</th>
                      <td colspan="6">{{  null  }}%</td>
                    </tr>
                    <tr>
                      <th>横断勾配</th>
                      <td colspan="6">{{  null  }}%</td>
                    </tr>
                    <tr>
                      <th>曲線半径</th>
                      <td colspan="6">半径{{  null  }}m 区間長{{  null  }}m</td>
                    </tr>
                    <tr>
                      <th colspan="2">供用開始日</th>
                      <td colspan="3">{{  null  }}</td>
                      <td colspan="3">{{  null  }}</td>
                    </tr>
                    <tr>
                      <th rowspan="2">
                        適用<br />設計基準
                      </th>
                      <th>上部工</th>
                      <td colspan="6">{{  null  }}</td>
                    </tr>
                    <tr>
                      <th>下部工</th>
                      <td colspan="6">{{  null  }}</td>
                    </tr>
                    <tr>
                      <th colspan="2">落石耐久(落石重量/落下高/衝撃力)</th>
                      <td colspan="2">{{  null  }}kN</td>
                      <td colspan="2">{{  null  }}m</td>
                      <td colspan="2">垂直{{  null  }}kN/個</td>
                    </tr>
                    <tr>
                      <th colspan="2">地震荷重(水平震度)</th>
                      <td colspan="6">{{  null  }}</td>
                    </tr>
                    <tr>
                      <th colspan="2">デブリ荷重</th>
                      <td colspan="6">{{  null  }}m</td>
                    </tr>
                    <tr>
                      <th colspan="2">その他荷重</th>
                      <td colspan="6">{{  null  }}kN/m3</td>
                    </tr>
                    <tr>
                      <th rowspan="8" style="writing-mode: vertical-rl;">
                        維持管理情報</th>
                      <th rowspan="4">斜面状況</th>
                      <th>斜面長/影状/勾配</th>
                      <td colspan="2">{{  null  }}m</td>
                      <td colspan="2">{{  null  }}</td>
                      <td colspan="2">{{  null  }}</td>
                    </tr>
                    <tr>
                      <th>浮石の状況</th>
                      <td colspan="6">{{  null  }}</td>
                    </tr>
                    <tr>
                      <th>斜面地表状況</th>
                      <td colspan="6">{{  null  }}</td>
                    </tr>
                    <tr>
                      <th>地質地盤の状況</th>
                      <td colspan="6">{{  null  }}</td>
                    </tr>
                    <tr>
                      <th rowspan="2">鋼部材防食</th>
                      <th>防食工法/塗装系</th>
                      <td colspan="3">{{  null  }}</td>
                      <td colspan="3">{{  null  }}</td>
                    </tr>
                    <tr>
                      <th>塗装面積</th>
                      <td colspan="6">{{  null  }}m2 (高欄含む全塗装面積)</td>
                    </tr>
                    <tr>
                      <th>RC・PC部材</th>
                      <th>セメント種類/W/C</th>
                      <th>下部C</th>
                      <td>{{  null  }}</td>
                      <td>{{  null  }}%</td>
                      <th>上部C</th>
                      <td>{{  null  }}</td>
                      <td>{{  null  }}%</td>
                    </tr>
                    <tr>
                      <th>PC部材</th>
                      <th>鋼材/PC or PRC</th>
                      <th>主梁</th>
                      <td>{{  null  }}</td>
                      <td>{{  null  }}</td>
                      <th>柱1</th>
                      <td>{{  null  }}</td>
                      <td>{{  null  }}</td>
                    </tr>
                    <tr>
                      <th colspan="3">占用物件</th>
                      <td colspan="6">名称:{{  null  }} 管理者:{{  null  }} 更新年次:{{  null  }}</td>
                    </tr>
                  </tbody>
                </v-table>
              </v-col>
              <v-col class="border" md="4" cols="12">
                <v-table density="compact">
                  <tbody>
                    <tr>
                      <th nowrap>総点検結果</th>
                      <td nowrap>{{  null  }}</td>
                    </tr>
                    <tr>
                      <th nowrap>災害履歴の有無</th>
                      <td nowrap>{{  null  }}</td>
                    </tr>
                    <tr>
                      <th nowrap>最新の補修履歴</th>
                      <td nowrap>{{  null  }}</td>
                    </tr>
                    <tr>
                      <th>点検履歴(特記事項は備考欄に記載)</th>
                      <td>{{  null  }}</td>
                    </tr>
                    <tr>
                      <th>補修履歴(特記事項は備考欄に記載)</th>
                      <td class="editcell">
                        <v-textarea v-model="repairNote" :placeholder="repairNote" variant="plain" hint="補修履歴を入力してください"
                          persistent-hint></v-textarea>
                      </td>
                    </tr>
                  </tbody>
                </v-table>
              </v-col>
              <v-col class="border rfaCardText" md="4" cols="12">
                <v-card class=" elevation-0 rounded-0" min-height="275">
                  <v-card-text>現地写真　全景</v-card-text>
                  <v-container>
                    <v-img :src="panoramicphoto" />
                  </v-container>
                </v-card>
              </v-col>
              <v-col class="border rfaCardText" md="4" cols="12">
                <v-card class=" elevation-0 rounded-0" min-height="275">
                  <v-card-text>現地写真　近影</v-card-text>
                  <v-container>
                    <v-img :src="recentphoto" />
                  </v-container>
                </v-card>
              </v-col>
              <v-col class="border rfaCardText" md="4" cols="12">
                <v-card class=" elevation-0 rounded-0" min-height="100">
                  <v-card-text>位置図</v-card-text>
                  <v-container>
                    <v-img :src="locationImg" />
                  </v-container>
                </v-card>
                <v-table density="compact">
                  <tbody>
                    <tr>
                      <th>道路台帳番号</th>
                      <td>図面番号{{  null  }} 区間順序番号{{  null  }}</td>
                    </tr>
                    <tr v-for="item in locationTable" :key="item.title">
                      <th>{{  item.title  }}</th>
                      <td>{{  item.note  }}</td>
                    </tr>
                  </tbody>
                </v-table>
              </v-col>
            </v-row>
          </v-container>
          <v-container>
            <v-sheet class="d-flex tbTitle">
              <v-card-text class="text-center title">
                健全度の判定<br />
                (総合評価)
              </v-card-text>
              <v-card-text class="pa-1">{{  null  }}</v-card-text>
              <v-card-text class="text-center title">所見</v-card-text>
              <v-card-text class="spa-1">{{  null  }}</v-card-text>
            </v-sheet>
          </v-container>
          <div class="float-bottom">
            <v-btn color="primary" elevation="6" @click="onclickRegistrationBtn">
              <v-icon color="white">mdi-check</v-icon>保存
            </v-btn>
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
  },
})
</script>