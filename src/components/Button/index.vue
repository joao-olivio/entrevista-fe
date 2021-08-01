<template>
  <button class="btn-view-more">View more</button>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
    .btn-view-more {
        width: 240px;
        height: 50px;
        background-color: #00D3FF;
        border: none;
        color: #000000;
        font-size: 13px;
        line-height: 18px;
        font-weight: 700;
        margin-top: 32px;
        text-transform: uppercase;
        box-shadow: 0px 1px 30px #00000000;
    }

    @media (min-width: 480px) {
        .btn-view-more {
            background-color: #ffffff;
            border: 2px solid #000000;
            width: 146px;
        }
    }
</style>