<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <fbg-side-card-details />
      </v-col>
      <v-col md="9" cols="12">
        <v-card>
          <v-card-title>周　辺　環　境　案　内　図</v-card-title>
          <div class="d-flex">
            <v-row>
              <v-col>
                <v-card-text align="right">様式-7</v-card-text>
              </v-col>
            </v-row>
          </div>
          <v-card class="ma-1">
            <v-card-title>
              <v-row class="justify-start mt-1 ml-3">01130010</v-row>
              <v-row class="justify-center mt-1 ml-3">橋梁名　青葉歩道橋</v-row>
              <v-row class="justify-end mt-1 mr-3">指定通学路　有　九段小学校</v-row>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col class="cell" cols="9">
                    <v-card-text>
                    <v-img src="../../assets/img/dmg/fbg7view1.jpg"></v-img>
                    </v-card-text>
                  </v-col>
                  <v-col cols="3" class="cell">
                    <v-row class="cell">
                      <v-col>
                        <v-card-text>
                        <v-img src="../../assets/img/dmg/fbg7view2.jpg" height="auto"></v-img>
                        </v-card-text>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-card-text>1:2,500</v-card-text>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.cell {
  border: 0.5px solid black;
}
</style>