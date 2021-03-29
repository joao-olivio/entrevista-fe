<template>
    <div class="time-container">
        <img src="../../../assets/Clock.webp" alt="Time" class="clock-icon">
        <p class="card-footer-time">{{duration}}</p>
    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    props: {
        duration: String
    }
}
</script>

<style>
.time-container {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
}

.card-footer-time {
    font-family:'Open Sans';
    font-size: 12px;
    font-weight: normal;
    text-align: right;
    line-height: 12px;
    margin: 0;
    width: fit-content;
}

.clock-icon {
    width: 20px;
    height: 20px;
    display: flex;
    padding-right: 8px;
}

</style>