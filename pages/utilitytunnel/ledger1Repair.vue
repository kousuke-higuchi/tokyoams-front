<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <utilitytunnel-side-card-details />
      </v-col>
      <v-col md="9" cols="12">
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
          <vue-good-table :columns="columns" :rows="rows" :pagination-options="{
            enabled: true
          }">
            <template #table-row="props">
              <span v-if="props.column.field == 'change'">
                <v-btn class="btn" color="primary" v-on:click="onChangeBtnClick()">
                  変更
                </v-btn>
              </span>
              <span v-if="props.column.field == 'delete'">
                <v-btn class="btn" color="error" v-on:click="onDeleteBtnClick()">
                  削除
                </v-btn>
              </span>
            </template>
          </vue-good-table>
        </v-card>
      </v-col>
    </v-row>

    <!--新規登録ダイアログ-->
    <v-dialog v-model="showRegistrationDialog" persistent>
      <v-card>
        <v-toolbar color="primary">
          <v-toolbar-title>新規登録</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-textarea label="年月を入力" rows="1"></v-textarea>
          <v-textarea label="記事を入力"></v-textarea>
        </v-card-text>
        <div class="d-flex justify-space-around my-5">
          <v-btn color="primary" @click="onRegDlgRegistBtnClick()">登録</v-btn>
          <v-btn class="border" @click="onRegDlgCancelBtnClick()">キャンセル</v-btn>
        </div>
      </v-card>
    </v-dialog>

    <!--変更ダイアログ-->
    <v-dialog v-model="showChangeDialog" persistent>
      <v-card>
        <v-toolbar color="primary">
          <v-toolbar-title>変更</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-textarea label="年月を入力" rows="1"></v-textarea>
          <v-textarea label="記事を入力"></v-textarea>
        </v-card-text>
        <div class="d-flex justify-space-around my-5">
          <v-btn color="primary" @click="onCngDlgRegistBtnClick()">登録</v-btn>
          <v-btn class="border" @click="onCngDlgCancelBtnClick()">キャンセル</v-btn>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      showRegistrationDialog: false,
      showChangeDialog: false,
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
      rows: [
        { id: 1, date: "2020/08", note: "テスト", },
      ],
    };
  },
  methods: {
    onRegistBtnClick() {
      console.debug('clickRegist')
      this.showRegistrationDialog = !this.showRegistrationDialog;
    },
    onChangeBtnClick() {
      console.debug('clickChange');
      this.showChangeDialog = !this.showChangeDialog;
    },
    onDeleteBtnClick() {
      console.debug('clickDelete');
    },
    onRegDlgRegistBtnClick() {
      console.debug('登録ボタンが押下されました');
      this.showRegistrationDialog = !this.showRegistrationDialog;
    },
    onRegDlgCancelBtnClick() {
      console.debug('キャンセルボタンが押下されました');
      this.showRegistrationDialog = !this.showRegistrationDialog;
    },
    onCngDlgRegistBtnClick() {
      console.debug('登録ボタンが押下されました');
      this.showChangeDialog = !this.showChangeDialog;
    },
    onCngDlgCancelBtnClick() {
      console.debug('登録ボタンが押下されました');
      this.showChangeDialog = !this.showChangeDialog;
    }
  }
})
</script>
