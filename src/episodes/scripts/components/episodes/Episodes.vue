<script>
export default {
  name: "episodes",
  props: {
    items: {
      type: [Array, String],
      default: () => []
    }
  },
  data() {
    return {
      selectedTab: "all"
    };
  },
  methods: {
    goToPodcast(/* id */) {
      // pretending we have a navigation here,
      // there would be something like:
      // this.$router.push({ name: "podcast", params: { id } })
    },
    goToAllEpisodes(/* selectedTab */) {
      // also pretending we have a navigation here,
      // there would be something like:
      // this.$router.push({ name: "episodes", params: { type: selectedTab } })
    },
    generateDelay(index) {
      return `animation-delay: ${0.2 * (index + 1)}s`;
    }
  }
};
</script>

<template>
  <section class="episodes">
    <page-title
      class="episodes__page-title"
      main-text="Last Episodes"
      shadow-text="Episodes"
    />
    <tab-bar
      class="episodes__tabs"
      default="all"
      :items="['all', 'development', 'design', 'project management']"
      @selected-tab="selectedTab = $event"
    />
    <card-carousel
      class="episodes__carousel"
      v-if="Array.isArray(JSON.parse(items)[selectedTab])"
    >
      <card
        v-for="(card, index) in JSON.parse(items)[selectedTab]"
        :key="index"
        :id="index"
        class="episodes__cards"
        :title="card.title"
        :subtitle="card.subtitle"
        :text="card.text"
        :style="generateDelay(index)"
        :icon="card.icon"
        :img="card.img"
        :img-alt="card.imgAlt"
        :button-alt="card.buttonAlt"
        @button-click="goToPodcast"
      />
    </card-carousel>
    <div class="episodes__footer">
      <button class="btn btn--primary" @click="goToAllEpisodes">
        View more
      </button>
    </div>
  </section>
</template>
