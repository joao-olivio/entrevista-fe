<template>
  <div class="d-flex fd-column title-container" ref="">
    <div style="position: relative">
      <span class="title">Last Episodes</span>
      <hr style="position: absolute" class="blue-line" />
      <div class="circle" style="position: absolute;"></div>
      <span class="title-shadow" style="position: absolute;">Episodes</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "episodes-title-section",
  props: {},
  data() {
    return {
      episodes: []
    };
  },
  computed: {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
.title-container {
  align-items: center;
  @media only screen and (max-width: 1020px) {
    align-items: flex-start;
  }
}
.title {
  font-size: 6vw;
  font-weight: 800;
  z-index: 1;
  position: relative;
}

.title-shadow {
  z-index: -2;
  font-size: 10vw;
  font-weight: bolder;
  opacity: 0.1;
  bottom: 30px;
  left: 2vw;
  @media only screen and (max-width: 1020px) {
    bottom: 5px;
    left: -10px;
  }
}
.blue-line {
  border: 2px solid #5cd0fe;
  border-radius: 5px;
  width: 41vw;
  @media only screen and (max-width: 1020px) {
    width: 32vw;
    border-width: 1px;
  }
}
</style>
