<template>
  <v-row>
      <v-col v-bind:md="child_extend ? 3 : 0" cols="12">
          <tunnel-side-card-details @isExtend='child_extend = $event' selectTab="inspection" />
    </v-col>
    <v-col v-bind:md="child_extend ? 9 : 12" cols="12">
      <v-card>
        <div class="d-flex">
          <v-sheet>
            <v-container>ブロック番号</v-container>
          </v-sheet>
          <v-sheet class="ma-1">
            <v-select v-model="page" :items="numbers" item-title="page" variant="outlined" density="compact"
              hide-details></v-select>
          </v-sheet>
        </div>
        <v-window v-model="page">
          <v-window-item value="全て">
            <tunnel-inspection10-sheet v-for=" item in blocks" :key="item.blockId" :tableItems="item.tableItems" />
          </v-window-item>
          <v-window-item v-for=" item in blocks" :key="item.blockId" :value="item.blockId">
            <tunnel-inspection10-sheet :tableItems="item.tableItems" />
          </v-window-item>
        </v-window>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { tunnelInsp10 } from '~~/types';

export default defineComponent({
  data() {
    return {
      child_extend: true,
      page: '全て',
      numbers: [],
      //仮データ
      //TODO:DBカラム名に合わせた形に修正する
      blocks: [
        {
          blockId: '1',
          tableItems: [
            {
              walkType: 'カルバート',
              material: 'コンクリート',
              partName: '頂板',
              partSign: 'Cr',
              partNum: '0101',
              maxAccident: 'e',
              minAccident: 'e',
              secBAccident: null,
              secC1Accident: 'うき',
              //区分C1の変状-更新~原因-確定(左側)まで省略
              //TODO:DBから該当データを取得
              cause1: null,
              cause2: '材料劣化',
              soundness: 'Ⅱ',
              note: '材料劣化に起因するうきと推定。\r\n今後も徐々に進行することが想定されるため、\r\n補修が望ましい。'
            },
            {
              walkType: 'カルバート',
              material: 'コンクリート',
              partName: '頂板',
              partSign: 'Cr',
              partNum: '0101',
              maxAccident: 'e',
              minAccident: 'e',
              secBAccident: 'うき',
              secC1Accident: null,
              //区分C1の変状-更新~原因-確定(左側)まで省略
              //TODO:DBから該当データを取得
              cause1: null,
              cause2: '材料劣化',
              soundness: 'Ⅰ',
              note: '材料劣化に起因するうきと推定。\r\n現時点での緊急性は少ない。\r\n今後の状況に応じて補修が望ましい。'
            },
            {
              walkType: 'カルバート',
              material: 'コンクリート',
              partName: '頂板',
              partSign: 'Cr',
              partNum: '0101',
              maxAccident: 'e',
              minAccident: 'e',
              secBAccident: null,
              secC1Accident: 'うき',
              //区分C1の変状-更新~原因-確定(左側)まで省略
              //TODO:DBから該当データを取得
              cause1: null,
              cause2: '材料劣化',
              soundness: 'Ⅱ',
              note: '材料劣化に起因するうきと推定。\r\n今後も徐々に進行することが想定されるため、\r\n補修が望ましい。'
            },
            {
              walkType: 'カルバート',
              material: 'コンクリート',
              partName: '頂板',
              partSign: 'Cr',
              partNum: '0101',
              maxAccident: 'e',
              minAccident: 'e',
              secBAccident: null,
              secC1Accident: 'うき',
              //区分C1の変状-更新~原因-確定(左側)まで省略
              //TODO:DBから該当データを取得
              cause1: null,
              cause2: '材料劣化',
              soundness: 'Ⅱ',
              note: '材料劣化に起因するうきと推定。\r\n今後も徐々に進行することが想定されるため、\r\n補修が望ましい。'
            },
            {
              walkType: 'カルバート',
              material: 'コンクリート',
              partName: '頂板',
              partSign: 'Cr',
              partNum: '0101',
              maxAccident: 'e',
              minAccident: 'e',
              secBAccident: null,
              secC1Accident: '劣化',
              //区分C1の変状-更新~原因-確定(左側)まで省略
              //TODO:DBから該当データを取得
              cause1: null,
              cause2: '材料劣化',
              soundness: 'Ⅱ',
              note: '材料劣化に起因するうきと推定。\r\n今後も徐々に進行することが想定されるため、\r\n補修が望ましい。'
            },
            {
              walkType: 'カルバート',
              material: 'コンクリート',
              partName: '頂板',
              partSign: 'Cr',
              partNum: '0101',
              maxAccident: 'e',
              minAccident: 'e',
              secBAccident: null,
              secC1Accident: 'うき',
              //区分C1の変状-更新~原因-確定(左側)まで省略
              //TODO:DBから該当データを取得
              cause1: null,
              cause2: '材料劣化',
              soundness: 'Ⅱ',
              note: '材料劣化に起因するうきと推定。\r\n今後も徐々に進行することが想定されるため、\r\n補修が望ましい。'
            },
            {
              walkType: 'カルバート',
              material: 'コンクリート',
              partName: '側壁',
              partSign: 'Sw',
              partNum: '0102',
              maxAccident: 'e',
              minAccident: 'e',
              secBAccident: null,
              secC1Accident: 'うき',
              //区分C1の変状-更新~原因-確定(左側)まで省略
              //TODO:DBから該当データを取得
              cause1: null,
              cause2: '材料劣化',
              soundness: 'Ⅱ',
              note: '材料劣化に起因するうきと推定。\r\n今後も徐々に進行することが想定されるため、\r\n補修が望ましい。'
            },
            {
              walkType: 'カルバート',
              material: 'コンクリート',
              partName: '側壁',
              partSign: 'Sw',
              partNum: '0102',
              maxAccident: 'e',
              minAccident: 'e',
              secBAccident: null,
              secC1Accident: 'うき',
              //区分C1の変状-更新~原因-確定(左側)まで省略
              //TODO:DBから該当データを取得
              cause1: null,
              cause2: '材料劣化',
              soundness: 'Ⅱ',
              note: '材料劣化に起因するうきと推定。\r\n今後も徐々に進行することが想定されるため、\r\n補修が望ましい。'
            },
            {
              walkType: 'カルバート',
              material: 'コンクリート',
              partName: '側壁',
              partSign: 'Sw',
              partNum: '0102',
              maxAccident: 'e',
              minAccident: 'e',
              secBAccident: null,
              secC1Accident: 'うき',
              //区分C1の変状-更新~原因-確定(左側)まで省略
              //TODO:DBから該当データを取得
              cause1: null,
              cause2: '材料劣化',
              soundness: 'Ⅱ',
              note: '材料劣化に起因するうきと推定。\r\n今後も徐々に進行することが想定されるため、\r\n補修が望ましい。'
            },
            {
              walkType: null,
              material: null,
              partName: null,
              partSign: null,
              partNum: null,
              maxAccident: null,
              minAccident: null,
              secBAccident: null,
              secC1Accident: null,
              //区分C1の変状-更新~原因-確定(左側)まで省略
              //TODO:DBから該当データを取得
              cause1: null,
              cause2: null,
              soundness: null,
              note: null
            },
          ] as Array<tunnelInsp10>,
        },
        {
          blockId: '2',
          tableItems: [
            {
              walkType: 'カルバート',
              material: null,
              partName: null,
              partSign: null,
              partNum: null,
              maxAccident: null,
              minAccident: null,
              secBAccident: null,
              secC1Accident: null,
              //区分C1の変状-更新~原因-確定(左側)まで省略
              //TODO:DBから該当データを取得
              cause1: null,
              cause2: null,
              soundness: null,
              note: null
            },
          ] as Array<tunnelInsp10>,
        },
        {
          blockId: '3',
          tableItems: [
            {
              walkType: null,
              material: null,
              partName: null,
              partSign: null,
              partNum: null,
              maxAccident: null,
              minAccident: null,
              secBAccident: null,
              secC1Accident: null,
              //区分C1の変状-更新~原因-確定(左側)まで省略
              //TODO:DBから該当データを取得
              cause1: null,
              cause2: null,
              soundness: null,
              note: null
            },
          ] as Array<tunnelInsp10>,
        }
      ],
    }
  },
  mounted: function () {
    this.numbers = this.getPageNumber(this.blocks);
  },
  methods: {
    /**
     * ドロップダウンリストの項目を取得する
     */
    getPageNumber(blocks) {
      let nums = new Array<String>;
      nums.push('全て');
      blocks.forEach(element => {
        nums.push(element.blockId);
      });
      return nums;
    },
  }
})
</script>