<template>
  <div class="podcast-player">
    <div class="left-side">
      <play-btn />
    </div>
    <div class="right-side">
      <waveform />
      <div class="podcast-info">
        {{ computedInfo }}
      </div>
    </div>
    <audio style="display: none;" />
  </div>
</template>

<script>
import PlayBtn from "../play-btn/play-btn.vue";
import Waveform from "../waveform/waveform.vue";

export default {
  name: "podcast-player",
  components: {
    PlayBtn,
    Waveform
  },
  computed: {
    computedInfo() {
      return "";
    }
  }
};
</script>
