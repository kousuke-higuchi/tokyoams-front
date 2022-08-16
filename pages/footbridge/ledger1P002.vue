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
              <v-col>
                <v-card-text>別紙2 様式1様式2 <span class = "alignRight">様式2</span><br>
                状況写真（損傷状況）<br>
                ○部材単位の判定区分がⅡ、Ⅲ又はⅣの場合には、直接関連する不具合の写真を記載のこと。<br>
                ○写真は、不具合の程度が分かるように添付すること。
                </v-card-text>
              </v-col>
            </v-row>
          </div>
          <v-row no-gutters class="ma-1">
            <v-col cols="12">
              <v-card>
                <v-card-text>
                  <v-row no-gutters>
                    <v-col v-for="imgDetail in imgDetails" :key="imgDetail.img" class="detailCard" md="6" cols="12">
                      <v-card class="rounded-0" @click="setmap(imgDetail.damagemap)">
                        <v-table density="compact">
                          <tbody>
                            <tr>
                              <td class="cell" align = "center">{{ imgDetail.dmageTitle }}</td>
                            </tr>
                          </tbody>
                        </v-table>
                        <v-card-text>{{imgDetail.picTitle}}</v-card-text>
                        <v-card-text>
                        <v-img :src="imgDetail.img"></v-img>
                        </v-card-text>
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
    return {
      dmgmap: '../../assets/img/dmg/damagemap1.jpg',
      imgDetails: [
        {
          img: '../../assets/img/dmg/fbg1P002view1.jpg',
          damagemap: '../../assets/img/dmg/damagemap1.jpg',
          imgNumber: 1,
          picTitle:'写真1',
          dmageTitle:'下部構造（根巻きコンクリート）【判定区分：Ⅱ】',
        },
        {
          img: '../../assets/img/dmg/fbg1P002view2.jpg',
          damagemap: '../../assets/img/dmg/damagemap2.jpg',
          imgNumber: 2,
          picTitle:'写真2',
          dmageTitle:'階段部（主桁）【判定区分：Ⅱ】',
        },
        {
          img: '../../assets/img/dmg/fbg1P002view3.jpg',
          damagemap: '../../assets/img/dmg/damagemap3.jpg',
          imgNumber: 3,
          picTitle:'写真3',
          dmageTitle:'階段部（主桁との接合部）【判定区分：Ⅱ】',
        },
        {
          img: '../../assets/img/dmg/fbg1P002view4.jpg',
          damagemap: '../../assets/img/dmg/damagemap4.jpg',
          imgNumber: 4,
          picTitle:'写真4',
          dmageTitle:'階段部（橋台）【判定区分：Ⅱ】',
        },
      ]
    }
  },
  methods: {
    setmap(damagemap) {
      this.dmgmap = damagemap;
    }
  },
})
</script>

<style scoped>
.detailCard {
  padding: 0;
  border: 1px solid black;
}

.cell {
  border: 0.5px solid black;
}

.alignRight {
    float: right;
}
</style>