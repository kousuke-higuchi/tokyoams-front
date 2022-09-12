<template>
    <v-dialog
      v-model="isOpen"
      persistent
      max-width="700px"
    >
      <v-card>
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="3" class="mt-2">登録日</v-col>
            <v-col cols="12" sm="9">
              <Datepicker
                v-model="history.createDate" 
                locale="jp"
                format="yyyy年MM月dd日"
                :enableTimePicker="false"
                :clearable="false" />                      
            </v-col>
            <v-col cols="12" sm="3" class="mt-2">下塗材料</v-col>
            <v-col cols="12" sm="9">
              <v-textarea
              v-model="history.lower1mat"
              label="下塗材料を入力してください"
              rows="1"
              auto-grow
              density="compact"
              :hide-details="false"
              ></v-textarea>
            </v-col>
            <v-col cols="12" sm="3" class="mt-2">下塗色</v-col>
            <v-col cols="12" sm="9">
              <v-textarea
              v-model="history.lower1color"
              label="下塗色を入力してください"
              rows="1"
              auto-grow
              density="compact"
              :hide-details="false"
              ></v-textarea>
            </v-col>
            <v-col cols="12" sm="3" class="mt-2">下塗材料</v-col>
            <v-col cols="12" sm="9">
              <v-textarea
              v-model="history.lower2mat"
              label="下塗材料を入力してください"
              rows="1"
              auto-grow
              density="compact"
              :hide-details="false"
              ></v-textarea>
            </v-col>
            <v-col cols="12" sm="3" class="mt-2">下塗色</v-col>
            <v-col cols="12" sm="9">
              <v-textarea
              v-model="history.lower2color"
              label="下塗色を入力してください"
              rows="1"
              auto-grow
              density="compact"
              :hide-details="false"
              ></v-textarea>
            </v-col>
            <v-col cols="12" sm="3" class="mt-2">中塗材料</v-col>
            <v-col cols="12" sm="9">
              <v-textarea
              v-model="history.middlemat"
              label="中塗材料を入力してください"
              rows="1"
              auto-grow
              density="compact"
              :hide-details="false"
              ></v-textarea>
            </v-col>
            <v-col cols="12" sm="3" class="mt-2">中塗色</v-col>
            <v-col cols="12" sm="9">
              <v-textarea
              v-model="history.middlecolor"
              label="中塗色を入力してください"
              rows="1"
              auto-grow
              density="compact"
              :hide-details="false"
              ></v-textarea>
            </v-col>
            <v-col cols="12" sm="3" class="mt-2">上塗材料</v-col>
            <v-col cols="12" sm="9">
              <v-textarea
              v-model="history.uppermat"
              label="上塗材料を入力してください"
              rows="1"
              auto-grow
              density="compact"
              :hide-details="false"
              ></v-textarea>
            </v-col>
            <v-col cols="12" sm="3" class="mt-2">上塗色</v-col>
            <v-col cols="12" sm="9">
              <v-textarea
              v-model="history.uppercolor"
              label="上塗色を入力してください"
              rows="1"
              auto-grow
              density="compact"
              :hide-details="false"
              ></v-textarea>
            </v-col>
            <v-col cols="12" sm="3" class="mt-2">面積  ㎡</v-col>
            <v-col cols="12" sm="9">
              <v-textarea
              v-model="history.area"
              label="面積を入力してください"
              rows="1"
              auto-grow
              density="compact"
              :hide-details="false"
              ></v-textarea>
            </v-col>
            <v-col cols="12" sm="3" class="mt-2">工費</v-col>
            <v-col cols="12" sm="9">
              <v-textarea
              v-model="history.cost"
              label="工費を入力してください"
              rows="1"
              auto-grow
              density="compact"
              :hide-details="false"
              ></v-textarea>
            </v-col>
            <v-col cols="12" sm="3" class="mt-2">塗装業者</v-col>
            <v-col cols="12" sm="9">
              <v-textarea
              v-model="history.companyname"
              label="塗装業者を入力してください"
              rows="1"
              auto-grow
              density="compact"
              :hide-details="false"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-card-text>
        <v-divider></v-divider>
        <div class="d-flex">
          <v-btn variant="outlined" class="mr-auto ma-3" @click="onCloseClick()">閉じる</v-btn>
          <v-btn color="primary ma-3" class="ml-auto" @click="onAcceptClick()">登録</v-btn>
        </div>
      </v-card>
    </v-dialog>
</template>

<script lang="ts" setup>
    import { PaintingBridgeHistory } from "~~/types/bridge";


    interface Props {
        isOpen: boolean;
        dialogItem: PaintingBridgeHistory;
    }
    const props = withDefaults(defineProps<Props>(), {
        isOpen:false
    })
    const isOpen = computed({
        get: () => props.isOpen,
        set: (value: boolean) => emits('update:isOpen', value)
    });
    const history = computed({
        get: () => props.dialogItem,
        set: (value: PaintingBridgeHistory) => emits('update:dialogItem', value)
    });

console.log("mounted dialog", props.dialogItem);

    interface Emits {
        (e: 'update:isOpen', isOpen: boolean): void;
        (e: 'update:dialogItem', isOpen: PaintingBridgeHistory): void;
        (e: 'beforeClose',accept: boolean, conditions: any ): void,
        (e: 'afterClose', accept: boolean, conditions: any ): void,
    }
    const emits = defineEmits<Emits>();

    const onCloseClick = () =>{
        emits('beforeClose', false, history)
        isOpen.value = false
        emits('afterClose', false, history)
    };
    const onAcceptClick = () =>{
        emits('beforeClose', true, history)
        isOpen.value = false
        emits('afterClose', true, history)
    };

</script>