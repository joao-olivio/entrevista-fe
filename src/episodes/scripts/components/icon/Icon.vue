<script>
import Play from "./icons/play.vue";

export default {
  name: "icon",
  props: {
    iconName: {
      type: String,
      required: true,
      default: () => ""
    },
    iconTitle: {
      type: String,
      default: () => ""
    },
    size: {
      type: String,
      default: () => "md"
    }
  },
  components: {
    play: Play
  },
  computed: {
    getSize() {
      let transform = 1;
      if (this.size === "lg") transform = 1.2;
      else if (this.size === "sm") transform = 0.8;
      return transform;
    }
  }
};
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="presentation"
    width="35"
    height="35"
    :style="`transform: scale(${getSize})`"
  >
    <component :is="iconName" />
  </svg>
</template>
