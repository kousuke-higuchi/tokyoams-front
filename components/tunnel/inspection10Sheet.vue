<template>
  <v-table density="compact" class="ledger">
    <thead>
      <tr>
        <th rowspan="5" class="text-center vertical">工種</th>
        <th rowspan="5" class="text-center vertical">材料</th>
        <th colspan="3" class="text-center">部材種別</th>
        <th colspan="2" class="text-center">変状の程度</th>
        <th colspan="10" class="text-center">対策区分</th>
        <th colspan="4" class="text-center">診断結果</th>
      </tr>
      <tr>
        <th rowspan="4" class="text-center vertical">名称</th>
        <th rowspan="4" class="text-center vertical">記号</th>
        <th rowspan="4" class="text-center vertical">部材番号</th>
        <th rowspan="4" class="text-center vertical">最大</th>
        <th rowspan="4" class="text-center vertical">最小</th>
        <th colspan="4" class="text-center">補修等の必要性</th>
        <th class="text-center">維持工事で<br />対応する<br />必要性</th>
        <th colspan="3" class="text-center">緊急対応の必要性</th>
        <th colspan="2" class="text-center">詳細調査の<br />必要性</th>
        <th colspan="2" class="text-center">原因</th>
        <th rowspan="4" class="text-center">健全度<br />(部材単位)</th>
        <th rowspan="4" class="text-center">所見</th>
      </tr>
      <tr>
        <th rowspan="3" class="text-center">区分B<br />の変状</th>
        <th rowspan="3" class="text-center">区分<br />C1の<br />変状</th>
        <th rowspan="2" class="text-center"></th>
        <th rowspan="3" class="text-center">区分<br />C2<br />の変状</th>
        <th rowspan="3" class="text-center">区分M<br />の変状</th>
        <th colspan="3" class="text-center">区分Eの変状</th>
        <th rowspan="3" class="text-center">区分<br />S1<br />の変状</th>
        <th rowspan="3" class="text-center">区分<br />S2<br />の変状</th>
        <th rowspan="3" class="text-center">確定</th>
        <th rowspan="3" class="text-center">確定</th>
      </tr>
      <tr>
        <th rowspan="2">区分<br />E1<br />の変状</th>
        <th></th>
        <th rowspan="2">区分<br />E2<br />の変状</th>
      </tr>
      <tr>
        <th class="text-center vertical">更新</th>
        <th class="text-center vertical">更新</th>
      </tr>
    </thead>
    <!--TODO:DBから取得したデータを表示する-->
    <tbody>
      <tr v-for="(item, i) in tableItems" :key="i">
        <td>{{ item.walkType }}</td>
        <td>{{ item.material }}</td>
        <td>{{ item.partName }}</td>
        <td>{{ item.partSign }}</td>
        <td>{{ item.partNum }}</td>
        <td>{{ item.maxAccident }}</td>
        <td>{{ item.minAccident }}</td>
        <td>{{ item.secBAccident }}</td>
        <td>{{ item.secC1Accident }}</td>
        <td>{{ null }}</td>
        <td>{{ null }}</td>
        <td>{{ null }}</td>
        <td>{{ null }}</td>
        <td>{{ null }}</td>
        <td>{{ null }}</td>
        <td>{{ null }}</td>
        <td>{{ null }}</td>
        <td>{{ null }}</td>
        <td>{{ item.cause2 }}</td>
        <td>{{ item.soundness }}</td>
        <td style="width: 20em; white-space: pre;">{{ item.note }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script lang="ts">
import { tunnelInsp10 } from '~~/types';

export default defineComponent({
  props: {
    tableItems: Array<tunnelInsp10>
  }
})
</script>

<style>
.vertical {
  writing-mode: vertical-rl;
}
</style>