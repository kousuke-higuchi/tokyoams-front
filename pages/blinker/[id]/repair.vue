<template>
  <div>
    <v-row>
      <!-- メニュー -->
      <v-col :md="child_extend ? 3 : 0">
        <blinker-menu @is-extend="child_extend = $event" />
      </v-col>

      <!-- 補修履歴 -->
      <v-col :md="child_extend ? 9 : 12">
        <attach-repair-list :attachReapir="repairs" :kindList="blinkers" />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
import { AttachRepair } from "~~/types";
import repairHistories from "~~/assets/blinkerRepair.json";

const child_extend = ref(true);

const repairs = ref((repairHistories as any) as [AttachRepair]);
const kindListBase = ref([
  { name: null, code: '-3', streetlightuse: 1, switchboarduse: 1, blinkeruse: 1, signuse: 1, mirroruse: 1 },
  { name: "---", code: '-2', streetlightuse: 1, switchboarduse: 1, blinkeruse: 1, signuse: 1, mirroruse: 1 },
  { name: "不明", code: '-1', streetlightuse: 1, switchboarduse: 1, blinkeruse: 1, signuse: 1, mirroruse: 1 },
  { name: "ランプ取替工", code: '1', streetlightuse: 1, switchboarduse: 0, blinkeruse: 1, signuse: 0, mirroruse: 0 },
  { name: "自動点滅器取替工", code: '2', streetlightuse: 1, switchboarduse: 1, blinkeruse: 0, signuse: 0, mirroruse: 0 },
  { name: "安定器取替工", code: '3', streetlightuse: 1, switchboarduse: 0, blinkeruse: 0, signuse: 0, mirroruse: 0 },
  { name: "照明器取替工", code: '4', streetlightuse: 1, switchboarduse: 0, blinkeruse: 0, signuse: 0, mirroruse: 0 },
  { name: "ポール内蔵ブレーカー取替工", code: '5', streetlightuse: 1, switchboarduse: 0, blinkeruse: 0, signuse: 0, mirroruse: 0 },
  { name: "取替工", code: '6', streetlightuse: 0, switchboarduse: 1, blinkeruse: 1, signuse: 1, mirroruse: 1 },
  { name: "表示内容変更（修正シール）", code: '7', streetlightuse: 0, switchboarduse: 0, blinkeruse: 0, signuse: 1, mirroruse: 0 },
  { name: "表示内容変更（修正板）", code: '8', streetlightuse: 0, switchboarduse: 0, blinkeruse: 0, signuse: 1, mirroruse: 0 },
  { name: "新設", code: '9', streetlightuse: 1, switchboarduse: 1, blinkeruse: 1, signuse: 1, mirroruse: 1 },
  { name: "表示修正", code: '10', streetlightuse: 1, switchboarduse: 1, blinkeruse: 1, signuse: 1, mirroruse: 1 },
  { name: "移設", code: '11', streetlightuse: 1, switchboarduse: 1, blinkeruse: 1, signuse: 1, mirroruse: 1 },
  { name: "補修", code: '12', streetlightuse: 1, switchboarduse: 1, blinkeruse: 1, signuse: 1, mirroruse: 1 },
  { name: "その他", code: '13', streetlightuse: 1, switchboarduse: 1, blinkeruse: 1, signuse: 1, mirroruse: 1 },
]);

const blinkers = computed(() => {
  //障害物表示灯でfilterをする
  return kindListBase.value.filter((s) => s.blinkeruse === 1);
});

const route = useRoute();
console.log(`mounted ${route.fullPath}`);
</script>