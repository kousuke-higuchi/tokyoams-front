<!--
  OK/キャンセルを確認するメッセージダイアログ
-->

<template>
  <div>
    <v-dialog v-model="isOpen" persistent>
      <v-card min-width="400">
        <v-toolbar color="primary" class="compact">{{title}}</v-toolbar>
      
        <v-card-text class="pa-4 d-flex" style="min-height: 8ex;">
        <div class="align-self-center pre-wrap">{{ message }}</div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="primary" variant="contained-flat" @click="onOkClick">
          OK
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="onCancelClick">
          キャンセル
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { closeDialog } from 'vue3-promise-dialog';
    
  export default defineComponent({
    props: {
      title: {type: String, default:"確認"},
      message: {type:String, default:""},
      isOpen: {type:Boolean}
    },
    setup(_, context) {
      const onOkClick = ()=>{
        context.emit('update:isOpen', false);
        closeDialog()
      }

      const onCancelClick = ()=>{
        context.emit('update:isOpen', false);
        closeDialog(false)
      }
      return {onOkClick, onCancelClick, returnValue:()=>{return true}}
    },
  });
</script>

<style scoped>
  .pre-wrap {
    white-space: pre-wrap;
  }
</style>