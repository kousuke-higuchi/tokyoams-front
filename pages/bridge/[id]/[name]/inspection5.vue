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
            <div class="font-weight-bold">一般図</div>
          </v-card-title>
        </div>
        <v-card-text>
          <v-img :src="imagePath" @click="previewImage"></v-img>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <!-- <transition name="modal">
    <ImageModal v-if="showModal" @close="showModal = false">
      <template v-slot:content>
        <div v-if="imagePath">
          <img :data-fileId="fileID" :src="typeof imagePath === 'string' ? imagePath : ''" alt="" />
        </div>
      </template>
    </ImageModal>
  </transition> -->

  <VueEasyLightbox
  :visible="showModal"
  :imgs="imagePath"
  :index="fileID"
  @hide="onHide"
></VueEasyLightbox>


</template>

<script lang="ts" setup>
  const child_extend = ref(true);
  const imagePath = new URL("../../../../assets/img/dmg/bridgeDetail2_6_1.jpg", import.meta.url).href;
  const fileID = ref(1);
  const showModal = ref(false);

const onHide=()=>{showModal.value = false}
//画像のプレビュー
const previewImage = (e: Event) => {
  e.preventDefault();
  const _this = e.currentTarget as HTMLElement;
  const dataFileId = _this.getAttribute("data-fileId");
  if (dataFileId) {
    let _thisIndex = dataFileId.split("__");
    let _thisIndexNumber = Number(_thisIndex[1]);
  }
  //画像が存在していたらモーダルあげる
    showModal.value = true;
};

</script>
