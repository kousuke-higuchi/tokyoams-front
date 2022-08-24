<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <underground-walkway-side-card-details />
      </v-col>
      <v-col md="9" cols="12">
        <v-card elevation="3">
          <v-row no-gutters>
            <v-col md="6" cols="12">
              <v-card class="elevation-0 rounded-0">
                <v-card-text class="border text-center text-h6 pa-1 rounded-0 elevation-0 bg-grey-lighten-3">施設位置図
                </v-card-text>
                <v-container class="border">
                  <v-img :src="facilityPositionImg" />
                  <v-card-text class="pa-1">(ファイル名:{{ positionImgName }})</v-card-text>
                </v-container>
              </v-card>
              <!--占用物件調書テーブル-->
              <v-table density="compact" :style="{ whiteSpace: 'nowrap' }">
                <thead>
                  <tr>
                    <th class="border bg-grey-lighten-3 text-center" colspan="5">占有物件調書</th>
                  </tr>
                  <tr>
                    <th class="border bg-grey-lighten-3 text-center">許可年月日</th>
                    <th class="border bg-grey-lighten-3 text-center">占用者</th>
                    <th class="border bg-grey-lighten-3 text-center">種類及び数量</th>
                    <th class="border bg-grey-lighten-3 text-center">重量</th>
                    <th class="border bg-grey-lighten-3 text-center">連絡先</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in privateObjects" :key="i">
                    <td class="border">{{ item.permitDate }}</td>
                    <td class="border">{{ item.occupier }}</td>
                    <td class="border">{{ item.volume }}</td>
                    <td class="border">{{ item.weight }}</td>
                    <td class="border">{{ item.contact }}</td>
                  </tr>
                </tbody>
              </v-table>
              <!--定期点検判定結果テーブル-->
              <v-table density="compact" :style="{ whiteSpace: 'nowrap' }">
                <thead>
                  <tr>
                    <th class="border bg-grey-lighten-3 text-center" colspan="4">定期点検判定結果(本体・附属物)</th>
                  </tr>
                  <tr>
                    <th class="border bg-grey-lighten-3 text-center">調査年月</th>
                    <th class="border bg-grey-lighten-3 text-center">調査対象</th>
                    <th class="border bg-grey-lighten-3 text-center">判定結果</th>
                    <th class="border bg-grey-lighten-3 text-center">判定対象スパン番号</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in inspections" :key="i">
                    <td class="border">{{ item.inspDate }}</td>
                    <td class="border">{{ item.inspFacility }}</td>
                    <td class="border">{{ item.judgement }}</td>
                    <td class="border">{{ item.judgeSpanNum }}</td>
                  </tr>
                </tbody>
              </v-table>
              <!--補修・詳細調査調書-->
              <v-table density="compact" :style="{ whiteSpace: 'nowrap' }">
                <thead>
                  <tr>
                    <th class="border bg-grey-lighten-3 text-center" colspan="2">補修・詳細調査調書</th>
                  </tr>
                  <tr>
                    <th class="border bg-grey-lighten-3 text-center">年月</th>
                    <th class="border bg-grey-lighten-3 text-center">件名・工事名</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in repairs" :key="i">
                    <td class="border">{{ item.repairDate }}</td>
                    <td class="border">{{ item.fortificationName }}</td>
                  </tr>
                </tbody>
              </v-table>
            </v-col>
            <v-col md="6" cols="12">
              <!--点検事項テーブル-->
              <v-table density="compact" :style="{ whiteSpace: 'nowrap' }">
                <thead>
                  <tr>
                    <th class="border bg-grey-lighten-3 text-center" colspan="4">点検事項</th>
                  </tr>
                  <tr>
                    <th class="border bg-grey-lighten-3 text-center">調査年月</th>
                    <th class="border bg-grey-lighten-3 text-center">調査記事</th>
                    <th class="border bg-grey-lighten-3 text-center">点検者名</th>
                    <th class="border bg-grey-lighten-3 text-center">点検会社名</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in inspectionMatters" :key="i">
                    <td class="border">{{ item.date }}</td>
                    <td class="border">{{ item.note }}</td>
                    <td class="border">{{ item.inspector }}</td>
                    <td class="border">{{ item.company }}</td>
                  </tr>
                </tbody>
              </v-table>
              <!--舗装・斜面・詳細調査-->
              <v-table density="compact">
                <thead>
                  <tr>
                    <th class="border bg-grey-lighten-3 text-center" colspan="6">舗装・斜面・詳細調査</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th class="border bg-grey-lighten-3 text-center" nowrap colspan="2" rowspan="2">舗装厚さ・種類</th>
                    <th class="border bg-grey-lighten-3 text-center" nowrap>厚さ</th>
                    <td class="border" nowrap colspan="2">{{ paveSlpDetails.thick }}</td>
                    <th class="border bg-grey-lighten-3 text-center" :style="{ minWidth: '30em' }">備考欄</th>
                  </tr>
                  <tr>
                    <th class="border bg-grey-lighten-3 text-center" nowrap>種類</th>
                    <td class="border" nowrap colspan="2">{{ paveSlpDetails.type }}</td>
                    <td class="border" rowspan="12">{{ paveSlpDetails.note }}</td>
                  </tr>
                  <tr>
                    <th class="border bg-grey-lighten-3 text-center" nowrap colspan="2" rowspan="2">斜面情報</th>
                    <th class="border bg-grey-lighten-3 text-center" nowrap rowspan="2">坑口付近<br />の斜面番号</th>
                    <th class="border bg-grey-lighten-3 text-center" nowrap>起点側</th>
                    <td class="border" nowrap>{{ paveSlpDetails.slpNoFrom }}</td>
                  </tr>
                  <tr>
                    <th class="border bg-grey-lighten-3 text-center" nowrap>終点側</th>
                    <td class="border">{{ paveSlpDetails.slpNoTo }}</td>
                  </tr>
                  <tr>
                    <th class="border bg-grey-lighten-3 text-center" nowrap rowspan="9">詳細<br />調査</th>
                    <th class="border bg-grey-lighten-3" nowrap colspan="2">画像計測</th>
                    <td class="border" nowrap colspan="2">{{ paveSlpDetails.ImgMeasure }}</td>
                  </tr>
                  <tr>
                    <th class="border bg-grey-lighten-3" nowrap colspan="2">覆工背面調査</th>
                    <td class="border" nowrap colspan="2">{{ paveSlpDetails.BackOfOverlay }}</td>
                  </tr>
                  <tr>
                    <th class="border bg-grey-lighten-3" nowrap colspan="2">内空断面測量</th>
                    <td class="border" nowrap colspan="2">{{ paveSlpDetails.innerSection }}</td>
                  </tr>
                  <tr>
                    <th class="border bg-grey-lighten-3" nowrap colspan="2">最小覆工厚(cm)</th>
                    <td class="border" nowrap colspan="2">{{ paveSlpDetails.minThickOverlay }}</td>
                  </tr>
                  <tr>
                    <th class="border bg-grey-lighten-3" nowrap colspan="2">圧縮強度(N/mm2)<br />(設計基準強度 )</th>
                    <td class="border" nowrap colspan="2">{{ paveSlpDetails.strength }}</td>
                  </tr>
                  <tr>
                    <th class="border bg-grey-lighten-3" nowrap colspan="2">中性化深さ(mm)</th>
                    <td class="border" nowrap colspan="2">{{ paveSlpDetails.neutralization }}</td>
                  </tr>
                  <tr>
                    <th class="border bg-grey-lighten-3 text-center" nowrap rowspan="3">塩化物含有量<br />(kg/m3)</th>
                    <th class="border bg-grey-lighten-3" nowrap colspan="2">1.
                      {{ paveSlpDetails.content1From }}mm~{{ paveSlpDetails.content1To }}mm</th>
                    <td class="border">{{ paveSlpDetails.chlorideContent1 }}</td>
                  </tr>
                  <tr>
                    <th class="border bg-grey-lighten-3" nowrap colspan="2">2.
                      {{ paveSlpDetails.content2From }}mm~{{ paveSlpDetails.content2To }}mm</th>
                    <td class="border">{{ paveSlpDetails.chlorideContent2 }}</td>
                  </tr>
                  <tr>
                    <th class="border bg-grey-lighten-3" nowrap colspan="2">3.
                      {{ paveSlpDetails.content2From }}mm~{{ paveSlpDetails.content2To }}mm</th>
                    <td class="border">{{ paveSlpDetails.chlorideContent3 }}</td>
                  </tr>
                </tbody>
              </v-table>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      //DBのテーブルカラムが判明次第、修正する
      facilityPositionImg: null,
      positionImgName: null,
      privateObjects: [
        {
          permitDate: null,
          occupier: null,
          volume: null,
          weight: null,
          contact: null,
        },
        {
          permitDate: null,
          occupier: null,
          volume: null,
          weight: null,
          contact: null,
        },
        {
          permitDate: null,
          occupier: null,
          volume: null,
          weight: null,
          contact: null,
        },
        {
          permitDate: null,
          occupier: null,
          volume: null,
          weight: null,
          contact: null,
        },
        {
          permitDate: null,
          occupier: null,
          volume: null,
          weight: null,
          contact: null,
        },
        {
          permitDate: null,
          occupier: null,
          volume: null,
          weight: null,
          contact: null,
        },
      ],
      inspections: [
        {
          inspDate: null,
          inspFacility: null,
          judgement: null,
          judgeSpanNum: null,
        },
        {
          inspDate: null,
          inspFacility: null,
          judgement: null,
          judgeSpanNum: null,
        },
        {
          inspDate: null,
          inspFacility: null,
          judgement: null,
          judgeSpanNum: null,
        },
        {
          inspDate: null,
          inspFacility: null,
          judgement: null,
          judgeSpanNum: null,
        },
        {
          inspDate: null,
          inspFacility: null,
          judgement: null,
          judgeSpanNum: null,
        },
        {
          inspDate: null,
          inspFacility: null,
          judgement: null,
          judgeSpanNum: null,
        },
      ],
      repairs: [
        {
          repairDate: null,
          fortificationName: null,
        },
        {
          repairDate: null,
          fortificationName: null,
        },
        {
          repairDate: null,
          fortificationName: null,
        },
        {
          repairDate: null,
          fortificationName: null,
        },
        {
          repairDate: null,
          fortificationName: null,
        },
        {
          repairDate: null,
          fortificationName: null,
        },
      ],
      inspectionMatters: [
        {
          date: null,
          note: null,
          inspector: null,
          company: null,
        },
        {
          date: null,
          note: null,
          inspector: null,
          company: null,
        },
        {
          date: null,
          note: null,
          inspector: null,
          company: null,
        },
        {
          date: null,
          note: null,
          inspector: null,
          company: null,
        },
        {
          date: null,
          note: null,
          inspector: null,
          company: null,
        },
        {
          date: null,
          note: null,
          inspector: null,
          company: null,
        },
        {
          date: null,
          note: null,
          inspector: null,
          company: null,
        },
      ],
      paveSlpDetails: {
        thick: null,
        type: null,
        slpNoFrom: null,
        slpNoTo: null,
        ImgMeasure: null,
        BackOfOverlay: null,
        innerSection: null,
        minThickOverlay: null,
        strength: null,
        neutralization: null,
        content1From: null,
        content1To: null,
        content2From: null,
        content2To: null,
        content3From: null,
        content3To: null,
        chlorideContent1: null,
        chlorideContent2: null,
        chlorideContent3: null,
        note: null,
      },
    }
  }
})

</script>