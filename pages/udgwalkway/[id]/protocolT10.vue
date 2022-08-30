<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <underground-walkway-side-card-details />
      </v-col>
      <v-col md="9" cols="12">
        <v-card elevation="3" class="rfaTable">
          <v-container>
            <div class="d-flex">
              <v-sheet class="pa-1 ma-1">スパン番号</v-sheet>
              <v-sheet class="ma-1">
                <v-select v-model="page" :items="pageNums" item-title="page" variant="outlined" density="compact"
                  hide-details></v-select>
              </v-sheet>
            </div>
          </v-container>
          <v-window v-model="page">
            <v-window-item value="全て">
              <v-container v-for="item in facilityItems" :key="item.spanId">
                <underground-walkway-protocol10-sheet :spanid="item.spanId" />
              </v-container>
            </v-window-item>
            <v-window-item v-for="item in facilityItems" :key="item.spanId" :value="item.spanId">
              <v-container>
                <underground-walkway-protocol10-sheet :spanid="item.spanId" />
              </v-container>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      page: '全て',
      pageNums: [],
      //TODO:DBのテーブル、カラムが判明次第、それに合わせて改修する
      facilityItems: [
        {
          spanId: '1',
          adminId: 0,
          facilityName: 0,
          damegeImg: null,
        },
        {
          spanId: '2',
          adminId: null,
          facilityName: null,
          damegeImg: null,
        },
        {
          spanId: '3',
          adminId: null,
          facilityName: null,
          damegeImg: null,
        },
      ],
    }
  },
  mounted: function () {
    this.pageNums = this.getPageNumber(this.facilityItems);
  },
  methods: {
    getPageNumber(facilitys) {
      let pageNumbers = new Array<String>;
      pageNumbers.push('全て');
      facilitys.forEach(element => {
        pageNumbers.push(element.spanId);
      });
      return pageNumbers;
    },
  }
})
</script>