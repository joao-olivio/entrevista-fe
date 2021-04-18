<template>
  <div class="container">
    <tab-bar v-model="tab" :tabs="tabs" />
    <div class="caroucel">
      <transition-group name="caroucel-transition">
        <div
          v-for="podcast in podcasts"
          :key="podcast.urlized"
          class="coroucel-item"
        >
          <podcast-card
            v-bind="{
              ...podcast
            }"
          />
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import PodcastCard from "../podcast-card/podcast-card.vue";
import TabBar from "../tab-bar/tab-bar.vue";
export default {
  name: "podcast-list",
  components: {
    PodcastCard,
    TabBar
  },
  data: () => ({
    tab: 0,
    podcasts: []
  }),
  computed: {
    tabs() {
      return ["all", "development", "design", "project management"];
    }
  }
};
</script>
