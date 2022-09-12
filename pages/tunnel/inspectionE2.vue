<template>
  <v-row>
      <v-col v-bind:md="child_extend ? 3 : 0" cols="12">
          <tunnel-side-card-details @isExtend='child_extend = $event' selectTab="inspection" />
    </v-col>
    <v-col v-bind:md="child_extend ? 9 : 12" cols="12">
      <v-card elevation="3">
        <div class="d-flex">
          <v-card-title>
            ■点検調書 診断結果（覆工スバン毎、トンネル毎） 【様式E-2】
          </v-card-title>
        </div>
        <v-card-text>
          <v-row no-gutters>
            <v-col md="12" cols="12">
              <v-table density="compact" class="ledger">
                <tbody>
                  <tr>
                    <th>フリガナ</th>
                    <td>ゴンダトンネル</td>
                    <th>路線名</th>
                    <td>主32 八王子五日市線</td>
                    <th>点検業者・点検者名</th>
                    <td>アジア航測（株）青柳健二</td>
                    <th>点検年月日</th>
                    <td>2018年11月9日</td>
                  </tr>
                  <tr>
                    <th>名称</th>
                    <td>権田トンネル</td>
                    <th>管理事務所</th>
                    <td>西多摩建設事務所</td>
                    <th>調査業者・調査技術者名</th>
                    <td>・</td>
                    <th>調査年月日</th>
                    <td></td>
                  </tr>
                </tbody>
              </v-table>
              <v-table density="compact" class="ledger">
                <tbody>
                  <tr v-for="n of 20" :key="n">
                    <th v-if="n == 1" rowspan="26" class="text-center" style="writing-mode: vertical-rl; width:3em">
                      覆工スバン毎・トンネル毎の健全性の判定
                    </th>
                    <th v-if="n == 1" rowspan="24" class="text-center" style="width:9em">健全性<br>Ⅰ～Ⅳを<br>覆工スバン毎<br>に記入する
                    </th>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                  </tr>
                  <tr>
                    <td class="text-center"></td>
                    <td rowspan="3" class="text-center"></td>
                    <td rowspan="3" class="text-center"></td>
                    <td rowspan="3" class="text-center"></td>
                    <td rowspan="3" class="text-center"></td>
                    <td class="text-center"></td>
                    <td rowspan="3" class="text-center"></td>
                  </tr>
                  <tr>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                  </tr>
                  <tr>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                  </tr>
                  <tr>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                  </tr>
                  <tr>
                    <th rowspan="2" class="text-center">
                      集計
                    </th>
                    <th class="text-center">健全性Ⅰ</th>
                    <th class="text-center">健全性Ⅱ</th>
                    <th class="text-center">健全性Ⅲ</th>
                    <th class="text-center">健全性Ⅳ</th>
                    <th colspan="3" class="text-center">トンネルの健全性</th>
                  </tr>
                  <tr>
                    <td class="text-center">1</td>
                    <td class="text-center">8</td>
                    <td class="text-center">0</td>
                    <td class="text-center">0</td>
                    <td colspan="3" class="text-center">Ⅱ</td>
                  </tr>
                </tbody>
              </v-table>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      child_extend: true,
    }
  },
  mounted: function () {
    console.log("mounted inspectionE2");
  },
  methods: {
  },
});
</script>
