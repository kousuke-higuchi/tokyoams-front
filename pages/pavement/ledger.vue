<template>
  <v-row>
    <v-col md="3" cols="12">
      <pavement-side-card-details/>
    </v-col>
    <v-col md="9" cols="12">
      <v-card>
        <div class="d-flex">
          <v-card-text class="text-h6 border">事務所名</v-card-text>
          <v-card-text class="text-h6 border">{{pavement.office}}</v-card-text>
          <v-card-text class="text-h6 border">工区名</v-card-text>
          <v-card-text class="text-h6 border">{{pavement.area}}</v-card-text>
          <v-card-text class="text-h6 border">路線名</v-card-text>
          <v-card-text class="text-h6 border">{{pavement.route}}</v-card-text>
          <v-card-text class="text-h6 border">路線番号</v-card-text>
          <v-card-text class="text-h6 border">{{pavement.routeNumber}}</v-card-text>
          <v-card-text class="text-h6 border">地点標</v-card-text>
          <v-card-text class="text-h6 border">{{pavement.waypoint}}km</v-card-text>
          <v-card-text class="text-h6 border">支線番号</v-card-text>
          <v-card-text class="text-h6 border">{{pavement.branch}}</v-card-text>
        </div>
        <v-row no-gutters >
          <!--道路構成-->
          <v-col md="12" cols="12">
            <v-card>
              <v-card-text class="text-center">道路構成</v-card-text>
              <v-table density="compact">
                <thead>
                  <tr>
                    <th rowspan="2" class="border"></th>
                    <th class="text-center border">構造区分</th>
                    <th colspan="7" class="text-center border">車道構成</th>
                    <th colspan="5" class="text-center border">歩道構成</th>
                    <th colspan="4" class="text-center border">路床±CBR</th>
                  </tr>
                  <tr>
                    <th class="text-center border">形態</th>
                    <th class="text-center border">総幅員(m)</th>
                    <th class="text-center border">舗装幅員(m)</th>
                    <th class="text-center border">中央帯幅員(m)</th>
                    <th class="text-center border">中央帯形式</th>
                    <th class="text-center border">車線数走行</th>
                    <th class="text-center border">車線右折</th>
                    <th class="text-center border">車線左折</th>
                    <th class="text-center border">形式</th>
                    <th class="text-center border">舗装種別</th>
                    <th class="text-center border">幅員(m)</th>
                    <th class="text-center border">防護柵形式</th>
                    <th class="text-center border">植栽形式</th>
                    <th class="text-center border">位置(m)CBR%</th>
                    <th class="text-center border">位置(m)CBR%</th>
                    <th class="text-center border">位置(m)CBR%</th>
                    <th class="text-center border">位置(m)CBR%</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th class="border">上り車線</th>
                    <td rowspan="2" class="border">一般部</td>
                    <td rowspan="2" class="border">{{comp.totalWidth}}</td>
                    <td class="border">{{comp.paveWidth.uphill}}</td>
                    <td rowspan="2" class="border">{{comp.highwayMedianWidth}}</td>
                    <td rowspan="2" class="border">{{comp.highwayMedianForm}}</td>
                    <td class="border">{{comp.lanes.uphill}}</td>
                    <td class="border">{{comp.rightTurnLanes.uphill}}</td>
                    <td class="border">{{comp.leftTurnLanes.uphill}}</td>
                    <td class="border">{{comp.form.uphill}}</td>
                    <td class="border">{{comp.paveType.uphill}}</td>
                    <td class="border">{{comp.width.uphill}}</td>
                    <td class="border">{{comp.fenceType.uphill}}</td>
                    <td class="border">{{comp.plantsType.uphill}}</td>
                    <td class="border">{{comp.position1.uphill}}</td>
                    <td class="border">{{comp.position2.uphill}}</td>
                    <td class="border">{{comp.position3.uphill}}</td>
                    <td class="border">{{comp.position4.uphill}}</td>
                  </tr>
                  <tr>
                    <th class="border">下り車線</th>
                    <td class="border">{{comp.paveWidth.downhill}}</td>
                    <td class="border">{{comp.lanes.downhill}}</td>
                    <td class="border">{{comp.rightTurnLanes.downhill}}</td>
                    <td class="border">{{comp.leftTurnLanes.downhill}}</td>
                    <td class="border">{{comp.form.downhill}}</td>
                    <td class="border">{{comp.paveType.downhill}}</td>
                    <td class="border">{{comp.width.downhill}}</td>
                    <td class="border">{{comp.fenceType.downhill}}</td>
                    <td class="border">{{comp.plantsType.downhill}}</td>
                    <td class="border">{{comp.position1.downhill}}</td>
                    <td class="border">{{comp.position2.downhill}}</td>
                    <td class="border">{{comp.position3.downhill}}</td>
                    <td class="border">{{comp.position4.downhill}}</td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th></th>
                    <th class="border">調査年月日</th>
                    <th class="border">観測地点標</th>
                    <th class="border">調査区分</th>
                    <th class="border">総交通量</th>
                    <th class="border">大型車</th>
                    <th class="border">その他</th>
                    <th class="border">大型車混入率</th>
                    <th class="border">昼夜率</th>
                    <th class="border">歩行者類</th>
                    <th class="border">自転車類</th>
                    <th class="border">二輪車類</th>
                    <th class="border">混雑率</th>
                    <th class="border">緊急交通路</th>
                    <th class="border">緊急輸送路</th>
                    <th class="border">緊急啓開路線</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th class="border">交通量(下り)</th>
                    <td class="border">{{comp.surveyDate}}</td>
                    <td class="border">{{comp.waypoint}}</td>
                    <td class="border">{{comp.serveyClass}}</td>
                    <td class="border">{{comp.totalTrafic}}</td>
                    <td class="border">{{comp.largeCar}}</td>
                    <td class="border">{{comp.otherCar}}</td>
                    <td class="border">{{comp.lardeCarRate}}</td>
                    <td class="border">{{comp.dayNightRate}}</td>
                    <td class="border">{{comp.pedstrian}}</td>
                    <td class="border">{{comp.bicycle}}</td>
                    <td class="border">{{comp.motorcycle}}</td>
                    <td class="border">{{comp.congestion}}</td>
                    <td class="border">{{comp.emergencyTraffic}}</td>
                    <td class="border">{{comp.emergencyTrans}}</td>
                    <td class="border">{{comp.emergencyEvaRoute}}</td>
                  </tr>
                </tbody>
              </v-table>
            </v-card>
          </v-col>
          <v-col md="8" cols="8">
            <!--上り車線-->
            <v-card>
              <v-card-text class="text-center">上り車線</v-card-text>
              <v-table density="compact">
                <thead>
                  <tr>
                    <th rowspan="2" class="border"></th>
                    <th colspan="5" class="text-center border">工事</th>
                    <th colspan="9" class="text-center border">舗装構造</th>
                  </tr>
                  <tr>
                    <th class="text-center border">車線番号</th>
                    <th class="text-center border"><p>自 地点標</p><p>至 地点標</p></th>
                    <th class="text-center border">施工年度</th>
                    <th class="text-center border">工事種別</th>
                    <th class="text-center border">工法</th>
                    <th class="text-center border">表層区分</th>
                    <th class="text-center border">材料厚さ(cm)</th>
                    <th class="text-center border">材料厚さ(cm)</th>
                    <th class="text-center border">材料厚さ(cm)</th>
                    <th class="text-center border">材料厚さ(cm)</th>
                    <th class="text-center border">材料厚さ(cm)</th>
                    <th class="text-center border">材料厚さ(cm)</th>
                    <th class="text-center border">総厚(cm)</th>
                    <th class="text-center border">TA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in uphillPaveItems" :key="item.id">
                    <th class="border">舗装構成</th>
                    <td class="border">{{item.id}}</td>
                    <td class="border">{{item.waypoint.from[1]}} {{item.waypoint.from[2]}}<br/>{{item.waypoint.to[1]}} {{item.waypoint.to[2]}}</td>
                    <td class="border">{{item.year}}</td>
                    <td class="border">{{item.constType}}</td>
                    <td class="border">{{item.constMethod}}</td>
                    <td class="border">{{item.surface}}</td>
                    <td class="border">{{item.materialThick1}}</td>
                    <td class="border">{{item.materialThick2}}</td>
                    <td class="border">{{item.materialThick3}}</td>
                    <td class="border">{{item.materialThick4}}</td>
                    <td class="border">{{item.materialThick5}}</td>
                    <td class="border">{{item.materialThick6}}</td>
                    <td class="border">{{item.totalThick}}</td>
                    <td class="border">{{item.TA}}</td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th rowspan="2" class="border"></th>
                    <th rowspan="2" class="border">舗装種別</th>
                    <th rowspan="2" colspan="3" class="border"><p>調査年月日</p><p>4年後予測値</p></th>
                    <th colspan="3" class="border">ひび割れ(%、CM/m2、mm)</th>
                    <th colspan="2" class="border">わだち掘れ(mm)</th>
                    <th rowspan="2" class="border">平坦性(mm)</th>
                    <th rowspan="2" class="border">MNI</th>
                    <th rowspan="2" class="border">MCI</th>
                  </tr>
                  <tr>
                    <th class="border">ひび割れ率</th>
                    <th class="border">ひび割れ度</th>
                    <th class="border">最大幅</th>
                    <th class="border">最大値</th>
                    <th class="border">平均値</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th rowspan="2" class="border">路面性状</th>
                    <td class="border">{{uphillSurfaceItems.survey.type}}</td>
                    <td class="border" colspan="3">{{uphillSurfaceItems.survey.date}}</td>
                    <td class="border">{{uphillSurfaceItems.survey.crackRate}}</td>
                    <td class="border">{{uphillSurfaceItems.survey.crackLevel}}</td>
                    <td class="border">{{uphillSurfaceItems.survey.maxWidth}}</td>
                    <td class="border">{{uphillSurfaceItems.survey.maxDepth}}</td>
                    <td class="border">{{uphillSurfaceItems.survey.average}}</td>
                    <td class="border">{{uphillSurfaceItems.survey.flatness}}</td>
                    <td class="border">{{uphillSurfaceItems.survey.MNI}}</td>
                    <td class="border">{{uphillSurfaceItems.survey.MCI}}</td>
                  </tr>
                  <tr>
                    <td class="border">{{uphillSurfaceItems.prediction.type}}</td>
                    <td colspan="3" class="border">{{uphillSurfaceItems.prediction.date}}</td>
                    <td class="border">{{uphillSurfaceItems.prediction.crackRate}}</td>
                    <td class="border">{{uphillSurfaceItems.prediction.crackLevel}}</td>
                    <td class="border">{{uphillSurfaceItems.prediction.maxWidth}}</td>
                    <td class="border">{{uphillSurfaceItems.prediction.maxDepth}}</td>
                    <td class="border">{{uphillSurfaceItems.prediction.average}}</td>
                    <td class="border">{{uphillSurfaceItems.prediction.flatness}}</td>
                    <td class="border">{{uphillSurfaceItems.prediction.MNI}}</td>
                    <td class="border">{{uphillSurfaceItems.prediction.MCI}}</td>
                  </tr>
                </tbody>
              </v-table>
            </v-card>
            <!--下り車線-->
            <v-card>
              <v-card-text class="text-center">下り車線</v-card-text>
              <v-table density="compact">
                <thead>
                  <tr>
                    <th rowspan="2" class="border"></th>
                    <th colspan="5" class="text-center border">工事</th>
                    <th colspan="9" class="text-center border">舗装構造</th>
                  </tr>
                  <tr>
                    <th class="text-center border">車線番号</th>
                    <th class="text-center border"><p>自 地点標</p><p>至 地点標</p></th>
                    <th class="text-center border">施工年度</th>
                    <th class="text-center border">工事種別</th>
                    <th class="text-center border">工法</th>
                    <th class="text-center border">表層区分</th>
                    <th class="text-center border">材料厚さ(cm)</th>
                    <th class="text-center border">材料厚さ(cm)</th>
                    <th class="text-center border">材料厚さ(cm)</th>
                    <th class="text-center border">材料厚さ(cm)</th>
                    <th class="text-center border">材料厚さ(cm)</th>
                    <th class="text-center border">材料厚さ(cm)</th>
                    <th class="text-center border">総厚(cm)</th>
                    <th class="text-center border">TA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in downhillPaveItems" :key="item.id">
                    <th class="border">舗装構成</th>
                    <td class="border">{{item.id}}</td>
                    <td class="border">{{item.waypoint.from[1]}} {{item.waypoint.from[2]}}<br/>{{item.waypoint.to[1]}} {{item.waypoint.to[2]}}</td>
                    <td class="border">{{item.year}}</td>
                    <td class="border">{{item.constType}}</td>
                    <td class="border">{{item.constMethod}}</td>
                    <td class="border">{{item.surface}}</td>
                    <td class="border">{{item.materialThick1}}</td>
                    <td class="border">{{item.materialThick2}}</td>
                    <td class="border">{{item.materialThick3}}</td>
                    <td class="border">{{item.materialThick4}}</td>
                    <td class="border">{{item.materialThick5}}</td>
                    <td class="border">{{item.materialThick6}}</td>
                    <td class="border">{{item.totalThick}}</td>
                    <td class="border">{{item.TA}}</td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th rowspan="2" class="border"></th>
                    <th rowspan="2" class="border">舗装種別</th>
                    <th rowspan="2" colspan="3" class="border"><p>調査年月日</p><p>4年後予測値</p></th>
                    <th colspan="3" class="border">ひび割れ(%、CM/m2、mm)</th>
                    <th colspan="2" class="border">わだち掘れ(mm)</th>
                    <th rowspan="2" class="border">平坦性(mm)</th>
                    <th rowspan="2" class="border">MNI</th>
                    <th rowspan="2" class="border">MCI</th>
                  </tr>
                  <tr>
                    <th class="border">ひび割れ率</th>
                    <th class="border">ひび割れ度</th>
                    <th class="border">最大幅</th>
                    <th class="border">最大値</th>
                    <th class="border">平均値</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th rowspan="2" class="border">路面性状</th>
                    <td class="border">{{downhillSurfaceItems.survey.type}}</td>
                    <td class="border" colspan="3">{{downhillSurfaceItems.survey.date}}</td>
                    <td class="border">{{downhillSurfaceItems.survey.crackRate}}</td>
                    <td class="border">{{downhillSurfaceItems.survey.crackLevel}}</td>
                    <td class="border">{{downhillSurfaceItems.survey.maxWidth}}</td>
                    <td class="border">{{downhillSurfaceItems.survey.maxDepth}}</td>
                    <td class="border">{{downhillSurfaceItems.survey.average}}</td>
                    <td class="border">{{downhillSurfaceItems.survey.flatness}}</td>
                    <td class="border">{{downhillSurfaceItems.survey.MNI}}</td>
                    <td class="border">{{downhillSurfaceItems.survey.MCI}}</td>
                  </tr>
                  <tr>
                    <td class="border">{{downhillSurfaceItems.prediction.type}}</td>
                    <td colspan="3" class="border">{{downhillSurfaceItems.prediction.date}}</td>
                    <td class="border">{{downhillSurfaceItems.prediction.crackRate}}</td>
                    <td class="border">{{downhillSurfaceItems.prediction.crackLevel}}</td>
                    <td class="border">{{downhillSurfaceItems.prediction.maxWidth}}</td>
                    <td class="border">{{downhillSurfaceItems.prediction.maxDepth}}</td>
                    <td class="border">{{downhillSurfaceItems.prediction.average}}</td>
                    <td class="border">{{downhillSurfaceItems.prediction.flatness}}</td>
                    <td class="border">{{downhillSurfaceItems.prediction.MNI}}</td>
                    <td class="border">{{downhillSurfaceItems.prediction.MCI}}</td>
                  </tr>
                </tbody>
              </v-table>
            </v-card>
          </v-col>
          <!--振動,騒音,地図-->
          <v-col md="4" cols="4">
            <v-card>
            <!--振動-->
              <v-table density="compact">
              <thead>
                <tr>
                  <th colspan="2" class="text-center border">道路交通振動</th>
                  <th colspan="2" class="text-center border">観測点番号</th>
                  <td class="text-center border">{{vibrationId.id}}</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th colspan="3" class="text-center border">観測地点(地点標番号)</th>
                  <td colspan="2" class="text-center border">{{vibrationId.waypoint}}</td>
                </tr>
                <tr>
                  <th colspan="3" class="text-center border">振動の要請限度の区域区分</th>
                  <td colspan="2" class="text-center border">{{vibrationId.areaName}}</td>
                </tr>
              </tbody>
              </v-table>
              <v-table density="compact">
                <thead>
                  <tr>
                    <th class="border"></th>
                    <th colspan="2" class="text-center border">振動レベル</th>
                  </tr>
                  <tr>
                    <th class="text-center border">測定年月日</th>
                    <th class="text-center border">昼間</th>
                    <th class="text-center border">夜間</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in vibrationLevel" :key="item.date">
                    <td class="border">{{item.date}}</td>
                    <td class="border">{{item.day}}</td>
                    <td class="border">{{item.night}}</td>
                  </tr>
                </tbody>
              </v-table>
              <!--騒音-->
              <v-table density="compact">
              <thead>
                <tr>
                  <th colspan="2" class="text-center border">道路交通騒音</th>
                  <th colspan="2" class="text-center border">観測点番号</th>
                  <th class="text-center border">{{noiseId.id}}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th colspan="3" class="text-center border">観測地点(地点標番号)</th>
                  <td colspan="2" class="text-center border">{{noiseId.waypoint}}</td>
                </tr>
                <tr>
                  <th colspan="3" class="text-center border">振動の要請限度の区域区分</th>
                  <td colspan="2" class="text-center border">{{noiseId.areaName}}</td>
                </tr>
              </tbody>
              </v-table>
              <v-table density="compact">
                <thead>
                  <tr>
                    <th class="border"></th>
                    <th colspan="4" class="text-center border">騒音レベル</th>
                  </tr>
                  <tr>
                    <th class="text-center border">測定年月日</th>
                    <th class="text-center border">朝</th>
                    <th class="text-center border">昼間</th>
                    <th class="text-center border">夕</th>
                    <th class="text-center border">夜間</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in noiseLebel" :key="item.date">
                    <td class="border">{{item.date}}</td>
                    <td class="border">{{item.morning}}</td>
                    <td class="border">{{item.day}}</td>
                    <td class="border">{{item.evening}}</td>
                    <td class="border">{{item.night}}</td>
                  </tr>
                </tbody>
              </v-table>
              <!--地図-->
              <v-card class="border">
                <v-card-text class="text-center">地図</v-card-text>
                <v-container><v-img></v-img></v-container>
              </v-card>
            </v-card>
          </v-col> 
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      pavement:{office:'第一建築事務所',area:'千代田工区',route:'麹町竹平線',routeNumber:'特401',waypoint:0,branch:0},
      comp:{
        totalWidth: 27,
        paveWidth: {
          uphill: 9.5,
          downhill:9.5,
        },
        highwayMedianWidth: 0.5,
        highwayMedianForm: '新',
        lanes:{
          uphill:3,
          downhill:3,
        },
        rightTurnLanes:{
          uphill:'無',
          downhill:'無',
        },
        leftTurnLanes:{
          uphill:'無',
          downhill:'無',
        },
        form:{
          uphill:'規格歩道',
          downhill:'規格歩道',
        },
        paveType:{
          uphill:'アスファルト',
          downhill:'アスファルト',
        },
        width:{
          uphill:3,
          downhill:4.5,
        },
        fenceType:{
          uphill:'パイプ',
          downhill:'パイプ',
        },
        plantsType:{
          uphill:'植樹桝',
          downhill:'植樹桝',
        },
        position1:{
          uphill:40,
          downhill:4.1,
        },
        position2:{
          uphill:85,
          downhill:5.5,
        },
        position3:{
          uphill:0,
          downhill:0,
        },
        position4:{
          uphill:0,
          downhill:0,
        },
        surveyDate:'H27/04/01',
        waypoint:0,
        serveyClass:'24h',
        totalTrafic:18720,
        largeCar:2561,
        otherCar:16159,
        lardeCarRate:13.7,
        dayNightRate:1.43,
        pedstrian:0,
        bicycle:0,
        motorcycle:0,
        congestion:0,
        emergencyTraffic:'指',
        emergencyTrans:' ',
        emergencyEvaRoute:' ',
      },
      uphillPaveItems:[
        {id:1,
        waypoint:{
          from:{1:0,2:0},
          to:{1:0.2,2:0}
        },
        year:'H26',
        constType:'補修',
        constMethod:'切削',
        surface:'アスファルト',
        materialThick1:4,
        materialThick2:6,
        materialThick3:null,
        materialThick4:null,
        materialThick5:null,
        materialThick6:null,
        totalThick:10,
        TA:10,
        },
        {id:2,
        waypoint:{
          from:{1:0,2:0},
          to:{1:0.1,2:0}
        },
        year:'H26',
        constType:'補修',
        constMethod:'切削',
        surface:'アスファルト',
        materialThick1:4,
        materialThick2:6,
        materialThick3:null,
        materialThick4:null,
        materialThick5:null,
        materialThick6:null,
        totalThick:10,
        TA:10,
        },
        {id:3,
        waypoint:{
          from:{1:0,2:0},
          to:{1:0.2,2:40}
        },
        year:'H24',
        constType:'構造調査',
        constMethod:'調査',
        surface:'アスファルト',
        materialThick1:4,
        materialThick2:'半たⅡ高10',
        materialThick3:'粗16',
        materialThick4:'M30 14',
        materialThick5:'RC40 20',
        materialThick6:null,
        totalThick:60,
        TA:0,
        },
      ],
      uphillSurfaceItems:{
        survey:{type:'アスファルト',date:'H30/12/01',crackRate:0,crackLevel:0,maxWidth:0,maxDepth:14,average:6,flatness:1.2,MNI:1.1,MCI:8},
        prediction:{type:'アスファルト',date:'H34/12/01',crackRate:1.9,crackLevel:0,maxWidth:0,maxDepth:17,average:9,flatness:2.1,MNI:2.1, MCI:6},
      },
      downhillPaveItems:[
        {id:1,
        waypoint:{
          from:{1:0,2:0},
          to:{1:0.4,2:30}
        },
        year:'H26',
        constType:'補修',
        constMethod:'切削',
        surface:'アスファルト',
        materialThick1:4,
        materialThick2:6,
        materialThick3:null,
        materialThick4:null,
        materialThick5:null,
        materialThick6:null,
        totalThick:10,
        TA:10,
        },
        {id:2,
        waypoint:{
          from:{1:0,2:0},
          to:{1:0.4,2:30}
        },
        year:'H26',
        constType:'補修',
        constMethod:'切削',
        surface:'アスファルト',
        materialThick1:4,
        materialThick2:6,
        materialThick3:null,
        materialThick4:null,
        materialThick5:null,
        materialThick6:null,
        totalThick:10,
        TA:10,
        },
        {id:3,
        waypoint:{
          from:{1:0,2:0},
          to:{1:0.4,2:30}
        },
        year:'H26',
        constType:'補修',
        constMethod:'切削',
        surface:'アスファルト',
        materialThick1:4,
        materialThick2:6,
        materialThick3:null,
        materialThick4:null,
        materialThick5:null,
        materialThick6:null,
        totalThick:10,
        TA:10,
        },
      ],
      downhillSurfaceItems:{
        survey:{type:'アスファルト',date:'H30/12/01',crackRate:0,crackLevel:0,maxWidth:0,maxDepth:14,average:6,flatness:1.2,MNI:1.1,MCI:8},
        prediction:{type:'アスファルト',date:'H34/12/01',crackRate:1.9,crackLevel:0,maxWidth:0,maxDepth:17,average:9,flatness:2.1,MNI:2.1, MCI:6},
      },
      vibrationId:{id:612020,waypoint:48,areaName:'第2種区域'},
      vibrationLevel:[
        {date:'H04/02/19',day:44,night:37},
      ],
      noiseId:{id:204028,waypoint:0,areaName:'第3種区域'},
      noiseLebel:[
        {date:'H05/10/25',morning:69,day:71,evening:69,night:65},
      ]
    }
  },
  methods:{
    getBlankNum(items){
      let blankNum = 6 - items.length;
      if(blankNum < 0){
        return 0;
      }
      return blankNum;
    }
  }
})
</script>

<style>
.writingRl{
  writing-mode: vertical-rl;
}
</style>