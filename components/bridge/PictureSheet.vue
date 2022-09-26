<template>
  <v-sheet>
    <v-table density="compact">
      <tbody>
        <tr>
          <th class="text-center" style="width: 8em">径間番号</th>
          <td class="text-center" style="width: 2em">{{ photo.item5 }}</td>
          <th class="text-center" style="width: 8em">写真番号</th>
          <td class="text-center" style="width: 2em">
            {{ photo.dataid }}
          </td>
          <th class="text-center" style="width: 8em">写真説明</th>
          <td class="text-center">{{ photo.item3 }}</td>
        </tr>
        <tr>
          <td colspan="7">
            <v-img :src="photo.url" max-height="350" aspect-ratio="1"></v-img>
          </td>
        </tr>
        <tr>
          <th class="text-center">備考</th>
          <td colspan="3">{{ photo.item1 }}</td>
          <th class="text-center">撮影日</th>
          <td class="text-center" colspan="2">
            {{ moment(photo.createdate).format("yyyy年M月D日") }}
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-sheet>
</template>

<script lang="ts" setup>
import _moment from "moment";
import { BridgePhoto } from "@/types/bridge";

const moment = (d) => {
  return _moment(d);
};

interface Props {
  photo: BridgePhoto;
}
const props = withDefaults(defineProps<Props>(), {
  photo: null,
});
</script>
