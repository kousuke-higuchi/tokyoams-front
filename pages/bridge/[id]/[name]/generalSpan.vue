<template>
  <v-row>
    <v-col md="3" cols="12">
      <bridge-side-card-details />
    </v-col>
    <v-col md="9" cols="12">
      <v-card elevation="3">
        <div class="d-flex">
          <v-card-title>
            <div class="font-weight-bold">径間別一般図</div>
          </v-card-title>
          <v-card-actions>
            <v-select label="径間番号" v-model="select" :items="histItems" item-title="select" variant="outlined"
              density="compact" hide-details="false"></v-select>
          </v-card-actions>
        </div>
        <v-card-text>
          <v-img :src="getImageUrl()"></v-img>
          <v-table density="compact">
            <tbody>
              <tr>
                <th class="cell text-center" style="width: 60px">備考</th>
                <td class="cell">一般図</td>
              </tr>
            </tbody>
          </v-table>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      select: '全て',
      histItems: ['全て', '1'],
    }
  },
  methods:{
    
    getImageUrl(){
      return new URL(`../../../../assets/img/dmg/bridgeDetail2_6_1.jpg`, import.meta.url).href
    },
  }
})
</script>
