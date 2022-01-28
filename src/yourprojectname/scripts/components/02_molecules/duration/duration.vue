<template>
  <div class="podcast-duration">
    <svg class="clock" style="max-height: 20px" id="Camada_1" fill="transparent" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.2671 33.2671"><defs></defs><title>clock</title><circle style="stroke: black; stroke-width: 3px" class="clock-svg" cx="16.6336" cy="16.6336" r="15.1336"/><line style="stroke: black; stroke-width: 3px" class="clock-svg" x1="16.6336" y1="18.6511" x2="16.6336" y2="8.4136"/><line style="stroke: black; stroke-width: 3px" class="clock-svg" x1="24.5154" y1="22.2891" x2="15.9043" y2="17.3558"/></svg>
    <span role="contentinfo" aria-label="duration">{{ podcastDuration}}</span>
  </div>
</template>

<script>
export default {
  name: "Duration",
  props: {
    podcastDuration: { type: String, required: true }
  }
};
</script>