<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <side-card-details />
      </v-col>
      <v-col md="9" cols="12">
        <v-card elevation="3">
          <v-card-title>
            <v-row class="justify-start mt-1 ml-3">塗装経歴</v-row>
            <v-row class="justify-end mt-1 mr-3">
              <v-btn v-on:click="onCreateClick()"
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
                    <v-btn class="btn" color="primary" dark size="small"
                      v-on:click="onUpdateClick(props.row)">更新</v-btn>  
                 </span>
                  <span v-if="props.column.field == 'delete'">
                    <v-btn class="btn" color="error" dark size="small" 
                      v-on:click="onDeleteClick(props.row)">削除</v-btn>  
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

    <!--補修履歴登録画面-->
    <bridge-painting-history-dialog @before-close="onDialogClose" :dialog-item="dialogItem" v-model:isOpen="isShowDialog" />

  </div>
</template>

<script lang="ts">
import bidgePaintJson from "@/assets/bridgePaint.json"
import { PaintingBridgeHistory }  from "~~/types"

export default defineComponent({
  data() {
    return {
      isShowDialog: false,
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
      dialogItem: {} as PaintingBridgeHistory,
    };
  },
  mounted: function() {
    console.log("mounted ledger2");

  },
  methods: {
    onCreateClick() {
      console.log('clickUpdate');
      this.dialogItem = {} as PaintingBridgeHistory;
      this.isShowDialog = true;
    },
    onUpdateClick(row) {
      console.log('onUpdateClick', row);
      // 選択レコードの値を設定
      this.dialogItem = JSON.parse(JSON.stringify(row));
      this.isShowDialog = true;
    },
    onDeleteClick(row) {
      console.log('onDeleteClick', row);

      let shouldDelete = confirm(`ID=${row.reporthistid} の履歴を削除します。よろしいですか？`);
      if(shouldDelete) {
        //TODO: 選択した履歴を削除する
        //TODO: 表示の更新
      }
    },
    onDialogClose(accept:boolean, dialogItem: PaintingBridgeHistory) {
      if(accept) {
        console.info(`塗装経歴ダイアログを閉じました（確定 = ${accept}）`);
        //TODO: 更新処理
      }
    },
  },
});
</script>
