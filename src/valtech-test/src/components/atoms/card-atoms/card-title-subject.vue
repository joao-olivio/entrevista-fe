<template>
    <div>
        <p class="card-title-subject">{{cardTitle}}</p>
    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    props: {
        cardTitle: String
    }
}
</script>

<style>
.card-title-subject {
    font-family:'Open Sans';
    font-size: 28px;
    font-weight: lighter;
    text-align: left;
    line-height: 32px;
    text-transform: uppercase;
    padding-bottom: 8px;
    margin: 0px;
}
</style>