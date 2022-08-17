<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <fbg-side-card-details />
      </v-col>
      <v-col md="9" cols="12">
        <v-card>
          <div class="d-flex">
            <v-row>
              <v-col>
                <v-card-text align="right">様式-5</v-card-text>
              </v-col>
            </v-row>
          </div>
          <v-card class="ma-1">
            <v-card-title>
              <v-row class="justify-start mt-1 ml-3">平面図</v-row>
              <v-row class="justify-center mt-1 ml-3">橋梁番号　01130010</v-row>
              <v-row class="justify-end mt-1 mr-3">橋梁名　青葉歩道橋</v-row>
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-img src="../../assets/img/dmg/fbg5planview1.jpg"></v-img>
              </v-row>
            </v-card-text>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>