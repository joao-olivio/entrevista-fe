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
    }
  }
};
</script>

<template>
  <div class="page-title">
    <h1 class="page-title__main-text">{{ mainText }}</h1>
    <span class="page-title__shadow-text">{{ shadowText }}</span>
  </div>
</template>
