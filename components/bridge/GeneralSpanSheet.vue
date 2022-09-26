<template>
  <v-container>
    <v-card-text>
      <v-table density="compact">
        <tbody>
          <tr>
            <th class="text-center" style="width: 8em">径間番号</th>
            <td>{{ photo.spanno }}</td>
          </tr>
          <tr>
            <td colspan="2"><v-img :src="photo.url"></v-img></td>
          </tr>
          <tr>
            <th class="text-center" >備考</th>
            <td>{{ photo.item3 }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card-text>
  </v-container>
</template>

<script lang="ts" setup>
import { BridgePhoto } from "@/types/bridge";
interface Props {
  photo: BridgePhoto;
}
const props = withDefaults(defineProps<Props>(), {
  photo: null,
});

</script>
