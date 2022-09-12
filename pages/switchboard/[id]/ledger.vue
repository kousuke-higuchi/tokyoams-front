<template>
  <div>
    <v-row>
      <!-- メニュー -->
      <v-col :md="child_extend?3:0">
        <switchboard-menu @is-extend="child_extend=$event"/>
      </v-col>

      <v-col :md="child_extend?9:12">
        <!-- TODO:配電盤台帳 -->
        <v-card class="overflow-auto" elevation="4">
          <v-sheet class="d-flex">
            <v-sheet class="ma-2 px-2 mr-auto">配電盤用台帳</v-sheet>
            <v-sheet class="ma-2 px-2">{{ lastUpdate }} 更新
            </v-sheet>
          </v-sheet>

          <v-card-text class="pt-0">
            <v-form ref="form">
            <v-row>
              <v-col sm="12" md="6">
                <v-table density="compact" class="ledger atfTable">
                  <tbody>
                    <tr>
                      <th style="width:14em;">事務所名</th>
                      <td colspan="3">
                        <v-autocomplete
                          v-model="switchboard.office"
                          :items="offices"
                          item-title="name"
                          item-value="id"
                          :rules="[ validations.objectRequired(switchboard.office) ]"
                          hide-details="auto"
                          density="compact"
                          return-object
                        ></v-autocomplete>

                      </td>
                      <th style="width:10em;">工区名</th>
                      <td colspan="2">
                        <!-- TODO: add v-model -->
                        <v-text-field hide-details="auto" density="compact" />
                      </td>
                      <th>管理番号</th>
                      <td>
                        <v-text-field hide-details="auto" density="compact" v-model="switchboard.adminnumber"
                        :rules="[validations.required()]"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>路線番号</th>
                      <td>
                        <v-text-field hide-details="auto" density="compact" v-model="switchboard.routeid" />
                      </td>
                      <td style="">
                        <v-text-field hide-details="auto" density="compact" v-model="switchboard.routesub" />
                      </td>
                      <th>路線名</th>
                      <td colspan="3">
                        <!-- TODO: add v-model -->
                        <v-text-field hide-details="auto" density="compact" />
                      </td>
                      <th>通称道路名</th>
                      <td>
                        <v-text-field hide-details="auto" density="compact" v-model="switchboard.routesub" />
                      </td>
                    </tr>
                    <tr>
                      <th>地点標</th>
                      <td colspan="2">
                        <v-text-field hide-details="auto" density="compact" suffix="km" v-model="switchboard.distance" :rules="[ validations.isNumeric() ]" />
                      </td>
                      <th>住所</th>
                      <td colspan="3">
                        <v-text-field hide-details="auto" density="compact" v-model="switchboard.municipalityname" />
                      </td>
                      <td colspan="2">
                        <v-text-field hide-details="auto" density="compact" v-model="switchboard.address" />
                      </td>
                    </tr>
                    <tr>
                      <th>緯度</th>
                      <td colspan="2">
                        <v-text-field hide-details="auto" density="compact" v-model="switchboard.latitude" />
                      </td>
                      <th>経度</th>
                      <td colspan="3">
                        <v-text-field hide-details="auto" density="compact" v-model="switchboard.longitude" />
                      </td>
                      <th>住宅地図番号</th>
                      <td>
                        <v-text-field hide-details="auto" density="compact" v-model="switchboard.mapnumber" />
                      </td>
                    </tr>
                    <tr>
                      <th>施設名</th>
                      <td colspan="3">
                        <v-text-field hide-details="auto" density="compact" v-model="switchboard.facilityname" />
                      </td>
                      <th colspan="2">施設番号</th>
                      <td colspan="3">
                        <v-text-field hide-details="auto" density="compact" v-model="switchboard.facilitynumber" />
                      </td>
                    </tr>
                    <tr>
                      <th>設置形式</th>
                      <td colspan="3">
                        <!-- TODO: add v-model -->
                        <v-text-field hide-details="auto" density="compact" />
                      </td>
                      <th colspan="2">照明種別</th>
                      <td colspan="3">
                        <!-- TODO: add v-model -->
                        <v-text-field hide-details="auto" density="compact" />
                      </td>
                    </tr>
                    <tr>
                      <th>契約方式</th>
                      <td colspan="3">
                        <!-- TODO: add v-model -->
                        <v-text-field hide-details="auto" density="compact" />
                      </td>
                      <th colspan="2">電源引込方式</th>
                      <td colspan="3">
                        <v-text-field hide-details="auto" density="compact" v-model="switchboard.leadinmethod" />
                      </td>
                    </tr>
                    <tr>
                      <th>東電管理番号</th>
                      <td colspan="3">
                        <v-text-field hide-details="auto" density="compact" v-model="switchboard.tepconumber" />
                      </td>
                      <th colspan="2">電源方式</th>
                      <td colspan="3">
                        <v-text-field hide-details="auto" density="compact" v-model="switchboard.powermethod" />
                      </td>
                    </tr>
                    <tr>
                      <th>お客様契約番号</th>
                      <td colspan="3">
                        <v-text-field hide-details="auto" density="compact" v-model="switchboard.contractnumber" />
                      </td>
                      <th colspan="2">東電営業所</th>
                      <td colspan="3">
                        <v-text-field hide-details="auto" density="compact" v-model="switchboard.tepcooffice" />
                      </td>
                    </tr>
                    <tr>
                      <th>配電盤メーカー</th>
                      <td colspan="3">
                        <v-text-field hide-details="auto" density="compact" v-model="switchboard.swichboardmaker" />
                      </td>
                      <th colspan="2">回路数</th>
                      <td colspan="3">
                        <v-text-field hide-details="auto" density="compact" v-model="switchboard.circuitnumber" />
                      </td>
                    </tr>
                    <tr>
                      <th>調光の有無</th>
                      <td colspan="3">
                        <v-text-field hide-details="auto" density="compact" v-model="switchboard.dimmer" />
                      </td>
                      <th colspan="2">電気料金集約分内訳表番号</th>
                      <td colspan="3">
                        <v-text-field hide-details="auto" density="compact" v-model="switchboard.chargeitem" />
                      </td>
                    </tr>
                    <tr>
                      <th rowspan="2">分電盤</th>
                      <th>自動点滅器</th>
                      <td colspan="3">
                        <v-text-field hide-details="auto" density="compact" />
                      </td>
                      <td colspan="4"></td>
                    </tr>
                    <tr>
                      <td colspan="4">
                        <v-row>
                          <v-col sm="6">
                            <v-text-field hide-details="auto" single-line density="compact" suffix="V" />
                          </v-col>
                          <v-col sm="6">
                            <v-text-field hide-details="auto" single-line density="compact" suffix="A" />
                          </v-col>
                        </v-row>
                      </td>
                      <td colspan="4"></td>
                    </tr>
                    <tr>
                      <th rowspan="4">給電街灯番号</th>
                      <td colspan="4">
                        <div class="d-flex">
                          <v-text-field hide-details="auto" density="compact" v-model="switchboard.supplystart1" >
                            <template v-slot:append>
                              ～
                            </template>
                          </v-text-field>
                          <v-text-field hide-details="auto" density="compact" v-model="switchboard.supplyend1" />
                        </div>
                      </td>
                      <td colspan="4">
                        <div class="d-flex">
                          <v-text-field hide-details="auto" density="compact" v-model="switchboard.supplystart2" >
                            <template v-slot:append>
                                ～
                            </template>
                          </v-text-field>
                          <v-text-field hide-details="auto" density="compact" v-model="switchboard.supplyend2" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="4">
                        <div class="d-flex">
                          <v-text-field hide-details="auto" density="compact" v-model="switchboard.supplystart3" >
                            <template v-slot:append>
                                ～
                            </template>
                          </v-text-field>
                          <v-text-field hide-details="auto" density="compact" v-model="switchboard.supplyend3" />
                        </div>
                      </td>
                      <td colspan="4">
                        <div class="d-flex">
                          <v-text-field hide-details="auto" density="compact" v-model="switchboard.supplystart4" >
                            <template v-slot:append>
                                ～
                            </template>
                          </v-text-field>
                          <v-text-field hide-details="auto" density="compact" v-model="switchboard.supplyend4" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="4">
                        <div class="d-flex">
                          <v-text-field hide-details="auto" density="compact" v-model="switchboard.supplystart5" >
                            <template v-slot:append>
                                ～
                            </template>
                          </v-text-field>
                          <v-text-field hide-details="auto" density="compact" v-model="switchboard.supplyend5" />
                        </div>
                      </td>
                      <td colspan="4">
                        <div class="d-flex">
                          <v-text-field hide-details="auto" density="compact" v-model="switchboard.supplystart6" >
                            <template v-slot:append>
                                ～
                            </template>
                          </v-text-field>
                          <v-text-field hide-details="auto" density="compact" v-model="switchboard.supplyend6" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="4">
                        <div class="d-flex">
                          <v-text-field hide-details="auto" density="compact" v-model="switchboard.supplystart7" >
                            <template v-slot:append>
                                ～
                            </template>
                          </v-text-field>
                          <v-text-field hide-details="auto" density="compact" v-model="switchboard.supplyend7" />
                        </div>
                      </td>
                      <td colspan="4">
                        <div class="d-flex">
                          <v-text-field hide-details="auto" density="compact" v-model="switchboard.supplystart8" >
                            <template v-slot:append>
                                ～
                            </template>
                          </v-text-field>
                          <v-text-field hide-details="auto" density="compact" v-model="switchboard.supplyend8" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        建柱基礎形状
                      </th>
                      <td colspan="8">
                        <v-text-field hide-details="auto" density="compact" v-model="switchboard.pillarbasetype" />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        引込柱
                      </th>
                      <td class="px-0" colspan="8">
                        <v-table density="compact" class="ledger">
                  <tbody>
                    <tr>
                      <th>有無</th>
                      <td>{{ switchboard.leadinpole }}</td>
                      <th>番号</th>
                      <td colspan="2">{{ switchboard.leadinnumber }}</td>
                    </tr>
                    <tr>
                      <th rowspan="2">柱</th>
                      <th>規格寸法</th>
                      <td colspan="3">{{ switchboard.leadinpolestandard }}</td>
                    </tr>
                    <tr>
                      <th>材質</th>
                      <td colspan="3">{{ switchboard.leadinpolematerial }}</td>
                    </tr>
                    <tr>
                      <th>基礎</th>
                      <th>形式</th>
                      <td>{{ switchboard.leadinbasetype }}</td>
                      <th>サイズ</th>
                      <td>{{ switchboard.leadinbasesize }}</td>
                    </tr>
                  </tbody>
                </v-table>
                </td>
                </tr>
                <tr>
                  <th>
                    特記事項
                  </th>
                  <td colspan="8">
                    <v-text-field hide-details="auto" density="compact" v-model="switchboard.specialnotes" />
                  </td>
                </tr>

                  <tr>
                    <th></th><td colspan="3"></td>
                    <th>施工業者</th><td colspan="3"><v-text-field density="compact" hide-details="auto" /></td>
                  </tr>
                  <tr>
                    <th>設置年月日</th><td colspan="3"></td>
                    <th>所轄計画書</th><td colspan="3"><v-text-field density="compact" hide-details="auto" /></td>
                  </tr>
                  <tr>
                    <th>引継ぎ先</th><td colspan="3"></td>
                    <th></th><td colspan="3"></td>
                  </tr>
                </tbody></v-table>
              </v-col>
              <v-col sm="12" md="6">
                <v-table density="compact" class="ledger">
                  <tbody>
                    <tr>
                      <th rowspan="2" style="width:14em;">旧管理番号</th>
                      <th style="width:12em;">路線名</th>
                      <td>
                        <v-text-field hide-details="auto" density="compact" v-model="switchboard.oldadminroutename" />
                      </td>
                    </tr>
                    <tr>
                      <th>整理番号</th>
                      <td>
                        <v-text-field hide-details="auto" density="compact"
                          v-model="switchboard.oldadminadminnumber" />
                      </td>
                    </tr>
                    <tr>
                      <th>備考</th>
                      <td colspan="2">
                        <v-text-field hide-details="auto" density="compact" v-model="switchboard.note" />
                      </td>
                    </tr>
                  </tbody>
                </v-table>

                <h4 class="ma-2 mb-0">位置図</h4>
                <v-sheet class="mb-2" :border="1">
                  <div class="ledger-image-section">
                    <v-container class="d-flex justify-center">
                      <ams-image :src="getPhotoUrl(diagram)"/>
                    </v-container>
                  </div>
                  <v-file-input label="位置図" v-model="newDiagram" class="pa-2 mx-2"
                    accept="image/png, image/jpeg, image/git" filled hide-details="auto" prepend-icon="mdi-camera"
                    density="compact"></v-file-input>
                </v-sheet>

                <h4 class="ma-2 mb-0">写真添付欄</h4>
                <v-sheet class="mb-2 ledger-image-section" :border="1">
                  <div class="d-flex">
                    <v-sheet class="text-cecnter text-caption">
                      <v-container>撮影年月日:</v-container>
                    </v-sheet>
                    <v-text-field hide-details="auto" type="date" density="compact" class="pa-1" v-model="photo.updatedate" />
                  </div>
                  <v-container class="d-flex justify-center">
                    <ams-image :src="getPhotoUrl(photo)"/>
                  </v-container>
                  <v-file-input label="写真" class="pa-2 mx-2" v-model="newPhoto"
                    accept="image/png, image/jpeg, image/git" filled prepend-icon="mdi-camera"
                    density="compact"></v-file-input>
                </v-sheet>
              </v-col>

              <div class="float-bottom">
                <v-btn color="primary" elevation="6" @click="onSaveButtonClick">
                  <v-icon color="white">mdi-check</v-icon>保存
                </v-btn>
              </div>

            </v-row>
          </v-form>

          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

  </div>
</template>

<script lang="ts" setup>
  import switchboardService from '@/services/atf/switchboard-service';
  import atfService from '@/services/atf/atf-service';
  import { Switchboard, SwitchboardPhoto } from '~~/types/atf/switchboard';
  import { AtfAdminoffice } from '~~/types/atf';
  import moment from "moment";
  
  const newPhoto = ref<File[]>()
  const newDiagram = ref<File[]>()

  const child_extend = ref(true);

  const switchboard = ref({
    office: {} as AtfAdminoffice
  } as Switchboard);

  /** 写真(基本写真) (photolindid=1) */
  const photo = ref({} as SwitchboardPhoto);
  /** 位置図(photokindid=2) */
  const diagram = ref({} as SwitchboardPhoto);

  const id = Number(useRoute().params.id)

  const refresh = (sb:Switchboard) => {
    console.debug("画面を再表示します", sb);
    if(sb) switchboard.value = sb;

    let p = sb.photos?.find((_p)=> _p.photokindid==1)
    if(p) photo.value = p

    let d = sb.photos?.find((_p)=> _p.photokindid==2)
    if(d) diagram.value = d
  }

  switchboard.value = await switchboardService.get(id)
  refresh(switchboard.value)

  const lastUpdate = computed(()=>{
    let sb = switchboard.value;
    return !sb ? "" : moment(sb.updatedate).format('yyyy年M月d日') 
  })

  const form = ref(null)
  const validations = useValidation();
  const offices = ref<AtfAdminoffice[]>();
  offices.value = (await atfService.getOffices()).data

  const getPhotoUrl = (photo: SwitchboardPhoto) => {
    if(photo==null || photo.switchboardid==null || photo.id==null) return "";
    return `/api/switchboard/${photo.switchboardid}/image/${photo.id}`
  }

  /** 保存ボタン クリックイベントハンドラ */
  const onSaveButtonClick = async () => {
    console.info("保存ボタンをクリックしました", switchboard.value);

    // 入力検証
    let validResult = await form.value.validate();
    if(validResult.valid==false) return;

    let confirmed = await useConfirm().confirm("入力した内容を保存します。よろしいですか？")
    if(confirmed==false) return;

    const loadingState = useLoading();
    loadingState.setLoading(true);

    let d = newDiagram.value ? newDiagram.value[0] : null;
    let p = newPhoto.value ? newPhoto.value[0] : null;
    // 更新処理
    switchboardService.save(switchboard.value, p, d)
      .then(ret => {

        // 画面の再表示
        refresh(ret.data);

        console.info('配電盤情報を更新しました。');
        useToast().showToast("配電盤情報を更新しました。");
      })
      .catch((e)=> {
        console.error("更新に失敗しました", e);
        useToast().showToast("更新に失敗しました。");
      })
      .finally(()=>{
        loadingState.setLoading(false);
      });
  }
</script>

<style lang="scss">
.v-input--horizontal .v-input__append {
  margin-inline-end: 16px;
}

.ledger-image-section {
  min-height: 22em;
}
</style>