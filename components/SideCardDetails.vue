<template>
  <v-card height="820px"  elevation="3">
    <v-card height="484px">
      <v-card-title>
        <v-row class="justify-start mt-1 ml-3 font-weight-bold" style="font-size:medium">橋梁名 : 鎌倉橋 01110010-0</v-row>
      </v-card-title>
      <v-container fluid>
        <v-tabs v-model="tabSide" color="primary">
          <v-tab value="note">橋梁台帳</v-tab>
          <v-tab value="check">点検調書</v-tab>
          <v-tab value="nation">国様式</v-tab>
        </v-tabs>
        <v-card-text>
          <v-window v-model="tabSide">
            <v-window-item value="note">
              <v-list :items="buttons01" color="primary"></v-list>
            </v-window-item>
            <v-window-item value="check">
              <v-list :items="buttons02" color="primary"></v-list>
            </v-window-item>
            <v-window-item value="nation">
              <v-list :items="buttons03"></v-list>
            </v-window-item>
          </v-window>
        </v-card-text>
      </v-container>
    </v-card>  
    <v-card height="336px">
      <v-card-title>
        <v-row class="justify-start mt-1 ml-1"  style="font-size:medium!important">台帳メモ一覧</v-row>
        <v-row class="justify-end mt-1 mr-1">
            <v-btn  v-on:click="onNewClick()"
            color= "primary"
            size="small"
            >
                新規登録
            </v-btn>
        </v-row>
      </v-card-title>
      <v-card-text>
        <div>
          <vue-good-table
          :columns="noteColumns"
          :rows="noteContents"
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
                  <v-btn class="btn" color="primary" dark size="x-small" v-on:click="onUpdateClick(props.row)">更新</v-btn>
              </span>
              <span v-if="props.column.field == 'remove'">
                  <v-btn class="btn" color="error" dark size="x-small" v-on:click="onRemoveClick(props.row)">削除</v-btn>
              </span>
              <span v-else>
                {{props.formattedRow[props.column.field]}}
              </span>
            </template>
          </vue-good-table>
        </div>
      </v-card-text>
    </v-card>
  </v-card>
  <!--台帳メモ登録画面-->
  <div>
    <v-dialog
      v-model="isOpen"
      persistent
      max-width="450px"
    >
      <v-card>
        <v-toolbar dense>
          <v-toolbar-title>台帳メモの登録</v-toolbar-title>
          <v-spacer></v-spacer>
            <v-btn
              icon
              @click="isOpen = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
        </v-toolbar>
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="3" class="mt-2">
              登録日
            </v-col>
            <v-col cols="12" sm="9">
              <Datepicker v-model="dialogDate" locale="jp" :enableTimePicker="false" :format="formatDate" :clearable="false" />                      
            </v-col>
            <v-col cols="12" sm="3" class="mt-2">
              メモ
            </v-col>
            <v-col cols="12" sm="9">
              <v-textarea
              label="メモを入力してください"
              rows="1"
              auto-grow
              density="compact"
              hide-details="false"
               v-model="dialogMemo"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-card-text>
        <v-divider></v-divider>
        <div class="d-flex">
          <v-btn variant="outlined" class="mr-auto ma-3" @click="onCloseClick()">閉じる</v-btn>
          <v-btn color="primary ma-3" class="ml-auto" @click="onSaveClick()">登録</v-btn>
        </div>
      </v-card>
    </v-dialog>
  </div>

</template>

<script lang="ts">
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'


export default defineComponent({
  components: {
    Datepicker,
  },        
  data() {
    return {
      isOpen: false,
      tabSide: 'note',      
      dialogDate: null,
      dialogMemo: null,
      buttons01:  [
        { title: '橋梁台帳(1)', props:{ to:"/bridge/ledger1" } },
        { title: '橋梁台帳(2)', props:{ to:"/bridge/ledger2" } },
        { title: '橋梁台帳(3)', props:{ to:"/bridge/ledger3" } },
        { title: '橋梁台帳(径間)', props:{ to:"/bridge/ledgerSpan" } },
        { title: '一般図', props:{ to:"/bridge/general" } },
        { title: '径間別一般図', vprops:{ to:"/bridge/generalSpan" } },
        { title: '写真台帳', props:{ to:"/bridge/ledgerPicture" } },
        { title: '現地状況写真', props:{ to:"/bridge/picture" } },
        { title: '高欄図', props:{ to:"/bridge/handrail" } },
      ],
      buttons02: [
        { title: '様式2', props:{ to: '/bridge/form2' }},
        { title: '様式3', props:{ to: '/tobeImplement' } },
        { title: '様式4-1(3回分)', props:{ to: '/tobeImplement' } },
        { title: '様式4-2(3回分)', props:{ to: '/tobeImplement' } },
        { title: '様式5', props:{ to: '/tobeImplement' } },
        { title: '様式6', props:{ to: '/tobeImplement' } },
        { title: '様式7', props:{ to: '/tobeImplement' } },
        { title: '様式8', props:{ to: '/tobeImplement' } },
      ],
      buttons03: [
        { title: '道路端様式1P001', props:{ to: '/tobeImplement' } },
        { title: '道路端様式2P001', props:{ to: '/tobeImplement' } },
      ],
      noteColumns: [
        {
          label: '登録日', field: 'date', width: '8em', sortable: false, 
        },
        {
          label: '内容', field: 'contents', sortable: false, 
        },
        {
          label: '', field: 'update', sortable: false, 
        },
        {
          label: '', field: 'remove', sortable: false, 
        },
      ],
      noteContents: [
        { id: '1', date: '2022-07-05', contents: 'ボルトの交換を行った',   },
        { id: '2', date: '2022-07-06', contents: 'ナットの交換を行った',   },
        { id: '3', date: '2022-07-07', contents: 'バネワッシャーの交換を行った', },
      ],
    }
  },
  mounted: function() {
    console.log("mounted SideCardDetails : ", this.tabSide);
    this.dialogDate = this.getDate();
  },
  methods: {
    onNewClick() {
      console.info("新規登録を押下しました");
      this.dialogDate = this.getDate();
      this.isOpen = true;
    },
    onUpdateClick(row) {
      console.info("onUpdateClick ", row);
      this.dialogDate = row.date;
      this.dialogMemo = row.contents;
      this.isOpen = true;
    },
    onRemoveClick(row) {
      console.info("onRemoveClick " + row);
    },
    onCloseClick(){
      this.isOpen = false;
      console.info("onCloseClick");
    },
    onSaveClick(){
      this.isOpen = false;
      console.info("clickResisterBtn");
    },
    getDate(){
      var today = new Date();
      return today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    },
    formatDate(args) {
      console.log(args);
      return `${args.getFullYear()}年${args.getMonth() + 1}月${args.getDate()}日`
    },  
  },
});
</script>