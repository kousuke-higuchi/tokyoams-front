<template>
  <v-row>
    <v-col md="3" cols="12">
      <bridge-side-card-details />
    </v-col>
    <v-col md="9" cols="12">
      <v-card elevation="3">
        <div class="d-flex">
          <v-card-title>
            <div class="font-weight-bold">一般図</div>
          </v-card-title>
        </div>
        <v-card-text>
          <v-img :src="getImageUrl()"></v-img>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">  
  export default defineComponent({
    data() {
      return {        
      }
    },
    methods: {
      getImageUrl(){
        return new URL(`../../assets/img/dmg/bridgeDetail2_6_1.jpg`, import.meta.url).href
      }
    },
    
  })
  </script>
  