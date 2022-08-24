<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <FbgSideCardDetails />
      </v-col>
      <v-col md="9" cols="12">
        <v-card elevation="3">
          <v-card-title>
            <v-row class="justify-start mt-1 ml-3">舗装歴調書 -
              <div class="ml-2">青葉歩道橋</div>
            </v-row>
            <v-row class="justify-end mt-1 mr-3">
              <v-btn v-on:click="clickCreate()" color="primary">
                新規登録
              </v-btn>
            </v-row>
          </v-card-title>
          <v-card-text>
            <div>
              <vue-good-table :columns="columns" :rows="fbgPaveHistory" style-class="vgt-table striped"
                :pagination-options="{
                  enabled: true,
                  mode: 'records',
                  perPage: 10,
                  nextLabel: '次',
                  prevLabel: '前',
                  perPageDropdownEnabled: false,
                }">
                <template #table-row="props">
                  <span v-if="props.column.field == 'update'">
                    <v-btn class="btn" color="primary" dark size="small"
                      v-on:click="clickUpdate(props.row.bridgeid, props.row.reporthistid)">更新</v-btn>
                  </span>
                  <span v-if="props.column.field == 'delete'">
                    <v-btn class="btn" color="error" dark size="small"
                      v-on:click="clickDelete(props.row.bridgeid, props.row.reporthistid)">削除</v-btn>
                  </span>
                  <span v-else>
                    {{ props.formattedRow[props.column.field] }}
                  </span>
                </template>
              </vue-good-table>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!--舗装履歴登録画面-->
    <!--TODO:Dialogをコンポーネント化する -->
    <v-dialog v-model="isShowDialog" persistent max-width="700px">
      <v-card>
        <v-toolbar dense>
          <v-toolbar-title>舗装履歴の登録</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="isShowDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="3" class="mt-2">登録日</v-col>
            <v-col cols="12" sm="9">
              <Datepicker v-model="dialogDate" locale="jp" :enableTimePicker="false" :format="formatDate"
                :clearable="false" />
            </v-col>
            <v-col cols="12" sm="3" class="mt-2">材料</v-col>
            <v-col cols="12" sm="9">
              <v-textarea v-model="dialogMatName" label="材料を入力してください" rows="1" auto-grow density="compact"
                :hide-details="false"></v-textarea>
            </v-col>
            <v-col cols="12" sm="3" class="mt-2">数量</v-col>
            <v-col cols="12" sm="9">
              <v-textarea v-model="dialogVolume" label="数量を入力してください" rows="1" auto-grow density="compact"
                :hide-details="false"></v-textarea>
            </v-col>
            <v-col cols="12" sm="3" class="mt-2">厚</v-col>
            <v-col cols="12" sm="9">
              <v-textarea v-model="dialogThickness" label="厚を入力してください" rows="1" auto-grow density="compact"
                :hide-details="false"></v-textarea>
            </v-col>
            <v-col cols="12" sm="3" class="mt-2">箇所</v-col>
            <v-col cols="12" sm="9">
              <v-textarea v-model="dialogPart" label="箇所を入力してください" rows="1" auto-grow density="compact"
                :hide-details="false"></v-textarea>
            </v-col>
            <v-col cols="12" sm="3" class="mt-2">防水工</v-col>
            <v-col cols="12" sm="9">
              <v-textarea v-model="dialogWaterProofName" label="防水工を入力してください" rows="1" auto-grow density="compact"
                :hide-details="false"></v-textarea>
            </v-col>
            <v-col cols="12" sm="3" class="mt-2">施行業者</v-col>
            <v-col cols="12" sm="9">
              <v-textarea v-model="dialogContractor" label="施行業者を入力してください" rows="1" auto-grow density="compact"
                :hide-details="false"></v-textarea>
            </v-col>
          </v-row>
        </v-card-text>
        <v-divider></v-divider>
        <div class="d-flex">
          <v-btn variant="outlined" class="mr-auto ma-3" @click="clickCloseBtn()">閉じる</v-btn>
          <v-btn color="primary ma-3" class="ml-auto" @click="clickResistBtn()">登録</v-btn>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import fbgPaveHistoryJson from "@/assets/footbridgesPaveHistory.json"

export default defineComponent({
  data() {
    return {
      isShowDialog: false,
      dialogDate: "",
      dialogMatName: "",
      dialogVolume: "",
      dialogThickness: "",
      dialogPart: "",
      dialogWaterProofName: "",
      dialogContractor: "",
      fbgPaveHistory: fbgPaveHistoryJson,
      // 一覧の列情報
      columns: [
        {
          label: '年月',
          field: 'createDate',
          type: 'date',
          // NOTE: Date形式をISO-8601に合わせた
          dateInputFormat: "yyyy-MM-dd'T'HH:mm:ss.SSSXXX",
          dateOutputFormat: 'yyyy-MM-dd',
          sortable: false,
          filterOptions: {
            enabled: true,
            placeholder: '年月入力',
          },
        },
        {
          label: '材料',
          field: 'matname',
          sortable: false,
          filterOptions: {
            enabled: true,
            placeholder: '材料入力',
          },
        },
        {
          label: '数量',
          field: 'volume',
          sortable: false,
          filterOptions: {
            enabled: true,
            placeholder: '数量入力',
          },
        },
        {
          label: '厚',
          field: 'thickness',
          sortable: false,
          filterOptions: {
            enabled: true,
            placeholder: '厚入力',
          },
        },
        {
          label: '箇所',
          field: 'part',
          sortable: false,
          filterOptions: {
            enabled: true,
            placeholder: '箇所入力',
          },
        },
        {
          label: '防水工',
          field: 'waterproofname',
          sortable: false,
          filterOptions: {
            enabled: true,
            placeholder: '防水工入力',
          },
        },
        {
          label: '施行業者',
          field: 'consttrader',
          sortable: false,
          filterOptions: {
            enabled: true,
            placeholder: '施行業者入力',
          },
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
      ],
    };
  },
  mounted: function () {
    console.log("mounted ledger2_3");

  },
  methods: {
    clickCreate() {
      console.log('clickUpdate');
      this.dialogDate = this.getDate();
      this.dialogMatName = null;
      this.dialogVolume = null;
      this.dialogThickness = null;
      this.dialogPart = null;
      this.dialogWaterProofName = null;
      this.dialogContractor = null;
      this.isShowDialog = true;
    },
    clickUpdate(bridgeid, reporthistid) {
      console.log('clickUpdate', bridgeid, reporthistid);
      this.dialogDate = this.getDate();
      var o = this.fbgPaveHistory.find((s) => (s.bridgeid == bridgeid) && (s.reporthistid == reporthistid));
      if (o) {
        console.log('Hit ', o);
        this.dialogMatName = o.matname;
        this.dialogVolume = o.volume;
        this.dialogThickness = o.thickness;
        this.dialogPart = o.part;
        this.dialogWaterProofName = o.waterproofname;
        this.dialogContractor = o.contractor;
      }
      else {
        console.log('Not Hit booo');
      }
      this.isShowDialog = true;
    },
    clickDelete(bridgeid, reporthistid) {
      console.log('clickUpdate', bridgeid, reporthistid);
      var o = this.fbgPaveHistory.find((s) => (s.bridgeid == bridgeid) && (s.reporthistid == reporthistid));
    },
    getDate() {
      var today = new Date();
      return today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    },
    clickCloseBtn() {
      this.isShowDialog = false;
      console.debug("clickCloseBtn");
    },
    clickResistBtn() {
      this.isShowDialog = false;
      console.debug("clickResisterBtn");
    },
    formatDate(args) {
      console.log(args);
      return `${args.getFullYear()}年${args.getMonth() + 1}月${args.getDate()}日`
    },
  },
});
</script>
