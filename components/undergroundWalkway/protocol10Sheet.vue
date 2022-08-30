<template>
  <v-card class="rounded-0 border">
    <v-sheet class="d-flex tbTitle">
      <v-card-text class="title pa-1">管理番号</v-card-text>
      <v-card-text class=" pa-1">{{ null }}</v-card-text>
      <v-card-text class="title pa-1">施設名</v-card-text>
      <v-card-text class=" pa-1">{{ null }}</v-card-text>
      <v-card-text class="title pa-1" style="width:40%">附属物設置状況および変状図</v-card-text>
      <v-card-text class="title pa-1">スパン番号</v-card-text>
      <v-card-text class=" pa-1">{{ spanid }}</v-card-text>
    </v-sheet>
    <v-container :style="{ minHeight: '250px' }">
      <v-img :src="null" />
    </v-container>
    <v-row no-gutters>
      <v-col md="6" cols="12" class="border">
        <v-table density="compact">
          <thead>
            <tr>
              <th>設備種別</th>
              <th>設備名</th>
              <th>設置数</th>
              <th>設置年月</th>
              <th>アンカー種別</th>
              <th>損傷個所</th>
              <th>判定区分</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in 1" :key="i">
              <th v-if="i === 0" :rowspan="1">照明設備</th>
              <td>{{ null }}</td>
              <td>{{ null }}</td>
              <td>{{ null }}</td>
              <td>{{ null }}</td>
              <td>{{ null }}</td>
              <td>{{ null }}</td>
            </tr>
            <tr v-for="(item, i) in 3" :key="i">
              <th v-if="i === 0" :rowspan="3">換気設備</th>
              <td>{{ null }}</td>
              <td>{{ null }}</td>
              <td>{{ null }}</td>
              <td>{{ null }}</td>
              <td>{{ null }}</td>
              <td>{{ null }}</td>
            </tr>
            <tr v-for="(item, i) in 3" :key="i">
              <th v-if="i === 0" :rowspan="3">標識版</th>
              <td>{{ null }}</td>
              <td>{{ null }}</td>
              <td>{{ null }}</td>
              <td>{{ null }}</td>
              <td>{{ null }}</td>
              <td>{{ null }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
      <v-col md="6" cols="12" class="border">
        <v-table density="compact" :style="{ whiteSpace: 'nowrap' }">
          <thead>
            <tr>
              <th>設備種別</th>
              <th>設備名</th>
              <th>設置数</th>
              <th>設置年月</th>
              <th>アンカー種別</th>
              <th>損傷個所</th>
              <th>判定区分</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in 1" :key="i">
              <th v-if="i === 0" :rowspan="1">内装板</th>
              <td>{{ null }}</td>
              <td>{{ null }}</td>
              <td>{{ null }}</td>
              <td>{{ null }}</td>
              <td>{{ null }}</td>
              <td>{{ null }}</td>
            </tr>
            <tr v-for="(item, i) in 2" :key="i">
              <th v-if="i === 0" :rowspan="2">吸音板</th>
              <td>{{ null }}</td>
              <td>{{ null }}</td>
              <td>{{ null }}</td>
              <td>{{ null }}</td>
              <td>{{ null }}</td>
              <td>{{ null }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
      <v-col md="7" cols="12" class="border">
        <v-card class="rounded-0 " elevation="0">
          <div class="d-flex">
            <v-sheet class="pa-1">
              主な設置設備
            </v-sheet>
          </div>
          <v-container>

          </v-container>
        </v-card>
      </v-col>
      <v-col md="5" cols="12" class="border">
        <v-table density="compact" :style="{ whiteSpase: 'nowrap' }">
          <thead>
            <tr>
              <th colspan="2">非常用設備</th>
              <th>設置数</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in alarms" :key="i">
              <th v-if="i === 0" :rowspan="getRowsNumber(alarms)">
                通報・警備設備
              </th>
              <th>{{ item.title }}</th>
              <td>{{ item.numbers }}</td>
            </tr>
            <tr v-for="(item, i) in fireSuppression" :key="i">
              <th v-if="i === 0" :rowspan="getRowsNumber(fireSuppression)">
                消火設備
              </th>
              <th>{{ item.title }}</th>
              <td>{{ item.numbers }}</td>
            </tr>
            <tr v-for="(item, i) in evacuation" :key="i">
              <th v-if="i === 0" :rowspan="getRowsNumber(evacuation)">
                避難誘導設備
              </th>
              <th>{{ item.title }}</th>
              <td>{{ item.numbers }}</td>
            </tr>
            <tr v-for="(item, i) in otherEquipment" :key="i">
              <th v-if="i === 0" :rowspan="getRowsNumber(otherEquipment)">
                その他の設備
              </th>
              <th>{{ item.title }}</th>
              <td>{{ item.numbers }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
export default defineComponent({
  props:{
    spanid:String,
    //TODO:表示するデータを受け取る
  },
  data() {
    return {
      alarms: [
        { title: '非常電話', numbers: null },
        { title: '押ボタン式通報装置', numbers: null },
        { title: '火災報知器', numbers: null },
        { title: '非常警報装置', numbers: null },
      ],
      fireSuppression: [
        { title: '消火器', numbers: null },
        { title: '消火栓', numbers: null },
      ],
      evacuation: [
        { title: '誘導表示板', numbers: null },
        { title: '排煙設備または避難通路', numbers: null },
      ],
      otherEquipment: [
        { title: '給水栓', numbers: null },
        { title: '無線通信補助設備', numbers: null },
        { title: 'ラジオ再放送設備または拡声法則設備', numbers: null },
        { title: '水噴霧設備', numbers: null },
        { title: '監視装置', numbers: null },
      ]
    }
  },
  methods:{
    //結合するrowの数を取得します。
    getRowsNumber(items) {
      var num = 0;
      items.forEach(element => {
        num++;
      });
      return num;
    },
  }
})
</script>