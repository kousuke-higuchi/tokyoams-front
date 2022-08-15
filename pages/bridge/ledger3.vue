<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <side-card-details />
      </v-col>
      <v-col md="9" cols="12">
        <v-card elevation="3">
          <v-card-title>
            <v-row class="justify-start mt-1 ml-3">補修履歴</v-row>
            <v-row class="justify-end mt-1 mr-3">
              <v-btn v-on:click="clickCreate()"
                color= "primary"
              >
                新規登録
              </v-btn>
            </v-row>
          </v-card-title>
          <v-card-text>
            <div>
              <vue-good-table
              :columns="columns"
              :rows="bidgesRepair"
              style-class="vgt-table striped"
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
                    <v-btn class="btn" color="primary" dark size="small" v-on:click="clickUpdate(props.row.bridgeid, props.row.reporthistid)">更新</v-btn>  
                 </span>
                  <span v-if="props.column.field == 'delete'">
                    <v-btn class="btn" color="error" dark size="small" v-on:click="clickDelete(props.row.bridgeid, props.row.reporthistid)">削除</v-btn>  
                 </span>
                  <span v-else>
                      {{props.formattedRow[props.column.field]}}
                  </span>
                </template>
              </vue-good-table>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
  <!--補修履歴登録画面-->
  <div>
    <v-dialog
      v-model="isShowDialog"
      persistent
      max-width="700px"
    >
      <v-card>
        <v-toolbar dense>
          <v-toolbar-title>補修履歴の登録</v-toolbar-title>
          <v-spacer></v-spacer>
            <v-btn
              icon
              @click="isShowDialog = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
        </v-toolbar>
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="3" class="mt-2">登録日</v-col>
            <v-col cols="12" sm="9">
              <Datepicker v-model="dialogDate" locale="jp" :enableTimePicker="false" :format="formatDate" :clearable="false" />                      
            </v-col>
            <v-col cols="12" sm="3" class="mt-2">設備名</v-col>
            <v-col cols="12" sm="9">
              <v-textarea
              v-model="dialogFaciliy"
              label="設備名を入力してください"
              rows="1"
              auto-grow
              density="compact"
              hide-details="false"
              ></v-textarea>
            </v-col>
            <v-col cols="12" sm="3" class="mt-2">工事名</v-col>
            <v-col cols="12" sm="9">
              <v-textarea
              v-model="dialogProject"
              label="工事名を入力してください"
              rows="1"
              auto-grow
              density="compact"
              hide-details="false"
              ></v-textarea>
            </v-col>
            <v-col cols="12" sm="3" class="mt-2">施工業者</v-col>
            <v-col cols="12" sm="9">
              <v-textarea
              v-model="dialogCompany"
              label="施工業者を入力してください"
              rows="1"
              auto-grow
              density="compact"
              hide-details="false"
              ></v-textarea>
            </v-col>
            <v-col cols="12" sm="3" class="mt-2">事業費</v-col>
            <v-col cols="12" sm="9">
              <v-textarea
              v-model="dialogCost"
              label="事業費を入力してください"
              rows="1"
              auto-grow
              density="compact"
              hide-details="false"
              ></v-textarea>
            </v-col>
            <v-col cols="12" sm="3" class="mt-2">部位</v-col>
            <v-col cols="12" sm="9">
              <v-textarea
              v-model="dialogCovering"
              label="部位を入力してください"
              rows="1"
              auto-grow
              density="compact"
              hide-details="false"
              ></v-textarea>
            </v-col>
            <v-col cols="12" sm="3" class="mt-2">工種</v-col>
            <v-col cols="12" sm="9">
              <v-textarea
              v-model="dialogConstructionType"
              label="工種を入力してください"
              rows="1"
              auto-grow
              density="compact"
              hide-details="false"
              ></v-textarea>
            </v-col>
            <v-col cols="12" sm="3" class="mt-2">数量</v-col>
            <v-col cols="12" sm="9">
              <v-textarea
              v-model="dialogCount"
              label="数量を入力してください"
              rows="1"
              auto-grow
              density="compact"
              hide-details="false"
              ></v-textarea>
            </v-col>
            <v-col cols="12" sm="3" class="mt-2">単位</v-col>
            <v-col cols="12" sm="9">
              <v-textarea
              v-model="dialogUnit"
              label="単位を入力してください"
              rows="1"
              auto-grow
              density="compact"
              hide-details="false"
              ></v-textarea>
            </v-col>
            <v-col cols="12" sm="3" class="mt-2">備考</v-col>
            <v-col cols="12" sm="9">
              <v-textarea
              label="備考を入力してください"
              rows="1"
              auto-grow
              density="compact"
              hide-details="false"
              ></v-textarea>
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

<script type="ts">
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import bidgesRepairJson from "@/assets/bridgesRepair.json"

export default defineComponent({
  components: {
    Datepicker,
  },        
  data() {
    return {
      isShowDialog: false,
      dialogDate: "",
      dialogFaciliy: "",
      dialogProject: "",
      dialogCompany: "",
      dialogCost: "",
      dialogCovering: "",
      dialogConstructionType: "",
      dialogCount: "",
      dialogUnit: "",
      dialogNote: "", 
      bidgesRepair: bidgesRepairJson,
      // 一覧の列情報
      columns: [
        {
        //TODO:誤った取り方。本来はdateInputFormatはyyyyMMddとすべきだが、例)19590100等
        //月日に00が含まれる場合、年を取得できなかった。
          label: '年月',
          field: 'createDate',
          type: 'date',
          // NOTE: Date形式をISO-8601に合わせた
          dateInputFormat:"yyyy-MM-dd'T'HH:mm:ss.SSSXXX",
          dateOutputFormat: 'yyyy-MM-dd',
          sortable: false,
          filterOptions: {
        	  enabled: true,
            placeholder: '年月入力',
          },
        },
        {
          label: '施設名',
          field: 'bridgename',
          sortable: false,
          filterOptions: {
        	  enabled: true,
            placeholder: '施設名入力',
          },
        },
        {
          label: '工事名',
          field: 'prjname',
          sortable: false,
          filterOptions: {
        	  enabled: true,
            placeholder: '工事名入力',
         },
        },
        {
          label: '施工業者',
          field: 'companyname',
          sortable: false,
          filterOptions: {
        	  enabled: true,
            placeholder: '施工業者入力',
         },
        },
        {
          label: '事業費',
          field: 'cost',
          sortable: false,
          filterOptions: {
        	  enabled: true,
            placeholder: '事業費入力',
         },
        },
        {
          label: '部位',
          field: 'covering',
          sortable: false,
          filterOptions: {
        	  enabled: true,
            placeholder: '部位入力',
         },
        },
        {
          label: '工種',
          field: 'constmtdname',
          sortable: false,
          filterOptions: {
        	  enabled: true,
            placeholder: '工種入力',
         },
        },
        {
          label: '数量',
          field: 'count',
          sortable: false,
          filterOptions: {
        	  enabled: true,
            placeholder: '数量入力',
         },
        },
        {
          label: '単位',
          field: 'unit',
          sortable: false,
          filterOptions: {
        	  enabled: true,
            placeholder: '単位入力',
         },
        },
        {
          label: '備考',
          field: 'note',
          sortable: false,
          filterOptions: {
        	  enabled: true,
            placeholder: '備考入力',
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
  mounted: function() {
    console.log("mounted ledger2");

  },
  methods: {
    clickCreate(bridgeid, reporthistid) {
      console.log('clickUpdate', bridgeid, reporthistid);
      this.dialogDate = this.getDate();
      this.dialogFaciliy = null;
      this.dialogProject = null;
      this.dialogCompany = null;
      this.dialogCost = null;
      this.dialogCovering = null;
      this.dialogConstructionType = null;
      this.dialogCount = null;
      this.dialogUnit = null;
      this.dialogNote = null; 
      this.isShowDialog = true;
    },
    clickUpdate(bridgeid, reporthistid) {
      console.log('clickUpdate', bridgeid, reporthistid);
      this.dialogDate = this.getDate();
      var o = this.bidgesRepair.find((s) => (s.bridgeid == bridgeid) && (s.reporthistid == reporthistid));
      if (o) {
        console.log('Hit ', o); 
        this.dialogFaciliy = o.bridgename;
        this.dialogProject = o.prjname;
        this.dialogCompany = o.companyname;
        this.dialogCost = o.cost;
        this.dialogCovering = o.covering;
        this.dialogConstructionType = o.constmtdname;
        this.dialogCount = o.count;
        this.dialogUnit = o.unit;
        this.dialogNote = o.note; 
      }
      else {
        console.log('Not Hit booo'); 
      }
      this.isShowDialog = true;
    },
    clickDelete(bridgeid, reporthistid) {
      console.log('clickUpdate', bridgeid, reporthistid);
      var o = this.bidgesRepair.find((s) => (s.bridgeid == bridgeid) && (s.reporthistid == reporthistid));
    },
    getDate(){
      var today = new Date();
      return today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    },
    clickCloseBtn(){
      this.isShowDialog = false;
      console.debug("clickCloseBtn");
    },
    clickResistBtn(){
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
