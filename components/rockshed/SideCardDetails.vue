<template>
  <v-card height="820px" elevation="3">
    <v-card height="468px">
      <v-card-title>
        <v-row class="justify-start mt-1 ml-3 font-weight-bold" style="font-size:medium">
          道路施設詳細　施設名: さんぷる施設 <!--TODO:施設名は仮値-->
        </v-row>
      </v-card-title>
      <v-container fluid>
        <v-tabs v-model="tabSide" color="primary">
          <v-tab value="ledger">台帳</v-tab>
          <v-tab value="protocol">点検調書</v-tab>
          <v-tab value="nation">国様式</v-tab>
        </v-tabs>
        <v-card-text>
          <v-window v-model="tabSide">
            <v-window-item value="ledger">
              <v-list :items="buttons01" color="primary"></v-list>
            </v-window-item>
            <v-window-item value="protocol">
              <v-list :items="buttons02" color="primary"></v-list>
            </v-window-item>
            <v-window-item value="nation">
              <v-list :items="buttons03"></v-list>
            </v-window-item>
          </v-window>
        </v-card-text>
      </v-container>
    </v-card>
    <v-card>
      <v-card-title>
        <v-row class="justify-start mt-1 ml-1">台帳メモ一覧</v-row>
        <v-row class="justify-end mt-1 mr-1">
          <v-btn v-on:click="clickNew()" color="primary">
            新規登録
          </v-btn>
        </v-row>
      </v-card-title>
      <v-card-text>
        <div>
          <vue-good-table :columns="noteColumns" :rows="noteContents" style-class="vgt-table striped"
            :pagination-options="{
              enabled: true,
              mode: 'records',
              perPage: 10,
              nextLabel: '次',
              prevLabel: '前',
              perPageDropdownEnabled: false,
            }">
          </vue-good-table>
        </div>
      </v-card-text>
    </v-card>

    <!--台帳メモ登録画面-->
    <v-dialog v-model="isOpen" persistent max-width="450px">
      <v-card>
        <v-toolbar dense>
          <v-toolbar-title>台帳メモの登録</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="isOpen = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="3" class="mt-2">
              登録日
            </v-col>
            <v-col cols="12" sm="9">
              <Datepicker v-model="saveDateMemo" locale="jp" :enableTimePicker="false" :format="formatDate"
                :clearable="false" />
            </v-col>
            <v-col cols="12" sm="3" class="mt-2">
              メモ
            </v-col>
            <v-col cols="12" sm="9">
              <v-textarea label="メモを入力してください" rows="1" auto-grow density="compact" :hide-details="false"></v-textarea>
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
  </v-card>

</template>

<script lang="ts">
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'


export default defineComponent({
  components: {
    Datepicker,
  },
  props: {
    selectTab: { type: String, default: "ledger" },
  },
  setup(prop, context) {
    console.log("setup ideCardDetails : ", prop.selectTab);
    const route = useRoute()
    return{
      route
    }
  },
  data() {
    return {
      isOpen: false,
      saveDateMemo: null,
      tabSide: 'note',
      buttons01: [
        { title: 'その1', props: { to: `/rockshed/${this.$route.params.id}/ledger1` } },
        { title: 'その2', props: { to: `/rockshed/${this.$route.params.id}/ledger2` } },
        { title: 'その3', props: { to: `/rockshed/${this.$route.params.id}/ledger3` } },
        { title: 'その4', props: { to: `/rockshed/${this.$route.params.id}/ledger4` } },
      ],
      buttons02: [
        { title: 'その5', props: { to: `/rockshed/${this.$route.params.id}/inspection5` } },
        { title: 'その6', props: { to: `/rockshed/${this.$route.params.id}/inspection6` } },
        { title: 'その7', props: { to: `/rockshed/${this.$route.params.id}/inspection7` } },
        { title: 'その8', props: { to: `/rockshed/${this.$route.params.id}/inspection8` } },
        { title: 'その9', props: { to: `/rockshed/${this.$route.params.id}/inspection9` } },
        { title: 'その10', props: { to: `/rockshed/${this.$route.params.id}/inspection10` } },
        { title: 'その11', props: { to: `/rockshed/${this.$route.params.id}/inspection11` } },
      ],
      buttons03: [
        { title: '様式・国1', props: { to: `/rockshed/${this.$route.params.id}/nation1` } },
        { title: '様式・国2', props: { to: `/rockshed/${this.$route.params.id}/nation2` } },
        { title: '様式・国3', props: { to: `/rockshed/${this.$route.params.id}/nation3` } },
        { title: '様式・国4', props: { to: `/rockshed/${this.$route.params.id}/nation4` } },
        { title: '様式・国5(A)', props: { to: `/rockshed/${this.$route.params.id}/nation5A` } },
        { title: '様式・国5(B)', props: { to: `/rockshed/${this.$route.params.id}/nation5B` } },
        { title: '様式・国5(C)', props: { to: `/rockshed/${this.$route.params.id}/nation5C` } },
      ],
      noteColumns: [
        {
          label: 'No', field: 'id', width: '80px', sortable: false,
          filterOptions: { enabled: true, placeholder: 'No入力', },
        },
        {
          label: '登録日', field: 'date', width: '120px', sortable: false,
          filterOptions: { enabled: true, placeholder: '日付入力', },
        },
        {
          label: '内容', field: 'contents', sortable: false, filterOptions: {
            enabled: true, placeholder: '内容入力',
          },
        },
      ],
      noteContents: [
        { id: '1', date: '2022-07-05', contents: 'ボルトの交換を行った', },
        { id: '2', date: '2022-07-06', contents: 'ナットの交換を行った', },
        { id: '3', date: '2022-07-07', contents: 'バネワッシャーの交換を行った', },
      ],
    }
  },
  mounted: function () {
    this.tabSide = this.selectTab;
    console.log("mounted SideCardDetails : ", this.tabSide);
    this.saveDateMemo = this.getDate();
  },
  methods: {
    clickNew() {
      console.info("新規登録を押下しました");
      this.isOpen = true;
      this.saveDateMemo = this.getDate();
    },
    getDate() {
      var today = new Date();
      return today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    },
    clickCloseBtn() {
      this.isOpen = false;
      console.debug("clickCloseBtn");
    },
    clickResistBtn() {
      this.isOpen = false;
      console.debug("clickResisterBtn");
    },
    formatDate(args) {
      console.log(args);
      return `${args.getFullYear()}年${args.getMonth() + 1}月${args.getDate()}日`
    },
  },
});
</script>