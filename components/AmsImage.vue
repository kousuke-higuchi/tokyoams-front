<template>
    <img v-if="downloadedUrl" :src="downloadedUrl" />
</template>
<script lang="ts" setup>
    import Service from "~~/services/service"
    interface Props {
        src?: string,
    }
    const props = withDefaults(defineProps<Props>(), {
        src:"",
    })

    const downloadedUrl = ref("")
    let service = new Service()
    service.downloadImageToUrl(props.src)

    watch(()=>props.src, async (newval, oldval) => { 
        downloadedUrl.value = await service.downloadImageToUrl(newval)
    })
</script>