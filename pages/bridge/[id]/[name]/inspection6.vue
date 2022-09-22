<template>
  <v-row>
    <v-col v-bind:md="child_extend?3:0" cols="12">
      <!-- <p> {{ child_extend }}</p> -->
      <bridge-side-card-details @isExtend='child_extend = $event' selectTab="inspection" />
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
            <v-col md="6" cols="12" class="detailCard">
              <v-card class="rounded-0">
                <v-table density="compact">
                  <tbody>
                    <tr>
                      <td class="cell text-center" >全景写真</td>
                    </tr>
                  </tbody>
                </v-table>
                <div class="mt-5"> </div>
                <v-container>
                  <v-img :src="imagePaths[0]"  @click="previewImage(0)"></v-img>
                </v-container>
              </v-card>
            </v-col>
            <v-col md="6" cols="12" class="detailCard">
              <v-card class="rounded-0">
                <v-table density="compact">
                  <tbody>
                    <tr>
                      <td class="cell text-center">正面写真</td>
                    </tr>
                  </tbody>
                </v-table>
                <div class="ml-4">起点側</div>
                <v-container>
                  <v-img :src="imagePaths[1]"  @click="previewImage(1)"></v-img>
                </v-container>
              </v-card>
              <v-card class="rounded-0">
                <v-table density="compact">
                  <tbody>
                    <tr>
                      <td class="cell text-center">正面写真</td>
                    </tr>
                  </tbody>
                </v-table>
                <div class="ml-4">終点側</div>
                <v-container>
                  <v-img :src="imagePaths[2]"  @click="previewImage(2)"></v-img>
                </v-container>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>


  <VueEasyLightbox
  :visible="showModal"
  :imgs="imagePaths"
  :index="selectedIndex"
  @hide="onHide"
></VueEasyLightbox>


</template>

<script lang="ts" setup>
const child_extend = ref(true);
const imagePaths = [
  new URL("../../../../assets/img/dmg/bridgeDetail2_7_1.jpg", import.meta.url).href,
  new URL("../../../../assets/img/dmg/bridgeDetail2_7_2.jpg", import.meta.url).href,
  new URL("../../../../assets/img/dmg/bridgeDetail2_7_3.jpg", import.meta.url).href,
  new URL("../../../../assets/img/dmg/bridgeDetail2_7_4.jpg", import.meta.url).href,
];
const showModal = ref(false);
const selectImagePath = ref("");
const selectedIndex = ref(0);

const onHide=()=>{showModal.value = false}
//画像のプレビュー
const previewImage = ( index:number) => {

  //画像が存在していたらモーダルあげる
  showModal.value = true;
  selectedIndex.value =index;
};

</script>

<style scoped>
.detailCard {
  padding: 0;
  border: 1px solid black;
}

.cell {
  padding: 0;
  border: 0.5px solid black;
}
</style>