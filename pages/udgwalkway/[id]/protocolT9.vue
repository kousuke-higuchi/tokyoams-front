<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <underground-walkway-side-card-details />
      </v-col>
      <v-col md="9" cols="12">
        <v-card elevation="3">
          <v-container>
          <div class="d-flex">
            <v-sheet class=" ma-1">スパン番号</v-sheet>
            <v-sheet class="ma-1">
              <v-select v-model="page" :items="pageNumbers" item-title="page" variant="outlined" density="compact"
                hide-details></v-select>
            </v-sheet>
          </div>
          <v-window v-model="page">
          <v-window-item value="全て">
            <v-card class="border rounded-0 my-4" v-for="item in facilityItems" :key="item.spanId">
                <v-sheet class="tbTitle d-flex">
                  <v-card-text class="title">管理番号</v-card-text>
                  <v-card-text>{{ item.adminId }}</v-card-text>
                  <v-card-text class="title">施設名</v-card-text>
                  <v-card-text>{{ item.facilityName }}</v-card-text>
                  <v-card-text style="width:40%" class="title">損傷図</v-card-text>
                  <v-card-text class="title">スパン番号</v-card-text>
                  <v-card-text>{{ item.spanId }}</v-card-text>
                </v-sheet>
                <v-row>
                  <v-col md="9" cols="12">
                    <v-container>
                      <v-img :src="item.damegeImg" />
                    </v-container>
                  </v-col>
                  <v-col md="3" cols="12">
                    <v-container>
                      <v-img src="../../assets/img/underGroundWalkWayT9DamageType.jpg" />
                    </v-container>
                  </v-col>
                </v-row>
              </v-card>
          </v-window-item>
            <v-window-item v-for="item in facilityItems" :key="item.spanId" :value="item.spanId">
              <v-card class="border rounded-0">
                <v-sheet class="tbTitle d-flex">
                  <v-card-text class="title">管理番号</v-card-text>
                  <v-card-text>{{ item.adminId }}</v-card-text>
                  <v-card-text class="title">施設名</v-card-text>
                  <v-card-text>{{ item.facilityName }}</v-card-text>
                  <v-card-text style="width:40%" class="title">損傷図</v-card-text>
                  <v-card-text class="title">スパン番号</v-card-text>
                  <v-card-text>{{ item.spanId }}</v-card-text>
                </v-sheet>
                <v-row>
                  <v-col md="9" cols="12">
                    <v-container>
                      <v-img :src="item.damegeImg" />
                    </v-container>
                  </v-col>
                  <v-col md="3" cols="12">
                    <v-container>
                      <v-img src="../../assets/img/underGroundWalkWayT9DamageType.jpg" />
                    </v-container>
                  </v-col>
                </v-row>
              </v-card>
            </v-window-item>
          </v-window>
          </v-container>
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
      pageNumbers: [],
      //TODO:DBのテーブル、カラムが判明次第、それに合わせて改修する
      facilityItems: [
        {
          spanId: 1,
          adminId: 0,
          facilityName: 0,
          damegeImg: null,
        },
        {
          spanId: 2,
          adminId: null,
          facilityName: null,
          damegeImg: null,
        },
        {
          spanId: 3,
          adminId: null,
          facilityName: null,
          damegeImg: null,
        },
      ],
    }
  },
  mounted: function () {
    this.pageNumbers = this.getPageNumber(this.facilityItems);
  },
  methods: {
    getPageNumber(facilitys) {
      let nums = new Array<String>;
      nums.push('全て')
      facilitys.forEach(element => {
        nums.push(element.spanId);
      });
      return nums;
    },
  }
})
</script>