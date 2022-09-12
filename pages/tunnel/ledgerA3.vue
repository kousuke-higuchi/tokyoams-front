<template>
  <v-row>
      <v-col v-bind:md="child_extend ? 3 : 0" cols="12">
          <tunnel-side-card-details @isExtend='child_extend = $event' />
    </v-col>
    <v-col v-bind:md="child_extend ? 9 : 12" cols="12">
      <v-card elevation="3">
        <div class="d-flex">
          <v-card-title>
            <div class="font-weight-bold">■トンネル台帳 トンネル記録</div>
          </v-card-title>
        </div>
        <v-card class="ml-4 mr-4">
          <v-row dense>
            <v-col cols="12">
              <v-table density="compact" class="ledger">
                <tbody>
                <tr>
                  <th class="text-center">フリガナ</th>
                  <td class="text-center">ゴンダ</td>
                  <th class="text-center">路線名</th>
                  <td class="text-center">主32 八王子五日市線</td>
                  <th rowspan="2" class="text-center">作成者</th>
                  <td rowspan="2" class="text-center">アジア航測（株）青柳健二</td>
                  <th rowspan="2" class="text-center">作成年月日</th>
                  <td rowspan="2" class="text-center">2019年2月25日</td>
                </tr>
                <tr>
                  <th class="text-center">名称</th>
                  <td class="text-center">権田トンネル</td>
                  <th class="text-center">管理事務所</th>
                  <td class="text-center">西多摩建設事務所</td>
                </tr>
              </tbody>
              </v-table>
            </v-col>
          </v-row>
        </v-card>
        <v-card-text>
          <v-table density="compact" class="ledger">
            <tbody>
              <tr>
                <th class="text-center" style="writing-mode: vertical-rl;" width="20">位置図・現況写真・標準断面図・地質縦断図・施工実績</th>
                <td>
        
<!-- TODO: 当初、４つの絵の組み合わせで設計したが、詳細仕様をよく見ると4つの写真の比率がバラバラなので、1枚の絵と判断。DB tableの構成で確認すること
                    <v-row no-gutters>
                    <v-col
                      v-for="item in items" :key="item.img"
                      md="6"
                      cols="12">
                      <v-card class="rounded-0">
                        <v-container>
                          <v-img :src="item.img" ></v-img>
                        </v-container>
                      </v-card>
                    </v-col>
                  </v-row>

 --> 
                  <v-container>
                    <v-img :src="itemimg.img"></v-img>
                  </v-container>
                </td>
              </tr>
            </tbody>
          </v-table>
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
      itemimg:{ img: "../../assets/img/dmg/tunnelA3.jpg", },
      items:[
        { img: '../../assets/img/dmg/fbg4inspect1.jpg', },
        { img: '../../assets/img/dmg/fbg4inspect2.jpg', },
        { img: '../../assets/img/dmg/fbg4inspect3.jpg', },
        { img: '../../assets/img/dmg/fbg4inspect4.jpg', },
      ],
    }
  },
  mounted: function () {
    console.log("mounted ledgerA3");
  },
  methods: {
  },
});
</script>
