<template>
  <div class="last-episodes-list">
    <episode-card
      :key="index"
      v-for="(episode, index) in episodes"
      :episode="episode"
    ></episode-card>
  </div>
</template>

<script>
import EpisodeCard from "../episode-card/episode-card.vue";
import { Carousel, Slide } from "vue-carousel";
export default {
  components: {
    EpisodeCard,
    Carousel,
    Slide
  },
  name: "last-episodes-list",
  props: ["episodes"]
};
</script>
