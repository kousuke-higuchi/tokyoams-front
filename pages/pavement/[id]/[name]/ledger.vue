<template>
  <v-row>
    <v-col :md="child_extend ? 3 : 0" cols="12">
      <pavement-side-card-details @is-extend="child_extend = $event" />
    </v-col>
    <v-col :md="child_extend ? 9 : 12" cols="12">
      <v-card>
        <v-card-text>
          <!--道路構成-->
          <v-table density="compact" class="ledger">
            <tbody>
              <tr>
                <th colspan="3" class="text-center">事務所名</th>
                <td class="text-center">{{ paveInfo.office?.name }}</td>
                <th class="text-center">工区名</th>
                <td colspan="2" class="text-center">{{ paveInfo.area?.name }}</td>
                <th class="text-center">路線名</th>
                <td colspan="6" class="text-center">{{ paveInfo.route?.name }}</td>
                <th class="text-center">路線番号</th>
                <td class="text-center">{{ paveInfo.routenumber }}</td>
                <th colspan="2" class="text-center">地点標</th>
                <td class="text-center">{{ paveInfo.spotpoint }}</td>
                <th class="text-center">支線番号</th>
                <td class="text-center">{{ paveInfo.branchlineno }}</td>
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
                <td colspan="2" rowspan="2" class="text-center">{{ formation?.form?.name }}</td>
                <td rowspan="2" class="text-center">{{ formation?.roadttlwid }}</td>
                <td class="text-center">{{ formation?.pavwid1 }}</td>
                <td rowspan="2" class="text-center">{{ formation?.censtripwid }}</td>
                <td rowspan="2" class="text-center">{{ formation?.censtrip?.name }}</td>
                <td class="text-center">{{ formation?.lanenum1 }}</td>
                <td class="text-center">{{ formation?.rgtturnlane1 }}</td>
                <td class="text-center">{{ formation?.lftturnlane1 }}</td>
                <td class="text-center">{{ formation?.swkind1?.name }}</td>
                <td class="text-center">{{ formation?.swpavekind1?.name }}</td>
                <td class="text-center">{{ formation?.swwid1 }}</td>
                <td class="text-center">{{ formation?.guafencekind1?.name }}</td>
                <td class="text-center">{{ formation?.slpvgt1?.name }}</td>
                <td class="text-center">{{ subgradesoilcbr?.observpoint1 }}</td>
                <td class="text-center">{{ subgradesoilcbr?.observpoint2 }}</td>
                <td class="text-center">{{ subgradesoilcbr?.observpoint3 }}</td>
                <td class="text-center">{{ subgradesoilcbr?.observpoint4 }}</td>
              </tr>
              <tr>
                <th colspan="2" class="text-center">下り車線</th>
                <td class="text-center">{{ formation?.pavwid2 }}</td>
                <td class="text-center">{{ formation?.lanenum2 }}</td>
                <td class="text-center">{{ formation?.rgtturnlane2 }}</td>
                <td class="text-center">{{ formation?.lftturnlane2 }}</td>
                <td class="text-center">{{ formation?.swkind2?.name }}</td>
                <td class="text-center">{{ formation?.swpavekind2?.name }}</td>
                <td class="text-center">{{ formation?.swwid2 }}</td>
                <td class="text-center">{{ formation?.guafencekind2?.name }}</td>
                <td class="text-center">{{ formation?.slpvgt2?.name }}</td>
                <td class="text-center">{{ subgradesoilcbr?.cbrval1 }}</td>
                <td class="text-center">{{ subgradesoilcbr?.cbrval2 }}</td>
                <td class="text-center">{{ subgradesoilcbr?.cbrval3 }}</td>
                <td class="text-center">{{ subgradesoilcbr?.cbrval4 }}</td>
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
                <td colspan="2" class="text-center">{{ trafficsurvey?.viewSurveydate }}</td>
                <td class="text-center">{{ trafficsurvey?.surveypos }}</td>
                <td class="text-center">{{ trafficsurvey?.surveytime?.name }}</td>
                <td class="text-center">{{ trafficsurvey?.totalvol2 }}</td>
                <td class="text-center">{{ trafficsurvey?.largetruck2 }}</td>
                <td class="text-center">{{ trafficsurvey?.other2 }}</td>
                <td class="text-center">{{ trafficsurvey?.comvehicleratio }}</td>
                <td class="text-center">{{ trafficsurvey?.daytimeratio }}</td>
                <td class="text-center">{{ trafficsurvey?.pedestrian }}</td>
                <td class="text-center">{{ trafficsurvey?.bicycle }}</td>
                <td class="text-center">{{ trafficsurvey?.twowheelvehicle }}</td>
                <td class="text-center">{{ trafficsurvey?.crowratio }}</td>
                <td class="text-center">{{ emergency?.emergency }}</td>
                <td class="text-center">{{ emergency?.transportion }}</td>
                <td class="text-center">{{ emergency?.rescue }}</td>
              </tr>
              <tr>
                <th rowspan="21" class="text-center" style="writing-mode: vertical-rl;">上り車線</th>
                <th rowspan="3"></th>
                <th colspan="5" class="text-center">工事</th>
                <th colspan="9" class="text-center">舗装構造</th>
                <th colspan="2" class="text-center">道路交通振動</th>
                <th colspan="2" class="text-center">観測点番号</th>
                <td class="text-center">{{ vibrations?.[0]?.observpointno }}</td>
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
                <td colspan="2" class="text-center">{{ vibrations?.[0]?.observpos }}</td>
              </tr>
              <tr>
                <th colspan="3" class="text-center">振動の要請限度の区域区分</th>
                <td colspan="2" class="text-center">{{ vibrations?.[0]?.reqlimitname }}</td>
              </tr>
              <tr>
                <th rowspan="14" class="text-center" style="writing-mode: vertical-rl;">
                  舗装構成
                </th>
                <td rowspan="2" class="text-center">
                  <span v-if="upHistories?.[0] != null">1</span>
                </td>
                <td rowspan="2" class="text-center">
                  <span v-if="upHistories?.[0] != null">
                    {{ paveInfo.spotpoint }}　{{ upHistories?.[0]?.spotpointposfrom }}<br />
                    {{upHistories?.[0]?.spotpointnoto }}　{{ upHistories?.[0]?.spotpointposto }}
                  </span>
                </td>
                <td rowspan="2" class="text-center">{{ upHistories?.[0]?.workfiskyearJp }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[0]?.constkind?.name }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[0]?.constructmtd?.name }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[0]?.surfacediv?.name }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[0]?.material1?.name }}<br />{{
                upHistories?.[0]?.thick1 }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[0]?.material2?.name }}<br />{{
                upHistories?.[0]?.thick2 }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[0]?.material3?.name }}<br />{{
                upHistories?.[0]?.thick3 }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[0]?.material4?.name }}<br />{{
                upHistories?.[0]?.thick4 }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[0]?.material5?.name }}<br />{{
                upHistories?.[0]?.thick5 }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[0]?.material6?.name }}<br />{{
                upHistories?.[0]?.thick6 }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[0]?.fullthick }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[0]?.ta }}</td>
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
                <td rowspan="2" class="text-center">
                  <span v-if="upHistories?.[1] != null">2</span>
                </td>
                <td rowspan="2" class="text-center">
                  <span v-if="upHistories?.[1] != null">
                    {{ paveInfo.spotpoint }}　{{ upHistories?.[1]?.spotpointposfrom }}<br />
                    {{upHistories?.[1]?.spotpointnoto }}　{{ upHistories?.[1]?.spotpointposto }}
                  </span>
                </td>
                <td rowspan="2" class="text-center">{{ upHistories?.[1]?.workfiskyearJp }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[1]?.constkind?.name }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[1]?.constructmtd?.name }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[1]?.surfacediv?.name }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[1]?.material1?.name }}<br />{{
                upHistories?.[1]?.thick1 }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[1]?.material2?.name }}<br />{{
                upHistories?.[1]?.thick2 }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[1]?.material3?.name }}<br />{{
                upHistories?.[1]?.thick3 }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[1]?.material4?.name }}<br />{{
                upHistories?.[1]?.thick4 }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[1]?.material5?.name }}<br />{{
                upHistories?.[1]?.thick5 }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[1]?.material6?.name }}<br />{{
                upHistories?.[1]?.thick6 }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[1]?.fullthick }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[1]?.ta }}</td>
                <td class="text-center">{{ vibrations?.[0]?.viewMeasuredate }}</td>
                <td class="text-center">{{ vibrations?.[0]?.daytimeviblevel }}</td>
                <td class="text-center">{{ vibrations?.[0]?.nighttimeviblevel }}</td>
              </tr>
              <!-- 最新のデータと観測点番号,観測地点,区域区分が同じ(seqnovibが等しい)場合のみ表示する 道路騒音に関しても同様 -->
              <tr v-if="vibrations?.[0]?.seqnovib === vibrations?.[1]?.seqnovib">
                <td class="text-center">{{ vibrations?.[1]?.viewMeasuredate }}</td>
                <td class="text-center">{{ vibrations?.[1]?.daytimeviblevel }}</td>
                <td class="text-center">{{ vibrations?.[1]?.nighttimeviblevel }}</td>
              </tr>
              <tr v-else>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td rowspan="2" class="text-center">
                  <span v-if="upHistories?.[2] != null">3</span>
                </td>
                <td rowspan="2" class="text-center">
                  <span v-if="upHistories?.[2] != null">
                    {{ paveInfo.spotpoint }}　{{ upHistories?.[2]?.spotpointposfrom }}<br />
                    {{upHistories?.[2]?.spotpointnoto }}　{{ upHistories?.[2]?.spotpointposto }}
                  </span>
                </td>
                <td rowspan="2" class="text-center">{{ upHistories?.[2]?.workfiskyearJp }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[2]?.constkind?.name }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[2]?.constructmtd?.name }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[2]?.surfacediv?.name }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[2]?.material1?.name }}<br />{{
                upHistories?.[2]?.thick1 }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[2]?.material2?.name }}<br />{{
                upHistories?.[2]?.thick2 }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[2]?.material3?.name }}<br />{{
                upHistories?.[2]?.thick3 }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[2]?.material4?.name }}<br />{{
                upHistories?.[2]?.thick4 }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[2]?.material5?.name }}<br />{{
                upHistories?.[2]?.thick5 }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[2]?.material6?.name }}<br />{{
                upHistories?.[2]?.thick6 }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[2]?.fullthick }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[2]?.ta }}</td>
                <td class="text-center">
                  <v-span v-if="vibrations?.[0]?.seqnovib === vibrations?.[2]?.seqnovib">
                    {{vibrations?.[2]?.viewMeasuredate }}
                  </v-span>
                </td>
                <td class="text-center">
                  <v-span v-if="vibrations?.[0]?.seqnovib === vibrations?.[2]?.seqnovib">{{
                  vibrations?.[2]?.daytimeviblevel }}</v-span>
                </td>
                <td class="text-center">
                  <v-span v-if="vibrations?.[0]?.seqnovib === vibrations?.[2]?.seqnovib">{{
                  vibrations?.[2]?.nighttimeviblevel }}</v-span>
                </td>
              </tr>
              <tr v-if="vibrations?.[0]?.seqnovib === vibrations?.[3]?.seqnovib">
                <td class="text-center">{{vibrations?.[3]?.viewMeasuredate }}</td>
                <td class="text-center">{{ vibrations?.[3]?.daytimeviblevel }}</td>
                <td class="text-center">{{ vibrations?.[3]?.nighttimeviblevel }}</td>
              </tr>
              <tr v-else>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td rowspan="2" class="text-center">
                  <span v-if="upHistories?.[3] != null">4</span>
                </td>
                <td rowspan="2" class="text-center">
                  <span v-if="upHistories?.[3] != null">
                    {{ paveInfo.spotpoint }}　{{ upHistories?.[3]?.spotpointposfrom }}<br />
                    {{upHistories?.[3]?.spotpointnoto }}　{{ upHistories?.[3]?.spotpointposto }}
                  </span>
                </td>
                <td rowspan="2" class="text-center">{{ upHistories?.[3]?.workfiskyearJp }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[3]?.constkind?.name }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[3]?.constructmtd?.name }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[3]?.surfacediv?.name }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[3]?.material1?.name }}<br />{{
                upHistories?.[3]?.thick1 }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[3]?.material2?.name }}<br />{{
                upHistories?.[3]?.thick2 }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[3]?.material3?.name }}<br />{{
                upHistories?.[3]?.thick3 }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[3]?.material4?.name }}<br />{{
                upHistories?.[3]?.thick4 }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[3]?.material5?.name }}<br />{{
                upHistories?.[3]?.thick5 }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[3]?.material6?.name }}<br />{{
                upHistories?.[3]?.thick6 }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[3]?.fullthick }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[3]?.ta }}</td>
                <th colspan="2" class="text-center">道路交通騒音</th>
                <th colspan="2" class="text-center">観測点番号</th>
                <td class="text-center">{{ noises?.[0]?.observpointno }}</td>
              </tr>
              <tr>
                <th colspan="3" class="text-center">観測地点(地点標番号)</th>
                <td colspan="2" class="text-center">{{ noises?.[0]?.observpos }}</td>
              </tr>
              <tr>
                <td rowspan="2" class="text-center">
                  <span v-if="upHistories?.[4] != null">5</span>
                </td>
                <td rowspan="2" class="text-center">
                  <span v-if="upHistories?.[4] != null">
                    {{ paveInfo.spotpoint }}　{{ upHistories?.[4]?.spotpointposfrom }}<br />
                    {{upHistories?.[4]?.spotpointnoto }}　{{ upHistories?.[4]?.spotpointposto }}
                  </span>
                </td>
                <td rowspan="2" class="text-center">{{ upHistories?.[4]?.workfiskyearJp }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[4]?.constkind?.name }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[4]?.constructmtd?.name }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[4]?.surfacediv?.name }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[4]?.material1?.name }}<br />{{
                upHistories?.[4]?.thick1 }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[4]?.material2?.name }}<br />{{
                upHistories?.[4]?.thick2 }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[4]?.material3?.name }}<br />{{
                upHistories?.[4]?.thick3 }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[4]?.material4?.name }}<br />{{
                upHistories?.[4]?.thick4 }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[4]?.material5?.name }}<br />{{
                upHistories?.[4]?.thick5 }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[4]?.material6?.name }}<br />{{
                upHistories?.[4]?.thick6 }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[4]?.fullthick }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[4]?.ta }}</td>
                <th colspan="3" class="text-center">振動の要請限度の区域区分</th>
                <td colspan="2" class="text-center">{{ noises?.[0]?.reqlimitname }}</td>
              </tr>
              <tr>
                <th></th>
                <th colspan="4" class="text-center">騒音レベル</th>
              </tr>
              <tr>
                <td rowspan="2" class="text-center">
                  <span v-if="upHistories?.[5] != null">6</span>
                </td>
                <td rowspan="2" class="text-center">
                  <span v-if="upHistories?.[5] != null">
                    {{ paveInfo.spotpoint }}　{{ upHistories?.[5]?.spotpointposfrom }}<br />
                    {{upHistories?.[5]?.spotpointnoto }}　{{ upHistories?.[5]?.spotpointposto }}
                  </span>
                </td>
                <td rowspan="2" class="text-center">{{ upHistories?.[5]?.workfiskyearJp }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[5]?.constkind?.name }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[5]?.constructmtd?.name }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[5]?.surfacediv?.name }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[5]?.material1?.name }}<br />{{
                upHistories?.[5]?.thick1 }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[5]?.material2?.name }}<br />{{
                upHistories?.[5]?.thick2 }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[5]?.material3?.name }}<br />{{
                upHistories?.[5]?.thick3 }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[5]?.material4?.name }}<br />{{
                upHistories?.[5]?.thick4 }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[5]?.material5?.name }}<br />{{
                upHistories?.[5]?.thick5 }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[5]?.material6?.name }}<br />{{
                upHistories?.[5]?.thick6 }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[5]?.fullthick }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[5]?.ta }}</td>
                <th class="text-center">測定年月日</th>
                <th class="text-center">朝</th>
                <th class="text-center">昼間</th>
                <th class="text-center">夕</th>
                <th class="text-center">夜間</th>
              </tr>
              <tr>
                <td class="text-center">{{ noises?.[0]?.viewMeasuredate }}</td>
                <td class="text-center">{{ noises?.[0]?.morningtimenoiselevel }}</td>
                <td class="text-center">{{ noises?.[0]?.daytimenoiselevel }}</td>
                <td class="text-center">{{ noises?.[0]?.afternoontimenoiselevel }}</td>
                <td class="text-center">{{ noises?.[0]?.nighttimenoiselevel }}</td>
              </tr>
              <tr>
                <td rowspan="2" class="text-center">
                  <span v-if="upHistories?.[6] != null">7</span>
                </td>
                <td rowspan="2" class="text-center">
                  <span v-if="upHistories?.[6] != null">
                    {{ paveInfo.spotpoint }}　{{ upHistories?.[6]?.spotpointposfrom }}<br />{{
                    upHistories?.[6]?.spotpointnoto }}　{{ upHistories?.[6]?.spotpointposto }}
                  </span>
                </td>
                <td rowspan="2" class="text-center">{{ upHistories?.[6]?.workfiskyearJp }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[6]?.constkind?.name }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[6]?.constructmtd?.name }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[6]?.surfacediv?.name }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[6]?.material1?.name }}<br />{{
                upHistories?.[6]?.thick1 }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[6]?.material2?.name }}<br />{{
                upHistories?.[6]?.thick2 }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[6]?.material3?.name }}<br />{{
                upHistories?.[6]?.thick3 }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[6]?.material4?.name }}<br />{{
                upHistories?.[6]?.thick4 }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[6]?.material5?.name }}<br />{{
                upHistories?.[6]?.thick5 }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[6]?.material6?.name }}<br />{{
                upHistories?.[6]?.thick6 }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[6]?.fullthick }}</td>
                <td rowspan="2" class="text-center">{{ upHistories?.[6]?.ta }}</td>
                <td class="text-center">
                  <span v-if="noises?.[0]?.seqnodiv === noises?.[1]?.seqnodiv">
                    {{noises?.[1]?.viewMeasuredate }}
                  </span>
                </td>
                <td class="text-center">
                  <span v-if="noises?.[0]?.seqnodiv === noises?.[1]?.seqnodiv">{{ noises?.[1]?.morningtimenoiselevel
                  }}</span>
                </td>
                <td class="text-center">
                  <span v-if="noises?.[0]?.seqnodiv === noises?.[1]?.seqnodiv">{{ noises?.[1]?.daytimenoiselevel
                  }}</span>
                </td>
                <td class="text-center">
                  <span v-if="noises?.[0]?.seqnodiv === noises?.[1]?.seqnodiv">
                    {{ noises?.[1]?.afternoontimenoiselevel}}
                  </span>
                </td>
                <td class="text-center">
                  <span v-if="noises?.[0]?.seqnodiv === noises?.[1]?.seqnodiv">{{ noises?.[1]?.nighttimenoiselevel
                  }}</span>
                </td>
              </tr>
              <tr v-if="noises?.[0]?.seqnodiv === noises?.[2]?.seqnodiv">
                <td class="text-center">{{ noises?.[2]?.viewMeasuredate }}</td>
                <td class="text-center">{{ noises?.[2]?.morningtimenoiselevel }}</td>
                <td class="text-center">{{ noises?.[2]?.daytimenoiselevel }}</td>
                <td class="text-center">{{ noises?.[2]?.afternoontimenoiselevel }}</td>
                <td class="text-center">{{ noises?.[2]?.nighttimenoiselevel }}</td>
              </tr>
              <tr v-else>
                <td v-for="n of 5" :key="n"></td>
              </tr>
              <tr>
                <th rowspan="4" class="text-center" style="writing-mode: vertical-rl;">路面性状</th>
                <th rowspan="2" class="text-center">舗装<br>種別</th>
                <th rowspan="2" colspan="3" class="text-center">調査年月日<br>4年後予測値</th>
                <th colspan="3" class="text-center">ひび割れ(%、CM/m2、mm)</th>
                <th colspan="2" class="text-center">わだち掘れ(mm)</th>
                <th rowspan="2" class="text-center">平坦性<br>(mm)</th>
                <th rowspan="2" class="text-center">MNI</th>
                <th rowspan="2" class="text-center">MCI</th>
                <th rowspan="4" colspan="2"></th>
                <td class="text-center">
                  <span v-if="noises?.[0]?.seqnodiv === noises?.[3]?.seqnodiv">
                    {{noises?.[3]?.viewMeasuredate }}
                  </span>
                </td>
                <td class="text-center">
                  <span v-if="noises?.[0]?.seqnodiv === noises?.[3]?.seqnodiv">{{ noises?.[3]?.morningtimenoiselevel
                  }}</span>
                </td>
                <td class="text-center">
                  <span v-if="noises?.[0]?.seqnodiv === noises?.[3]?.seqnodiv">{{ noises?.[3]?.daytimenoiselevel
                  }}</span>
                </td>
                <td class="text-center">
                  <span v-if="noises?.[0]?.seqnodiv === noises?.[3]?.seqnodiv">{{ noises?.[3]?.afternoontimenoiselevel
                  }}</span>
                </td>
                <td class="text-center">
                  <span v-if="noises?.[0]?.seqnodiv === noises?.[3]?.seqnodiv">{{ noises?.[3]?.nighttimenoiselevel
                  }}</span>
                </td>
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
                <td class="text-center">{{ upRoadsurfcond?.surface1?.name }}</td>
                <td colspan="3" class="text-center">{{ upRoadsurfcond?.viewSurveydate1 }}</td>
                <td class="text-center">{{ upRoadsurfcond?.crackratio1 }}</td>
                <td class="text-center">{{ upRoadsurfcond?.crackindex1 }}</td>
                <td class="text-center">{{ upRoadsurfcond?.maxcrackwid1 }}</td>
                <td class="text-center">{{ upRoadsurfcond?.maxwadachibore1 }}</td>
                <td class="text-center">{{ upRoadsurfcond?.avewadachibore1 }}</td>
                <td class="text-center">{{ upRoadsurfcond?.smoothness1 }}</td>
                <td class="text-center">{{ upRoadsurfcond?.mni1 }}</td>
                <td class="text-center">{{ upRoadsurfcond?.mci1 }}</td>
                <td rowspan="15" colspan="5"></td>
              </tr>
              <tr>
                <td class="text-center">{{ upRoadsurfcond?.surface2?.name }}</td>
                <td colspan="3" class="text-center">{{ upRoadsurfcond?.viewSurveydate2 }}</td>
                <td class="text-center">{{ upRoadsurfcond?.crackratio2 }}</td>
                <td class="text-center">{{ upRoadsurfcond?.crackindex2 }}</td>
                <td class="text-center">{{ upRoadsurfcond?.maxcrackwid2 }}</td>
                <td class="text-center">{{ upRoadsurfcond?.maxwadachibore2 }}</td>
                <td class="text-center">{{ upRoadsurfcond?.avewadachibore2 }}</td>
                <td class="text-center">{{ upRoadsurfcond?.smoothness2 }}</td>
                <td class="text-center">{{ upRoadsurfcond?.mni2 }}</td>
                <td class="text-center">{{ upRoadsurfcond?.mci2 }}</td>
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
              <tr v-for="i in 7" :key="i">
                <th v-if="i == 1" rowspan="7" class="text-center" style="writing-mode: vertical-rl;">舗装構成</th>
                <td class="text-center">
                  <span v-if="downHistories?.[i-1] != null">{{i}}</span>
                </td>
                <td class="text-center">
                  <span v-if="downHistories?.[i-1] != null">
                    {{ paveInfo.spotpoint }}　{{ downHistories?.[i-1]?.spotpointposfrom }}<br />
                    {{downHistories?.[i-1]?.spotpointnoto }}　{{ downHistories?.[i-1]?.spotpointposto }}
                  </span>
                </td>
                <td class="text-center">{{ downHistories?.[i-1]?.workfiskyearJp }}</td>
                <td class="text-center">{{ downHistories?.[i-1]?.constkind?.name }}</td>
                <td class="text-center">{{ downHistories?.[i-1]?.constructmtd?.name }}</td>
                <td class="text-center">{{ downHistories?.[i-1]?.surfacediv?.name }}</td>
                <td class="text-center">
                  {{ downHistories?.[i-1]?.material1?.name }}<br />{{downHistories?.[i-1]?.thick1 }}
                </td>
                <td class="text-center">
                  {{ downHistories?.[i-1]?.material2?.name }}<br />{{downHistories?.[i-1]?.thick2 }}
                </td>
                <td class="text-center">
                  {{ downHistories?.[i-1]?.material3?.name }}<br />{{downHistories?.[i-1]?.thick3 }}
                </td>
                <td class="text-center">
                  {{ downHistories?.[i-1]?.material4?.name }}<br />{{downHistories?.[i-1]?.thick4 }}
                </td>
                <td class="text-center">
                  {{ downHistories?.[i-1]?.material5?.name }}<br />{{downHistories?.[i-1]?.thick5 }}
                </td>
                <td class="text-center">
                  {{ downHistories?.[i-1]?.material6?.name }}<br />{{downHistories?.[i-1]?.thick6 }}
                </td>
                <td class="text-center">{{ downHistories?.[i-1]?.fullthick }}</td>
                <td class="text-center">{{ downHistories?.[i-1]?.ta }}</td>
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
                <td class="text-center">{{ downRoadsurfcond?.surface1?.name }}</td>
                <td colspan="3" class="text-center">{{ downRoadsurfcond?.viewSurveydate1 }}</td>
                <td class="text-center">{{ downRoadsurfcond?.crackratio1 }}</td>
                <td class="text-center">{{ downRoadsurfcond?.crackindex1 }}</td>
                <td class="text-center">{{ downRoadsurfcond?.maxcrackwid1 }}</td>
                <td class="text-center">{{ downRoadsurfcond?.maxwadachibore1 }}</td>
                <td class="text-center">{{ downRoadsurfcond?.avewadachibore1 }}</td>
                <td class="text-center">{{ downRoadsurfcond?.smoothness1 }}</td>
                <td class="text-center">{{ downRoadsurfcond?.mni1 }}</td>
                <td class="text-center">{{ downRoadsurfcond?.mci1 }}</td>
                <td rowspan="15" colspan="5"></td>
              </tr>
              <tr>
                <td class="text-center">{{ downRoadsurfcond?.surface2?.name }}</td>
                <td colspan="3" class="text-center">{{ downRoadsurfcond?.viewSurveydate2 }}</td>
                <td class="text-center">{{ downRoadsurfcond?.crackratio2 }}</td>
                <td class="text-center">{{ downRoadsurfcond?.crackindex2 }}</td>
                <td class="text-center">{{ downRoadsurfcond?.maxcrackwid2 }}</td>
                <td class="text-center">{{ downRoadsurfcond?.maxwadachibore2 }}</td>
                <td class="text-center">{{ downRoadsurfcond?.avewadachibore2 }}</td>
                <td class="text-center">{{ downRoadsurfcond?.smoothness2 }}</td>
                <td class="text-center">{{ downRoadsurfcond?.mni2 }}</td>
                <td class="text-center">{{ downRoadsurfcond?.mci2 }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import pavementService from '~~/services/pavement-service';
import {
  PavLedger, PaveTbKukanid, PaveTbRoadformation, PavTbSubgradesoilcbr,
  PavTbTraffsurvey, PavTbRouteemergency, PaveHistory, PavTbRoadsurfcond,
  PavTbTrafficvibration, PavTbTrafficnoise
} from '~~/types/pavement';

const route = useRoute();
const child_extend = ref(true);

const pavement = ref<PavLedger>();
const paveInfo = ref(new PaveTbKukanid);
const formation = ref(new PaveTbRoadformation);
const subgradesoilcbr = ref(new PavTbSubgradesoilcbr);
const trafficsurvey = ref(new PavTbTraffsurvey);
const emergency = ref(new PavTbRouteemergency);
const upHistories = ref(new Array<PaveHistory>);
const upRoadsurfcond = ref(new PavTbRoadsurfcond);
const downHistories = ref(new Array<PaveHistory>);
const downRoadsurfcond = ref(new PavTbRoadsurfcond);
const vibrations = ref(new Array<PavTbTrafficvibration>);
const noises = ref(new Array<PavTbTrafficnoise>);

const loading = useLoading();
loading.setLoading(true);

onMounted(() => {
  pavementService.getPaveLedger(route.params.id.toString()).then(s => {
    pavement.value = s.data;
    paveInfo.value = pavement.value?.pavTbKukanid;
    formation.value = pavement.value?.roadformation;
    subgradesoilcbr.value = pavement.value?.subgradesoilcbr;
    trafficsurvey.value = pavement.value?.trafficsurvey;
    emergency.value = pavement.value?.routeemergency;
    upHistories.value = pavement.value?.upHistories;
    upRoadsurfcond.value = pavement.value?.upRoadsurfcond;
    downHistories.value = pavement.value?.downHistories;
    downRoadsurfcond.value = pavement.value?.downRoadsurfcond;
    vibrations.value = pavement.value?.paveVibrations;
    noises.value = pavement.value?.paveNoises;
  }).finally(()=>{
    loading.setLoading(false);
  })
})

</script>

<style>
.writingRl {
  writing-mode: vertical-rl;
}
</style>