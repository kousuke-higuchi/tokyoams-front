<template>
  <v-row>
    <v-col v-bind:md="child_extend ? 3 : 0" cols="12">
      <tunnel-side-card-details @isExtend='child_extend = $event' />
    </v-col>
    <v-col v-bind:md="child_extend ? 9 : 12" cols="12">
      <v-card>
        <div class="d-flex">
          <v-card-title>
            <div class="ml-1 cell">点検調書（その1）開削トンネルの諸元と総合検査結果</div>
          </v-card-title>
        </div>
        <!--DBカラムが判明次第,値を設定する-->
          <v-table density="compact" class="ledger">
            <tbody>
              <tr>
                <th class="text-center">
                  フリガナ<br />施設名
                </th>
                <td colspan="6">
                  {{ 'ヒビヤ' }}<br>
                  {{ '日比谷地下自動車道' }}
                </td>
                <th class="text-center">路線名</th>
                <td colspan="2">{{ '主304 日比谷豊洲埠頭東雲町線' }}</td>
                <th rowspan="5" class="text-center">管理<br>事務所</th>
                <td rowspan="5">{{ '第一建設事務所' }}</td>
                <th class="text-center">管理番号</th>
                <td>{{ '01101' }}</td>
              </tr>
              <tr>
                <th rowspan="4" class="text-center">所在地</th>
                <th rowspan="2" class="text-center">自</th>
                <td rowspan="2">{{ '千代田区有楽町二丁目' }}</td>
                <th rowspan="4" class="text-center">
                  位置情報<br />(世界測地系)
                </th>
                <th rowspan="2" class="text-center">起点</th>
                <th class="text-center">緯度</th>
                <td>{{ '35° 67° 32.10°' }}</td>
                <th rowspan="4" class="text-center">距離標</th>
                <th rowspan="2" class="text-center">自</th>
                <td rowspan="2">{{ 'km+' }}ｍ</td>
                <th rowspan="2" class="text-center">調書更新年月日</th>
                <td rowspan="2">{{ '2019年2月28日' }}</td>
              </tr>
              <tr>
                <th class="text-center">経度</th>
                <td>{{ '139° 76° 21.90°' }}</td>
              </tr>
              <tr>
                <th rowspan="2" class="text-center">至</th>
                <td rowspan="2">{{ 'km+' }}ｍ</td>
                <th rowspan="2" class="text-center">終点</th>
                <th class="text-center">緯度</th>
                <td>{{ '35° 67° 55.20°' }}</td>
                <th rowspan="2" class="text-center">至</th>
                <td rowspan="2">{{ 'km+' }}ｍ</td>
                <td rowspan="2" colspan="2"></td>
              </tr>
              <tr>
                <th class="text-center">経度</th>
                <td>{{ '139° 75° 84.30°' }}</td>
              </tr>
            </tbody>
          </v-table>
          <v-row no-gutters>
            <v-col md="4" cols="12">
              <v-table density="compact" class="ledger">
                <tbody>
                  <tr>
                    <th rowspan="9" class="text-center vertical">
                      路線情報</th>
                    <th colspan="2">道路規格</th>
                    <td colspan="3">{{ '　設計速度' }}km/h</td>
                  </tr>
                  <tr>
                    <th colspan="2">調査年</th>
                    <td colspan="3">{{ null }}年 区間番号{{ null }}</td>
                  </tr>
                  <tr>
                    <th colspan="2">交通量</th>
                    <td colspan="3">{{ '昼間12時間 27,526' }}台</td>
                  </tr>
                  <tr>
                    <th colspan="2">大型車混入率</th>
                    <td colspan="3">{{ null }}％</td>
                  </tr>
                  <tr>
                    <th colspan="2">荷重制限</th>
                    <td colspan="3">{{ null }}ｔ</td>
                  </tr>
                  <tr>
                    <th colspan="2">緊急輸送道路の指定</th>
                    <td colspan="3">{{ null }}</td>
                  </tr>
                  <tr>
                    <th colspan="2">優先確保ルートの指定</th>
                    <td colspan="3">{{ null }}</td>
                  </tr>
                  <tr>
                    <th colspan="2">事前通行規制・迂回路</th>
                    <td>{{ '無' }}</td>
                    <td colspan="2">{{ '有' }}</td>
                  </tr>
                  <tr>
                    <th colspan="2">融雪剤等散布区間</th>
                    <td colspan="3">{{ null }}</td>
                  </tr>
                  <tr>
                    <th rowspan="13" class="text-center vertical">
                      構造諸元共通情報</th>
                    <th colspan="2">施設種別</th>
                    <td colspan="3">{{ null }}</td>
                  </tr>
                  <tr>
                    <th colspan="2">延長/ブロック数</th>
                    <td colspan="3">{{ '407.3' }}ｍ {{ '30' }}ブロック</td>
                  </tr>
                  <tr>
                    <th colspan="2">内空高</th>
                    <td colspan="3">{{ null }}ｍ</td>
                  </tr>
                  <tr>
                    <th rowspan="4">内空<br>道路</th>
                    <th>全幅員/有効幅員/車道幅員</th>
                    <td>{{ null }}ｍ</td>
                    <td>{{ null }}ｍ</td>
                    <td>{{ '5.80' }}ｍ</td>
                  </tr>
                  <tr>
                    <td colspan="4">車道幅/車線数/歩道幅/地覆幅</td>
                  </tr>
                  <tr>
                    <th>上り線側</th>
                    <td colspan="3">{{ null }}</td>
                  </tr>
                  <tr>
                    <th>下り線側</th>
                    <td colspan="3">{{ null }}</td>
                  </tr>
                  <tr>
                    <th colspan="2">構造形式</th>
                    <td colspan="3">{{ null }}</td>
                  </tr>
                  <tr>
                    <th colspan="2">使用材料</th>
                    <td colspan="3">{{ null }}</td>
                  </tr>
                  <tr>
                    <th colspan="2">土かぶり</th>
                    <td colspan="3">{{ '3.000' }}ｍ</td>
                  </tr>
                  <tr>
                    <th colspan="2">基礎形式</th>
                    <td colspan="3">{{ null }}</td>
                  </tr>
                  <tr>
                    <th colspan="2">照明（種類/灯数）</th>
                    <td colspan="2">{{ 'LED' }}</td>
                    <td>{{ '130' }}箇所</td>
                  </tr>
                  <tr>
                    <th colspan="2">海岸からの距離</th>
                    <td colspan="3">{{ null }}</td>
                  </tr>
                </tbody>
              </v-table>
            </v-col>
            <v-col md="4" cols="12">
              <v-table density="compact" class="ledger">
                <tbody>
                  <tr>
                    <th rowspan="13" class="text-center vertical">
                      設計条件情報</th>
                    <th rowspan="3">道路<br>線形</th>
                    <th>縦断勾配</th>
                    <td colspan="2">{{ '0.15' }}％</td>
                  </tr>
                  <tr>
                    <th>横断勾配</th>
                    <td colspan="2">{{ null }}％</td>
                  </tr>
                  <tr>
                    <th>曲線半径</th>
                    <td colspan="2">半径{{ null }}ｍ 区間長{{ null }}ｍ</td>
                  </tr>
                  <tr>
                    <th colspan="2">供用開始日</th>
                    <td>{{ null }}年度</td>
                    <td>{{ null }}</td>
                  </tr>
                  <tr>
                    <th colspan="2">適用基準</th>
                    <td colspan="2">{{ null }}</td>
                  </tr>
                  <tr>
                    <th colspan="2">上部道路活荷重</th>
                    <td colspan="2">{{ null }}</td>
                  </tr>
                  <tr>
                    <th colspan="2">上部道路との斜角</th>
                    <td colspan="2">{{ null }}度</td>
                  </tr>
                  <tr>
                    <th colspan="2">積雪荷重</th>
                    <td>{{ null }}kN/㎡</td>
                    <td>積雪深{{ null }}ｍ</td>
                  </tr>
                  <tr>
                    <th colspan="2">地震荷重（水平震度）</th>
                    <td colspan="2">{{ null }}</td>
                  </tr>
                  <tr>
                    <th colspan="2">基礎地盤N値土質条件）</th>
                    <td colspan="2">{{ null }}</td>
                  </tr>
                  <tr>
                    <th colspan="2">基礎地盤改良状況</th>
                    <td colspan="2">{{ null }}</td>
                  </tr>
                  <tr>
                    <th colspan="2">地下水位</th>
                    <td colspan="2">{{ '0.49' }}ｍ</td>
                  </tr>
                  <tr>
                    <th colspan="2">その他荷重</th>
                    <td colspan="2">{{ null }}kN/㎡</td>
                  </tr>
                  <tr>
                    <th rowspan="8" class="text-center vertical">
                      維持管理情報</th>
                    <th rowspan="4">内面</th>
                    <th>形状</th>
                    <td colspan="2">{{ null }}</td>
                  </tr>
                  <tr>
                    <th>浮石の状況</th>
                    <td colspan="2">{{ null }}</td>
                  </tr>
                  <tr>
                    <th>目地部異常</th>
                    <td colspan="2">{{ null }}</td>
                  </tr>
                  <tr>
                    <th>付属物の異常</th>
                    <td colspan="2">{{ null }}</td>
                  </tr>
                  <tr>
                    <th rowspan="2">鉄筋</th>
                    <th>防食工法/塗装系</th>
                    <td>{{ null }}</td>
                    <td>{{ null }}</td>
                  </tr>
                  <tr>
                    <th>塗装面積</th>
                    <td colspan="2">{{ null }}㎡</td>
                  </tr>
                  <tr>
                    <th>コンクリート</th>
                    <th>セメント種類/W/C</th>
                    <td>{{ null }}</td>
                    <td>{{ null }}％</td>
                  </tr>
                  <tr>
                    <th colspan="2">かぶり</th>
                    <td colspan="2">{{ null }}ｍｍ</td>
                  </tr>
                  <tr>
                    <th colspan="3">占用物件</th>
                    <td colspan="2">名称:{{ null }} 管理者:{{ null }} 更新年次:{{ null }}</td>
                  </tr>
                </tbody>
              </v-table>
            </v-col>
            <v-col md="4" cols="12">
              <v-table density="compact" class="ledger">
                <tbody>
                  <tr>
                    <th>総点検結果</th>
                    <td>{{ null }}</td>
                  </tr>
                  <tr>
                    <th>災害履歴の有無</th>
                    <td>{{ null }}</td>
                  </tr>
                  <tr>
                    <th>最新の補修履歴</th>
                    <td>{{ '無' }}</td>
                  </tr>
                  <tr>
                    <th style="white-space:normal">点検履歴(特記事項は備考欄に記載)</th>
                    <td style="white-space:normal">
                      {{ 'H20.11 トンネル定期点検' }}<br>
                      {{ 'H24.12 トンネル設備等詳細点検（緊急点検）' }}<br>
                      {{ 'H25.1 トンネル詳細健全度調査委託（道管の２）' }}
                    </td>
                  </tr>
                  <tr>
                    <th style="white-space:normal">補修履歴(特記事項は備考欄に記載)</th>
                    <td class="editcell">
                      <v-textarea v-model="repairNote" :placeholder="repairNote" variant="plain" hint="補修履歴を入力してください"
                        persistent-hint></v-textarea>
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </v-col>
            <v-col class="border" md="4" cols="12">
              <v-card class=" elevation-0 rounded-0">
                <v-card-text>現地写真　全景</v-card-text>
                <v-container>
                  <v-img :src="panoramicphoto" style="height:275px" />
                </v-container>
              </v-card>
            </v-col>
            <v-col class="border" md="4" cols="12">
              <v-card class=" elevation-0 rounded-0">
                <v-card-text>現地写真　近影</v-card-text>
                <v-container>
                  <v-img :src="recentphoto" style="height:275px" />
                </v-container>
              </v-card>
            </v-col>
            <v-col class="border" md="4" cols="12">
              <v-card class=" elevation-0 rounded-0">
                <v-card-text>位置図</v-card-text>
                <v-container>
                  <v-img :src="locationImg" style="height:200px" />
                </v-container>
              </v-card>
              <v-table density="compact" class="ledger">
                <tbody>
                  <tr>
                    <th>道路台帳番号</th>
                    <td>図面番号{{ null }} 区間順序番号{{ null }}</td>
                  </tr>
                  <tr v-for="item in locationTable" :key="item.title">
                    <th>{{ item.title }}</th>
                    <td>{{ item.note }}</td>
                  </tr>
                </tbody>
              </v-table>
            </v-col>
          </v-row>
          <v-sheet class="d-flex tbTitle">
            <v-card-text class="text-center title">
              <strong>健全度の判定<br>(総合評価)</strong>
            </v-card-text>
            <v-card-text class="text-center pa-1">{{ 'Ⅲ' }}</v-card-text>
            <v-card-text class="text-center title"><strong>所見</strong></v-card-text>
            <v-card-text class="spa-1">{{ '著しいうきが見られる。' }}</v-card-text>
          </v-sheet>
        <div class="float-bottom">
          <v-btn color="primary" elevation="6" @click="onclickRegistrationBtn">
            <v-icon color="white">mdi-check</v-icon>保存
          </v-btn>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      child_extend: true,
      repairNote: null,
      panoramicphoto: '../../assets/img/dmg/tnl1view1.jpg',
      recentphoto: '../../assets/img/dmg/tnl1view2.jpg',
      locationImg: '../../assets/img/dmg/tnl1view3.jpg',
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

<style>
.vertical {
  writing-mode: vertical-rl;
}
</style>