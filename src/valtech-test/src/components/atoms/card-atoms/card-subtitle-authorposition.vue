<template>
    <div>
        <p class="card-subtitle-authorposition">{{authorPosition}}</p>
    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    props: {
        authorPosition: String
    }
}
</script>

<style>
.card-subtitle-authorposition {
    font-family:'Open Sans';
    font-size: 13px;
    font-weight: 400;
    text-align: left;
    line-height: 13px;
    color: #777777;
    text-transform: capitalize;
    margin: 0;
}
</style>