<template>
  <div>
    <v-row>
      <v-col v-bind:md="child_extend ? 3 : 0" cols="12">
        <footbridge-side-card-details @isExtend='child_extend = $event' />
      </v-col>
      <v-col v-bind:md="child_extend ? 9 : 12" cols="12">
        <v-card>
          <div class="d-flex">
            <v-card-title>周辺環境案内図</v-card-title>
            <v-row>
              <v-col>
                <v-card-text class="text-right">様式-7</v-card-text>
              </v-col>
            </v-row>
          </div>
          <v-row>
            <v-sheet class="ml-auto  mr-4">
              <v-table class="ledger">
                <tbody>
                  <tr>
                    <th class="text-center">指定通学路</th>
                    <td class="text-center">有</td>
                    <td class="text-center">九段小学校</td>
                  </tr>
                </tbody>
              </v-table>
            </v-sheet>
          </v-row>
          <v-card-text class="mt-4">
              <v-row>
                <v-col class="cell">
                  <v-container>
                  <v-card-text>
                    <v-img src="../../../../assets/img/dmg/fbg7view1.jpg"></v-img>
                  </v-card-text>
                </v-container>
                </v-col>
                <v-col cols="3" class="cell">
                  <v-row class="cell">
                    <v-col>
                      <v-card-text>
                        <v-img src="../../../../assets/img/dmg/fbg7view2.jpg"></v-img>
                      </v-card-text>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-card-text class="text-center">1:2,500</v-card-text>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
const child_extend = ref(true);
const onDownloadLedgerClick = () => {
  console.debug('downloadLedger');
};
</script>