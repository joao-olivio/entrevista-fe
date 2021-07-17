<template>
  <div class="card" :aria-label="episode.title">
    <div class="card-header">
      <h2 class="card-title">{{ episode.title }}</h2>
      <span class="card-name">{{ episode.name }}</span>
      <span class="card-job">{{ episode.job }}</span>
    </div>

    <div class="card-footer">
      <play-button :title="episode.title" />
      <episode-duration :duration="episode.duration" />
    </div>
  </div>
</template>

<script>
import PlayButton from "../../01_atoms/play-button/play-button.vue";
import EpisodeDuration from "../../01_atoms/episode-duration/episode-duration.vue";
export default {
  components: { PlayButton, EpisodeDuration },
  props: ["episode"]
};
</script>
