<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <fbg-side-card-details />
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
            <v-col md="9" cols="12">
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
                  </v-row>
                  <v-row no-gutters>
                    <v-col
                      v-for="imgDetail in imgDetails"
                      :key="imgDetail.img"
                      
                      md="6"
                      cols="12"
                    >
                      <v-card
                        class="rounded-0"
                        @click="setmap(imgDetail.damagemap)">
                        <v-table density="compact">
                          <tbody>
                            <tr>
                              <th class="ledger-cell">径間番号</th>
                              <td class="ledger-cell bg-pink-lighten-5">{{imgDetail.trackNumber}}</td>
                              <th class="ledger-cell">写真番号</th>
                              <td class="ledger-cell bg-pink-lighten-5">{{imgDetail.imgNumber}}</td>
                            </tr>
                            <tr>
                              <th class="ledger-cell">部材名</th>
                              <td class="ledger-cell bg-pink-lighten-5">{{imgDetail.cmpName}}</td>
                              <th class="ledger-cell">損傷の種類</th>
                              <td class="ledger-cell bg-pink-lighten-5">{{imgDetail.damageType}}</td>
                            </tr>
                            <tr>
                              <th class="ledger-cell">状況</th>
                              <td class="ledger-cell bg-pink-lighten-5">{{imgDetail.situation}}</td>
                              <th class="ledger-cell">判定</th>
                              <td class="ledger-cell bg-pink-lighten-5">{{imgDetail.judgment}}</td>
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
      select: {number: 1},
      numbers: [1,2,3,4,5],
      imgDetails:[
        {
          img: '../../assets/img/dmg/fbg4inspect1.jpg',
          damagemap:'../../assets/img/dmg/damagemap1.jpg',
          trackNumber: 1,
          cmpName: '橋名板（漢字）',
          situation: '-',
          imgNumber: 1,
          damageType: '(状況)',
          judgment: '-',
        },
        {
          img: '../../assets/img/dmg/fbg4inspect2.jpg',
          damagemap:'../../assets/img/dmg/damagemap2.jpg',
          trackNumber: 1,
          cmpName: '橋名板（かな）',
          situation: '-',
          imgNumber: 2,
          damageType: '(状況)',
          judgment: '-',
        },
        {
          img: '../../assets/img/dmg/fbg4inspect3.jpg',
          damagemap:'../../assets/img/dmg/damagemap3.jpg',
          trackNumber: 1,
          cmpName: '橋歴板',
          situation: '-',
          imgNumber: 3,
          damageType: '(状況)',
          judgment: '-',
        },
        {
          img: '../../assets/img/dmg/fbg4inspect4.jpg',
          damagemap:'../../assets/img/dmg/damagemap4.jpg',
          trackNumber: 1,
          cmpName: '橋歴板',
          situation: '-',
          imgNumber: 4,
          damageType: '(状況)',
          judgment: '-',
        },
        {
          img: '../../assets/img/dmg/fbg4inspect5.jpg',
          damagemap:'../../assets/img/dmg/damagemap4.jpg',
          trackNumber: 1,
          cmpName: '下面',
          situation: '-',
          imgNumber: 5,
          damageType: '(状況)',
          judgment: '-',
        },
        {
          img: '../../assets/img/dmg/fbg4inspect6.jpg',
          damagemap:'../../assets/img/dmg/damagemap4.jpg',
          trackNumber: 1,
          cmpName: '主桁',
          situation: '表面積_中',
          imgNumber: 6,
          damageType: '腐食',
          judgment: 'b',
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