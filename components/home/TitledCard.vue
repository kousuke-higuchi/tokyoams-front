<template>
  <v-card :href="href">
    <v-container class="pa-3">
      <v-row>
        <v-col sm="4"><v-img :src="imgSrc" aspect-ratio="1"></v-img></v-col>
        <v-col class="titleCenter" sm="8">{{title}}</v-col>
      </v-row>
      <v-row>
        <v-col class="explain" sm="12">{{explain}}</v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script lang="ts">
    export default defineComponent({
        props: {
            imgSrc: String,
            title: String,
            href: String,
            explain: String,
        },
    })
</script>
<style scoped>
.titleCenter{
  text-align: center;
  display: flex;
  align-items: center;
  
}
.explain{
  text-align: left;
  display: flex;
  align-items: left;
  font-size: xx-small;
  color: darkred;
}
</style>