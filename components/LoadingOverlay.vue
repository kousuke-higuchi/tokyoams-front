<template>
    <v-overlay :model-value="props.isOpen" class="align-center justify-center">
      <v-progress-circular
        indeterminate
        color="white"
        size="92"
      ></v-progress-circular>
    </v-overlay>
</template>

<script lang="ts" setup>
    interface Props {
        isOpen: boolean
    }
    const props = withDefaults(defineProps<Props>(), {
        isOpen:false
    })
</script>