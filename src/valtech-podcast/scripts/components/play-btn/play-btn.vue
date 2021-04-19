<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    class="play-btn"
    :width="size"
    :height="size"
    viewBox="0 0 40 40"
  >
    <defs>
      <clipPath id="a">
        <path
          class="a"
          :style="`fill: ${color}`"
          d="M20,40A20.005,20.005,0,0,1,12.218,1.573,20,20,0,0,1,27.783,38.428,19.86,19.86,0,0,1,20,40ZM16,11V29l12-9Z"
        />
      </clipPath>
    </defs>
    <path
      class="a"
      :style="`fill: ${color}`"
      d="M 20,40 C 10.488679,39.991757 2.2982103,33.287779 0.41035862,23.965692 -1.477493,14.643606 3.4593047,5.2811746 12.218,1.573 22.395234,-2.7251588 34.129836,2.0407766 38.427992,12.218003 42.726148,22.39523 37.960234,34.129841 27.783,38.428 25.320934,39.470562 22.673701,40.005246 20,40 Z"
    />
    <g class="inner-icon">
      <path
        class="right"
        :style="`fill: ${innerColor}`"
        :d="stateIconPos.right"
      />
      <path
        class="left"
        :style="`fill: ${innerColor}`"
        :d="stateIconPos.left"
      />
    </g>
    <g v-if="haveProgress" class="progress">
      <path
        d="M 19.956788,38.570558 C 11.153088,38.562929 3.5719719,32.357712 1.8245722,23.729167 0.07717251,15.100624 4.6466835,6.4347362 12.753751,3.0024415 c 9.420071,-3.97838533 20.281645,0.4329751 24.260027,9.8530385 3.978383,9.420064 -0.432957,20.281646 -9.853028,24.260032 -2.278894,0.964997 -4.729178,1.459902 -7.203962,1.455046 z"
        class="progress-background"
      />
      <path
        d="M 19.956788,38.570558 C 11.153088,38.562929 3.5719719,32.357712 1.8245722,23.729167 0.07717251,15.100624 4.6466835,6.4347362 12.753751,3.0024415 c 9.420071,-3.97838533 20.281645,0.4329751 24.260027,9.8530385 3.978383,9.420064 -0.432957,20.281646 -9.853028,24.260032 -2.278894,0.964997 -4.729178,1.459902 -7.203962,1.455046 z"
        class="progress-fill"
        :style="`stroke:${progressColor};stroke-dashoffset:${progressComputed}`"
      />
    </g>
  </svg>
</template>

<script>
import IconMixin from "../../mixins/icon-mixin.js";
export default {
  name: "play-btn",
  mixins: [IconMixin],
  props: {
    innerColor: {
      type: String,
      default: "white"
    },
    progressColor: {
      type: String,
      default: "#ff0000"
    },
    state: {
      type: String,
      default: "play",
      validator: value => ["play", "pause", "stop"].includes(value)
    },
    haveProgress: {
      type: Boolean
    },
    progress: {
      type: Number,
      validator: value => value >= 0 && value <= 100
    }
  },
  computed: {
    progressComputed() {
      return (this.progress * 115) / 100 - 115;
    },
    stateIconPos() {
      if (this.state === "play") {
        return {
          right: "M 21.921141,24.559145 28,20 v 0 l -6.092003,-4.572288 z",
          left: "m 16,11 v 18 l 6,-4.5 v -9 z"
        };
      } else if (this.state === "pause") {
        return {
          right:
            "M 21.921141,29.007145 28,29 V 10.996094 l -6.092003,-0.02029 z",
          left: "m 11.625,11 v 18 l 6,0.0078 V 10.992194 Z"
        };
      } else if (this.state === "stop") {
        return {
          right:
            "m 21.921141,26.856511 4.841422,0.0029 0,-13.70854 -4.854566,-0.0084 z",
          left: "M 12.399049,13.144607 V 26.855393 H 22 V 13.144607 Z"
        };
      }
    }
  }
};
</script>
