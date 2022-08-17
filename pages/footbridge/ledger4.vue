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
                <v-card-text align="right">様式-4</v-card-text>
              </v-col>
            </v-row>
          </div>
          <div class="d-flex">
            <v-row>
              <v-col>
                <v-card-title>写真台帳　橋梁番号　01130010　橋梁名　青葉歩道橋</v-card-title>
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
                              <td class="cell" align = "center">{{ imgDetail.picTitle }}</td>
                              <td v-if="imgDetail.imgNumber != 1" class="cell">
                              <div align ="center">{{ imgDetail.number }}</div></td>
                            </tr>
                          </tbody>
                        </v-table>
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
          img: '../../assets/img/dmg/fbg4view1.jpg',
          damagemap: '../../assets/img/dmg/damagemap1.jpg',
          imgNumber: 1,
          picTitle:'撮影方向案内図',
        },
        {
          img: '../../assets/img/dmg/fbg4view2.jpg',
          damagemap: '../../assets/img/dmg/damagemap2.jpg',
          imgNumber: 2,
          picTitle:'撮影方向',
          number:'[No 1]',
        },
        {
          img: '../../assets/img/dmg/fbg4view3.jpg',
          damagemap: '../../assets/img/dmg/damagemap3.jpg',
          imgNumber: 3,
          picTitle:'撮影方向',
          number:'[No 2]',
        },
        {
          img: '../../assets/img/dmg/fbg4view4.jpg',
          damagemap: '../../assets/img/dmg/damagemap4.jpg',
          imgNumber: 4,
          picTitle:'撮影方向',
          number:'[No 3]',
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
</style>