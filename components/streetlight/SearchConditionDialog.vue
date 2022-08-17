<template>
    <v-dialog v-model="isOpen" persistent max-width="400px">
        <v-card>
        <v-toolbar dark color="primary">
            <v-toolbar-title>施設詳細検索</v-toolbar-title>
        </v-toolbar>
            <v-card-text>
            <v-row>
                <v-col cols="12">
                <v-text-field label="施設名称" v-model="searchCond.facilityName" density="compact" :hide-details="false" variant="underlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="5">
                トンネル延長
                </v-col>
                <v-col cols="12" sm="6" md="3">
                <v-text-field label="から" v-model="searchCond.tunnelFrom" density="compact" :hide-details="false" variant="underlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                <v-text-field label="まで" v-model="searchCond.tunnelTo" density="compact" :hide-details="false" variant="underlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="5">
                竣工年度
                </v-col>
                <v-col cols="12" sm="6" md="3">
                <v-text-field label="から" v-model="searchCond.boneYearFrom" density="compact" :hide-details="false" variant="underlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                <v-text-field label="まで" v-model="searchCond.boneYearTo" density="compact" :hide-details="false" variant="underlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="5">
                点検年度
                </v-col>
                <v-col cols="12" sm="6" md="3">
                <v-text-field label="から" v-model="searchCond.inspectionYearFrom" density="compact" :hide-details="false" variant="underlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                <v-text-field label="まで" v-model="searchCond.inspectionYearTo" density="compact" :hide-details="false" variant="underlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="5">
                最新点検年度
                </v-col>
                <v-col cols="12" sm="6" md="3">
                <v-text-field label="から" v-model="searchCond.newestInspectionFrom" density="compact" :hide-details="false" variant="underlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                <v-text-field label="まで" v-model="searchCond.newestInspectionTo" density="compact" :hide-details="false" variant="underlined"></v-text-field>
                </v-col>
                <v-col cols="12">
                <v-autocomplete
                    v-model="searchCond.facilityType"
                    :items="['Facility001', 'Facility002', 'Facility002']"
                    outlined
                    dense
                    chips
                    small-chips
                    label="施設種別"
                    multiple
                    hide-details="false" 
                ></v-autocomplete>
                </v-col>
                <v-col cols="12">
                <v-autocomplete
                    v-model="searchCond.healt"
                    label="健全性 国様式 Ⅰ～Ⅲ"
                    :items="['Ⅰ','Ⅱ','Ⅲ']"
                    outlined
                    dense
                    chips
                    small-chips
                    multiple
                    hide-details="false" 
                ></v-autocomplete>
                </v-col>
                <v-col cols="12">
                <v-autocomplete
                    v-model="searchCond.combinedUse"
                    label="併用状況"
                    :items="['都管理','事業中','廃止','移管','その他']"
                    outlined
                    dense
                    chips
                    small-chips
                    multiple
                    hide-details="false" 
                ></v-autocomplete>
                </v-col>
            </v-row>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-row justify="start">
            <v-btn 
                color="blue darken-1"
                text
                @click="onClearClick"
            >
            条件クリア
            </v-btn>
            </v-row>
            <v-btn
            color="blue darken-1"
            text
            @click="onSearchClick"
            >
            検索
            </v-btn>
            <v-btn
            color="blue darken-1"
            text
            @click="onCancelClick"
            >
            キャンセル
            </v-btn>
        </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script lang="ts" setup>
    interface BridgeSearchConditions {
        facilityName: String;
        tunnelFrom: String;
        tunnelTo: String;
        boneYearFrom: String;
        boneYearTo: String;
        inspectionYearFrom: String;
        inspectionYearTo: String;
        newestInspectionFrom: String;
        newestInspectionTo: String;
        facilityType: string[];
        healt: string[];
        combinedUse: string[];
    }
    interface Props {
        isOpen: boolean
    }
    const props = withDefaults(defineProps<Props>(), {
        isOpen:false
    })

    const _cond = { combinedUse:["都管理"] } as BridgeSearchConditions;
    const searchCond = ref(_cond)

    interface Emits {
        (e: 'update:isOpen', isOpen: boolean): void;
        (e: 'beforeClose',accept: boolean, conditions: any ): void,
        (e: 'afterClose', accept: boolean, conditions: any ): void,
    }
    const emits = defineEmits<Emits>();

    const isOpen = computed({
        get: () => props.isOpen,
        set: (value: boolean) => emits('update:isOpen', value)
    });
    
    const onCancelClick = () =>{
        emits('beforeClose', false, searchCond)
        isOpen.value = false
        emits('afterClose', false, searchCond)
    };
    const onSearchClick = () =>{
        emits('beforeClose', true, searchCond)
        isOpen.value = false
        emits('afterClose', true, searchCond)
    };
    const onClearClick= () => {

    }
</script>