<template>
    <div>
        <p class="card-subtitle-authorname">{{authorName}}</p>
    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    props: {
        authorName: String
    }
}
</script>

<style>
.card-subtitle-authorname {
    font-family:'Open Sans';
    font-size: 16px;
    font-weight: 600;
    text-align: left;
    line-height: 16px;
    text-transform: capitalize;
    padding: 8px 0;
    margin: 0;
}
</style>