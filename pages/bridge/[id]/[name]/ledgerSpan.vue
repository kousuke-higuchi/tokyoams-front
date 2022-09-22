<template>
  <v-row>
    <v-col v-bind:md="child_extend ? 3 : 0" cols="12">
      <bridge-side-card-details @isExtend="child_extend = $event" />
    </v-col>
    <v-col v-bind:md="child_extend ? 9 : 12" cols="12">
      <v-card>
        <div class="d-flex">
          <v-sheet>
            <v-container>ブロック番号</v-container>
          </v-sheet>
          <v-sheet class="ma-1">
            <v-select
              v-model="page"
              :items="displaySpanNo"
              item-title="page"
              variant="outlined"
              density="compact"
              hide-details
            ></v-select>
          </v-sheet>
        </div>
        <v-card-title>
          <v-row class="justify-start mt-1 ml-3">橋梁台帳（径間）</v-row>
        </v-card-title>
        <v-window v-model="page">
          <v-window-item value="全て">
            <bridge-leader-span-sheet v-for="item in leaderSpans" :key="item.spanId" :leaderSpan="item" />
          </v-window-item>
          <v-window-item v-for="item in pages" :value="item" >
            <bridge-leader-span-sheet :leaderSpan="leaderSpans[Number(item) -1]"/>
          </v-window-item>
        </v-window>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import bridgeservice from "@/services/bridge-service";
import { LeaderSpan } from "@/types/bridge";

// メニューの開閉処理
const child_extend = ref(true);
const select = ref("全て");

// 橋梁台帳(径間)処理
const leaderSpans = ref(new Array<LeaderSpan>);
const route = useRoute();
const bridgeId = parseInt(route.params.id as string);

const page = ref("全て");
const pages = ref(new Array<String>);
const displaySpanNo = ref(new Array<String>);

onMounted(() => {
  bridgeservice.getLeaderSpanList(bridgeId).then((apiData) => {
    leaderSpans.value = apiData.data;

    displaySpanNo.value.push("全て");
    leaderSpans.value.forEach((element) => {
      pages.value.push(element.spanNo.toString());
      displaySpanNo.value.push(element.spanNo.toString());
    });
  });
});

</script>
