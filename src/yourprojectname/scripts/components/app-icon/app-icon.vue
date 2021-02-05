<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="iconWidth"
    :height="iconHeight"
    :aria-labelledby="iconName"
    role="presentation"
  >
    <title :id="iconName" lang="en">{{ iconName }} icon</title>
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  name: "AppIcon",
  props: {
    iconName: {
      type: String,
      default: "box"
    },
    iconWidth: {
      type: [Number, String],
      default: 32
    },
    iconHeight: {
      type: [Number, String],
      default: 32
    },
    iconColor: {
      type: String,
      default: "currentColor"
    }
  }
};
</script>
