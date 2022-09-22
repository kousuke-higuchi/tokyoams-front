<template>
  <v-row>
    <v-col :md="child_extend ? 3 : 0" cols="12">
      <pavement-side-card-details @is-extend="child_extend = $event" />
    </v-col>
    <v-col :md="child_extend ? 9 : 12" cols="12">
      <v-card class="ledger">
        <v-row dense>
          <v-col cols="6">
            <v-table density="compact">
              <tr>
                <th>管轄</th>
                <td class="text-center">
                  <span v-if="paveInfo?.office?.name != null">
                    東京都建設局　{{paveInfo?.office?.name}}
                  </span>
                </td>
              </tr>
              <tr>
                <th>一時調査日</th>
                <td class="text-center">{{ paveCavity?.viewSurveyDate1st }}</td>
              </tr>
              <tr>
                <th>二次調査日</th>
                <td class="text-center">{{ paveCavity?.viewSurveyDate2nd }}</td>
              </tr>
              <tr>
                <th>地先名</th>
                <td class="text-center">{{ paveCavity?.sightfontage }}</td>
              </tr>
              <tr>
                <th>判定</th>
                <td class="text-center">{{ paveCavity?.judge }}</td>
              </tr>
            </v-table>
          </v-col>
          <v-col cols="6">
            <v-table density="compact">
              <tr>
                <th rowspan="5">位置</th>
                <th>路線名</th>
                <td class="text-center">{{ paveInfo?.route?.name }}</td>
              </tr>
              <tr>
                <th>KP</th>
                <td class="text-center">{{ paveCavity?.kp }}</td>
              </tr>
              <tr>
                <th>上・下</th>
                <td class="text-center">{{ paveCavity?.trafdirection?.name }}</td>
              </tr>
              <tr>
                <th>車歩道</th>
                <td class="text-center">{{ paveCavity?.roadsidewalk }}</td>
              </tr>
              <tr>
                <th>車線</th>
                <td class="text-center">{{ paveCavity?.lane }}</td>
              </tr>
            </v-table>
          </v-col>
          <v-col cols="12">
            <v-card>
              <v-card-text class="font-weight-bold text-center bg-blue-darken-4 pa-1">
                位置図
              </v-card-text>
              <v-container>
                <v-img :src="paveCavityphoto?.positionFigUrl"></v-img>
              </v-container>
            </v-card>
          </v-col>
          <v-col md="8" cols="12">
            <v-card>
              <v-card-text class="font-weight-bold text-center bg-blue-darken-4 pa-1">
                空洞の広がり
              </v-card-text>
              <v-container>
                <v-img :src="paveCavityphoto?.caveExpansePhotoUrl"></v-img>
              </v-container>
            </v-card>
          </v-col>
          <v-col md="4" cols="12">
            <v-card>
              <v-card-text class="font-weight-bold text-center bg-blue-darken-4 pa-1">
                ドーロスコープ撮影記録
              </v-card-text>
              <v-container>
                <v-img :src="paveCavityphoto?.scopeRecordPhotoUrl"></v-img>
              </v-container>
            </v-card>
          </v-col>
          <v-col md="8" cols="12">
            <v-card>
              <v-card-text class="font-weight-bold text-center bg-blue-darken-4 pa-1">
                空洞規模
              </v-card-text>
              <v-table>
                <tr>
                  <th>深度(m)</th>
                  <td class="text-center ">{{paveCavity?.cavescaleDepth}}</td>
                  <th>空洞厚(m)</th>
                  <td class="text-center ">{{paveCavity?.cavescaleThin}}</td>
                </tr>
                <tr>
                  <th>縦断方向(m)</th>
                  <td class="text-center ">{{paveCavity?.cavescaleVertical}}</td>
                  <th>横断方向(m)</th>
                  <td class="text-center ">{{paveCavity?.cavescaleHorizon}}</td>
                </tr>
                <tr>
                  <th>面積(㎡)</th>
                  <td class="text-center ">{{paveCavity?.cavescaleArea}}</td>
                  <th>体積(㎡)</th>
                  <td class="text-center ">{{paveCavity?.cavescaleVolume}}</td>
                </tr>
              </v-table>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import pavementService from '~~/services/pavement-service';
import { CavityPhotoType, PaveCavity, PaveTbKukanid, PavTbCavityInspect, PaveCavityPhoto } from '~~/types/pavement';

const route = useRoute();

const pavement = ref<PaveCavity>();
const paveInfo = ref<PaveTbKukanid>();
const paveCavity = ref<PavTbCavityInspect>();
const paveCavityphoto = ref(new PaveCavityPhoto);

const loading = useLoading();
loading.setLoading(true);

onMounted(() => {
  pavementService.getPaveCavity(route.params.id.toString()).then(s => {
    pavement.value = s.data;
    paveInfo.value = pavement.value.tbKukanid;
    paveCavity.value = pavement.value.cavityInspect;

    if(paveCavity.value.kukanid == null){
      useToast().showToast("データがありませんでした。");
      return;
    }
  }).then(() => {
    getPhotos();
  }).finally(() => {
    loading.setLoading(false);
  })
});

const getPhotos = () => {
  pavementService.getImageUrl(route.params.id.toString(), CavityPhotoType.POSITIONFIG).then((url) => {
    paveCavityphoto.value.positionFigUrl = url;
  });
  pavementService.getImageUrl(route.params.id.toString(), CavityPhotoType.CAVEEXPANSEPHOTO).then((url) => {
    paveCavityphoto.value.caveExpansePhotoUrl = url;
  });
  pavementService.getImageUrl(route.params.id.toString(), CavityPhotoType.SCOPERECORDPHOTO).then((url) => {
    paveCavityphoto.value.scopeRecordPhotoUrl = url;
  });
}

const child_extend = ref(true);
</script>
