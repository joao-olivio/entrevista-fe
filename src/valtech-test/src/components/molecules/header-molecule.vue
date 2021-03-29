<template>
    <div>
        <header-title></header-title>
        <header-title-shadow></header-title-shadow>
        <header-title-blue-ball></header-title-blue-ball>
        <!-- <header-title></header-title>
        <header-title-blue-ball></header-title-blue-ball>
        <header-title-shadow></header-title-shadow> -->
    </div>
</template>

<script>
import HeaderTitle from '../atoms/header-atoms/header-title.vue'
import HeaderTitleShadow from '../atoms/header-atoms/header-title-shadow.vue'
import HeaderTitleBlueBall from '../atoms/header-atoms/header-title-blue-ball.vue'

export default {
    data () {
        return {

        }
    },
    components: {
        HeaderTitle,
        HeaderTitleShadow,
        HeaderTitleBlueBall
    }
}
</script>

<style>

</style>