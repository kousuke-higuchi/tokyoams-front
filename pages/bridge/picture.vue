<template>
  <v-row>
    <v-col md="3" cols="12">
      <bridge-side-card-details />
    </v-col>
    <v-col md="9" cols="12">
      <v-card elevation="3">
        <div class="d-flex">
          <v-card-title>
            <div class="font-weight-bold">現地状況写真</div>
          </v-card-title>
          <v-card-actions>
            <v-select label="径間番号" v-model="select" :items="histItems" item-title="select" variant="outlined"
              density="compact" hide-details="false"></v-select>
          </v-card-actions>
        </div>
        <v-card-text>
          <v-row no-gutters>
            <v-col v-for="picture in pictures" :key="picture.img" md="6" cols="12">
              <v-card class="rounded-0">
                <v-table density="compact">
                  <tbody>
                    <tr>
                      <th class="cell" align="center" width="100">径間番号</th>
                      <td class="cell" align="center" width="50">1</td>
                      <th class="cell" align="center" width="100">写真番号</th>
                      <td class="cell" align="center" width="50">{{ picture.no }}</td>
                      <th class="cell" align="center" width="100">写真説明</th>
                      <td class="cell" align="center">{{ picture.description }}</td>
                    </tr>
                  </tbody>
                </v-table>
                <v-img :src=picture.img></v-img>
                <v-table density="compact">
                  <tbody>
                    <tr>
                      <th class="cell" align="center" width="80">備考</th>
                      <td class="cell"></td>
                      <th class="cell" align="center" width="80">撮影日</th>
                      <td class="cell" align="center" width="180">{{ picture.createDate }}</td>
                    </tr>
                  </tbody>
                </v-table>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { continueStatement } from "@babel/types";

export default defineComponent({
  data() {
    return {
      select: '全て',
      histItems: ['全て', '1'],
      pictures: [
        {
          img: '../../assets/img/dmg/bridgeDetail2_7_1.jpg',
          no: 1,
          description: '全景',
          createDate: '2017年10月25日'
        },
        {
          img: '../../assets/img/dmg/bridgeDetail2_7_2.jpg',
          no: 2,
          description: '橋面(起点側)',
          createDate: '2017年10月25日'
        },
        {
          img: '../../assets/img/dmg/bridgeDetail2_7_3.jpg',
          no: 3,
          description: '下面および下部工',
          createDate: '2017年10月25日'
        },
        {
          img: '../../assets/img/dmg/bridgeDetail2_7_4.jpg',
          no: 4,
          description: '橋面(終点側)',
          createDate: '2017年10月25日'
        },
      ]
    }
  },
  methods: {
    setmap(damagemap) {
      this.dmgmap = damagemap;
    },
    // getImageUrl(filePath){
    //    return new URL(filePath, import.meta.url).href
    // }
  },
})
</script>

<style scoped>
.detailCard {
  padding: 0;
  border: 0.5px solid black;
}

.cell {
  border: 0.5px solid black;
}
</style>