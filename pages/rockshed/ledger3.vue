<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <rockshed-side-card-details/>
      </v-col>
      <v-col md="9" cols="12">
        <v-card>
          <v-container>
            <v-table density="compact" style="white-space:nowrap;">
              <thead>
                <tr>
                  <th class="border bg-grey-lighten-3 text-center" rowspan="2">工種</th>
                  <th class="border bg-grey-lighten-3 text-center" rowspan="2">材料</th>
                  <th class="border bg-grey-lighten-3 text-center" colspan="3">部材種別</th>
                  <th class="border bg-grey-lighten-3 text-center" colspan="4">判定区分</th>
                  <th class="border bg-grey-lighten-3 text-center" rowspan="2">備考</th>
                </tr>
                <tr>
                  <th class="border bg-grey-lighten-3 text-center">名称</th>
                  <th class="border bg-grey-lighten-3 text-center">記号</th>
                  <th class="border bg-grey-lighten-3 text-center">部材番号</th>
                  <th class="border bg-grey-lighten-3 text-center">区分Ⅰの変状</th>
                  <th class="border bg-grey-lighten-3 text-center">区分Ⅱの変状</th>
                  <th class="border bg-grey-lighten-3 text-center">区分Ⅲの変状</th>
                  <th class="border bg-grey-lighten-3 text-center">区分Ⅳの変状</th>
                </tr>
              </thead>
              <!--DBカラムが判明次第適切な値が表示されるよう修正-->
              <tbody>
                <tr v-for="i in 14" :key="i">
                  <td class="border">{{null}}</td>
                  <td class="border">{{null}}</td>
                  <td class="border">{{null}}</td>
                  <td class="border">{{null}}</td>
                  <td class="border">{{null}}</td>
                  <td class="border">{{null}}</td>
                  <td class="border">{{null}}</td>
                  <td class="border">{{null}}</td>
                  <td class="border">{{null}}</td>
                  <td class="border">{{null}}</td>
                </tr>
              </tbody>
            </v-table>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>