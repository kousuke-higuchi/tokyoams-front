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
              <v-col md="6" cols="12">
                <v-card class="elevation-0 rounded-0">
                  <v-card-text class="text-center bg-grey-lighten-3 border">施設位置図</v-card-text>
                  <v-container class="border rfaCardText">
                    <v-img :src="facilityPositionImg" />
                    <v-card-text class="pa-1">(ファイル名:{{ positionImgName }})</v-card-text>
                  </v-container>
                </v-card>
                <!--占用物件調書テーブル-->
                <v-table density="compact">
                  <thead>
                    <tr>
                      <th colspan="5">占有物件調書</th>
                    </tr>
                    <tr>
                      <th>許可年月日</th>
                      <th>占用者</th>
                      <th>種類及び数量</th>
                      <th>重量</th>
                      <th>連絡先</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, i) in privateObjects" :key="i">
                      <td>{{ item.permitDate }}</td>
                      <td>{{ item.occupier }}</td>
                      <td>{{ item.volume }}</td>
                      <td>{{ item.weight }}</td>
                      <td>{{ item.contact }}</td>
                    </tr>
                  </tbody>
                </v-table>
                <!--定期点検判定結果テーブル-->
                <v-table density="compact">
                  <thead>
                    <tr>
                      <th colspan="4">定期点検判定結果(本体・附属物)</th>
                    </tr>
                    <tr>
                      <th>調査年月</th>
                      <th>調査対象</th>
                      <th>判定結果</th>
                      <th>判定対象スパン番号</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, i) in inspections" :key="i">
                      <td>{{ item.inspDate }}</td>
                      <td>{{ item.inspFacility }}</td>
                      <td>{{ item.judgement }}</td>
                      <td>{{ item.judgeSpanNum }}</td>
                    </tr>
                  </tbody>
                </v-table>
                <!--補修・詳細調査調書-->
                <v-table density="compact">
                  <thead>
                    <tr>
                      <th colspan="2">補修・詳細調査調書</th>
                    </tr>
                    <tr>
                      <th>年月</th>
                      <th>件名・工事名</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, i) in repairs" :key="i">
                      <td>{{ item.repairDate }}</td>
                      <td>{{ item.fortificationName }}</td>
                    </tr>
                  </tbody>
                </v-table>
              </v-col>
              <v-col md="6" cols="12">
                <!--点検事項テーブル-->
                <v-table density="compact">
                  <thead>
                    <tr>
                      <th colspan="4">点検事項</th>
                    </tr>
                    <tr>
                      <th>調査年月</th>
                      <th>調査記事</th>
                      <th>点検者名</th>
                      <th>点検会社名</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, i) in inspectionMatters" :key="i">
                      <td>{{ item.date }}</td>
                      <td>{{ item.note }}</td>
                      <td>{{ item.inspector }}</td>
                      <td>{{ item.company }}</td>
                    </tr>
                  </tbody>
                </v-table>
                <!--舗装・斜面・詳細調査-->
                <v-table density="compact">
                  <thead>
                    <tr>
                      <th colspan="6">舗装・斜面・詳細調査</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th nowrap colspan="2" rowspan="2">舗装厚さ・種類</th>
                      <th nowrap>厚さ</th>
                      <td nowrap colspan="2">{{ paveSlpDetails.thick }}</td>
                      <th :style="{ minWidth: '30em' }">備考欄</th>
                    </tr>
                    <tr>
                      <th nowrap>種類</th>
                      <td nowrap colspan="2">{{ paveSlpDetails.type }}</td>
                      <td rowspan="12">{{ paveSlpDetails.note }}</td>
                    </tr>
                    <tr>
                      <th nowrap colspan="2" rowspan="2">斜面情報</th>
                      <th nowrap rowspan="2">坑口付近<br />の斜面番号</th>
                      <th nowrap>起点側</th>
                      <td nowrap>{{ paveSlpDetails.slpNoFrom }}</td>
                    </tr>
                    <tr>
                      <th nowrap>終点側</th>
                      <td>{{ paveSlpDetails.slpNoTo }}</td>
                    </tr>
                    <tr>
                      <th nowrap rowspan="9">詳細<br />調査</th>
                      <th nowrap colspan="2">画像計測</th>
                      <td nowrap colspan="2">{{ paveSlpDetails.ImgMeasure }}</td>
                    </tr>
                    <tr>
                      <th nowrap colspan="2">覆工背面調査</th>
                      <td nowrap colspan="2">{{ paveSlpDetails.BackOfOverlay }}</td>
                    </tr>
                    <tr>
                      <th nowrap colspan="2">内空断面測量</th>
                      <td nowrap colspan="2">{{ paveSlpDetails.innerSection }}</td>
                    </tr>
                    <tr>
                      <th nowrap colspan="2">最小覆工厚(cm)</th>
                      <td nowrap colspan="2">{{ paveSlpDetails.minThickOverlay }}</td>
                    </tr>
                    <tr>
                      <th nowrap colspan="2">圧縮強度(N/mm2)<br />(設計基準強度 )</th>
                      <td nowrap colspan="2">{{ paveSlpDetails.strength }}</td>
                    </tr>
                    <tr>
                      <th nowrap colspan="2">中性化深さ(mm)</th>
                      <td nowrap colspan="2">{{ paveSlpDetails.neutralization }}</td>
                    </tr>
                    <tr>
                      <th nowrap rowspan="3">塩化物含有量<br />(kg/m3)</th>
                      <th nowrap colspan="2">1.
                        {{ paveSlpDetails.content1From }}mm~{{ paveSlpDetails.content1To }}mm</th>
                      <td>{{ paveSlpDetails.chlorideContent1 }}</td>
                    </tr>
                    <tr>
                      <th nowrap colspan="2">2.
                        {{ paveSlpDetails.content2From }}mm~{{ paveSlpDetails.content2To }}mm</th>
                      <td>{{ paveSlpDetails.chlorideContent2 }}</td>
                    </tr>
                    <tr>
                      <th nowrap colspan="2">3.
                        {{ paveSlpDetails.content2From }}mm~{{ paveSlpDetails.content2To }}mm</th>
                      <td>{{ paveSlpDetails.chlorideContent3 }}</td>
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