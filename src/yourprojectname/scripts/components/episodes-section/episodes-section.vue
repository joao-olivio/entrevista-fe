<template>
  <div class="container" style="position: relative;" ref="">
    <episodes-title-section />

    <tab-panel />

    <div class="d-flex row jc-center my-md">
      <button class="btn btn--primary ">
        View more
      </button>
    </div>
  </div>
</template>

<script>
import CardEpisode from "../card-episode/card-episode.vue";
import episodesTitleSection from "../episodes-title-section/episodes-title-section.vue";
import TabPanel from "../tab-panel/tab-panel.vue";
export default {
  components: { episodesTitleSection, CardEpisode, TabPanel },
  name: "episodes-section"
};
</script>
