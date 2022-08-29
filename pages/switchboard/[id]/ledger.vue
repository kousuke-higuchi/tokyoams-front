<template>
  <div>
    <v-row>
      <!-- メニュー -->
      <v-col md="3">
        <switchboard-menu />
      </v-col>

      <v-col md="9"> 
        <!-- TODO:配電盤台帳 -->
        <v-card class="overflow-auto" elevation="4">
          <v-sheet class="d-flex">
            <v-sheet class="ma-2 px-2 mr-auto">配電盤用台帳</v-sheet>
            <v-sheet class="ma-2 px-2">yyyy/mm/dd 更新</v-sheet>
          </v-sheet>

          <v-card-text class="pt-0">
            <v-row>
              <v-col sm="12" md="6">
                <v-table density="compact" class="ledger"><tbody>
                  <tr>
                    <th style="width:14em;">事務所名</th>
                    <td colspan="3">
                      <v-text-field variant="underlined" density="compact" />
                    </td>
                    <th style="width: 14em">工区名</th>
                    <td>
                      <v-text-field variant="underlined" density="compact" />
                    </td>
                    <th style="width: 12em">管理番号</th>
                    <td>
                      <v-text-field variant="underlined" density="compact" />
                    </td>
                  </tr>
                  <tr>
                    <th>路線番号</th>
                    <td>
                      <v-text-field variant="underlined" density="compact" />
                    </td>
                    <td>
                      <v-text-field variant="underlined" density="compact" />
                    </td>
                    <th>路線名</th>
                    <td colspan="2">
                      <v-text-field variant="underlined" density="compact" />
                    </td>
                    <th>通称道路名</th>
                    <td>
                      <v-text-field variant="underlined" density="compact" />
                    </td>
                  </tr>
                  <tr>
                    <th>地点標</th>
                    <td colspan="2">
                      <v-text-field variant="underlined" density="compact" suffix="km" inputmode="numeric" pattern="\d*" />
                    </td>
                    <th>住所</th>
                    <td colspan="2">
                      <v-text-field variant="underlined" density="compact"/>
                    </td>
                    <td colspan="2">
                      <v-text-field variant="underlined" density="compact"/>
                    </td>
                  </tr>
                  <tr>
                    <th>緯度</th>
                    <td colspan="2">
                      <v-text-field variant="underlined" density="compact"/>
                    </td>
                    <th>経度</th>
                    <td colspan="2">
                      <v-text-field variant="underlined" density="compact"/>
                    </td>
                    <th>住宅地図番号</th>
                    <td>
                      <v-text-field variant="underlined" density="compact"/>
                    </td>
                  </tr>
                  <tr>
                    <th>施設名</th>
                    <td colspan="3">
                      <v-text-field variant="underlined" density="compact"/>
                    </td>
                    <th>施設番号</th>
                    <td colspan="3">
                      <v-text-field variant="underlined" density="compact"/>
                    </td>
                  </tr>
                  <tr>
                    <th>設置形式</th>
                    <td colspan="3">
                      <v-text-field variant="underlined" density="compact"/>
                    </td>
                    <th>照明種別</th>
                    <td colspan="3">
                      <v-text-field variant="underlined" density="compact"/>
                    </td>
                  </tr>
                  <tr>
                    <th>契約方式</th>
                    <td colspan="3">
                      <v-text-field variant="underlined" density="compact"/>
                    </td>
                    <th>電源引込方式</th>
                    <td colspan="3">
                      <v-text-field variant="underlined" density="compact"/>
                    </td>
                  </tr>
                  <tr>
                    <th>東電管理番号</th>
                    <td colspan="3">
                      <v-text-field variant="underlined" density="compact"/>
                    </td>
                    <th>電源方式</th>
                    <td colspan="3">
                      <v-text-field variant="underlined" density="compact"/>
                    </td>
                  </tr>
                  <tr>
                    <th>お客様契約番号</th>
                    <td colspan="3">
                      <v-text-field variant="underlined" density="compact"/>
                    </td>
                    <th>東電営業所</th>
                    <td colspan="3">
                      <v-text-field variant="underlined" density="compact"/>
                    </td>
                  </tr>
                  <tr>
                    <th>配電盤メーカー</th>
                    <td colspan="3">
                      <v-text-field variant="underlined" density="compact"/>
                    </td>
                    <th>回路数</th>
                    <td colspan="3">
                      <v-text-field variant="underlined" density="compact"/>
                    </td>
                  </tr>
                  <tr>
                    <th>調光の有無</th>
                    <td colspan="3">
                      <v-text-field variant="underlined" density="compact"/>
                    </td>
                    <th>電気料金集約分内訳表番号</th>
                    <td colspan="3">
                      <v-text-field variant="underlined" density="compact"/>
                    </td>
                  </tr>
                  <tr>
                    <th rowspan="2">分電盤</th>
                    <td colspan="3">
                      <v-text-field variant="underlined" density="compact"/>
                    </td>
                    <td colspan="4"></td>
                  </tr>
                  <tr>
                    <td colspan="3">
                      <v-row>
                        <v-col sm="6">
                          <v-text-field variant="underlined" single-line density="compact" suffix="V"/>
                        </v-col>
                        <v-col sm="6">
                          <v-text-field variant="underlined" single-line density="compact" suffix="A"/>
                        </v-col>
                      </v-row>
                    </td>
                    <td colspan="4"></td>
                  </tr>
                  <tr>
                    <th rowspan="4">給電街灯番号</th>
                    <td colspan="3">
                      <v-text-field variant="underlined" density="compact"/>
                    </td>
                    <td colspan="4">
                      <v-text-field variant="underlined" density="compact"/>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3">
                      <v-text-field variant="underlined" density="compact"/>
                    </td>
                    <td colspan="4">
                      <v-text-field variant="underlined" density="compact"/>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3">
                      <v-text-field variant="underlined" density="compact"/>
                    </td>
                    <td colspan="4">
                      <v-text-field variant="underlined" density="compact"/>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3">
                      <v-text-field variant="underlined" density="compact"/>
                    </td>
                    <td colspan="4">
                      <v-text-field variant="underlined" density="compact"/>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      建柱基礎形状
                    </th>
                    <td colspan="7">
                      <v-text-field variant="underlined" density="compact"/>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      引込柱
                    </th>
                    <td class="px-0" colspan="7">
                      <v-table density="compact" class="ledger"><tbody>
                        <tr>
                          <th>有無</th><td></td>
                          <th>番号</th><td colspan="2"></td>
                        </tr>
                        <tr>
                          <th rowspan="2">柱</th><th>規格寸法</th><td colspan="3"></td>
                        </tr>
                        <tr>
                          <th>材質</th><td colspan="3"></td>
                        </tr>
                        <tr>
                          <th>基礎</th><th>形式</th><td></td><th>サイズ</th><td></td>
                        </tr>
                      </tbody></v-table>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      特記事項
                    </th>
                    <td colspan="7">
                      <v-text-field variant="underlined" density="compact"/>
                    </td>
                  </tr>

                  <tr>
                    <th></th><td colspan="3"></td>
                    <th>施工業者</th><td colspan="3"><v-text-field variant="underlined" density="compact"/></td>
                  </tr>
                  <tr>
                    <th>設置年月日</th><td colspan="3"></td>
                    <th>所轄計画書</th><td colspan="3"><v-text-field variant="underlined" density="compact"/></td>
                  </tr>
                  <tr>
                    <th>引継ぎ先</th><td colspan="3"></td>
                    <th></th><td colspan="3"></td>
                  </tr>
                </tbody></v-table>
              </v-col>
              <v-col sm="12" md="6">
                <v-table density="compact" class="ledger"><tbody>
                  <tr>
                    <th rowspan="2" style="width:14em;">旧管理番号</th>
                    <th style="width:12em;">路線名</th>
                    <td><v-text-field variant="underlined" density="compact"/></td>
                  </tr>
                  <tr>
                    <th>整理番号</th>
                    <td><v-text-field variant="underlined" density="compact"/></td>
                  </tr>
                  <tr>
                    <th>備考</th>
                    <td colspan="2"><v-text-field variant="underlined" density="compact"/></td>
                  </tr>
                </tbody></v-table>

                  <h4 class="ma-2 mb-0">位置図</h4>
                  <v-sheet class="mb-2" :border="1">
                    <v-row class="ledger-image-section">
                      <v-col
                        v-for="(attach, i) in attachments"
                        :key="i"
                        class="d-flex child-flex"
                        cols="4"
                      >
                      </v-col>
                    </v-row>
                    <v-file-input
                      label="位置図"
                      v-model="newAttachments"
                      class="pa-2 mx-2"
                      accept="image/png, image/jpeg, image/git"
                      filled multiple hide-details
                      prepend-icon="mdi-camera"
                      density="compact"
                    ></v-file-input>
                  </v-sheet>

                  <h4 class="ma-2 mb-0">写真</h4>
                  <v-sheet class="mb-2 ledger-image-section" :border="1">
                    <v-row class="ledger-image-section">
                      <v-col
                        v-for="(image, i) in images"
                        :key="i"
                        class="d-flex child-flex"
                        cols="4"
                      >
                        <img src="" />
                      </v-col>
                    </v-row>
                    <v-file-input
                      label="写真"
                      class="pa-2 mx-2"
                      v-model="newImages"
                      accept="image/png, image/jpeg, image/git"
                      filled multiple hide-details
                      prepend-icon="mdi-camera"
                      density="compact"
                    ></v-file-input>
                  </v-sheet>
              </v-col>

              <div class="float-bottom">
                <v-btn color="primary" elevation="6" @click="onSaveButtonClick">
                  <v-icon color="white">mdi-check</v-icon>保存
                </v-btn>
              </div>

            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

  </div>
</template>

<script lang="ts" setup>
import switchboardService from '~~/services/switchboard-service';
import { Switchboard } from '~~/types';

  const route = useRoute();
  const images = ref<Array<any>>();
  const attachments = ref<Array<any>>();
  const newImages = ref<[File]>();
  const newAttachments = ref<[File]>();
  const switchboard = ref<Switchboard>();
  
  switchboard.value = {id: Number(route.params.id) } as Switchboard;

  const loadingState = useLoading();

  /** 保存ボタン クリックイベントハンドラ */
  const onSaveButtonClick = () => {
    loadingState.setLoading(true);
    console.info("保存ボタンをクリックしました");

    // 更新処理
    switchboardService.save(switchboard.value, newAttachments.value, newImages.value)
      .then(ret => {
        console.info('配電盤情報を更新しました。');
        useToast().showToast("配電盤情報を更新しました。");
      }).finally(()=>{
        loadingState.setLoading(false);
      });
  }
</script>

<style lang="scss">
  .ledger-image-section {
    min-height: 22em;
  }
</style>