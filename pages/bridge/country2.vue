<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <bridge-side-card-details selectTab="inspection" />
      </v-col>
      <v-col md="9" cols="12">
        <v-card elevation="3">
          <v-card-text>
            <div style="font-size: small">状況写真（損傷状況）<br>
                  ○部材単位の判定区分がⅡ、Ⅲ又はⅣの場合には、直接関連する不具合の写真を記載のこと。<br>
                  ○写真は、不具合の程度が分かるように添付すること。</div>
            <v-row no-gutters>
              <!-- TODO: 枠線の不揃いは、main.cssをとりこんでから調整 -->
              <v-col md="6" cols="12" class="detailCard">
                <v-card class="rounded-0">
                  <v-table density="compact">
                    <tbody>
                      <tr>
                        <td class="text-center cell">下部構造（根巻きコンクリート）【判定区分：Ⅱ】</td>
                      </tr>
                    </tbody>
                  </v-table>
                  <div class="mt-1 ml-1" style="font-size: small">写真1</div>
                  <v-img src="../../assets/img/dmg/fbg1P002view1.jpg"  height="320"></v-img>
                </v-card>
                <v-card class="rounded-0">
                  <v-table density="compact">
                    <tbody>
                      <tr>
                        <td class="text-center cell">階段部（主桁）【判定区分：Ⅱ】</td>
                      </tr>
                    </tbody>
                  </v-table>
                  <div class="mt-1 ml-1" style="font-size: small">写真2</div>
                  <v-img src="../../assets/img/dmg/fbg1P002view2.jpg"  height="320"></v-img>
                </v-card>
              </v-col>
              <v-col md="6" cols="12" class="detailCard">
                <v-card class="rounded-0">
                  <v-table density="compact">
                    <tbody>
                      <tr>
                        <td class="text-center cell">階段部（主桁との接合部）【判定区分：Ⅱ】</td>
                      </tr>
                    </tbody>
                  </v-table>
                  <div class="mt-1 ml-1" style="font-size: small">写真3</div>
                  <v-img src="../../assets/img/dmg/fbg1P002view3.jpg"  height="320"></v-img>
                </v-card>
                <v-card class="rounded-0">
                  <v-table density="compact">
                    <tbody>
                      <tr>
                        <td class="text-center cell">階段部（橋台）【判定区分：Ⅱ】</td>
                      </tr>
                    </tbody>
                  </v-table>
                  <div class="mt-1 ml-1" style="font-size: small">写真4</div>
                  <v-img src="../../assets/img/dmg/fbg1P002view4.jpg"  height="320"></v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
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
  border: 0.5px solid black;
}

.cell {
  border: 0.5px solid black;
}
</style>