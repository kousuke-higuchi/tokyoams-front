<template>
  <v-card class="overflow-auto" elevation="4">
    <v-card-title>
      <v-row class="justify-start mt-1 ml-3">補修履歴 
        <div class="ml-2"></div>
      </v-row>
      <v-row class="justify-end mt-1 mr-3">
        <v-btn v-on:click="clickCreate(parentId)" color="primary"> 新規登録 </v-btn>
      </v-row>
    </v-card-title>
    <v-card-text v-if="attachReapir.length > 0">
      <vue-good-table :columns="columns" :rows="attachReapir" style-class="vgt-table striped"
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
              v-on:click="clickUpdate(props.row)">更新</v-btn>
          </span>
          <span v-if="props.column.field == 'delete'">
            <v-btn class="btn" color="error" dark size="small"
              v-on:click="clickDelete(props.row)">削除</v-btn>
          </span>
          <span v-else>
            {{ props.formattedRow[props.column.field] }}
          </span>
        </template>
      </vue-good-table>
    </v-card-text>
    <p v-else>補修履歴が存在しません。</p>
  </v-card>
    <!--補修履歴登録画面-->
    <!--TODO: Dialogをコンポーネント化する -->
    <v-dialog v-model="isShowDialog" persistent max-width="700px">
      <v-card>
        <v-toolbar dense>
          <v-toolbar-title>補修履歴の登録</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="isShowDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="3" class="mt-2">施工日</v-col>
            <v-col cols="12" sm="9">
              <Datepicker v-model="editData.createDate" locale="jp" :enableTimePicker="false" :format="formatDate"
                :clearable="false" />
            </v-col>
            <v-col cols="12" sm="3" class="mt-2">施工区分</v-col>
            <v-col cols="12" sm="9">
              <!-- TODO:値を渡しているのにセレクトボックスが選んだ値を選んでくれない -->
              <v-autocomplete
                    v-model="editData.kindid"
                    label="施工区分を選択してください"
                    :items="kindList"
                    outlined
                    dense
                    item-value="code"
                    item-text="code"
                    item-title="name"
                    hide-details="auto"
                    return-object>
            </v-autocomplete>
            </v-col>
            <v-col cols="12" sm="3" class="mt-2">施工業者</v-col>
            <v-col cols="12" sm="9">
              <v-textarea v-model="editData.contractor" label="施工業者を入力してください" rows="1" auto-grow density="compact" hide-details="auto"></v-textarea>
            </v-col>
            <v-col cols="12" sm="3" class="mt-2">備考</v-col>
            <v-col cols="12" sm="9">
              <v-textarea v-model="editData.note" label="備考を入力してください" rows="1" auto-grow density="compact" hide-details="auto"></v-textarea>
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
</template>

<script lang="ts">
import { AttachRepair } from "~~/types";


export default defineComponent({
   
  props: {
      attachReapir: Array<AttachRepair>,
      kindList: Array,
      parentId: Number,
      showKind: String //表示種類 ...TODO:実運用の時は表示・更新対象のDBが異なるため必須
  },
  data() {
    return {
      isShowDialog: false,
      editData: null as AttachRepair,
      columns: [
        {
          label: "施工区分",
          field: "kindname",
          filterOptions: {
            enabled: true,
            placeholder: '施工区分入力',
          },
        },
        {
          label: "施工日付",
          field: "createDate",
          type: "date",
          dateInputFormat: "yyyy-MM-dd'T'HH:mm:ss.SSSXXX",
          dateOutputFormat: 'yyyy-MM-dd',
          filterOptions: {
            enabled: true,
            placeholder: '施工日付入力',
          },
        },
        {
          label: "施工業者",
          field: "contractor",
          filterOptions: {
            enabled: true,
            placeholder: '施工業者入力',
          },
        },
        {
          label: "備考",
          field: "note",
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
  mounted: function () {
    console.log("mounted attachRepairList");

  },
  methods: {
    clickCreate(parentId) {
      console.log('clickCreate', parentId);
      this.editData = new AttachRepair();
      this.editData.createDate = this.getDate();
      this.isShowDialog = true;
    },
    clickUpdate(repairData) {
      console.log('clickUpdate', repairData.parenthisid, repairData.repairthistid);
      this.editData = new AttachRepair();
      this.editData = repairData;
      this.isShowDialog = true;
    },
    clickDelete(repairData) {
      console.log('clickUpdate', repairData.parenthisid, repairData.repairthistid);
      this.editData = repairData;
      //TODO:削除処理
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
