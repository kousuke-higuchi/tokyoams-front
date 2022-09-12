<template>
  <v-row>
    <v-col v-bind:md="child_extend?3:0" cols="12">
    <!-- <p> {{ child_extend }}</p> -->
      <bridge-side-card-details @isExtend='child_extend = $event' />
    </v-col>
    <v-col v-bind:md="child_extend?9:12" cols="12">
      <v-card elevation="3">
        <div class="d-flex">
          <v-card-title>
            <div class="font-weight-bold">写真台帳</div>
          </v-card-title>
        </div>

        <v-card-text>
          <v-row no-gutters>
            <v-col
              md="6"
              cols="12"
              class="detailCard"
              v-for="photo in photos"
              :key="photo.dataid"
            >
              <v-sheet>
                <div class="pa-4">
                  <v-img :src="photo.url" max-height="350" aspect-ratio="1">
                  </v-img>
                </div>
                <v-table density="compact">
                  <tbody>
                    <tr>
                      <th class="cell" style="width: 60px">備考</th>
                      <td class="cell">{{ photo.item1 }}</td>
                      <th class="cell text-center" style="width: 80px">
                        撮影日
                      </th>
                      <td class="cell text-center" style="width: 180px">
                        {{ moment(photo.takedate).format("yyyy年M月D日") }}
                      </td>
                    </tr>
                  </tbody>
                </v-table>
              </v-sheet>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import _moment from "moment";
import bridgeService from "~~/services/bridge-service";
import { BridgePhoto } from "~~/types/bridge";

const child_extend = ref(true);

const route = useRoute();
const bridgeId = parseInt(route.params.id as string);

const photos = ref<BridgePhoto[]>([
  {
    dataid: 1,
    item1: "全景写真",
    takedate: new Date(2017, 9, 25),
    url: new URL("../../../../assets/img/dmg/leaderPicture1.jpg",import.meta.url).href,
  },
  {
    dataid: 2,
    item1: "正面写真(起点側)",
    takedate: new Date(2017, 10, 25),
    url: new URL("../../../../assets/img/dmg/leaderPicture2.jpg",import.meta.url).href,
  },
  {
    dataid: 4,
    item1: "正面写真(終点側)",
    takedate: new Date(2017, 10, 25),
    url: new URL("../../../../assets/img/dmg/leaderPicture3.jpg",import.meta.url).href,
  },
]);

photos.value.forEach((element, index) => {
  //TODO:モック終了後、ログイン状態の判定は削除。

  const authState = useAuthUser();
  if (authState.state.value.isLogin) {
    bridgeService.getImageUrl(bridgeId, 7, element.dataid).then((url) => {
      photos.value[index].url = url;
    });
  }
});

const moment = (d) => {
  return _moment(d);
};
</script>

<style scoped>
.detailCard {
  padding: 0;
  border: 1px solid black;
}

.cell {
  border: 0.5px solid black;
}
</style>