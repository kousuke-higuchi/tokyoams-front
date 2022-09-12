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
            <div class="font-weight-bold">写真台帳</div>
          </v-card-title>
        </div>

        <v-card-text>
          <v-row no-gutters>
            <v-col md="6" cols="12" class="detailCard">
              <v-card class="rounded-0">
                <v-img src="../../assets/img/dmg/bridgeDetail2_7_1.jpg"></v-img>
                <v-table density="compact">
                  <tbody>
                    <tr>
                      <th class="cell text-center" style="width: 60px">備考</th>
                      <td class="cell">全景写真</td>
                      <th class="cell text-center" style="width: 80px">撮影日</th>
                      <td class="cell text-center" style="width: 180px">2017年10月25日</td>
                    </tr>
                  </tbody>
                </v-table>
              </v-card>
            </v-col>
            <v-col md="6" cols="12" class="detailCard">
              <v-card class="rounded-0">
                <v-img src="../../assets/img/dmg/bridgeDetail2_7_2.jpg"></v-img>
                <v-table density="compact">
                  <tbody>
                    <tr>
                      <th class="cell text-center" style="width: 60px">備考</th>
                      <td class="cell">正面写真(起点側)</td>
                      <th class="cell text-center" style="width: 80px">撮影日</th>
                      <td class="cell text-center" style="width: 180px">2017年10月25日</td>
                    </tr>
                  </tbody>
                </v-table>
              </v-card>
              <v-card class="rounded-0">
                <v-img src="../../assets/img/dmg/bridgeDetail2_7_4.jpg"></v-img>
                <v-table density="compact">
                  <tbody>
                    <tr>
                      <th class="cell text-center" style="width: 60px">備考</th>
                      <td class="cell">正面写真(終点側)</td>
                      <th class="cell text-center" style="width: 80px">撮影日</th>
                      <td class="cell text-center" style="width: 180px">2017年10月25日</td>
                    </tr>
                  </tbody>
                </v-table>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
  const child_extend = ref(true);
</script>

<style scoped>
.detailCard {
  padding: 0;
  border: 1px solid black;
}

.cell {
  border: 0.5px solid black;
}
</style>