<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <side-card-details></side-card-details>
      </v-col>
      <v-col md="9" cols="12">
        <v-card>
          <div class="d-flex">
            <v-row>
              <v-col><v-card-title>橋梁名：サンプル橋　管理事務所：A事務所 管理工区：B工区</v-card-title></v-col>
            </v-row>
            <v-btn color="primary"
              href="/bridge"
            >
              施設選択画面へ戻る
            </v-btn>
          </div>
          <v-row no-gutters class="ma-1">
            <v-col md="6" cols="12">
              <v-card>
                <v-card-text>
                  <v-row no-gutters>
                    <v-col md="2" cols="12">
                      <v-card-text>径間番号</v-card-text>
                    </v-col>
                    <v-col md="2" cols="12">
                      <v-select
                        v-model="select.number"
                        :items="numbers"
                        item-title="select.number"
                        variant="outlined"
                        density="compact"
                        hide-details="false"
                      ></v-select>
                    </v-col>
                    <v-col md="2" cols="12" class="d-flex">
                      <v-card-text>損傷名</v-card-text>
                    </v-col>
                    <v-col md="2" cols="12">
                      <v-select
                        v-model="select.damageName"
                        :items="damageNames"
                        item-title="select.damageName"
                        variant="outlined"
                        density="compact"
                        hide-details="false"
                      ></v-select>
                    </v-col>
                    <v-col md="2" cols="12" class="d-flex">
                      <v-card-text>損傷ランク</v-card-text>
                    </v-col>
                    <v-col md="2" cols="12">
                      <v-select
                        v-model="select.damageRank"
                        :items="damageRank"
                        item-title="select.damageRank"
                        variant="outlined"
                        density="compact"
                        hide-details="false"
                      ></v-select>
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col
                      v-for="imgDetail in imgDetails"
                      :key="imgDetail.img"
                      class="detailCard"
                      md="6"
                      cols="12"
                    >
                      <v-card
                        class="rounded-0"
                        @click="setmap(imgDetail.damagemap)">
                        <v-table density="compact">
                          <tbody>
                            <tr>
                              <td class="cell">径間番号</td>
                              <td class="cell bg-pink-lighten-5">{{imgDetail.trackNumber}}</td>
                              <td class="cell">写真番号</td>
                              <td class="cell bg-pink-lighten-5">{{imgDetail.imgNumber}}</td>
                            </tr>
                            <tr>
                              <td class="cell">部材名</td>
                              <td class="cell bg-pink-lighten-5">{{imgDetail.cmpName}}</td>
                              <td class="cell">損傷の種類</td>
                              <td class="cell bg-pink-lighten-5">{{imgDetail.damageType}}</td>
                            </tr>
                            <tr>
                              <td class="cell">状況</td>
                              <td class="cell bg-pink-lighten-5">{{imgDetail.situation}}</td>
                              <td class="cell">判定</td>
                              <td class="cell bg-pink-lighten-5">{{imgDetail.judgment}}</td>
                            </tr>
                          </tbody>
                        </v-table>
                        <v-img :src="imgDetail.img" ></v-img>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col md="6" cols="12">
              <v-card>
                <v-card-title>
                  損傷図
                </v-card-title>
                <v-img
                  :src="dmgmap"></v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { continueStatement } from "@babel/types";

export default defineComponent({
  data() {
    return{
      dmgmap:'../../assets/img/dmg/damagemap1.jpg',
      select: {number: 1, damageName: '腐食',damageRank: 'a'},
      numbers: [1,2,3,4,5],
      damageNames:['腐食','亀裂','ゆるみ','脱落','破断','塗装劣化','ひびわれ','剥離・鉄筋露出','遊離石灰','豆板・空洞','すりへり・浸食','抜け落ち','鋼板接着部の損傷','床版・ひびわれ','段差・コルゲーション','ポットホール','舗装ひびわれ','わだち掘れ','遊間の異常','変色・劣化','漏水・滞水','異常音','異常振動','異常たわみ','変形','土砂詰り・土砂滞り','沈下','移動・ずれ','傾斜','洗掘','欠損','その他','不明'],
      damageRank:['a','b','c','d','e'],
      imgDetails:[
        {
          img: '../../assets/img/dmg/brg1dmg1.jpg',
          damagemap:'../../assets/img/dmg/damagemap1.jpg',
          trackNumber: 1,
          cmpName: '橋名板（漢字）',
          situation: '-',
          imgNumber: 1,
          damageType: '(状況)',
          judgment: '-',
        },
        {
          img: '../../assets/img/dmg/brg1dmg2.jpg',
          damagemap:'../../assets/img/dmg/damagemap2.jpg',
          trackNumber: 1,
          cmpName: '橋名板（かな）',
          situation: '-',
          imgNumber: 2,
          damageType: '(状況)',
          judgment: '-',
        },
        {
          img: '../../assets/img/dmg/brg1dmg3.jpg',
          damagemap:'../../assets/img/dmg/damagemap3.jpg',
          trackNumber: 1,
          cmpName: '橋歴板',
          situation: '-',
          imgNumber: 3,
          damageType: '(状況)',
          judgment: '-',
        },
        {
          img: '../../assets/img/dmg/brg1dmg4.jpg',
          damagemap:'../../assets/img/dmg/damagemap4.jpg',
          trackNumber: 1,
          cmpName: '橋歴板',
          situation: '-',
          imgNumber: 4,
          damageType: '(状況)',
          judgment: '-',
        },
      ]
    }
  },
  methods: {
    setmap(damagemap){
      this.dmgmap = damagemap;
    }
  },
})
</script>

<style scoped>
.detailCard{
  padding: 0;
  border:1px solid black;
}
.cell{
  border:0.5px solid black;
}
</style>