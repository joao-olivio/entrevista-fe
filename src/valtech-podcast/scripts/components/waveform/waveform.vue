<template>
  <div id="waveform" />
</template>

<script>
export default {
  name: "waveform",
  props: {
    audioUrl: {
      type: String
    },
    progress: {
      type: Number
    }
  },
  data: () => ({
    wavesurfer: null
  }),
  watch: {
    progress(val) {
      this.wavesurfer.seekTo(val);
    }
  },
  mounted() {
    this.wavesurfer = WaveSurfer.create({
      container: "#waveform",
      waveColor: "grey",
      progressColor: "#5CD0FE",
      height: 65
    });
    this.wavesurfer.load(this.audioUrl);
    this.wavesurfer.on("seek", progress => {
      this.$emit("seek", progress);
    });
  }
};
</script>
