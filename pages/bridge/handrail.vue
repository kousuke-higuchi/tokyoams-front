<template>
  <v-row>
    <v-col md="3" cols="12">
      <bridge-side-card-details />
    </v-col>
    <v-col md="9" cols="12">
      <v-card elevation="3">
        <div class="d-flex">
          <v-card-title>
            <div class="font-weight-bold">高覧図</div>
          </v-card-title>
        </div>
        <v-card-text>
          <v-row no-gutters>
            <v-col md="6" cols="12" class="detailCard">
              <v-card class="rounded-0">
                <v-img src="../../assets/img/dmg/bridgeDetail2_3_1.jpg"></v-img>
                <v-table density="compact">
                  <tbody>
                    <tr>
                      <th class="cell" align="center" width="60">備考</th>
                      <td colspan="4" class="cell">高覧図</td>
                    </tr>
                  </tbody>
                </v-table>
              </v-card>
              <v-card class="rounded-0">
                <v-img src="../../assets/img/dmg/bridgeDetail2_3_2.jpg"></v-img>
                <v-table density="compact">
                  <tbody>
                    <tr>
                      <th class="cell" align="center" width="60">備考</th>
                      <td colspan="4" class="cell">高覧図</td>
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

<script lang="ts">
import { continueStatement } from "@babel/types";

export default defineComponent({
  data() {
    return {
    }
  },
  methods: {
    setmap(damagemap) {
      this.dmgmap = damagemap;
    }
  },
})
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