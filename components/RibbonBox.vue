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
        left: 0;
        top: -30px;
        width: 110px;
        height: 110px;
        z-index: 10;
    }
    .ribbon {
        line-height: 100%;
        width: 210px;
        padding: 0.475rem 0;
        position: inherit;
        right: 0px;
        top: 30px;
        text-align: left;
        text-transform: uppercase;
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