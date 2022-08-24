<template>
  <div>
    <v-row>
      <!-- メニュー -->
      <v-col md="3" cols="12">
        <v-card height="820px" elevation="3">
          <v-list-item-group  color="primary">
            <v-list :items="subtitles" color="primary"></v-list>
          </v-list-item-group>
        </v-card>
      </v-col>

      <v-col md="9" cols="12"> 
        <!-- TODO:道路反射鏡台帳 -->
            <v-card class="overflow-auto" elevation="4">
            </v-card>   
      </v-col>

    </v-row>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      subtitles: [
        { title: "道路反射鏡台帳", props: { to: "ledger" } },
        { title: "補修履歴", props: { to: "repair" } },
      ],
    };
  },
  mounted: function () {
    console.log("mounted /mirror/ledger");
  },
  methods: {},
});
</script>
<style></style>
