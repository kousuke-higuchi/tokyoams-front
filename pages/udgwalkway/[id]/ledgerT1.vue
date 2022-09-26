<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <underground-walkway-side-card-details select-tab="ledger" />
      </v-col>
      <v-col md="9" cols="12">
        <v-card elevation="3" class="rfaTable">
          <v-container>
            <v-row no-gutters>
              <v-col md="4">
                <!--一般事項-->
                <v-table density="compact">
                  <thead>
                    <tr>
                      <th colspan="5">一般事項</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th rowspan="2">位置(地名・番地)</th>
                      <th>自</th>
                      <td colspan="3">{{ general.locationFrom }}</td>
                    </tr>
                    <tr>
                      <th>至</th>
                      <td colspan="3">{{ general.locationTo }}</td>
                    </tr>
                    <tr>
                      <th rowspan="2">路線名</th>
                      <td colspan="4">{{ general.routeName }}</td>
                    </tr>
                    <tr>
                      <td colspan="4">通称道路名{{ general.routeNickName }}</td>
                    </tr>
                    <tr>
                      <th>地点標</th>
                      <td colspan="4">{{ general.waypointFrom }}km~{{ general.locationTo }}km</td>
                    </tr>
                    <tr>
                      <th rowspan="2">起点座標</th>
                      <th>緯度</th>
                      <td colspan="3">{{ general.latFrom }}</td>
                    </tr>
                    <tr>
                      <th>経度</th>
                      <td colspan="3">{{ general.lngFrom }}</td>
                    </tr>
                    <tr>
                      <th rowspan="2">終点座標</th>
                      <th>緯度</th>
                      <td colspan="3">{{ general.latTo }}</td>
                    </tr>
                    <tr>
                      <th>経度</th>
                      <td colspan="3">{{ general.lngTo }}</td>
                    </tr>
                    <tr>
                      <th>全体延長(1+2)</th>
                      <td colspan="4">{{ general.totalLength }}m</td>
                    </tr>
                    <tr>
                      <th>1.トンネル延長</th>
                      <td colspan="4">{{ general.tunnelLength }}m</td>
                    </tr>
                    <tr>
                      <th>2.掘割延長</th>
                      <td colspan="4">{{ general.ditchLength }}m</td>
                    </tr>
                    <tr>
                      <th rowspan="5">道路幅員</th>
                      <th colspan="2">車道幅員</th>
                      <td colspan="2">{{ general.roadWidth }}m</td>
                    </tr>
                    <tr>
                      <th colspan="2">左側歩道幅員</th>
                      <td colspan="2">{{ general.rSideWalkWidth }}m</td>
                    </tr>
                    <tr>
                      <th colspan="2">右側歩道幅員</th>
                      <td colspan="2">{{ general.lSIdeWalkWidth }}m</td>
                    </tr>
                    <tr>
                      <td colspan="4">(その他){{ general.otherWidth }}</td>
                    </tr>
                    <tr>
                      <td colspan="4"></td>
                    </tr>
                    <tr>
                      <th>施設構造分類</th>
                      <td colspan="4">{{ general.facilityType }}</td>
                    </tr>
                    <tr>
                      <th>
                        関連施設番号<br />
                        又は施設名
                      </th>
                      <td colspan="4">{{ general.relatedFaciliyies }}</td>
                    </tr>
                    <tr>
                      <th>平面線形</th>
                      <td colspan="4">{{ general.planeTrack }}</td>
                    </tr>
                    <tr>
                      <th>曲率半径</th>
                      <td colspan="4">R={{ general.radius }}</td>
                    </tr>
                    <tr>
                      <th rowspan="2">縦断・横断勾配</th>
                      <th>縦断</th>
                      <td colspan="3">{{ general.cuttingAcross }}</td>
                    </tr>
                    <tr>
                      <th>横断</th>
                      <td colspan="3">{{ general.crossing }}</td>
                    </tr>
                    <tr>
                      <th rowspan="8">道路環境</th>
                      <th>トンネル等級</th>
                      <td colspan="3">{{ general.tunnelRank }}</td>
                    </tr>
                    <tr>
                      <th rowspan="2">事前規制</th>
                      <td colspan="3">{{ general.regulation }}</td>
                    </tr>
                    <tr>
                      <th>規制基準</th>
                      <td colspan="2">{{ general.regulationStandard }}mm</td>
                    </tr>
                    <tr>
                      <th rowspan="2">交通量</th>
                      <th>平日総量</th>
                      <td>{{ general.weekdayValue }}</td>
                      <th>台/12h</th>
                    </tr>
                    <tr>
                      <th>休日総量</th>
                      <td>{{ general.holidayValue }}</td>
                      <th>台/12h</th>
                    </tr>
                    <tr>
                      <th rowspan="3">その他</th>
                      <th>バス路線</th>
                      <td colspan="2">{{ general.busRoute }}</td>
                    </tr>
                    <tr>
                      <th>迂回路</th>
                      <td colspan="2">{{ general.alternative }}</td>
                    </tr>
                    <tr>
                      <th>通学路</th>
                      <td colspan="2">{{ general.schoolRoute }}</td>
                    </tr>
                    <tr>
                      <th rowspan="2">施工年月</th>
                      <th>着工</th>
                      <td colspan="3">{{ general.commencementDate }}</td>
                    </tr>
                    <tr>
                      <th>竣工</th>
                      <td colspan="3">{{ general.completionDate }}</td>
                    </tr>
                    <tr>
                      <th rowspan="3">図書記録</th>
                      <th>竣工図</th>
                      <td colspan="3">{{ general.completionMap }}</td>
                    </tr>
                    <tr>
                      <th>設計計算書</th>
                      <td colspan="3">{{ general.designDocument }}</td>
                    </tr>
                    <tr>
                      <th>記事</th>
                      <td colspan="3">{{ general.note }}</td>
                    </tr>
                  </tbody>
                </v-table>
                <!--事業費等-->
                <v-table density="compact">
                  <thead>
                    <tr>
                      <th colspan="3">事業費等</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>協定協議</th>
                      <td colspan="2">{{ costs.agreement }}</td>
                    </tr>
                    <tr>
                      <th rowspan="2">事業費</th>
                      <th>事業費</th>
                      <td>{{ costs.projectCost }}</td>
                    </tr>
                    <tr>
                      <th>用地費・その他</th>
                      <td>{{ costs.landCost }}</td>
                    </tr>
                    <tr>
                      <th>設計業者</th>
                      <td colspan="2">{{ costs.designer }}</td>
                    </tr>
                    <tr>
                      <th>施工業者</th>
                      <td colspan="2">{{ costs.constructor }}</td>
                    </tr>
                  </tbody>
                </v-table>
              </v-col>
              <v-col md="4">
                <!--構造物環境-->
                <v-table density="compact">
                  <thead>
                    <tr>
                      <th colspan="3">構造物環境</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>地域区分</th>
                      <td colspan="2">{{ environment.areaType }}</td>
                    </tr>
                    <tr>
                      <th rowspan="2">地形</th>
                      <td colspan="2">{{ environment.terrain1 }}</td>
                    </tr>
                    <tr>
                      <td colspan="2">{{ environment.terrain2 }}</td>
                    </tr>
                    <tr>
                      <th>地質</th>
                      <td>
                        <v-sheet>基礎地盤</v-sheet>
                        <v-sheet>{{ environment.BaseSite }}</v-sheet>
                      </td>
                      <td>
                        <v-sheet>背面</v-sheet>
                        <v-sheet>{{ environment.BackSite }}</v-sheet>
                      </td>
                    </tr>
                    <tr>
                      <th>背面状態</th>
                      <td colspan="2">{{ environment.backCondition }}</td>
                    </tr>
                    <tr>
                      <th>前面状態</th>
                      <td colspan="2">{{ environment.frontContition }}</td>
                    </tr>
                    <tr>
                      <th>湧水</th>
                      <td colspan="2">{{ environment.spring }}</td>
                    </tr>
                    <tr>
                      <th>地下水位</th>
                      <td colspan="2">{{ environment.groundwater }}</td>
                    </tr>
                    <tr>
                      <th>土被り</th>
                      <td colspan="2">{{ environment.landFogged }}</td>
                    </tr>
                  </tbody>
                </v-table>
                <!--耐震設計-->
                <v-table density="compact">
                  <thead>
                    <tr>
                      <th colspan="2">耐震設計</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>適用基準</th>
                      <td>{{ resistantEarthquakes.criterion }}</td>
                    </tr>
                    <tr>
                      <th>耐震設計の有無</th>
                      <td>{{ resistantEarthquakes.design }}</td>
                    </tr>
                    <tr>
                      <th>設計震度</th>
                      <td>{{ resistantEarthquakes.scale }}</td>
                    </tr>
                  </tbody>
                </v-table>
                <v-table density="compact">
                  <thead>
                    <tr>
                      <th colspan="5">地盤条件</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th colspan="2">ボーリング資料の有無</th>
                      <td>{{ ground.boring }}</td>
                      <th>箇所数</th>
                      <td>{{ ground.numbers }}</td>
                    </tr>
                    <tr>
                      <th>地質試験</th>
                      <td colspan="4">{{ ground.geology }}</td>
                    </tr>
                    <tr>
                      <th>基礎地盤の種類</th>
                      <td colspan="4">{{ ground.groundType }}</td>
                    </tr>
                  </tbody>
                </v-table>
                <!--液状化-->
                <v-table density="compact">
                  <thead>
                    <tr>
                      <th colspan="3">液状化</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>液状化の可能性</th>
                      <td colspan="2">{{ liquefaction.possibility }}</td>
                    </tr>
                    <tr>
                      <th rowspan="2">液状化対策</th>
                      <th>対策履歴の有無</th>
                      <td>{{ liquefaction.counterHistory }}</td>
                    </tr>
                    <tr>
                      <th>対策工の種類</th>
                      <td>{{ liquefaction.counrerType }}</td>
                    </tr>
                  </tbody>
                </v-table>
                <!--諸元等-->
                <v-table density="compact">
                  <thead>
                    <tr>
                      <th colspan="4">諸元等</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>設計覆工厚</th>
                      <td colspan="3">{{ elements.thick }}</td>
                    </tr>
                    <tr>
                      <th>インバート</th>
                      <td colspan="3">{{ elements.invert }}</td>
                    </tr>
                    <tr>
                      <th rowspan="2">舗装厚さ・種類</th>
                      <th>厚さ:</th>
                      <td colspan="2">{{ elements.paveThick }}</td>
                    </tr>
                    <tr>
                      <th>種類:</th>
                      <td colspan="3">{{ elements.paveType }}</td>
                    </tr>
                    <tr>
                      <th rowspan="2">斜面情報</th>
                      <th rowspan="2">
                        抗口付近の<br />
                        傾斜番号
                      </th>
                      <th>起点側</th>
                      <td>{{ elements.mineheadFrom }}</td>
                    </tr>
                    <tr>
                      <th>終点側</th>
                      <td>{{ elements.minegeadTo }}</td>
                    </tr>
                  </tbody>
                </v-table>
                <v-card elevation="0" class=" rounded-0">
                  <v-card-text class=" > pa-1">標準断面図</v-card-text>
                  <v-container>
                    <v-img :src="crossSectionView" />
                  </v-container>
                </v-card>
              </v-col>
              <v-col md="4">
                <!--構造物形態-->
                <v-table density="compact">
                  <thead>
                    <tr>
                      <th colspan="5">構造物形態</th>
                    </tr>
                    <tr>
                      <th rowspan="4">構造形式</th>
                      <th>トンネル部</th>
                      <td>{{ figure.tunnel }}</td>
                      <th rowspan="4">
                        主要部材<br />
                        主要材料
                      </th>
                      <td rowspan="4">{{ figure.sectionMaterial }}</td>
                    </tr>
                    <tr>
                      <th>掘割部</th>
                      <td>{{ figure.canal }}</td>
                    </tr>
                    <tr>
                      <th>擁壁部</th>
                      <td>{{ figure.retainingWall }}</td>
                    </tr>
                    <tr>
                      <th>その他</th>
                      <td>{{ figure.other }}</td>
                    </tr>
                    <tr>
                      <th>基礎構造</th>
                      <td colspan="4">{{ figure.structure }}</td>
                    </tr>
                  </thead>
                </v-table>
                <!--主な附属設備-->
                <v-table density="compact">
                  <thead>
                    <tr>
                      <th colspan="4">主な附属設備</th>
                    </tr>
                    <tr>
                      <th>種類</th>
                      <th>設置数</th>
                      <th>調査年月</th>
                      <th>備考</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, i) in equipment" :key="i">
                      <th>{{ item.title }}</th>
                      <td>{{ item.numbers }}</td>
                      <td>{{ item.date }}</td>
                      <td>{{ item.note }}</td>
                    </tr>
                    <tr>
                      <th colspan="2">排煙設備または避難経路</th>
                      <td colspan="2">{{ evacuation }}</td>
                    </tr>
                    <tr>
                      <th colspan="2">水噴霧設備</th>
                      <td colspan="2">{{ waterSpray }}</td>
                    </tr>
                    <tr>
                      <th colspan="2">排水方式</th>
                      <td colspan="2">{{ drainage }}</td>
                    </tr>
                    <tr>
                      <th colspan="2">自家発電設備</th>
                      <td colspan="2">{{ generation }}</td>
                    </tr>
                  </tbody>
                </v-table>
                <!--特記事項-->
                <v-table density="compact">
                  <thead>
                    <tr>
                      <th>特記事項</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{{ mention }}</td>
                    </tr>
                  </tbody>
                </v-table>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      //DBのテーブル、カラムが判明次第修正
      general: {
        locationFrom: null,
        locationTo: null,
        routeName: '一般国道131号',
        routeNickName: null,
        waypointFrom: null,
        waypointTo: null,
        latFrom: '00°00’00.0',
        lngFrom: '000°00’00.0',
        latTo: '00°00’00.0',
        lngTo: '000°00’00.0',
        totalLength: null,
        tunnelLength: null,
        ditchLength: null,
        roadWidth: null,
        lSIdeWalkWidth: null,
        rSideWalkWidth: null,
        otherWidth: null,
        facilityType: '単独構造・複合構造',
        relatedFaciliyies: null,
        planeTrack: '1.直　2.写　3.曲　4.多角(多心曲)',
        radius: null,
        crossing: null,
        cuttingAcross: null,
        tunnelRank: null,
        regulation: '有(通行・特殊)・無',
        regulationStandard: null,
        weekdayValue: null,
        holidayValue: null,
        busRoute: '有・無',
        alternative: '有・無',
        schoolRoute: '有・無',
        commencementDate: ' 年 月',
        completionDate: ' 年 月',
        completionMap: '有・無・一部有(     )・不明',
        designDocument: '有・無・一部有(     )・不明',
        note: null,
      },
      costs: {
        agreement: null,
        projectCost: null,
        landCost: null,
        designer: null,
        constructor: null,
      },
      environment: {
        areaType: '市街地　郊外　山岳　その他',
        terrain1: '山地　平坦地　（切土　盛土　切盛境部）',
        terrain2: '地すべり　集水地形　その他',
        BaseSite: null,
        BackSite: null,
        backCondition: '道路　山地　耕地　宅地　その他',
        frontContition: '道路　山地　耕地　宅地　その他',
        spring: '有　無　その他',
        groundwater: 'DLまたはGL  ｍ',
        landFogged: null,
      },
      resistantEarthquakes: {
        criterion: null,
        design: '有・無',
        scale: 'KH=   KV=   '
      },
      ground: {
        boring: '有 無',
        numbers: null,
        geology: '有・無',
        groundType: null,
      },
      liquefaction: {
        possibility: '高い　ある　低い',
        counterHistory: '有　無',
        counrerType: null,
      },
      elements: {
        thick: null,
        invert: '有・無',
        paveThick: null,
        paveType: null,
        mineheadFrom: null,
        minegeadTo: null,
      },
      crossSectionView: null,
      figure: {
        tunnel: null,
        canal: null,
        retainingWall: null,
        other: null,
        sectionMaterial: null,
        structure: '直接基盤　杭基礎(　　　　　)　その他　不明',
      },
      equipment: [
        {
          title: '照明設備',
          numbers: null,
          date: null,
          note: '(種別)'
        },
        {
          title: '換気設備',
          numbers: null,
          date: null,
          note: '(換気方式)'
        },
        {
          title: '標識版',
          numbers: null,
          date: null,
          note: null
        },
        {
          title: '内装板',
          numbers: null,
          date: null,
          note: null
        },
        {
          title: '吸音板',
          numbers: null,
          date: null,
          note: null
        },
        {
          title: null,
          numbers: null,
          date: null,
          note: null,
        },
        {
          title: null,
          numbers: null,
          date: null,
          note: null,
        },
        {
          title: null,
          numbers: null,
          date: null,
          note: null,
        },
      ],
      evacuation: '有　無',
      waterSpray: '有　無',
      drainage: '自然流下',
      generation: '有　無',
      mention: null,
    }
  }
})
</script>