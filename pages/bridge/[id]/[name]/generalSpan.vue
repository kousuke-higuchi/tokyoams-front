<template>
  <v-row>
    <v-col v-bind:md="child_extend ? 3 : 0" cols="12">
      <bridge-side-card-details @isExtend="child_extend = $event" />
    </v-col>
    <v-col v-bind:md="child_extend ? 9 : 12" cols="12">
      <v-card>
        <div class="d-flex">
          <v-card-title>
            <div class="font-weight-bold">径間別一般図</div>
          </v-card-title>
          <v-sheet class="ma-1">
            <v-select
              label="径間番号"
              v-model="page"
              :items="displaySpanNos"
              item-title="page"
              item-value="spanno"
              variant="outlined"
              density="compact"
              hide-details="false"
              @update:model-value="onChangeSpanNo(page, $event)"
            ></v-select>
          </v-sheet>
        </div>
        <v-window v-model="page">
          <v-row no-gutters>
            <v-col
              md="12"
              cols="12"
              class="brgDetailCard"
              v-for="(photo, index) in photoDisplays"
              :key="photo.item1"
            >
              <bridge-general-span-sheet :photo="photo" />
            </v-col>
          </v-row>
        </v-window>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import bridgeService from "~~/services/bridge-service";
import { BridgePhoto, BridgeSpan, BRG_TB_BRIDGEPHOTO } from "~~/types/bridge";

// メニューの開閉処理
const child_extend = ref(true);

const route = useRoute();
const bridgeId = parseInt(route.params.id as string);

const page = ref("全て");
const spanInfos = ref(new Array<BridgeSpan>());

//径間別一般図は写真種別ID(径間全体図)
const photokindid = BRG_TB_BRIDGEPHOTO.SPANGENERAL;
const photos = ref(new Array<BridgePhoto>());

//displaySpanNoは径間番号に"全て"を加えたリスト。
const displaySpanNos = ref(new Array<String>());
let photoDisplays = ref(new Array<BridgePhoto>());

const loadingState = useLoading();
loadingState.setLoading(true);

onMounted(() => {
  bridgeService.getSpanList(bridgeId).then((s) => {
    spanInfos.value = s.data;
    console.info("径間IDの取得");
  });

  bridgeService
    .getImageInfo(bridgeId, photokindid)
    .then((apiData) => {
      displaySpanNos.value.push("全て");

      if (apiData.data.length == 0) {
        useToast().showToast("データがありませんでした。");
        return;
      }

      //径間IDと、データIDで並び替える
      //item1がspannoであるので、それで並び替えて出力する
      photos.value = apiData.data.sort((data1, data2) => {
        if (data1.item1 > data2.item1) {
          return 1;
        } else if (data1.item1 < data2.item1) {
          return -1;
        }

        //spannoが同じ場合はdataidで並び変える。
        if (data1.dataid > data2.dataid) {
          return 1;
        } else if (data1.dataid < data2.dataid) {
          return -1;
        }

        return 0;
      });

      //取得したデータを基にURLとselectボックスのリストをセット
      photos.value.forEach((photodata, index) => {
        //nullの場合の場合、何もしない
        if (photodata.item1 == null) {
          photodata.spanno = "";
        } else {
          const result = spanInfos.value.find(
            (data) => data.id.toString() == photodata.item1
          );

          //null以外で一致しないデータは削除するためreturn。
          if (result == null) {
            return;
          }
          photodata.spanno = result.spanno.toString();
        }

        //一度も登録されていない場合だけコンボボックスリストに追加
        if (displaySpanNos.value.includes(photodata.spanno) == false) {
          displaySpanNos.value.push(photodata.spanno);
        }

        bridgeService
          .getImageUrl(bridgeId, photokindid, photodata.dataid)
          .then((url) => {
            photodata.url = url;

          });
      });
    })
    .finally(() => {
      //最初はすべてが選択されるので全てを登録
      photoDisplays.value = photos.value;
      loadingState.setLoading(false);
    });
});

const onChangeSpanNo = (page, event) => {
  //選択変更した場合
  photoDisplays.value = new Array<BridgePhoto>();

  if (page == "全て") {
    photoDisplays.value = photos.value;
  } else {
    photos.value.forEach((photodata, index) => {

      if (photodata.spanno == page) {
        photoDisplays.value.push(photodata);
      }
    });
  }
};
</script>
