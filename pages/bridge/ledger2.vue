<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <side-card-details />
      </v-col>
      <v-col md="9" cols="12">
        <v-card elevation="3">
          <v-card-title>
            <v-row class="justify-start mt-1 ml-3">塗装経歴 - 
              <div class="ml-2">鎌倉橋</div>
            </v-row>
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
              :rows="bidgePaint"
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
          <v-toolbar-title>塗装履歴の登録</v-toolbar-title>
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
            <v-col cols="12" sm="3" class="mt-2">下塗材料</v-col>
            <v-col cols="12" sm="9">
              <v-textarea
              v-model="dialogLower1Material"
              label="下塗材料を入力してください"
              rows="1"
              auto-grow
              density="compact"
              hide-details="false"
              ></v-textarea>
            </v-col>
            <v-col cols="12" sm="3" class="mt-2">下塗色</v-col>
            <v-col cols="12" sm="9">
              <v-textarea
              v-model="dialogLower1Color"
              label="下塗色を入力してください"
              rows="1"
              auto-grow
              density="compact"
              hide-details="false"
              ></v-textarea>
            </v-col>
            <v-col cols="12" sm="3" class="mt-2">下塗材料</v-col>
            <v-col cols="12" sm="9">
              <v-textarea
              v-model="dialogLower2Material"
              label="下塗材料を入力してください"
              rows="1"
              auto-grow
              density="compact"
              hide-details="false"
              ></v-textarea>
            </v-col>
            <v-col cols="12" sm="3" class="mt-2">下塗色</v-col>
            <v-col cols="12" sm="9">
              <v-textarea
              v-model="dialogLower2Color"
              label="下塗色を入力してください"
              rows="1"
              auto-grow
              density="compact"
              hide-details="false"
              ></v-textarea>
            </v-col>
            <v-col cols="12" sm="3" class="mt-2">中塗材料</v-col>
            <v-col cols="12" sm="9">
              <v-textarea
              v-model="dialogMiddleMaterial"
              label="中塗材料を入力してください"
              rows="1"
              auto-grow
              density="compact"
              hide-details="false"
              ></v-textarea>
            </v-col>
            <v-col cols="12" sm="3" class="mt-2">中塗色</v-col>
            <v-col cols="12" sm="9">
              <v-textarea
              v-model="dialogMiddleColor"
              label="中塗色を入力してください"
              rows="1"
              auto-grow
              density="compact"
              hide-details="false"
              ></v-textarea>
            </v-col>
            <v-col cols="12" sm="3" class="mt-2">上塗材料</v-col>
            <v-col cols="12" sm="9">
              <v-textarea
              v-model="dialogUpperMaterial"
              label="上塗材料を入力してください"
              rows="1"
              auto-grow
              density="compact"
              hide-details="false"
              ></v-textarea>
            </v-col>
            <v-col cols="12" sm="3" class="mt-2">上塗色</v-col>
            <v-col cols="12" sm="9">
              <v-textarea
              v-model="dialogUpperColor"
              label="上塗色を入力してください"
              rows="1"
              auto-grow
              density="compact"
              hide-details="false"
              ></v-textarea>
            </v-col>
            <v-col cols="12" sm="3" class="mt-2">面積  ㎡</v-col>
            <v-col cols="12" sm="9">
              <v-textarea
              v-model="dialogArea"
              label="面積を入力してください"
              rows="1"
              auto-grow
              density="compact"
              hide-details="false"
              ></v-textarea>
            </v-col>
            <v-col cols="12" sm="3" class="mt-2">工費</v-col>
            <v-col cols="12" sm="9">
              <v-textarea
              v-model="dialogCost"
              label="工費を入力してください"
              rows="1"
              auto-grow
              density="compact"
              hide-details="false"
              ></v-textarea>
            </v-col>
            <v-col cols="12" sm="3" class="mt-2">塗装業者</v-col>
            <v-col cols="12" sm="9">
              <v-textarea
              v-model="dialogCompany"
              label="塗装業者を入力してください"
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
import bidgePaintJson from "@/assets/bridgePaint.json"

export default defineComponent({
  components: {
    Datepicker,
  },        
  data() {
    return {
      isShowDialog: false,
      dialogDate: "",
      dialogLower1Material: "",
      dialogLower1Color: "",
      dialogLower2Material: "",
      dialogLower2Color: "",
      dialogMiddleMaterial: "",
      dialogMiddleColor: "",
      dialogUpperMaterial: "",
      dialogUpperColor: "",
      dialogArea: "",
      dialogCost: "",
      dialogCompany: "",
      bidgePaint: bidgePaintJson,
      // 一覧の列情報
      columns: [
        {
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
          label: '下塗材料',
          field: 'lower1mat',
          sortable: false,
          filterOptions: {
        	  enabled: true,
            placeholder: '下塗材料入力',
          },
        },
        {
          label: '下塗色',
          field: 'lower1color',
          sortable: false,
          filterOptions: {
        	  enabled: true,
            placeholder: '下塗色入力',
         },
        },
        {
          label: '下塗材料',
          field: 'lower2mat',
          sortable: false,
          filterOptions: {
        	  enabled: true,
            placeholder: '下塗材料入力',
         },
        },
        {
          label: '下塗色',
          field: 'lower2color',
          sortable: false,
          filterOptions: {
        	  enabled: true,
            placeholder: '下塗色入力',
         },
        },
        {
          label: '中塗材料',
          field: 'middlemat',
          sortable: false,
          filterOptions: {
        	  enabled: true,
            placeholder: '中塗材料入力',
         },
        },
        {
          label: '中塗色',
          field: 'middlecolor',
          sortable: false,
          filterOptions: {
        	  enabled: true,
            placeholder: '中塗色入力',
         },
        },
        {
          label: '上塗材料',
          field: 'uppermat',
          sortable: false,
          filterOptions: {
        	  enabled: true,
            placeholder: '上塗材料入力',
         },
        },
        {
          label: '上塗色',
          field: 'uppercolor',
          sortable: false,
          filterOptions: {
        	  enabled: true,
            placeholder: '上塗色入力',
         },
        },
        {
          label: '面積  ㎡',
          field: 'area',
          sortable: false,
          filterOptions: {
        	  enabled: true,
            placeholder: '面積入力',
         },
        },
        {
          label: '工費',
          field: 'cost',
          sortable: false,
          filterOptions: {
        	  enabled: true,
            placeholder: '面積入力',
         },
        },
        {
          label: '塗装業者',
          field: 'companyname',
          sortable: false,
          filterOptions: {
        	  enabled: true,
            placeholder: '工費入力',
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
      this.dialogLower1Material = null;
      this.dialogLower1Color = null;
      this.dialogLower2Material = null;
      this.dialogLower2Color = null;
      this.dialogMiddleMaterial = null;
      this.dialogMiddleColor = null;
      this.dialogUpperMaterial = null;
      this.dialogUpperColor = null;
      this.dialogArea = null;
      this.dialogCost = null;
      this.dialogCompany = null; 
      this.isShowDialog = true;
    },
    clickUpdate(bridgeid, reporthistid) {
      console.log('clickUpdate', bridgeid, reporthistid);
      this.dialogDate = this.getDate();
      var o = this.bidgePaint.find((s) => (s.bridgeid == bridgeid) && (s.reporthistid == reporthistid));
      if (o) {
        console.log('Hit ', o); 
        this.dialogLower1Material = o.lower1mat;
        this.dialogLower1Color = o.lower1color;
        this.dialogLower2Material = o.lower2mat;
        this.dialogMiddleMaterial = o.middlemat;
        this.dialogMiddleColor = o.middlecolor;
        this.dialogUpperMaterial = o.uppermat;
        this.dialogUpperColor = o.uppercolor;
        this.dialogArea = o.area;
        this.dialogCost = o.cost; 
        this.dialogCompany = o.companyname;
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
