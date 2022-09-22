<template>
  <v-row>
      <v-col v-bind:md="child_extend ? 3 : 0" cols="12">
          <tunnel-side-card-details @isExtend='child_extend = $event' selectTab="inspection" />
    </v-col>
    <v-col v-bind:md="child_extend ? 9 : 12" cols="12">
      <v-card elevation="3">
        <div class="d-flex">
          <v-card-title>
            ■点検調書 覆工スバン別変状詳細展開図 【様式D-3】
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
                    <th>管理者名</th>
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
                  <tr>
                    <th class="text-center" style="writing-mode: vertical-rl; width:3em">
                      スバン別変状展開図
                    </th>
                    <td>
                      <v-img src="../../assets/img/dmg/tnlD3view1.jpg"></v-img>
                    </td>
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
    console.log("mounted inspectionD3");
  },
  methods: {
  },
});
</script>
