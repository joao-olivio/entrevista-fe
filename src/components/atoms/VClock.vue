<template>
  <div class="a-clock" aria-hidden="true">
    <div class="a-clock__hours-pointer" :style="{transform: `rotateZ(${degreesToHours}deg)`}"></div>
    <div class="a-clock__minutes-pointer" :style="{transform: `rotateZ(${degreesToMinutes}deg)`}"></div>
    <div class="a-clock__middle-ball"></div>
  </div>
</template>

<script>
export default {
  props: {
    hours: {
      type: Number,
      default: 0
    },
    minutes: {
      type: Number,
      default: 0
    }
  },

  computed: {
    degreesToHours () {
      return 90 + (this.hours * 30)
    },

    degreesToMinutes () {
      return 90 + (this.minutes * 6)
    }
  }
}
</script>
