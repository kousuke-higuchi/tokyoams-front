<template>
  <v-row>
    <v-col md="3" cols="12">
      <pavement-side-card-details />
    </v-col>
    <v-col md="9" cols="12">
      <v-card>
        <v-card-text>
          <v-row no-gutters>
            <!--道路構成-->
            <v-table density="compact" class="ledger">
              <tbody>
                <tr>
                  <th colspan="3" class="text-center">事務所名</th>
                  <td class="text-center">{{ pavement.office }}</td>
                  <th class="text-center">工区名</th>
                  <td colspan="2" class="text-center">{{ pavement.area }}</td>
                  <th class="text-center">路線名</th>
                  <td colspan="6" class="text-center">{{ pavement.route }}</td>
                  <th class="text-center">路線番号</th>
                  <td class="text-center">{{ pavement.routeNumber }}</td>
                  <th colspan="2" class="text-center">地点標</th>
                  <td class="text-center">{{ pavement.waypoint }}</td>
                  <th class="text-center">支線番号</th>
                  <td class="text-center">{{ pavement.branch }}</td>
                </tr>
                <tr>
                  <th rowspan="6" class="text-center" style="writing-mode: vertical-rl;">道路構成</th>
                  <th rowspan="2" colspan="2"></th>
                  <th colspan="2" class="text-center">構造区分</th>
                  <th colspan="7" class="text-center">車道構成</th>
                  <th colspan="5" class="text-center">歩道構成</th>
                  <th colspan="4" class="text-center">路床±CBR</th>
                </tr>
                <tr>
                  <th colspan="2" class="text-center">形態</th>
                  <th class="text-center">総幅員<br>(m)</th>
                  <th class="text-center">舗装幅員<br>(m)</th>
                  <th class="text-center">中央帯<br>幅員(m)</th>
                  <th class="text-center">中央帯<br>形式</th>
                  <th class="text-center">車線数<br>走行</th>
                  <th class="text-center">車線<br>右折</th>
                  <th class="text-center">車線<br>左折</th>
                  <th class="text-center">形式</th>
                  <th class="text-center">舗装種別</th>
                  <th class="text-center">幅員<br>(m)</th>
                  <th class="text-center">防護柵<br>形式</th>
                  <th class="text-center">植栽形式</th>
                  <th class="text-center">位置(m)<br>CBR%</th>
                  <th class="text-center">位置(m)<br>CBR%</th>
                  <th class="text-center">位置(m)<br>CBR%</th>
                  <th class="text-center">位置(m)<br>CBR%</th>
                </tr>
                <tr>
                  <th colspan="2" class="text-center">上り車線</th>
                  <td colspan="2" rowspan="2" class="text-center">一般部</td>
                  <td rowspan="2" class="text-center">{{ comp.totalWidth }}</td>
                  <td class="text-center">{{ comp.paveWidth.uphill }}</td>
                  <td rowspan="2" class="text-center">{{ comp.highwayMedianWidth }}</td>
                  <td rowspan="2" class="text-center">{{ comp.highwayMedianForm }}</td>
                  <td class="text-center">{{ comp.lanes.uphill }}</td>
                  <td class="text-center">{{ comp.rightTurnLanes.uphill }}</td>
                  <td class="text-center">{{ comp.leftTurnLanes.uphill }}</td>
                  <td class="text-center">{{ comp.form.uphill }}</td>
                  <td class="text-center">{{ comp.paveType.uphill }}</td>
                  <td class="text-center">{{ comp.width.uphill }}</td>
                  <td class="text-center">{{ comp.fenceType.uphill }}</td>
                  <td class="text-center">{{ comp.plantsType.uphill }}</td>
                  <td class="text-center">{{ comp.position1.uphill }}</td>
                  <td class="text-center">{{ comp.position2.uphill }}</td>
                  <td class="text-center">{{ comp.position3.uphill }}</td>
                  <td class="text-center">{{ comp.position4.uphill }}</td>
                </tr>
                <tr>
                  <th colspan="2" class="text-center">下り車線</th>
                  <td class="text-center">{{ comp.paveWidth.downhill }}</td>
                  <td class="text-center">{{ comp.lanes.downhill }}</td>
                  <td class="text-center">{{ comp.rightTurnLanes.downhill }}</td>
                  <td class="text-center">{{ comp.leftTurnLanes.downhill }}</td>
                  <td class="text-center">{{ comp.form.downhill }}</td>
                  <td class="text-center">{{ comp.paveType.downhill }}</td>
                  <td class="text-center">{{ comp.width.downhill }}</td>
                  <td class="text-center">{{ comp.fenceType.downhill }}</td>
                  <td class="text-center">{{ comp.plantsType.downhill }}</td>
                  <td class="text-center">{{ comp.position1.downhill }}</td>
                  <td class="text-center">{{ comp.position2.downhill }}</td>
                  <td class="text-center">{{ comp.position3.downhill }}</td>
                  <td class="text-center">{{ comp.position4.downhill }}</td>
                </tr>
                <tr>
                  <th rowspan="2" colspan="2" class="text-center">交通量(下り)</th>
                  <th colspan="2" class="text-center">調査年月日</th>
                  <th class="text-center">観測<br>地点標</th>
                  <th class="text-center">調査区分</th>
                  <th class="text-center">総交通量</th>
                  <th class="text-center">大型車</th>
                  <th class="text-center">その他</th>
                  <th class="text-center">大型車<br>混入率</th>
                  <th class="text-center">昼夜率</th>
                  <th class="text-center">歩行者類</th>
                  <th class="text-center">自転車類</th>
                  <th class="text-center">二輪車類</th>
                  <th class="text-center">混雑率</th>
                  <th class="text-center">緊急<br>交通路</th>
                  <th class="text-center">緊急<br>輸送路</th>
                  <th class="text-center">緊急啓開<br>路線</th>
                  <th rowspan="2" colspan="2"></th>
                </tr>
                <tr>
                  <td colspan="2">{{ comp.surveyDate }}</td>
                  <td>{{ comp.waypoint }}</td>
                  <td>{{ comp.serveyClass }}</td>
                  <td>{{ comp.totalTrafic }}</td>
                  <td>{{ comp.largeCar }}</td>
                  <td>{{ comp.otherCar }}</td>
                  <td>{{ comp.lardeCarRate }}</td>
                  <td>{{ comp.dayNightRate }}</td>
                  <td>{{ comp.pedstrian }}</td>
                  <td>{{ comp.bicycle }}</td>
                  <td>{{ comp.motorcycle }}</td>
                  <td>{{ comp.congestion }}</td>
                  <td>{{ comp.emergencyTraffic }}</td>
                  <td>{{ comp.emergencyTrans }}</td>
                  <td>{{ comp.emergencyEvaRoute }}</td>
                </tr>
                <tr>
                  <th rowspan="21" class="text-center" style="writing-mode: vertical-rl;">上り車線</th>
                  <th rowspan="3"></th>
                  <th colspan="5" class="text-center">工事</th>
                  <th colspan="9" class="text-center">舗装構造</th>
                  <th colspan="2" class="text-center">道路交通振動</th>
                  <th colspan="2" class="text-center">観測点番号</th>
                  <td class="text-center">{{ vibrationId.id }}</td>
                </tr>
                <tr>
                  <th rowspan="2" class="text-center">車線<br>番号</th>
                  <th rowspan="2" class="text-center">自 地点標<br>至 地点標</th>
                  <th rowspan="2" class="text-center">施工年度</th>
                  <th rowspan="2" class="text-center">工事種別</th>
                  <th rowspan="2" class="text-center">工法</th>
                  <th rowspan="2" class="text-center">表層区分</th>
                  <th rowspan="2" class="text-center">材料厚さ<br>(cm)</th>
                  <th rowspan="2" class="text-center">材料厚さ<br>(cm)</th>
                  <th rowspan="2" class="text-center">材料厚さ<br>(cm)</th>
                  <th rowspan="2" class="text-center">材料厚さ<br>(cm)</th>
                  <th rowspan="2" class="text-center">材料厚さ<br>(cm)</th>
                  <th rowspan="2" class="text-center">材料厚さ<br>(cm)</th>
                  <th rowspan="2" class="text-center">総厚<br>(cm)</th>
                  <th rowspan="2" class="text-center">TA</th>
                  <th colspan="3" class="text-center">観測地点(地点標番号)</th>
                  <td colspan="2" class="text-center">{{ noiseId.waypoint }}</td>
                </tr>
                <tr>
                  <th colspan="3" class="text-center">振動の要請限度の区域区分</th>
                  <td colspan="2" class="text-center">{{ noiseId.areaName }}</td>
                </tr>
                <tr>
                  <th rowspan="14" class="text-center" style="writing-mode: vertical-rl;">
                    舗装構成
                  </th>
                  <td rowspan="2" class="text-center">{{ uphillPaveItems[0].id }}</td>
                  <td rowspan="2"  class="text-center">{{ uphillPaveItems[0].waypoint.from[1] }} {{ uphillPaveItems[0].waypoint.from[2] }}<br />{{ uphillPaveItems[0].waypoint.to[1] }}
                    {{ uphillPaveItems[0].waypoint.to[2] }}</td>
                  <td rowspan="2" class="text-center">{{ uphillPaveItems[0].year }}</td>
                  <td rowspan="2" class="text-center">{{ uphillPaveItems[0].constType }}</td>
                  <td rowspan="2" class="text-center">{{ uphillPaveItems[0].constMethod }}</td>
                  <td rowspan="2" class="text-center">{{ uphillPaveItems[0].surface }}</td>
                  <td rowspan="2" class="text-center">{{ uphillPaveItems[0].materialThick1 }}</td>
                  <td rowspan="2" class="text-center">{{ uphillPaveItems[0].materialThick2 }}</td>
                  <td rowspan="2" class="text-center">{{ uphillPaveItems[0].materialThick3 }}</td>
                  <td rowspan="2" class="text-center">{{ uphillPaveItems[0].materialThick4 }}</td>
                  <td rowspan="2" class="text-center">{{ uphillPaveItems[0].materialThick5 }}</td>
                  <td rowspan="2" class="text-center">{{ uphillPaveItems[0].materialThick6 }}</td>
                  <td rowspan="2" class="text-center">{{ uphillPaveItems[0].totalThick }}</td>
                  <td rowspan="2" class="text-center">{{ uphillPaveItems[0].TA }}</td>
                  <th></th>
                  <th colspan="2" class="text-center">振動レベル</th>
                  <th rowspan="6" colspan="2"></th>
                </tr>
                <tr>
                  <th class="text-center">測定年月日</th>
                  <th class="text-center">昼間</th>
                  <th class="text-center">夜間</th>
                </tr>
                <tr>
                  <td rowspan="2" class="text-center">{{ uphillPaveItems[1].id }}</td>
                  <td rowspan="2" class="text-center">{{ uphillPaveItems[1].waypoint.from[1] }} {{ uphillPaveItems[1].waypoint.from[2] }}<br />{{ uphillPaveItems[1].waypoint.to[1] }}
                    {{ uphillPaveItems[1].waypoint.to[2] }}</td>
                  <td rowspan="2" class="text-center">{{ uphillPaveItems[1].year }}</td>
                  <td rowspan="2" class="text-center">{{ uphillPaveItems[1].constType }}</td>
                  <td rowspan="2" class="text-center">{{ uphillPaveItems[1].constMethod }}</td>
                  <td rowspan="2" class="text-center">{{ uphillPaveItems[1].surface }}</td>
                  <td rowspan="2" class="text-center">{{ uphillPaveItems[1].materialThick1 }}</td>
                  <td rowspan="2" class="text-center">{{ uphillPaveItems[1].materialThick2 }}</td>
                  <td rowspan="2" class="text-center">{{ uphillPaveItems[1].materialThick3 }}</td>
                  <td rowspan="2" class="text-center">{{ uphillPaveItems[1].materialThick4 }}</td>
                  <td rowspan="2" class="text-center">{{ uphillPaveItems[1].materialThick5 }}</td>
                  <td rowspan="2" class="text-center">{{ uphillPaveItems[1].materialThick6 }}</td>
                  <td rowspan="2" class="text-center">{{ uphillPaveItems[1].totalThick }}</td>
                  <td rowspan="2" class="text-center">{{ uphillPaveItems[1].TA }}</td>
                  <td class="text-center">{{ vibrationLevel[0].date }}</td>
                  <td class="text-center">{{ vibrationLevel[0].day }}</td>
                  <td class="text-center">{{ vibrationLevel[0].night }}</td>
                </tr>
                <tr>
                  <td>{{ vibrationLevel[1].date }}</td>
                  <td>{{ vibrationLevel[1].day }}</td>
                  <td>{{ vibrationLevel[1].night }}</td>
                </tr>
                <tr>
                  <td rowspan="2" class="text-center">{{ uphillPaveItems[2].id }}</td>
                  <td rowspan="2" class="text-center">{{ uphillPaveItems[2].waypoint.from[1] }} {{ uphillPaveItems[2].waypoint.from[2] }}<br />{{ uphillPaveItems[2].waypoint.to[1] }}
                    {{ uphillPaveItems[2].waypoint.to[2] }}</td>
                  <td rowspan="2" class="text-center">{{ uphillPaveItems[2].year }}</td>
                  <td rowspan="2" class="text-center">{{ uphillPaveItems[2].constType }}</td>
                  <td rowspan="2" class="text-center">{{ uphillPaveItems[2].constMethod }}</td>
                  <td rowspan="2" class="text-center">{{ uphillPaveItems[2].surface }}</td>
                  <td rowspan="2" class="text-center">{{ uphillPaveItems[2].materialThick1 }}</td>
                  <td rowspan="2" class="text-center">{{ uphillPaveItems[2].materialThick2 }}</td>
                  <td rowspan="2" class="text-center">{{ uphillPaveItems[2].materialThick3 }}</td>
                  <td rowspan="2" class="text-center">{{ uphillPaveItems[2].materialThick4 }}</td>
                  <td rowspan="2" class="text-center">{{ uphillPaveItems[2].materialThick5 }}</td>
                  <td rowspan="2" class="text-center">{{ uphillPaveItems[2].materialThick6 }}</td>
                  <td rowspan="2" class="text-center">{{ uphillPaveItems[2].totalThick }}</td>
                  <td rowspan="2" class="text-center">{{ uphillPaveItems[2].TA }}</td>
                  <td>{{ vibrationLevel[2].date }}</td>
                  <td>{{ vibrationLevel[2].day }}</td>
                  <td>{{ vibrationLevel[2].night }}</td>
                </tr>
                <tr>
                  <td>{{ vibrationLevel[3].date }}</td>
                  <td>{{ vibrationLevel[3].day }}</td>
                  <td>{{ vibrationLevel[3].night }}</td>
                </tr>
                <tr>
                  <td rowspan="2" v-for="n of 14" :key="n"></td>
                  <th colspan="2" class="text-center">道路交通騒音</th>
                  <th colspan="2" class="text-center">観測点番号</th>
                  <td class="text-center">{{ noiseId.id }}</td>
                </tr>
                <tr>
                  <th colspan="3" class="text-center">観測地点(地点標番号)</th>
                  <td colspan="2" class="text-center">{{ vibrationId.waypoint }}</td>
                </tr>
                <tr>
                  <td rowspan="2" v-for="n of 14" :key="n"></td>
                  <th colspan="3" class="text-center">振動の要請限度の区域区分</th>
                  <td colspan="2" class="text-center">{{ vibrationId.areaName }}</td>
                </tr>
                <tr>
                  <th></th>
                  <th colspan="4" class="text-center">騒音レベル</th>
                </tr>
                <tr>
                  <td rowspan="2" v-for="n of 14" :key="n"></td>
                  <th class="text-center">測定年月日</th>
                  <th class="text-center">朝</th>
                  <th class="text-center">昼間</th>
                  <th class="text-center">夕</th>
                  <th class="text-center">夜間</th>
                </tr>
                <tr>
                  <td class="text-center">{{ noiseLebel[0].date }}</td>
                  <td class="text-center">{{ noiseLebel[0].morning }}</td>
                  <td class="text-center">{{ noiseLebel[0].day }}</td>
                  <td class="text-center">{{ noiseLebel[0].evening }}</td>
                  <td class="text-center">{{ noiseLebel[0].night }}</td>
                </tr>
                <tr>
                  <td rowspan="2" v-for="n of 14" :key="n"></td>
                  <td v-for="n of 5" :key="n"></td>
                </tr>
                <tr>
                  <td v-for="n of 5" :key="n"></td>
                </tr>
                <tr>
                  <th rowspan="4" class="text-center" style="writing-mode: vertical-rl;">路面性状</th>
                  <th rowspan="2" class="text-center">舗装<br>種別</th>
                  <th rowspan="2" colspan="3"  class="text-center">調査年月日<br>4年後予測値</th>
                  <th colspan="3" class="text-center">ひび割れ(%、CM/m2、mm)</th>
                  <th colspan="2" class="text-center">わだち掘れ(mm)</th>
                  <th rowspan="2" class="text-center">平坦性<br>(mm)</th>
                  <th rowspan="2" class="text-center">MNI</th>
                  <th rowspan="2" class="text-center">MCI</th>
                  <th rowspan="4" colspan="2"></th>
                  <td v-for="n of 5" :key="n"></td>
                </tr>
                <tr>
                  <th class="text-center">ひび割れ率</th>
                  <th class="text-center">ひび割れ度</th>
                  <th class="text-center">最大幅</th>
                  <th class="text-center">最大値</th>
                  <th class="text-center">平均値</th>
                  <th colspan="5" class="text-center">地 図</th>
                </tr>
                <tr>
                  <td class="text-center">{{ uphillSurfaceItems.survey.type }}</td>
                  <td colspan="3" class="text-center">{{ uphillSurfaceItems.survey.date }}</td>
                  <td class="text-center">{{ uphillSurfaceItems.survey.crackRate }}</td>
                  <td class="text-center">{{ uphillSurfaceItems.survey.crackLevel }}</td>
                  <td class="text-center">{{ uphillSurfaceItems.survey.maxWidth }}</td>
                  <td class="text-center">{{ uphillSurfaceItems.survey.maxDepth }}</td>
                  <td class="text-center">{{ uphillSurfaceItems.survey.average }}</td>
                  <td class="text-center">{{ uphillSurfaceItems.survey.flatness }}</td>
                  <td class="text-center">{{ uphillSurfaceItems.survey.MNI }}</td>
                  <td class="text-center">{{ uphillSurfaceItems.survey.MCI }}</td>
                  <td rowspan="20" colspan="5"></td>
                </tr>
                <tr>
                  <td class="text-center">{{ uphillSurfaceItems.prediction.type }}</td>
                  <td colspan="3" class="text-center">{{ uphillSurfaceItems.prediction.date }}</td>
                  <td class="text-center">{{ uphillSurfaceItems.prediction.crackRate }}</td>
                  <td class="text-center">{{ uphillSurfaceItems.prediction.crackLevel }}</td>
                  <td class="text-center">{{ uphillSurfaceItems.prediction.maxWidth }}</td>
                  <td class="text-center">{{ uphillSurfaceItems.prediction.maxDepth }}</td>
                  <td class="text-center">{{ uphillSurfaceItems.prediction.average }}</td>
                  <td class="text-center">{{ uphillSurfaceItems.prediction.flatness }}</td>
                  <td class="text-center">{{ uphillSurfaceItems.prediction.MNI }}</td>
                  <td class="text-center">{{ uphillSurfaceItems.prediction.MCI }}</td>
                </tr>
              <!--下り車線-->
                    <tr>
                      <th rowspan="14" class="text-center" style="writing-mode: vertical-rl;">下り車線</th>
                      <th rowspan="2"></th>
                      <th colspan="5" class="text-center">工事</th>
                      <th colspan="9" class="text-center">舗装構造</th>
                    </tr>

                    <tr>
                      <th class="text-center">車線番号</th>
                      <th class="text-center">自 地点標<br>至 地点標</th>
                      <th class="text-center">施工年度</th>
                      <th class="text-center">工事種別</th>
                      <th class="text-center">工法</th>
                      <th class="text-center">表層区分</th>
                      <th class="text-center">材料厚さ<br>(cm)</th>
                      <th class="text-center">材料厚さ<br>(cm)</th>
                      <th class="text-center">材料厚さ<br>(cm)</th>
                      <th class="text-center">材料厚さ<br>(cm)</th>
                      <th class="text-center">材料厚さ<br>(cm)</th>
                      <th class="text-center">材料厚さ<br>(cm)</th>
                      <th class="text-center">総厚<br>(cm)</th>
                      <th class="text-center">TA</th>
                    </tr>
                    <tr v-for="item in downhillPaveItems" :key="item.id">
                      <th v-if="item.id == 1" rowspan="8" class="text-center" style="writing-mode: vertical-rl;">舗装構成</th>
                      <td class="text-center">{{ item.id }}</td>
                      <td class="text-center">{{ item.waypoint.from[1] }} {{ item.waypoint.from[2] }}<br />{{ item.waypoint.to[1] }}
                        {{ item.waypoint.to[2] }}</td>
                      <td class="text-center">{{ item.year }}</td>
                      <td class="text-center">{{ item.constType }}</td>
                      <td class="text-center">{{ item.constMethod }}</td>
                      <td class="text-center">{{ item.surface }}</td>
                      <td class="text-center">{{ item.materialThick1 }}</td>
                      <td class="text-center">{{ item.materialThick2 }}</td>
                      <td class="text-center">{{ item.materialThick3 }}</td>
                      <td class="text-center">{{ item.materialThick4 }}</td>
                      <td class="text-center">{{ item.materialThick5 }}</td>
                      <td class="text-center">{{ item.materialThick6 }}</td>
                      <td class="text-center">{{ item.totalThick }}</td>
                      <td class="text-center">{{ item.TA }}</td>
                    </tr>
                    <tr v-for="n1 of 4" :key="n1">
                      <td v-for="n of 14" :key="n"></td>
                    </tr>
                    <tr>
                      <th rowspan="4" class="text-center" style="writing-mode: vertical-rl;">路面性状</th>
                      <th rowspan="2" class="text-center">舗装種別</th>
                      <th rowspan="2" colspan="3" class="text-center">調査年月日<br>4年後予測値</th>
                      <th colspan="3" class="text-center">ひび割れ(%、CM/m2、mm)</th>
                      <th colspan="2" class="text-center">わだち掘れ(mm)</th>
                      <th rowspan="2" class="text-center">平坦性(mm)</th>
                      <th rowspan="2" class="text-center">MNI</th>
                      <th rowspan="2" class="text-center">MCI</th>
                      <th rowspan="4" colspan="2"></th>
                    </tr>
                    <tr>
                      <th>ひび割れ率</th>
                      <th>ひび割れ度</th>
                      <th>最大幅</th>
                      <th>最大値</th>
                      <th>平均値</th>
                    </tr>
                    <tr>
                      <td class="text-center">{{ downhillSurfaceItems.survey.type }}</td>
                      <td colspan="3" class="text-center">{{ downhillSurfaceItems.survey.date }}</td>
                      <td class="text-center">{{ downhillSurfaceItems.survey.crackRate }}</td>
                      <td class="text-center">{{ downhillSurfaceItems.survey.crackLevel }}</td>
                      <td class="text-center">{{ downhillSurfaceItems.survey.maxWidth }}</td>
                      <td class="text-center">{{ downhillSurfaceItems.survey.maxDepth }}</td>
                      <td class="text-center">{{ downhillSurfaceItems.survey.average }}</td>
                      <td class="text-center">{{ downhillSurfaceItems.survey.flatness }}</td>
                      <td class="text-center">{{ downhillSurfaceItems.survey.MNI }}</td>
                      <td class="text-center">{{ downhillSurfaceItems.survey.MCI }}</td>
                    </tr>
                    <tr>
                      <td class="text-center">{{ downhillSurfaceItems.prediction.type }}</td>
                      <td colspan="3" class="text-center">{{ downhillSurfaceItems.prediction.date }}</td>
                      <td class="text-center">{{ downhillSurfaceItems.prediction.crackRate }}</td>
                      <td class="text-center">{{ downhillSurfaceItems.prediction.crackLevel }}</td>
                      <td class="text-center">{{ downhillSurfaceItems.prediction.maxWidth }}</td>
                      <td class="text-center">{{ downhillSurfaceItems.prediction.maxDepth }}</td>
                      <td class="text-center">{{ downhillSurfaceItems.prediction.average }}</td>
                      <td class="text-center">{{ downhillSurfaceItems.prediction.flatness }}</td>
                      <td class="text-center">{{ downhillSurfaceItems.prediction.MNI }}</td>
                      <td class="text-center">{{ downhillSurfaceItems.prediction.MCI }}</td>
                    </tr>
            <!--振動,騒音,地図-->
                <!--振動-->
                <!--騒音-->
                    <tr>
                    </tr>
                <!--地図-->
<!--                 <v-card>
                  <v-card-text class="text-center">地図</v-card-text>
                  <v-container>
                    <v-img></v-img>
                  </v-container>
                </v-card>
              </v-card>
            </v-col>
          </v-row>
 -->
              </tbody>
            </v-table>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      pavement: { office: '第一建築事務所', area: '千代田工区', route: '麹町竹平線', routeNumber: '特401', waypoint: 0, branch: 0 },
      comp: {
        totalWidth: 27,
        paveWidth: {
          uphill: 9.5,
          downhill: 9.5,
        },
        highwayMedianWidth: 0.5,
        highwayMedianForm: '新',
        lanes: {
          uphill: 3,
          downhill: 3,
        },
        rightTurnLanes: {
          uphill: '無',
          downhill: '無',
        },
        leftTurnLanes: {
          uphill: '無',
          downhill: '無',
        },
        form: {
          uphill: '規格歩道',
          downhill: '規格歩道',
        },
        paveType: {
          uphill: 'アスファルト',
          downhill: 'アスファルト',
        },
        width: {
          uphill: 3,
          downhill: 4.5,
        },
        fenceType: {
          uphill: 'パイプ',
          downhill: 'パイプ',
        },
        plantsType: {
          uphill: '植樹桝',
          downhill: '植樹桝',
        },
        position1: {
          uphill: 40,
          downhill: 4.1,
        },
        position2: {
          uphill: 85,
          downhill: 5.5,
        },
        position3: {
          uphill: 0,
          downhill: 0,
        },
        position4: {
          uphill: 0,
          downhill: 0,
        },
        surveyDate: 'H27/04/01',
        waypoint: 0,
        serveyClass: '24h',
        totalTrafic: 18720,
        largeCar: 2561,
        otherCar: 16159,
        lardeCarRate: 13.7,
        dayNightRate: 1.43,
        pedstrian: 0,
        bicycle: 0,
        motorcycle: 0,
        congestion: 0,
        emergencyTraffic: '指',
        emergencyTrans: ' ',
        emergencyEvaRoute: ' ',
      },
      uphillPaveItems: [
        {
          id: 1,
          waypoint: {
            from: { 1: 0, 2: 0 },
            to: { 1: 0.2, 2: 0 }
          },
          year: 'H26',
          constType: '補修',
          constMethod: '切削',
          surface: 'アスファルト',
          materialThick1: 4,
          materialThick2: 6,
          materialThick3: null,
          materialThick4: null,
          materialThick5: null,
          materialThick6: null,
          totalThick: 10,
          TA: 10,
        },
        {
          id: 2,
          waypoint: {
            from: { 1: 0, 2: 0 },
            to: { 1: 0.1, 2: 0 }
          },
          year: 'H26',
          constType: '補修',
          constMethod: '切削',
          surface: 'アスファルト',
          materialThick1: 4,
          materialThick2: 6,
          materialThick3: null,
          materialThick4: null,
          materialThick5: null,
          materialThick6: null,
          totalThick: 10,
          TA: 10,
        },
        {
          id: 3,
          waypoint: {
            from: { 1: 0, 2: 0 },
            to: { 1: 0.2, 2: 40 }
          },
          year: 'H24',
          constType: '構造調査',
          constMethod: '調査',
          surface: 'アスファルト',
          materialThick1: 4,
          materialThick2: '半たⅡ高10',
          materialThick3: '粗16',
          materialThick4: 'M30 14',
          materialThick5: 'RC40 20',
          materialThick6: null,
          totalThick: 60,
          TA: 0,
        },
      ],
      uphillSurfaceItems: {
        survey: { type: 'アスファルト', date: 'H30/12/01', crackRate: 0, crackLevel: 0, maxWidth: 0, maxDepth: 14, average: 6, flatness: 1.2, MNI: 1.1, MCI: 8 },
        prediction: { type: 'アスファルト', date: 'H34/12/01', crackRate: 1.9, crackLevel: 0, maxWidth: 0, maxDepth: 17, average: 9, flatness: 2.1, MNI: 2.1, MCI: 6 },
      },
      downhillPaveItems: [
        {
          id: 1,
          waypoint: {
            from: { 1: 0, 2: 0 },
            to: { 1: 0.4, 2: 30 }
          },
          year: 'H26',
          constType: '補修',
          constMethod: '切削',
          surface: 'アスファルト',
          materialThick1: 4,
          materialThick2: 6,
          materialThick3: null,
          materialThick4: null,
          materialThick5: null,
          materialThick6: null,
          totalThick: 10,
          TA: 10,
        },
        {
          id: 2,
          waypoint: {
            from: { 1: 0, 2: 0 },
            to: { 1: 0.4, 2: 30 }
          },
          year: 'H26',
          constType: '補修',
          constMethod: '切削',
          surface: 'アスファルト',
          materialThick1: 4,
          materialThick2: 6,
          materialThick3: null,
          materialThick4: null,
          materialThick5: null,
          materialThick6: null,
          totalThick: 10,
          TA: 10,
        },
        {
          id: 3,
          waypoint: {
            from: { 1: 0, 2: 0 },
            to: { 1: 0.4, 2: 30 }
          },
          year: 'H26',
          constType: '補修',
          constMethod: '切削',
          surface: 'アスファルト',
          materialThick1: 4,
          materialThick2: 6,
          materialThick3: null,
          materialThick4: null,
          materialThick5: null,
          materialThick6: null,
          totalThick: 10,
          TA: 10,
        },
        {
          id: null,
          waypoint: {
            from: { 1: null, 2: null },
            to: { 1: null, 2: null }
          },
          year: null,
          constType: null,
          constMethod: null,
          surface: null,
          materialThick1: null,
          materialThick2: null,
          materialThick3: null,
          materialThick4: null,
          materialThick5: null,
          materialThick6: null,
          totalThick: null,
          TA: null,
        },
      ],
      downhillSurfaceItems: {
        survey: { type: 'アスファルト', date: 'H30/12/01', crackRate: 0, crackLevel: 0, maxWidth: 0, maxDepth: 14, average: 6, flatness: 1.2, MNI: 1.1, MCI: 8 },
        prediction: { type: 'アスファルト', date: 'H34/12/01', crackRate: 1.9, crackLevel: 0, maxWidth: 0, maxDepth: 17, average: 9, flatness: 2.1, MNI: 2.1, MCI: 6 },
      },
      vibrationId: { id: 612020, waypoint: 48, areaName: '第2種区域' },
      vibrationLevel: [
        { date: 'H04/02/19', day: 44, night: 37 },
        { date: '', day: null, night: null },
        { date: '', day: null, night: null },
        { date: '', day: null, night: null },
      ],
      noiseId: { id: 204028, waypoint: 0, areaName: '第3種区域' },
      noiseLebel: [
        { date: 'H05/10/25', morning: 69, day: 71, evening: 69, night: 65 },
      ]
    }
  },
  methods: {
    getBlankNum(items) {
      let blankNum = 6 - items.length;
      if (blankNum < 0) {
        return 0;
      }
      return blankNum;
    }
  }
})
</script>

<style>
.writingRl {
  writing-mode: vertical-rl;
}
</style>