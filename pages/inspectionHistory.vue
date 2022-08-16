<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <side-card-details />
      </v-col>
      <v-col md="9" cols="12">
        <v-card class="mainCards">
          <vue-good-table :columns="columns" :rows="historyTableData">
            <template #table-row="props">
              <span v-if="props.column.field == 'detailsBtn'">
                <div align="center">
                  <v-btn class="btn" color="primary" dark size="small" @click="clickDetails()">
                    詳細
                  </v-btn>
                </div>
              </span>
              <span v-else-if="props.column.field == 'OutRecodeBtn'">
                <div align="center">
                  <v-btn class="btn" color="primary" dark size="small" @click="clickOutputRecode()">
                    調書
                  </v-btn>
                </div>
              </span>
              <span v-else-if="props.column.field == 'OutNationalBtn'">
                <div align="center">
                  <v-btn class="btn" color="primary" dark size="small" @click="clickOutputNational()">
                    国様式
                  </v-btn>
                </div>
              </span>
            </template>
          </vue-good-table>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script type="ts">
import inspectionHistoryTableJson from "../assets/inspectionHistory.json"

export default defineComponent({
  data() {
    return {
      historyTableData: inspectionHistoryTableJson,
      // 一覧の列情報
      columns: [
        {
          label: '次数',
          field: 'degree',
          sortable: false,
        },
        {
          label: '期間(開始)',
          field: 'periodFrom',
          type: 'date',
          dateInputFormat: 'yyyymmdd',
          dateOutputFormat: 'yyyy/MM/dd',
          sortable: false,
        },
        {
          label: '期間(終了)',
          field: 'periodTo',
          type: 'date',
          dateInputFormat: 'yyyymmdd',
          dateOutputFormat: 'yyyy/MM/dd',
          sortable: false,
        },
        {
          label: '請負業者',
          field: 'contractor',
          sortable: false,
        },
        {
          label: '総合評価',
          field: 'totalScore',
          sortable: false,
        },
        {
          label: '国評価',
          field: 'countryScore',
          sortable: false,
        },
        {
          label: '点検詳細',
          field: 'detailsBtn',
          filterable: false,
          sortable: false,
        },
        {
          label: '調書出力',
          field: 'OutRecodeBtn',
          filterable: false,
          sortable: false,
        },
        {
          label: '国様式出力',
          field: 'OutNationalBtn',
          filterable: false,
          sortable: false,
        },
      ],
    };
  },
  methods: {
    clickDetails() {
      console.debug('clickDetails');
      window.location.href = '/bridge/form2'
    },
    clickOutputRecode() {
      console.debug('clickOutputRecode');
    },
    clickOutputNational() {
      console.debug('clickOutputNational');
    },
  },
})
</script>
