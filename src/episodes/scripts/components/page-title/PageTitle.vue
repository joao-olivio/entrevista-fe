<script>
export default {
  name: "page-title",
  props: {
    mainText: {
      type: String,
      default: () => ""
    },
    shadowText: {
      type: String,
      default: () => ""
    },
    noAnimation: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<template>
  <div class="page-title">
    <h1
      :class="[
        'page-title__main-text',
        noAnimation ? 'page-title__main-text--no-animation' : null
      ]"
    >
      {{ mainText }}
    </h1>
    <span
      :class="[
        'page-title__shadow-text',
        noAnimation ? 'page-title__shadow-text--no-animation' : null
      ]"
    >
      {{ shadowText }}
    </span>
  </div>
</template>
