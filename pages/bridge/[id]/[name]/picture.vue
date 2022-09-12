<template>
  <v-row>
    <v-col v-bind:md="child_extend?3:0" cols="12">
    <!-- <p> {{ child_extend }}</p> -->
      <bridge-side-card-details @isExtend='child_extend = $event' />
    </v-col>
    <v-col v-bind:md="child_extend?9:12" cols="12">
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
                      <th class="cell text-center" style="width: 100px">径間番号</th>
                      <td class="cell text-center" style="width: 50px">1</td>
                      <th class="cell text-center" style="width: 100px">写真番号</th>
                      <td class="cell text-center" style="width: 50px">{{ picture.no }}</td>
                      <th class="cell text-center" style="width: 100px">写真説明</th>
                      <td class="cell text-center">{{ picture.description }}</td>
                    </tr>
                  </tbody>
                </v-table>
                <v-img :src="picture.img"></v-img>
                <v-table density="compact">
                  <tbody>
                    <tr>
                      <th class="cell text-center" style="width: 80px">備考</th>
                      <td class="cell"></td>
                      <th class="cell text-center" style="width: 80px">撮影日</th>
                      <td class="cell text-center" style="width: 180px">{{ picture.createDate }}</td>
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

<!-- TODO: 写真が表示されないため、一旦、断念
 <script lang="ts" setup>
import { continueStatement } from "@babel/types";
import { BridgePicture } from "~~/types/bridge";

const child_extend = ref(true);
const select = ref('全て');
const histItems = ref(['全て', '1']);
const pictures = ref<BridgePicture[]>([
  {
    no: 1,
    description: '全景',
    createDate: '2017年10月25日',
    img: '../../assets/img/dmg/bridgeDetail2_7_1.jpg',
  },
  {
    no: 2,
    description: '橋面(起点側)',
    createDate: '2017年10月25日',
    img: '../../assets/img/dmg/bridgeDetail2_7_2.jpg',
  },
  {
    no: 3,
    description: '下面および下部工',
    createDate: '2017年10月25日',
    img: '../../assets/img/dmg/bridgeDetail2_7_3.jpg',
  },
  {
    no: 4,
    description: '橋面(終点側)',
    createDate: '2017年10月25日',
    img: '../../assets/img/dmg/bridgeDetail2_7_4.jpg',
  },
]);
</script>
 -->
 
<script lang="ts">
  import { continueStatement } from "@babel/types";
  
  export default defineComponent({
    data() {
      return {
        child_extend: true,
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