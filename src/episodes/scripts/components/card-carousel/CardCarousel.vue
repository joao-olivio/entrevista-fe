<script>
export default {
  name: "card-carousel",
  computed: {
    isTouchDevice() {
      return "ontouchstart" in window;
    }
  }
};
</script>
<template>
  <section
    :class="['card-carousel', isTouchDevice ? 'card-carousel--touch' : null]"
  >
    <slot />
  </section>
</template>
