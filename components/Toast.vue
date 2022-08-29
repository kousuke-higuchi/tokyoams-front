<template>
    <v-snackbar
      v-model="isOpen"
      timeout="3000"
    >
      {{ message }}

      <template v-slot:actions>
        <v-btn
          color="primary"
          icon
          @click="isOpen = false"
        >
          <v-icon icon="mdi-close-circle-outline"/>
        </v-btn>
      </template>
    </v-snackbar>
</template>
<script lang="ts" setup>

    interface Props {
        isOpen: boolean,
        message: string,
    }
    const props = withDefaults(defineProps<Props>(), {
        isOpen:false,
        message: ""
    })
    interface Emits {
        (e: 'update:isOpen', isOpen: boolean): void;
    }
    const emits = defineEmits<Emits>();
    
    const isOpen = computed({
        get: () => props.isOpen,
        set: (value: boolean) => emits('update:isOpen', value)
    });
</script>