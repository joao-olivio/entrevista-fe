<template>
  <div class="episode-duration"><clock-icon />{{ duration }}</div>
</template>

<script>
import clockIcon from "../clock-icon/clock-icon.vue";
export default {
  components: { clockIcon },
  props: ["duration"]
};
</script>
