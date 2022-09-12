<template>
  <v-row>
      <v-col v-bind:md="child_extend ? 3 : 0" cols="12">
          <tunnel-side-card-details @isExtend='child_extend = $event' />
    </v-col>
    <v-col v-bind:md="child_extend ? 9 : 12" cols="12">
      <v-card elevation="3">
        <v-card-text>
          <v-row no-gutters>
          <v-table density="compact" class="ledger">
            <tbody>
              <tr>
                <th colspan="3" class="text-center">フリガナ</th>
                <td colspan="4" class="text-center">ゴンダ</td>
                <th colspan="2" class="text-center">路線名</th>
                <td colspan="5" class="text-center">主32 八王子五日市線</td>
                <th rowspan="2" colspan="3" class="text-center">作成者</th>
                <td rowspan="2" colspan="5">アジア航測（株）青柳健二</td>
                <th rowspan="2" colpan="2">作成年月日</th>
                <td rowspan="2" >2019年2月25日</td>
              </tr>
              <tr>
                <th colspan="3" class="text-center">名称</th>
                <td colspan="4" class="text-center">権田トンネル</td>
                <th colspan="2" class="text-center">管理事務所</th>
                <td colspan="5" class="text-center">西多摩建設事務所</td>
              </tr>
              <tr>
                <th rowspan="2">履行<br>スパン<br>番号</th>
                <th rowspan="2">スパン長<br>(ｍ)</th>
                <th colspan="2" class="text-center">追加距離</th>
                <th colspan="3" class="text-center">トンネル本体工</th>
                <th colspan="3" class="text-center">照明施設</th>
                <th colspan="8" class="text-center">非常用施設</th>
                <th colspan="5" class="text-center">換気施設</th>
                <th rowspan="2">その他の附属物等</th>
              </tr>
              <tr>
                <th class="text-center">起点側<br>(ｍ)</th>
                <th class="text-center">終点側<br>(ｍ)</th>
                <th class="text-center">特記事項</th>
                <th class="text-center">内装<br>板</th>
                <th class="text-center">天井<br>板</th>
                <th>基本<br>照明</th>
                <th>入口出<br>口照明</th>
                <th>特記<br>事項</th>
                <th>非常<br>電話</th>
                <th>押しボタン<br>通報装置</th>
                <th>消火<br>器</th>
                <th>消火<br>栓</th>
                <th>警報<br>表示板</th>
                <th>誘導<br>表示板</th>
                <th>監視<br>装置</th>
                <th>特記事項</th>
                <th>JF</th>
                <th>VI計</th>
                <th>CO計</th>
                <th>風向<br>風速計</th>
                <th>特記事項</th>
              </tr>
              <tr v-for="item in items" :key="item.c1">
                <td class="text-center">{{item.c1}}</td>
                <td class="text-center">{{item.c2}}</td>
                <td class="text-center">{{item.c3}}</td>
                <td class="text-center">{{item.c4}}</td>
                <td class="text-center">{{item.c5}}</td>
                <td class="text-center">{{item.c6}}</td>
                <td class="text-center">{{item.c7}}</td>
                <td class="text-center">{{item.c8}}</td>
                <td v-for="n of 16" :key="n"></td>
              </tr>
              <tr v-for="n1 of 13" :key="n1">
                <td v-for="n2 of 24" :key="n2"></td>
              </tr>
            </tbody>
          </v-table>
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
      items: [
        { c1: 'SP', c2:'2.5', c3:'0',    c4:'2.5',  c5: '', c6:'2', c7:'', c8:'1' },
        { c1: '1',  c2:'7',   c3:'2.5',  c4:'9.5',  c5: '', c6:'2', c7:'', c8:'1' },
        { c1: '2',  c2:'7',   c3:'9.5',  c4:'16.5', c5: '', c6:'2', c7:'', c8:'1' },
        { c1: '3',  c2:'7.2', c3:'16.5', c4:'23.7', c5: '', c6:'2', c7:'', c8:'1' },
        { c1: '4',  c2:'7.2', c3:'23.7', c4:'30.9', c5: '', c6:'2', c7:'', c8:'1' },
        { c1: '5',  c2:'7.2', c3:'30.9', c4:'38.1', c5: '', c6:'2', c7:'', c8:'2' },
        { c1: '6',  c2:'7.2', c3:'38.1', c4:'45.5', c5: '', c6:'2', c7:'', c8:'1' },
        { c1: '計', c2:'45.5', c3:'',    c4:'',     c5: '', c6:'14', c7:'', c8:'8' },
      ],

    }
  },
  mounted: function () {
    console.log("mounted ledgerA2");
  },
  methods: {
  },
});
</script>
