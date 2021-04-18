<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    :width="size"
    :height="size"
    viewBox="0 0 5.2916665 5.2916668"
    id="svg8"
  >
    <g id="layer1">
      <g id="g858">
        <ellipse
          :style="
            `fill:none;fill-rule:evenodd;stroke:${color};stroke-width:0.607876;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1`
          "
          id="wrap"
          cx="2.6449707"
          cy="2.6458333"
          rx="2.3410327"
          ry="2.3581219"
        />
        <circle
          :style="
            `fill:${color};fill-opacity:1;stroke:none;stroke-width:0.365001;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1`
          "
          id="center"
          cx="2.6449707"
          cy="2.6458333"
          r="0.22603585"
        />
        <path
          :style="
            `fill:none;stroke:${color};stroke-width:0.4;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1`
          "
          d="M 2.6449707,1.3044594 V 2.6670945"
          id="hour"
          transform-origin="50% 50%"
          :transform="`rotate(${hoursRotation})`"
        />
        <path
          :style="
            `fill:none;stroke:${color};stroke-width:0.4;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1`
          "
          d="M 2.6449707,1.3044594 V 2.6670945"
          id="minute"
          transform-origin="50% 50%"
          :transform="`rotate(${minutesRotation})`"
        />
      </g>
    </g>
  </svg>
</template>

<script>
import IconMixin from "../../mixins/icon-mixin.js";
export default {
  name: "clock-icon",
  mixins: [IconMixin],
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
    minutesRotation() {
      return this.checkRotation(this.minutes, 60);
    },
    hoursRotation() {
      return this.checkRotation(this.hours, 24);
    }
  },
  methods: {
    checkRotation(time, context) {
      let computedTime = time;
      if (time > context) {
        computedTime = time % context;
      }
      const degPerUnit = 360 / context;
      return degPerUnit * computedTime;
    }
  }
};
</script>
