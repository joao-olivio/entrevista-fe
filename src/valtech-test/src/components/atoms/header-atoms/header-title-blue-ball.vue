<template>
    <div class="blue-ball"></div>
</template>

<script>
export default {
    data () {
        return {

        }
    }
}
</script>

<style>
@media (min-width: 1024px) { 
    .blue-ball {
        width: 554px;
        height: 554px;
        border-radius: 50%;
        background: #5DD1FF;
        position: absolute;
        z-index:-1;
        top: 20px;
        right: 824px;
    }
}
</style>