<template>
    <div class="ribbonBox"><p class="ribbon">{{title}}</p></div>
</template>

<script lang="ts">
    export default defineComponent({
        props: {
            title: String,
        },
    })
</script>

<style scoped>
    .ribbonBox{
        overflow: hidden;
        position: absolute;
        right: 0;
        top: 0;
        width: 110px;
        height: 110px;
        z-index: 10;
    }
    .ribbon {
        line-height: 100%;
        width: 210px;
        padding: 0.375rem 0;
        position: relative;
        right: 35px;
        top: 30px;
        text-align: center;
        text-transform: uppercase;
        transform: rotate(45deg);
        color:white;
        background: #007bff;
        z-index: 1;
    }
    .ribbon::before{
        left:0;
    }
    .ribbon::after{
        right:0;
    }
</style>