<template>
  <div>
    <v-row>
      <v-col v-bind:md="child_extend ? 3 : 0" cols="12">
        <footbridge-side-card-details @isExtend='child_extend = $event' />
      </v-col>
      <v-col v-bind:md="child_extend ? 9 : 12" cols="12">
        <v-card elevation="3">
          <v-card-title>
            <v-row class="justify-start mt-1 ml-3">青葉歩道橋 No.01130010</v-row>
            <v-row class="justify-end mt-1 mr-3">様式-2</v-row>
          </v-card-title>
          <v-card-text>
            <v-row no-gutters>
              <v-col md="6" cols="12">
                <div>
                  <v-table density="compact" class="ledger">
                    <thead>
                      <tr>
                        <th class="d-flex justify-space-between">
                          <div style="width:10ex;"></div>
                          <div class="align-self-center">補修歴調書</div>
                          <!--<v-btn class="btn " color="primary" dark size="small" v-on:click="onCreateClick()">新規登録-->
                          <v-btn class="btn " color="primary" dark size="small">新規登録</v-btn>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="pa-0">
                          <div>
                            <vue-good-table :columns="repairHistColumns" :rows="fbgRepairHistory"
                              style-class="vgt-table striped" :pagination-options="{
                                enabled: true,
                                mode: 'records',
                                perPage: 10,
                                nextLabel: '次',
                                prevLabel: '前',
                                perPageDropdownEnabled: false,
                              }">
                              <template #table-row="props">
                                <span v-if="props.column.field == 'update'">
                                  <v-btn class="btn" color="primary" dark size="small">
                                    更新</v-btn>
                                </span>
                                <span v-if="props.column.field == 'delete'">
                                  <v-btn class="btn" color="error" dark size="small">
                                    削除
                                  </v-btn>
                                </span>
                                <span v-else>
                                  {{ props.formattedRow[props.column.field] }}
                                </span>
                              </template>
                            </vue-good-table>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </v-table>
                  <v-table density="compact" class="ledger">
                    <thead>
                      <tr>
                        <th colspan="4" class="text-center">変状調書</th>
                      </tr>
                      <tr>
                        <th class="text-center">調査年月</th>
                        <th class="text-center">調査対象（日常、定期）</th>
                        <th class="text-center">調査記事</th>
                        <th class="text-center">調査業者</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="i in 8" key="i">
                        <td>{{ null }}{{ null }}年{{ null }}月</td>
                        <td>{{ null }}</td>
                        <td>{{ null }}:{{ null }}ランク</td>
                        <td>{{ null }}</td>
                      </tr>
                    </tbody>
                  </v-table>
                  <v-table density="compact" class="ledger">
                    <thead>
                      <tr>
                        <th colspan="9" class="text-center">交通量調書</th>
                      </tr>
                      <tr>
                        <th rowspan="2" class="text-center">調査年月</th>
                        <th rowspan="2" class="text-center">交通量</th>
                        <th rowspan="2" class="text-center">大型車混入率</th>
                        <th colspan="2" class="text-center">自動車種</th>
                        <th rowspan="2" class="text-center">二輪車</th>
                        <th rowspan="2" class="text-center">自転車</th>
                        <th rowspan="2" class="text-center">歩行者類</th>
                        <th rowspan="2" class="text-center">摘要</th>
                      </tr>
                      <tr>
                        <th class="text-center">大型車</th>
                        <th class="text-center">その他</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="i in 9" key="i">
                        <td>{{ null }}{{ null }}年{{ null }}月{{ null }}日</td>
                        <td>{{ null }}台</td>
                        <td>{{ null }}％</td>
                        <td>{{ null }}台</td>
                        <td>{{ null }}台</td>
                        <td>{{ null }}台</td>
                        <td>{{ null }}台</td>
                        <td>{{ null }}人</td>
                        <td>{{ null }}</td>
                      </tr>
                    </tbody>
                  </v-table>
                </div>
              </v-col>
              <v-col md="6" cols="12">
                <div>
                  <v-table density="compact" class="ledger">
                    <thead>
                      <tr>
                        <th colspan="2" class="text-center">敷地調書</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th class="text-center" style="width:30%">土地所有者</th>
                        <td>{{ null }}</td>
                      </tr>
                      <tr>
                        <th class="text-center">連絡先</th>
                        <td>{{ null }}</td>
                      </tr>
                      <tr>
                        <th class="text-center">期間</th>
                        <td>{{ null }}</td>
                      </tr>
                    </tbody>
                  </v-table>
                  <v-table density="compact" class="ledger">
                    <thead>
                      <tr>
                        <th colspan="5" class="text-center">占用・添架物件調書</th>
                      </tr>
                      <tr>
                        <th class="text-center">許可年月日</th>
                        <th class="text-center">物件所有者</th>
                        <th class="text-center">種類及び数量</th>
                        <th class="text-center">重量</th>
                        <th class="text-center">連絡先</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="i in 5" key="i">
                        <td>{{ null }}年{{ null }}月{{ null }}日</td>
                        <td>{{ null }}</td>
                        <td>{{ null }}</td>
                        <td>{{ null }}kg/m</td>
                        <td>{{ null }}</td>
                      </tr>
                    </tbody>
                  </v-table>
                  <v-table density="compact" class="ledger">
                    <thead>
                      <tr>
                        <th colspan="8" class="text-center">塗装調書</th>
                      </tr>
                      <tr>
                        <th rowspan="2" class="text-center">項目・部材</th>
                        <th colspan="2" class="text-center">上部</th>
                        <th colspan="2" class="text-center">下部</th>
                        <th rowspan="2" class="text-center">高欄</th>
                        <th rowspan="2" class="text-center">橋灯</th>
                        <th rowspan="2" class="text-center">計</th>
                      </tr>
                      <tr>
                        <th class="text-center">一般塗装部</th>
                        <th class="text-center">特殊塗装部</th>
                        <th class="text-center">一般塗装部</th>
                        <th class="text-center">特殊塗装部</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th class="text-center">塗装面積</th>
                        <td>{{ null }}㎡</td>
                        <td>{{ null }}㎡</td>
                        <td>{{ null }}㎡</td>
                        <td>{{ null }}㎡</td>
                        <td>{{ null }}㎡</td>
                        <td>{{ null }}㎡</td>
                        <td>{{ null }}㎡</td>
                      </tr>
                    </tbody>
                  </v-table>
                  <v-table density="compact" class="ledger">
                    <thead>
                      <tr>
                        <th class="d-flex justify-space-between">
                          <div style="width:10ex;"></div>
                          <div class="align-self-center"> 塗装歴調書</div>
                          <!--<v-btn class="btn " color="primary" dark size="small" v-on:click="onCreateClick()">新規登録-->
                          <v-btn class="btn " color="primary" dark size="small">新規登録</v-btn>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <td>
                        <v-col>
                          <v-row>
                            <vue-good-table :columns="paintHistColumns" :rows="fbgPaintHistory"
                              style-class="vgt-table striped" :pagination-options="{
                                enabled: true,
                                mode: 'records',
                                perPage: 10,
                                nextLabel: '次',
                                prevLabel: '前',
                                perPageDropdownEnabled: false,
                              }">
                              <template #table-row="props">
                                <span v-if="props.column.field == 'update'">
                                  <v-btn class="btn" color="primary" dark size="small">更新</v-btn>
                                </span>
                                <span v-if="props.column.field == 'delete'">
                                  <v-btn class="btn" color="error" dark size="small">削除</v-btn>
                                </span>
                                <span v-else>
                                  {{ props.formattedRow[props.column.field] }}
                                </span>
                              </template>
                            </vue-good-table>
                          </v-row>
                        </v-col>
                      </td>
                    </tbody>
                  </v-table>
                  <v-table density="compact" class="ledger">
                    <thead>
                      <tr>
                        <th class="d-flex justify-space-between">
                          <div style="width:10ex;"></div>
                          <div class="align-self-center">舗装歴調書</div>
                          <!--<v-btn class="btn " color="primary" dark size="small" v-on:click="onCreateClick()">新規登録-->
                          <v-btn class="btn " color="primary" dark size="small">新規登録</v-btn>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="pa-0">
                          <vue-good-table :columns="paveHistColumns" :rows="fbgPaveHistory"
                            style-class="vgt-table striped" :pagination-options="{
                              enabled: true,
                              mode: 'records',
                              perPage: 10,
                              nextLabel: '次',
                              prevLabel: '前',
                              perPageDropdownEnabled: false,
                            }">
                            <template #table-row="props">
                              <span v-if="props.column.field == 'update'">
                                <v-btn class="btn" color="primary" dark size="small">更新</v-btn>
                              </span>
                              <span v-if="props.column.field == 'delete'">
                                <v-btn class="btn" color="error" dark size="small">削除</v-btn>
                              </span>
                              <span v-else>
                                {{ props.formattedRow[props.column.field] }}
                              </span>
                            </template>
                          </vue-good-table>
                        </td>
                      </tr>
                    </tbody>
                  </v-table>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
import fbgRepairHistoryJson from "@/assets/footbridgesRepairHistory.json";
import fbgPaintHistoryJson from "@/assets/footbridgesPaintHistory.json";
import fbgPaveHistoryJson from "@/assets/footbridgesPaveHistory.json";

//補修歴一覧情報
const fbgRepairHistory = fbgRepairHistoryJson;
//塗装歴一覧情報
const fbgPaintHistory = fbgPaintHistoryJson;
//舗装歴一覧情報
const fbgPaveHistory = fbgPaveHistoryJson;

const child_extend = ref(true);
const onDownloadLedgerClick = () => {
  console.debug('downloadLedger');
};

// 補修歴一覧の列情報
let repairHistColumns = [
  {
    label: '年月',
    field: 'createDate',
    type: 'date',
    // NOTE: Date形式をISO-8601に合わせた
    dateInputFormat: "yyyy-MM-dd'T'HH:mm:ss.SSSXXX",
    dateOutputFormat: 'yyyy-MM-dd',
    sortable: false,

  },
  {
    label: '工事件名',
    field: 'constname',
    sortable: false,
  },
  {
    label: '工種・規模',
    field: 'constkindsize',
    sortable: false,
  },
  {
    label: '施行業者',
    field: 'consttrader',
    sortable: false,
  },
  {
    label: '',
    field: 'update',
    filterable: false,
    sortable: false,
  },
  {
    label: '',
    field: 'delete',
    filterable: false,
    sortable: false,
  },
];

// 塗装歴一覧の列情報
let paintHistColumns = [
  {
    label: '年月',
    field: 'createDate',
    type: 'date',
    // NOTE: Date形式をISO-8601に合わせた
    dateInputFormat: "yyyy-MM-dd'T'HH:mm:ss.SSSXXX",
    dateOutputFormat: 'yyyy-MM-dd',
    sortable: false,
  },
  {
    label: '素地調整',
    field: 'paintfoundname',
    sortable: false,
  },
  {
    label: '下塗',
    field: 'undercoatname',
    sortable: false,
  },
  {
    label: '中塗',
    field: 'intercoatname',
    sortable: false,
  },
  {
    label: '上塗',
    field: 'topcoatname',
    sortable: false,
  },
  {
    label: '面積（一般部）',
    field: 'areageneral',
    sortable: false,
  },
  {
    label: '面積（特殊部）',
    field: 'areaspecial',
    sortable: false,
  },
  {
    label: '施行業者',
    field: 'consttrader',
    sortable: false,
  },
  {
    label: '',
    field: 'update',
    filterable: false,
    sortable: false,
  },
  {
    label: '',
    field: 'delete',
    filterable: false,
    sortable: false,
  },
];

//舗装歴一覧の列情報
let paveHistColumns = [
  {
    label: '年月',
    field: 'createDate',
    type: 'date',
    // NOTE: Date形式をISO-8601に合わせた
    dateInputFormat: "yyyy-MM-dd'T'HH:mm:ss.SSSXXX",
    dateOutputFormat: 'yyyy-MM-dd',
    sortable: false,
  },
  {
    label: '材料',
    field: 'matname',
    sortable: false,
  },
  {
    label: '数量',
    field: 'volume',
    sortable: false,
  },
  {
    label: '厚',
    field: 'thickness',
    sortable: false,
  },
  {
    label: '箇所',
    field: 'part',
    sortable: false,
  },
  {
    label: '防水工',
    field: 'waterproofname',
    sortable: false,
  },
  {
    label: '施行業者',
    field: 'consttrader',
    sortable: false,
  },
  {
    label: '',
    field: 'update',
    filterable: false,
    sortable: false,
  },
  {
    label: '',
    field: 'delete',
    filterable: false,
    sortable: false,
  },
];
</script>