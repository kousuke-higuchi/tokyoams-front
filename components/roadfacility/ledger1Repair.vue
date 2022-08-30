<template>
  <v-card elevation="3">
    <v-card-text class="text-center text-h5">
      補修調書
    </v-card-text>
    <v-container>
      <v-row justify="end">
        <v-btn v-on:click="onRegistBtnClick()" color="primary">
          新規登録
        </v-btn>
      </v-row>
    </v-container>
    <v-container>
      <vue-good-table :columns="columns" :rows="rfaRepairData" :pagination-options="{
        enabled: true
      }">
        <template #table-row="props">
          <span v-if="props.column.field == 'change'">
            <v-btn class="btn" color="primary" size="small" v-on:click="onUpdateBtnClick(props.row)">
              変更
            </v-btn>
          </span>
          <span v-if="props.column.field == 'delete'">
            <v-btn class="btn" color="error" size="small" v-on:click="onDeleteBtnClick()">
              削除
            </v-btn>
          </span>
        </template>
      </vue-good-table>
    </v-container>
  </v-card>

  <!--登録ダイアログ-->
  <v-dialog v-model="showDialog" persistent>
    <v-card>
      <v-toolbar color="primary">
        <v-toolbar-title>{{ dialogTitle }}</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-textarea label="年月を入力" rows="1" :value="dialogDate" v-model="dialogDate"></v-textarea>
        <v-textarea label="記事を入力" :value="dialogNote" v-model="dialogNote"></v-textarea>
      </v-card-text>
      <div class="d-flex justify-space-around my-5">
        <v-btn color="primary" @click="onDlgRegistBtnClick()">登録</v-btn>
        <v-btn class="border" @click="onDlgCancelBtnClick()">キャンセル</v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { rfaRepair } from "~~/types";

export default defineComponent({
  props: {
    rfaRepairData: Array<rfaRepair>
  },
  data() {
    return {
      showDialog: false,
      dialogTitle: null,
      dialogDate: null,
      dialogNote: null,
      columns: [
        {
          label: '年月',
          field: 'date',
          sortable: false,
        },
        {
          label: '記事',
          field: 'note',
          sortable: false,
        },
        {
          label: ' ',
          field: 'change',
          sortable: false,
        },
        {
          label: ' ',
          field: 'delete',
          sortable: false,
        },
      ],
    }
  },
  methods: {
    onRegistBtnClick() {
      console.debug('clickRegist');
      this.dialogTitle = "新規登録"
      this.showDialog = !this.showDialog;
    },
    onUpdateBtnClick(rowItem) {
      console.debug('clickChange' + rowItem.date);
      this.dialogTitle = "変更"
      this.dialogDate = rowItem.date;
      this.dialogNote = rowItem.note;
      this.showDialog = !this.showDialog;
    },
    onDeleteBtnClick() {
      console.debug('clickDelete');
      //TODO:削除機能を実装する
    },
    onDlgRegistBtnClick() {
      console.debug('登録ボタンが押下されました');
      this.showDialog = !this.showDialog;
      //TODO:登録機能を実装する
      //TODO:更新機能を実装する
      this.dialogDate = null;
      this.dialogNote = null;
    },
    onDlgCancelBtnClick() {
      console.debug('キャンセルボタンが押下されました');
      this.showDialog = !this.showDialog;
      this.dialogDate = null;
      this.dialogNote = null;
    },
  }
})
</script>