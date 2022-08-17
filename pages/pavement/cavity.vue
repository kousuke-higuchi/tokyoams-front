<template>
  <v-row>
    <v-col md="3" cols="12">
      <pavement-side-card-details/>
    </v-col>
    <v-col md="9" cols="12">
      <v-card>
        <v-row dense>
          <v-col cols="6">
            <v-table density="compact">
              <tr>
                <th class="border">管轄</th>
                <td class="border text-center">{{cavityInfo.jurisdiction}}</td>
              </tr>
              <tr>
                <th class="border">一時調査日</th>
                <td class="border text-center">{{cavityInfo.priSurveyDate}}</td>
              </tr>
              <tr>
                <th class="border">二次調査日</th>
                <td class="border text-center">{{cavityInfo.secSurveyDate}}</td>
              </tr>
              <tr>
                <th class="border">地先名</th>
                <td class="border text-center">{{cavityInfo.landName}}</td>
              </tr>
              <tr>
                <th class="border">判定</th>
                <td class="border text-center">{{cavityInfo.judge}}</td>
              </tr>
            </v-table>
          </v-col>
          <v-col cols="6">
            <v-table density="compact">
              <tr>
                <th rowspan="5" class="border">位置</th>
                <th class="border">路線名</th>
                <td class="border text-center">{{cavityPosition.routeName}}</td>
              </tr>
              <tr>
                <th class="border">KP</th>
                <td class="border text-center">{{cavityPosition.KP}}</td>
              </tr>
              <tr>
                <th class="border">上・下</th>
                <td class="border text-center">{{cavityPosition.upOrDown}}</td>
              </tr>
              <tr>
                <th class="border">車歩道</th>
                <td class="border text-center">{{cavityPosition.RodeOrWalk}}</td>
              </tr>
              <tr>
                <th class="border">車線</th>
                <td class="border text-center">{{cavityPosition.lane}}</td>
              </tr>
            </v-table>
          </v-col>
          <v-col cols="12">
            <v-card>
              <v-card-text class="text-h6 font-weight-bold text-center bg-blue-darken-4 pa-2">
                位置図
              </v-card-text>
              <v-container>
                <v-img src="../../assets/img/position.jpg"></v-img>
              </v-container>
            </v-card>
          </v-col>
          <v-col md="8" cols="12">
            <v-card>
              <v-card-text class="text-h6 font-weight-bold text-center bg-blue-darken-4 pa-2">
                空洞の広がり
              </v-card-text>
              <v-container>
                <v-img src="../../assets/img/cavity.jpg"></v-img>
              </v-container>
            </v-card>
          </v-col>
          <v-col md="4" cols="12">
            <v-card>
              <v-card-text class="text-h6 font-weight-bold text-center bg-blue-darken-4 pa-2">
                ドーロスコープ撮影記録
              </v-card-text>
              <v-container>
                <v-img src="../../assets/img/doroScope.jpg"></v-img>
              </v-container>
            </v-card>
          </v-col>
          <v-col md="8" cols="12">
            <v-card>
              <v-card-text class="text-h6 font-weight-bold text-center bg-blue-darken-4 pa-2">
                空洞規模
              </v-card-text>
              <v-table>
                <tr>
                  <th class="border">深度(m)</th>
                  <td class="text-center border">0.259</td>
                  <th class="border">空洞厚(m)</th>
                  <td class="text-center border">0.259</td>
                </tr>
                <tr>
                  <th class="border">縦断方向(m)</th>
                  <td class="text-center border">1</td>
                  <th class="border">横断方向(m)</th>
                  <td class="text-center border">1</td>
                </tr>
                <tr>
                  <th class="border">面積(㎡)</th>
                  <td class="text-center border">1</td>
                  <th class="border">体積(㎡)</th>
                  <td class="text-center border">1</td>
                </tr>
              </v-table>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default defineComponent({
  data() {
    return{
      cavityInfo:{
        jurisdiction:'東京都 第一建設事務所',
        priSurveyDate:'令和2年11月29日',
        secSurveyDate:'令和3年2月14日',
        landName:'千代田区飯田橋1丁目7',
        judge:'空洞',
      },
      cavityPosition:{
        routeName:'主要地方道008号 千代田練馬田無線(目白通り)',
        KP:'OK470',
        upOrDown:'下り',
        RodeOrWalk:'車道部',
        lane:'路肩',
      },
      cavitySize:{
        depth:0.58,
        thickness:0.19,
        sliceDirection:1.2,
        transDirection:1.1,
        area:1.32,
        volume:0.25,
      }
    }
  }
})
</script>
