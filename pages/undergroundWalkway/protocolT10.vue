<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <underground-walkway-side-card-details />
      </v-col>
      <v-col md="9" cols="12">
        <v-card elevation="3">
          <div class="d-flex">
            <v-sheet class="pa-1 ma-1">スパン番号</v-sheet>
            <v-sheet class="ma-1">
              <v-select v-model="page" :items="numbers" item-title="page" variant="outlined" density="compact"
                hide-details></v-select>
            </v-sheet>
          </div>
          <v-window v-model="page">
            <v-window-item v-for="item in facilityItems" :key="item.spanId" :value="item.spanId">
              <v-card class="border rounded-0">
                <v-sheet class="d-flex">
                  <v-card-text class="border bg-grey-lighten-3 text-center pa-1">管理番号</v-card-text>
                  <v-card-text class="border text-center pa-1">{{ item.adminId }}</v-card-text>
                  <v-card-text class="border bg-grey-lighten-3 text-center pa-1">施設名</v-card-text>
                  <v-card-text class="border text-center pa-1">{{ item.facilityName }}</v-card-text>
                  <v-card-text class="border bg-grey-lighten-3 text-center pa-1" style="width:40%">附属物設置状況および変状図</v-card-text>
                  <v-card-text class="border bg-grey-lighten-3 text-center pa-1">スパン番号</v-card-text>
                  <v-card-text class="border text-center pa-1">{{ item.spanId }}</v-card-text>
                </v-sheet>
                <v-container class="border" :style="{minHeight:'250px'}">
                  <v-img :src="item.damegeImg" />
                </v-container>
                <v-row no-gutters>
                  <v-col md="6" cols="12" class="borders">
                    <v-table density="compact" :style="{ whiteSpace: 'nowrap' }">
                      <thead>
                        <tr>
                          <th class="border bg-grey-lighten-3 text-center">設備種別</th>
                          <th class="border bg-grey-lighten-3 text-center">設備名</th>
                          <th class="border bg-grey-lighten-3 text-center">設置数</th>
                          <th class="border bg-grey-lighten-3 text-center">設置年月</th>
                          <th class="border bg-grey-lighten-3 text-center">アンカー種別</th>
                          <th class="border bg-grey-lighten-3 text-center">損傷個所</th>
                          <th class="border bg-grey-lighten-3 text-center">判定区分</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, i) in light" :key="i">
                          <th v-if="i === 0" class="border bg-grey-lighten-3 text-center"
                            :rowspan="getRowsNumber(light)">照明設備</th>
                          <td class="border">{{ item.facilityName }}</td>
                          <td class="border">{{ item.numbers }}</td>
                          <td class="border">{{ item.createDate }}</td>
                          <td class="border">{{ item.ankerType }}</td>
                          <td class="border">{{ item.damageSection }}</td>
                          <td class="border">{{ item.judgement }}</td>
                        </tr>
                        <tr v-for="(item, i) in ventilation" :key="i">
                          <th v-if="i === 0" class="border bg-grey-lighten-3 text-center"
                            :rowspan="getRowsNumber(ventilation)">換気設備</th>
                          <td class="border">{{ item.facilityName }}</td>
                          <td class="border">{{ item.numbers }}</td>
                          <td class="border">{{ item.createDate }}</td>
                          <td class="border">{{ item.ankerType }}</td>
                          <td class="border">{{ item.damageSection }}</td>
                          <td class="border">{{ item.judgement }}</td>
                        </tr>
                        <tr v-for="(item, i) in signBoard" :key="i">
                          <th v-if="i === 0" class="border bg-grey-lighten-3 text-center"
                            :rowspan="getRowsNumber(signBoard)">標識版</th>
                          <td class="border">{{ item.facilityName }}</td>
                          <td class="border">{{ item.numbers }}</td>
                          <td class="border">{{ item.createDate }}</td>
                          <td class="border">{{ item.ankerType }}</td>
                          <td class="border">{{ item.damageSection }}</td>
                          <td class="border">{{ item.judgement }}</td>
                        </tr>
                      </tbody>
                    </v-table>
                  </v-col>
                  <v-col md="6" cols="12" class="borders">
                    <v-table density="compact" :style="{ whiteSpace: 'nowrap' }">
                      <thead>
                        <tr>
                          <th class="border bg-grey-lighten-3 text-center">設備種別</th>
                          <th class="border bg-grey-lighten-3 text-center">設備名</th>
                          <th class="border bg-grey-lighten-3 text-center">設置数</th>
                          <th class="border bg-grey-lighten-3 text-center">設置年月</th>
                          <th class="border bg-grey-lighten-3 text-center">アンカー種別</th>
                          <th class="border bg-grey-lighten-3 text-center">損傷個所</th>
                          <th class="border bg-grey-lighten-3 text-center">判定区分</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, i) in interiorboard" :key="i">
                          <th v-if="i === 0" class="border bg-grey-lighten-3 text-center"
                            :rowspan="getRowsNumber(interiorboard)">内装板</th>
                          <td class="border">{{ item.facilityName }}</td>
                          <td class="border">{{ item.numbers }}</td>
                          <td class="border">{{ item.createDate }}</td>
                          <td class="border">{{ item.ankerType }}</td>
                          <td class="border">{{ item.damageSection }}</td>
                          <td class="border">{{ item.judgement }}</td>
                        </tr>
                        <tr v-for="(item, i) in soundAbsorbing" :key="i">
                          <th v-if="i === 0" class="border bg-grey-lighten-3 text-center"
                            :rowspan="getRowsNumber(soundAbsorbing)">吸音板</th>
                          <td class="border">{{ item.facilityName }}</td>
                          <td class="border">{{ item.numbers }}</td>
                          <td class="border">{{ item.createDate }}</td>
                          <td class="border">{{ item.ankerType }}</td>
                          <td class="border">{{ item.damageSection }}</td>
                          <td class="border">{{ item.judgement }}</td>
                        </tr>
                      </tbody>
                    </v-table>
                  </v-col>
                  <v-col md="7" cols="12">
                    <v-card class="rounded-0 border" elevation="0">
                      <div class="d-flex">
                        <v-sheet class="border pa-1">
                          主な設置設備
                        </v-sheet>
                      </div>
                      <v-container>

                      </v-container>
                    </v-card>
                  </v-col>
                  <v-col md="5" cols="12">
                    <v-table density="compact" :style="{ whiteSpase: 'nowrap' }">
                      <thead>
                        <tr>
                          <th class="border bg-grey-lighten-3 text-center" colspan="2">非常用設備</th>
                          <th class="border bg-grey-lighten-3 text-center">設置数</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item,i) in alarms" :key="i">
                          <th v-if="i === 0" class="border bg-grey-lighten-3 text-center" :rowspan="getRowsNumber(alarms)">
                            通報・警備設備
                          </th>
                          <th class="border bg-grey-lighten-3 text-center">{{item.title}}</th>
                          <td class="border">{{item.numbers}}</td>
                        </tr>
                        <tr v-for="(item,i) in fireSuppression" :key="i">
                          <th v-if="i === 0" class="border bg-grey-lighten-3 text-center" :rowspan="getRowsNumber(fireSuppression)">
                            消火設備
                          </th>
                          <th class="border bg-grey-lighten-3 text-center">{{item.title}}</th>
                          <td class="border">{{item.numbers}}</td>
                        </tr>
                        <tr v-for="(item,i) in evacuation" :key="i">
                          <th v-if="i === 0" class="border bg-grey-lighten-3 text-center" :rowspan="getRowsNumber(evacuation)">
                            避難誘導設備
                          </th>
                          <th class="border bg-grey-lighten-3 text-center">{{item.title}}</th>
                          <td class="border">{{item.numbers}}</td>
                        </tr>
                        <tr v-for="(item,i) in otherEquipment" :key="i">
                          <th v-if="i === 0" class="border bg-grey-lighten-3 text-center" :rowspan="getRowsNumber(otherEquipment)">
                            その他の設備
                          </th>
                          <th class="border bg-grey-lighten-3 text-center">{{item.title}}</th>
                          <td class="border">{{item.numbers}}</td>
                        </tr>
                      </tbody>
                    </v-table>
                  </v-col>
                </v-row>
              </v-card>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      page: 1,
      numbers: [],
      //TODO:DBのテーブル、カラムが判明次第、それに合わせて改修する
      facilityItems: [
        {
          spanId: 1,
          adminId: 0,
          facilityName: 0,
          damegeImg: null,
        },
        {
          spanId: 2,
          adminId: null,
          facilityName: null,
          damegeImg: null,
        },
        {
          spanId: 3,
          adminId: null,
          facilityName: null,
          damegeImg: null,
        },
      ],
      light: [
        {
          facilityName: null,
          numbers: null,
          createDate: null,
          ankerType: null,
          damageSection: null,
          judgement: null,
        },
      ],
      ventilation: [
        {
          facilityName: null,
          numbers: null,
          createDate: null,
          ankerType: null,
          damageSection: null,
          judgement: null,
        },
        {
          facilityName: null,
          numbers: null,
          createDate: null,
          ankerType: null,
          damageSection: null,
          judgement: null,
        },
        {
          facilityName: null,
          numbers: null,
          createDate: null,
          ankerType: null,
          damageSection: null,
          judgement: null,
        },
      ],
      signBoard: [
        {
          facilityName: null,
          numbers: null,
          createDate: null,
          ankerType: null,
          damageSection: null,
          judgement: null,
        },
        {
          facilityName: null,
          numbers: null,
          createDate: null,
          ankerType: null,
          damageSection: null,
          judgement: null,
        },
        {
          facilityName: null,
          numbers: null,
          createDate: null,
          ankerType: null,
          damageSection: null,
          judgement: null,
        },
      ],
      interiorboard: [
        {
          facilityName: null,
          numbers: null,
          createDate: null,
          ankerType: null,
          damageSection: null,
          judgement: null,
        },
      ],
      soundAbsorbing: [
        {
          facilityName: null,
          numbers: null,
          createDate: null,
          ankerType: null,
          damageSection: null,
          judgement: null,
        },
        {
          facilityName: null,
          numbers: null,
          createDate: null,
          ankerType: null,
          damageSection: null,
          judgement: null,
        },
      ],
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
  mounted: function () {
    this.getPageNumber(this.facilityItems);
  },
  methods: {
    getPageNumber(facilitys) {
      facilitys.forEach(element => {
        this.numbers.push(element.spanId);
      });
    },
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