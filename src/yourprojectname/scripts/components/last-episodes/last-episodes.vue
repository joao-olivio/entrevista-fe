<template>
  <div class="container last-episodes">
    <div class="section-header">
      <h1 class="section-title">Last Episodes</h1>
      <h1 class="section-title-shadow">Episodes</h1>
      <div class="blob" />
    </div>

    <tabs @tab-change="filterEpisodes" />

    <last-episodes-list :episodes="lastEpisodes"></last-episodes-list>

    <div class="cta-container">
      <last-episodes-cta />
    </div>
  </div>
</template>

<script>
import LastEpisodesList from "../02_molecules/last-episodes-list/last-episodes-list.vue";
import lastEpisodesJson from "../../../mocks/lastEpisodes.json";
import LastEpisodesCta from "../01_atoms/last-episodes-cta/last-episodes-cta.vue";
import Tabs from "../02_molecules/tabs/tabs.vue";
export default {
  mounted() {
    this.filterEpisodes("New");
  },
  data() {
    return {
      lastEpisodes: []
    };
  },
  components: {
    LastEpisodesList,
    LastEpisodesCta,
    Tabs
  },
  methods: {
    filterEpisodes(tab) {
      this.lastEpisodes = [];
      this.lastEpisodes = lastEpisodesJson.data.filter(episode => {
        return (episode.new && tab === "New") || episode.category === tab;
      });
    }
  },
  name: "last-episodes"
};
</script>
