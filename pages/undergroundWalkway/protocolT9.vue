<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <underground-walkway-side-card-details />
      </v-col>
      <v-col md="9" cols="12">
        <v-card elevation="3">
          <div class="d-flex">
            <v-sheet class="pa-1 ma-1">スパン番号</v-sheet>
            <v-sheet class="ma-1">
              <v-select v-model="page" :items="numbers" item-title="page" variant="outlined" density="compact"
                hide-details></v-select>
            </v-sheet>
          </div>
          <v-window v-model="page">
            <v-window-item v-for="item in facilityItems" :key="item.spanId" :value="item.spanId">
              <v-card class="border rounded-0">
                <v-sheet class="d-flex">
                  <v-card-text class="border bg-grey-lighten-3 text-center pa-1">管理番号</v-card-text>
                  <v-card-text class="border text-center pa-1">{{ item.adminId }}</v-card-text>
                  <v-card-text class="border bg-grey-lighten-3 text-center pa-1">施設名</v-card-text>
                  <v-card-text class="border text-center pa-1">{{ item.facilityName }}</v-card-text>
                  <v-card-text class="border bg-grey-lighten-3 text-center pa-1" style="width:40%">損傷図</v-card-text>
                  <v-card-text class="border bg-grey-lighten-3 text-center pa-1">スパン番号</v-card-text>
                  <v-card-text class="border text-center pa-1">{{ item.spanId }}</v-card-text>
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
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      page: 1,
      numbers: [],
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
    this.getPageNumber(this.facilityItems);
  },
  methods: {
    getPageNumber(facilitys) {
      facilitys.forEach(element => {
        this.numbers.push(element.spanId);
      });
    },
  }
})
</script>