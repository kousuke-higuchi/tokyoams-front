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
            <div class="font-weight-bold">一般図</div>
          </v-card-title>
        </div>
        <v-card-text>
          <v-img :src="imagePath"></v-img>
          <v-table density="compact">
            <tbody>
              <tr>
                <th class="cell text-center" style="width: 60px">備考</th>
                <td class="cell">一般図</td>
              </tr>
            </tbody>
          </v-table>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import { url } from 'inspector';

    const child_extend = ref(true);
 
    const imagePath = new URL('../../../../assets/img/dmg/bridgeDetail2_6_1.jpg', import.meta.url).href;
</script>
