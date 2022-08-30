<template>
  <v-row>
    <v-col md="3" cols="12">
      <bridge-side-card-details selectTab="inspection" />
    </v-col>
    <v-col md="9" cols="12">
      <v-card elevation="3">
        <div class="d-flex">
          <v-card-title>
            <div class="font-weight-bold">点検調書損傷写真</div>
          </v-card-title>
          <v-card-actions>
            <v-select label="径間番号" v-model="select" :items="histItems" item-title="select" variant="outlined"
              density="compact" hide-details="false"></v-select>
          </v-card-actions>
<!--         <v-dialog
          v-model="isOpen"
          persistent
          max-width="450px"
        >
          <v-card>
            <v-toolbar dense>
              <v-toolbar-title>メモの登録</v-toolbar-title>
              <v-spacer></v-spacer>
                <v-btn
                  icon
                  @click="isOpen = false"
                >
                  <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-toolbar>
            <v-card-text>
              <v-row>
                <v-col cols="12" sm="3" class="mt-2">
                  メモ
                </v-col>
                <v-col cols="12" sm="9">
                        <v-textarea 
                        v-model="repairNote"
                        :placeholder="repairNote"
                        variant="plain"
                        hint="補修履歴を入力してください"
                        persistent-hint
                        ></v-textarea>

                  <v-textarea
                  label="メモを入力してください"
                  rows="1"
                  auto-grow
                  density="compact"
                  :hide-details="false"
                  v-model="memo"
                  :placeholder="memo"
                  hint="メモを入力してください"
                  persistent-hint
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-card-text>
            <v-divider></v-divider>
            <div class="d-flex">
              <v-btn variant="outlined" class="mr-auto ma-3" @click="onDialogCloseClick()">閉じる</v-btn>
              <v-btn color="primary ma-3" class="ml-auto" @click="onDialogSaveClick()">登録</v-btn>
            </div>
          </v-card>
        </v-dialog>
 -->      </div>
        <v-card-text>
          <v-row no-gutters>
            <v-col v-for="(picture, index) in pictures" :key="picture.img" md="4" cols="12">
              <v-card class="rounded-0">
                <v-table density="compact">
                  <tbody>
                    <tr>
                      <th class="cell" align="center" >写真番号</th>
                      <td class="cell" align="center" >{{ picture.no }}</td>
                      <th class="cell" align="center">撮影年月日</th>
                      <td colspan="2" class="cell" align="center">{{ picture.createDate }}</td>
                    </tr>
                  </tbody>
                </v-table>
                <v-table density="compact">
                  <tbody>
                    <tr>
                      <th class="cell" align="center" width="100">部材名</th>
                      <td class="cell" align="center" >{{ picture.material }}</td>
                      <th rowspan="2" class="cell" align="center" width="50">判定</th>
                      <th class="cell" align="center" width="80">今回</th>
                      <td class="cell" align="center">良</td>
                    </tr>
                    <tr>
                      <th class="cell" align="center" >損傷の種類</th>
                      <td class="cell" align="center" >無し</td>
                      <th class="cell" align="center">前回</th>
                      <td class="cell" align="center">良</td>
                    </tr>
                  </tbody>
                </v-table>
                <!-- TODO: 入力エリアBackgroundをピンクに塗る -->
                <!--2022-08-30樋口　ヒント入力を削除しました。-->
                <v-table density="compact">
                  <tbody>
                    <tr>
                      <th class="cell" align="center" width="60">メモ</th>
                      <td class="cell">
                        <v-textarea 
                        v-model=memo[index]
                        :placeholder=memo[index]
                        rows="2"
                        variant="plain"
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
      select: '全て',
      histItems: ['全て', '1', '2', '3'],
      isOpen: false,
      memo: ['許容できる範囲のひび割れ',  '許容できるサビ', '水漏れシミ有(許容)', '塗装中', '多少のひび割れ', '多少のひび割れ' ],
      pictures: [
        {
          img: '../../assets/img/dmg/bridgeDetail2_7_1.jpg',
          no: 1,
          material: '石',
          createDate: '2017年10月25日',
          memo: '許容できる範囲のひび割れ',
        },
        {
          img: '../../assets/img/dmg/bridgeDetail2_7_2.jpg',
          no: 2,
          material: '鉄鋼',
          createDate: '2017年10月25日',
          memo: '許容できるサビ',
        },
        {
          img: '../../assets/img/dmg/bridgeDetail2_7_3.jpg',
          no: 3,
          material: '石',
          createDate: '2017年10月25日',
          memo: '水漏れシミ有(許容)',
        },
        {
          img: '../../assets/img/dmg/bridgeDetail2_7_4.jpg',
          no: 4,
          material: '鉄鋼',
          createDate: '2017年10月25日',
          memo: '塗装中',
        },
        {
          img: '../../assets/img/dmg/bridgeDetail2_3_2.jpg',
          no: 5,
          material: '石',
          createDate: '2017年10月25日',
          memo: '多少のひび割れ',
        },
        {
          img: '../../assets/img/dmg/bridgeDetail2_3_2.jpg',
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
    // getImageUrl(filepath){
    //      return new URL(filepath, import.meta.url).href
    // },
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