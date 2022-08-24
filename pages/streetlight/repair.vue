<template>
  <div>
    <v-row>
      <!-- メニュー -->
      <v-col md="3" cols="12">
        <v-card height="820px" elevation="3">
          <v-list-item-group color="primary">
            <v-list :items="subtitles" color="primary"></v-list>
          </v-list-item-group>
        </v-card>
      </v-col>

      <!-- 補修履歴 -->
      <v-col md="9" cols="12">
        <attach-repair-list :attachReapir="rowsData" :kindList="afterFilter" />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { AttachRepair } from "~~/types";
import blinkerRepair from "~~/assets/streetlightRepair.json"; 

export default defineComponent({
  data() {
    return {
      subtitles: [
        { title: "道路照明台帳", props: { to: "ledger" } },
        { title: "補修履歴", props: { to: "repair" } },
      ],
      rowsData:JSON.parse(JSON.stringify(blinkerRepair)) as Array<AttachRepair>,
//TODO:施工区分をatf_cd_constkindから取得
      kindListBase: [
        { name: null,   code: '-3' ,streetlightuse: 1 ,switchboarduse: 1,blinkeruse: 1,signuse: 1,mirroruse: 1},
        { name: "---",  code: '-2' ,streetlightuse: 1 ,switchboarduse: 1,blinkeruse: 1,signuse: 1,mirroruse: 1},
        { name: "不明", code: '-1' ,streetlightuse: 1 ,switchboarduse: 1,blinkeruse: 1,signuse: 1,mirroruse: 1},
        { name: "ランプ取替工", code: '1' ,streetlightuse: 1 ,switchboarduse: 0,blinkeruse: 1,signuse: 0,mirroruse: 0},
        { name: "自動点滅器取替工", code: '2' ,streetlightuse: 1 ,switchboarduse: 1,blinkeruse: 0,signuse: 0,mirroruse: 0},
        { name: "安定器取替工", code: '3' ,streetlightuse: 1 ,switchboarduse: 0,blinkeruse: 0,signuse: 0,mirroruse: 0},
        { name: "照明器取替工", code: '4' ,streetlightuse: 1 ,switchboarduse: 0,blinkeruse: 0,signuse: 0,mirroruse: 0},
        { name: "ポール内蔵ブレーカー取替工", code: '5' ,streetlightuse: 1 ,switchboarduse: 0,blinkeruse: 0,signuse: 0,mirroruse: 0},
        { name: "取替工", code: '6' ,streetlightuse: 0 ,switchboarduse: 1,blinkeruse: 1,signuse: 1,mirroruse: 1},
        { name: "表示内容変更（修正シール）", code: '7' ,streetlightuse: 0 ,switchboarduse: 0,blinkeruse: 0,signuse: 1,mirroruse: 0},
        { name: "表示内容変更（修正板）", code: '8' ,streetlightuse: 0 ,switchboarduse: 0,blinkeruse: 0,signuse: 1,mirroruse: 0},
        { name: "新設", code: '9' ,streetlightuse: 1 ,switchboarduse: 1,blinkeruse: 1,signuse: 1,mirroruse: 1},
        { name: "表示修正", code: '10' ,streetlightuse: 1 ,switchboarduse: 1,blinkeruse: 1,signuse: 1,mirroruse: 1},
        { name: "移設", code: '11' ,streetlightuse: 1 ,switchboarduse: 1,blinkeruse: 1,signuse: 1,mirroruse: 1},
        { name: "補修", code: '12' ,streetlightuse: 1 ,switchboarduse: 1,blinkeruse: 1,signuse: 1,mirroruse: 1},
        { name: "その他", code: '13' ,streetlightuse: 1 ,switchboarduse: 1,blinkeruse: 1,signuse: 1,mirroruse: 1},
      ]
    };
  },
  computed:{
      afterFilter() {
        //道路照明でfilterをする
        return this.kindListBase.filter((s) => s.streetlightuse === 1);

      },
  },
  mounted: function () {
    console.log("mounted /streetlight/ledger");
  },
  methods: {},
});
</script>
<style></style>
