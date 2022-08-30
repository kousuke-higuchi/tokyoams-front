<template>
  <v-card height="820px"  elevation="3">
      <v-card-title>
        <v-row class="justify-start mt-1 ml-3 font-weight-bold" style="font-size:medium">路線名 : 麹町武平線 0.7</v-row>
      </v-card-title>
      <v-container fluid>
        <v-list :items="menuItems" color="primary"></v-list>
      </v-container>
  </v-card>

</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      isOpen: false,
      tabSide: 'note',
      dialogDate: null,
      dialogMemo: null,
      
      menuItems:  [
        { title: '舗装台帳', props:{ to:"/pavement/ledger" } },
        { title: '舗装履歴', props:{ to:"/pavement/history" } },
        { title: '空洞調査', props:{ to:"/pavement/cavity" } },
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