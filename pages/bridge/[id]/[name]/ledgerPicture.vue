<template>
  <v-row>
    <v-col v-bind:md="child_extend ? 3 : 0" cols="12">
      <!-- <p> {{ child_extend }}</p> -->
      <bridge-side-card-details @isExtend="child_extend = $event" />
    </v-col>
    <v-col v-bind:md="child_extend ? 9 : 12" cols="12">
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
              class="brgDetailCard"
              v-for="(photo, index) in photos"
              :key="photo.dataid"
            >
              <v-sheet>
                <v-table density="compact">
                  <tbody>
                    <tr>
                      <td colspan="7">
                        <v-img
                          :src="photo.url"
                          max-height="350"
                          aspect-ratio="1"
                        ></v-img>
                      </td>
                    </tr>
                    <tr>
                      <th style="width: 60px">備考</th>
                      <td>{{ photo.item1 }}</td>
                      <th class="text-center" style="width: 80px">撮影日</th>
                      <td class="text-center" style="width: 180px">
                        {{ moment(photo.createdate).format("yyyy年M月D日") }}
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
import Service from "~~/services/service";
import { list } from "postcss";
import bridgeService from "~~/services/bridge-service";
import { BridgePhoto, BRG_TB_BRIDGEPHOTO } from "~~/types/bridge";

// メニューの開閉処理
const child_extend = ref(true);

const moment = (d) => {
  return _moment(d);
};
let service = new Service();

// 写真台帳は写真種別ID(7:現地写真)
const photokindid = BRG_TB_BRIDGEPHOTO.PHOTOLEADER;
const route = useRoute();
const bridgeId = parseInt(route.params.id as string);

const photos = ref(new Array<BridgePhoto>());

const loadingState = useLoading();
loadingState.setLoading(true);

onMounted(() => {
  bridgeService
    .getImageInfo(bridgeId, photokindid)
    .then((apiData) => {
      photos.value = apiData.data;

      if (photos.value.length == 0) {
        useToast().showToast("データがありませんでした。");
        return;
      }

      //取得したデータを基にURLをセット
      photos.value.forEach((element, index) => {
        bridgeService
          .getImageUrl(bridgeId, photokindid, element.dataid)
          .then((url) => {
            photos.value[index].url = url;

            // item1が取得できない場合3を取得して設定する。
            if (
              photos.value[index].item1 == null ||
              photos.value[index].item1 == ""
            ) {
              photos.value[index].memo = photos.value[index].item3;
            } else {
              photos.value[index].memo = photos.value[index].item1;
            }

            photos.value[index].createdate = service.getDateFromNumber(
              photos.value[index].takedate
            );
          });
      });
    })
    .finally(() => {
      loadingState.setLoading(false);
    });
});
</script>
