<template>
  <div>
    <v-row>
      <v-col v-bind:md="child_extend ? 3 : 0" cols="12">
          <tunnel-side-card-details @isExtend='child_extend = $event' selectTab="inspection" />
      </v-col>
    <v-col v-bind:md="child_extend ? 9 : 12" cols="12">
        <v-card>
          <div class="d-flex">
            <v-sheet>
              <v-container>ブロック番号</v-container>
            </v-sheet>
            <v-sheet class="ma-1">
              <v-select v-model="page" :items="getPageNumber(items)" item-title="page" variant="outlined"
                density="compact" hide-details>
              </v-select>
            </v-sheet>
          </div>
          <v-window v-model="page">
            <v-window-item value="全て">
              <v-container v-for="item in items" :key="item.blockId">
                <v-table density="compact" class="ledger">
                  <thead>
                    <tr>
                      <th rowspan="2" class="text-center">工種</th>
                      <th rowspan="2" class="text-center">材料</th>
                      <th colspan="3" class="text-center">部材種別</th>
                      <th colspan="4" class="text-center">判定区分</th>
                      <th rowspan="2" class="text-center">備考</th>
                    </tr>
                    <tr>
                      <th class="text-center">名称</th>
                      <th class="text-center">記号</th>
                      <th class="text-center">部材番号</th>
                      <th class="text-center">区分Ⅰの変状</th>
                      <th class="text-center">区分Ⅱの変状</th>
                      <th class="text-center">区分Ⅲの変状</th>
                      <th class="text-center">区分Ⅳの変状</th>
                    </tr>
                  </thead>
                  <!--DBカラムが判明次第適切な値が表示されるよう修正-->
                  <tbody>
                    <tr v-for="(data, i) in item.inspectData" :key="i">
                      <td style="width:10em;">{{ data.c1 }}</td>
                      <td style="width:10em;">{{ data.c2 }}</td>
                      <td style="width:5em;">{{ data.c3 }}</td>
                      <td style="width:5em;">{{ data.c4 }}</td>
                      <td style="width:5em;">{{ data.c5 }}</td>
                      <td style="width:20em; white-space:normal;">{{ data.c6 }}</td>
                      <td style="width:20em; white-space:normal;">{{ data.c7 }}</td>
                      <td style="width:20em; white-space:normal;">{{ data.c8 }}</td>
                      <td style="width:20em; white-space:normal;">{{ data.c9 }}</td>
                      <td style="white-space:normal;">{{ data.c10 }}</td>
                    </tr>
                  </tbody>
                </v-table>
                <div style="display:flex">
                  <v-sheet class="text-center" style=" border: 1px solid #dedede; width:30em">点検調書（その3）判定区分判定結果
                  </v-sheet>
                  <v-sheet class="text-center" style=" border: 1px solid #dedede; width:10em">ブロック番号</v-sheet>
                  <v-sheet class="text-center" style=" border: 1px solid #dedede; width:5em">BL{{ item.blockId }}
                  </v-sheet>
                </div>
              </v-container>
            </v-window-item>
            <v-window-item v-for="(item, i) in items" :key="item.blockId" :value="item.blockId">
              <v-container>
                <v-table density="compact" class="ledger">
                  <thead>
                    <tr>
                      <th rowspan="2" class="text-center">工種</th>
                      <th rowspan="2" class="text-center">材料</th>
                      <th colspan="3" class="text-center">部材種別</th>
                      <th colspan="4" class="text-center">判定区分</th>
                      <th rowspan="2" class="text-center">備考</th>
                    </tr>
                    <tr>
                      <th class="text-center">名称</th>
                      <th class="text-center">記号</th>
                      <th class="text-center">部材番号</th>
                      <th class="text-center">区分Ⅰの変状</th>
                      <th class="text-center">区分Ⅱの変状</th>
                      <th class="text-center">区分Ⅲの変状</th>
                      <th class="text-center">区分Ⅳの変状</th>
                    </tr>
                  </thead>
                  <!--DBカラムが判明次第適切な値が表示されるよう修正-->
                  <tbody>
                    <tr v-for="(data, j) in item.inspectData" :key="j">
                      <td style="width:10em;">{{ data.c1 }}</td>
                      <td style="width:10em;">{{ data.c2 }}</td>
                      <td style="width:5em;">{{ data.c3 }}</td>
                      <td style="width:5em;">{{ data.c4 }}</td>
                      <td style="width:5em;">{{ data.c5 }}</td>
                      <td style="width:20em; white-space:normal;">{{ data.c6 }}</td>
                      <td style="width:20em; white-space:normal;">{{ data.c7 }}</td>
                      <td style="width:20em; white-space:normal;">{{ data.c8 }}</td>
                      <td style="width:20em; white-space:normal;">{{ data.c9 }}</td>
                      <td style="white-space:normal;">{{ data.c10 }}</td>
                    </tr>
                  </tbody>
                </v-table>
                <div style="display:flex">
                  <v-sheet class="text-center" style=" border: 1px solid #dedede; width:30em">点検調書（その3）判定区分判定結果
                  </v-sheet>
                  <v-sheet class="text-center" style=" border: 1px solid #dedede; width:10em">ブロック番号</v-sheet>
                  <v-sheet class="text-center" style=" border: 1px solid #dedede; width:5em">BL{{ item.blockId }}
                  </v-sheet>
                </div>
              </v-container>
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
      child_extend: true,
      page: '全て',
      items: [
        {
          blockId: 1,
          inspectData: [
            {
              c1: '1カルバート', c2: 'コンクリート', c3: '頂版', c4: 'Cr', c5: '0101', c6: '',
              c7: '・うきが見られる。直ちに第三者被害に至る可能性は低いが、予防保全の観点から補修が望ましい。',
              c8: '', c9: '', c10: ''
            },
            {
              c1: 'カルバート', c2: 'コンクリート', c3: '側壁', c4: 'Sw', c5: '0101', c6: '・早期落下の可能性があるうきに対して叩き落としを実施した。',
              c7: '',
              c8: '', c9: '', c10: ''
            },
            {
              c1: 'カルバート', c2: 'コンクリート', c3: '側壁', c4: 'Sw', c5: '0102', c6: '',
              c7: '・うきが見られる。直ちに第三者被害に至る可能性は低いが、予防保全の観点から補修が望ましい。',
              c8: '・早期落下の可能性があるうきに対して叩き落としを実施した。', c9: '・うきが見られる。直ちに第三者被害に至る可能性は低いが、予防保全の観点から補修が望ましい。', c10: ''
            },
            {
              c1: 'カルバート', c2: 'コンクリート', c3: '底版', c4: 'Ds', c5: '0101', c6: '・変状は見られない。',
              c7: '',
              c8: '', c9: '', c10: ''
            },
            { c1: null, c2: null, c3: null, c4: null, c5: null, c6: null, c7: null, c8: null, c9: null, c10: null },
            { c1: null, c2: null, c3: null, c4: null, c5: null, c6: null, c7: null, c8: null, c9: null, c10: null },
            { c1: null, c2: null, c3: null, c4: null, c5: null, c6: null, c7: null, c8: null, c9: null, c10: null },
            { c1: null, c2: null, c3: null, c4: null, c5: null, c6: null, c7: null, c8: null, c9: null, c10: null },
            { c1: null, c2: null, c3: null, c4: null, c5: null, c6: null, c7: null, c8: null, c9: null, c10: null },
            { c1: null, c2: null, c3: null, c4: null, c5: null, c6: null, c7: null, c8: null, c9: null, c10: null },
            { c1: null, c2: null, c3: null, c4: null, c5: null, c6: null, c7: null, c8: null, c9: null, c10: null },
            { c1: null, c2: null, c3: null, c4: null, c5: null, c6: null, c7: null, c8: null, c9: null, c10: null },]
        },
        {
          blockId: 2,
          inspectData: [
            {
              c1: '2カルバート', c2: 'コンクリート', c3: '頂版', c4: 'Cr', c5: '0101', c6: '',
              c7: '・うきが見られる。直ちに第三者被害に至る可能性は低いが、予防保全の観点から補修が望ましい。',
              c8: '', c9: '', c10: ''
            },
            {
              c1: 'カルバート', c2: 'コンクリート', c3: '側壁', c4: 'Sw', c5: '0101', c6: '・早期落下の可能性があるうきに対して叩き落としを実施した。',
              c7: '',
              c8: '', c9: '', c10: ''
            },
            {
              c1: 'カルバート', c2: 'コンクリート', c3: '側壁', c4: 'Sw', c5: '0102', c6: '',
              c7: '・うきが見られる。直ちに第三者被害に至る可能性は低いが、予防保全の観点から補修が望ましい。',
              c8: '', c9: '', c10: ''
            },
            {
              c1: 'カルバート', c2: 'コンクリート', c3: '底版', c4: 'Ds', c5: '0101', c6: '・変状は見られない。',
              c7: '',
              c8: '', c9: '', c10: ''
            },]
        },
        {
          blockId: 3,
          inspectData: [
            {
              c1: '3カルバート', c2: 'コンクリート', c3: '頂版', c4: 'Cr', c5: '0101', c6: '',
              c7: '・うきが見られる。直ちに第三者被害に至る可能性は低いが、予防保全の観点から補修が望ましい。',
              c8: '', c9: '', c10: ''
            },
            {
              c1: 'カルバート', c2: 'コンクリート', c3: '側壁', c4: 'Sw', c5: '0101', c6: '・早期落下の可能性があるうきに対して叩き落としを実施した。',
              c7: '',
              c8: '', c9: '', c10: ''
            },
            {
              c1: 'カルバート', c2: 'コンクリート', c3: '側壁', c4: 'Sw', c5: '0102', c6: '',
              c7: '・うきが見られる。直ちに第三者被害に至る可能性は低いが、予防保全の観点から補修が望ましい。',
              c8: '', c9: '', c10: ''
            },
            {
              c1: 'カルバート', c2: 'コンクリート', c3: '底版', c4: 'Ds', c5: '0101', c6: '・変状は見られない。',
              c7: '',
              c8: '', c9: '', c10: ''
            },]
        },
      ]
    }
  },
  methods: {
    //ドロップダウンリストの項目を取得する
    getPageNumber(facilities) {
      let nums = new Array<String>;
      nums.push('全て');
      facilities.forEach(element => {
        nums.push(element.blockId);
      });
      return nums;
    },
  }
})
</script>