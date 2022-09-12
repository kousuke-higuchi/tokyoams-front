<template>
  <v-row>
    <v-col v-bind:md="child_extend?3:0" cols="12">
    <!-- <p> {{ child_extend }}</p> -->
      <bridge-side-card-details @isExtend='child_extend = $event' selectTab="inspection" />
    </v-col>
    <v-col v-bind:md="child_extend?9:12" cols="12">
      <v-card elevation="3">
        <div class="d-flex">
          <v-card-title>
            <div class="font-weight-bold">点検調書損傷写真</div>
          </v-card-title>
          <v-card-actions>
            <v-select label="径間番号" v-model="select" :items="histItems" item-title="select" variant="outlined"
              density="compact" hide-details="false"></v-select>
          </v-card-actions>
       </div>
        <v-card-text>
          <v-row no-gutters>
            <v-col v-for="(picture, index) in pictures" :key="picture.img" md="4" cols="12">
              <v-card class="rounded-0">
                <v-table density="compact">
                  <tbody>
                    <tr>
                      <th class="cell text-center" >写真番号</th>
                      <td class="cell text-center" >{{ picture.no }}</td>
                      <th class="cell text-center">撮影年月日</th>
                      <td colspan="2" class="cell text-center">{{ picture.createDate }}</td>
                    </tr>
                  </tbody>
                </v-table>
                <v-table density="compact">
                  <tbody>
                    <tr>
                      <th class="cell text-center" style="width: 100px;">部材名</th>
                      <td class="cell text-center" >{{ picture.material }}</td>
                      <th rowspan="2" class="cell text-center" style="width: 50px;">判定</th>
                      <th class="cell text-center" style="width: 80px;">今回</th>
                      <td class="cell text-center">良</td>
                    </tr>
                    <tr>
                      <th class="cell text-center" >損傷の種類</th>
                      <td class="cell text-center" >無し</td>
                      <th class="cell text-center">前回</th>
                      <td class="cell text-center">良</td>
                    </tr>
                  </tbody>
                </v-table>
                <!-- TODO: 入力エリアBackgroundをピンクに塗る -->
                <v-table density="compact">
                  <tbody>
                    <tr>
                      <th class="cell text-center" width="60">メモ</th>
                      <td class="cell">
                        <v-textarea 
                        v-model=memo[index]
                        :placeholder=memo[index]
                        rows="1"
                        variant="plain"
                        hint="メモを入力してください"
                        persistent-hint
                        ></v-textarea>
                      </td>
                    </tr>
                  </tbody>
                </v-table>
                <v-img :src="picture.img"></v-img>
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
      child_extend: true,
      select: '全て',
      histItems: ['全て', '1', '2', '3'],
      isOpen: false,
      memo: ['許容できる範囲のひび割れ',  '許容できるサビ', '水漏れシミ有(許容)', '塗装中', '多少のひび割れ', '多少のひび割れ' ],
      pictures: [
        {
          img: new URL('../../../../assets/img/dmg/bridgeDetail2_7_1.jpg',import.meta.url).href,
          no: 1,
          material: '石',
          createDate: '2017年10月25日',
          memo: '許容できる範囲のひび割れ',
        },
        {
          img: new URL('../../../../assets/img/dmg/bridgeDetail2_7_2.jpg',import.meta.url).href,
           no: 2,
          material: '鉄鋼',
          createDate: '2017年10月25日',
          memo: '許容できるサビ',
        },
        {
          img: new URL('../../../../assets/img/dmg/bridgeDetail2_7_3.jpg',import.meta.url).href,
          no: 3,
          material: '石',
          createDate: '2017年10月25日',
          memo: '水漏れシミ有(許容)',
        },
        {
          img: new URL('../../../../assets/img/dmg/bridgeDetail2_7_4.jpg',import.meta.url).href,
          no: 4,
          material: '鉄鋼',
          createDate: '2017年10月25日',
          memo: '塗装中',
        },
        {
          img: new URL('../../../../assets/img/dmg/bridgeDetail2_3_2.jpg',import.meta.url).href,
         
          no: 5,
          material: '石',
          createDate: '2017年10月25日',
          memo: '多少のひび割れ',
        },
        {
          img: new URL('../../../../assets/img/dmg/bridgeDetail2_3_2.jpg',import.meta.url).href,
         
          no: 6,
          material: '石',
          createDate: '2017年10月25日',
          memo: '多少のひび割れ',
        },
      ]
    }
  },
  methods: {
    onClickCard(no) {
      console.log("onClickCard", no);
      this.memo = this.pictures[no - 1].Memo;
     this.isOpen = true;
    },
    onDialogCloseClick(){
      this.isOpen = false;
      console.debug("onDialogCloseClick");
    },
    onDialogSaveClick(){
      this.isOpen = false;
      console.debug("clickResisterBtn");
    },
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
  font-size: xx-small !important;

}
</style>