<script>
export default {
  name: "episodes",
  props: {
    items: {
      type: [Array, Object, String],
      default: () => ({ all: [] })
    }
  },
  data() {
    return {
      selectedTab: "all"
    };
  },
  computed: {
    getItems() {
      if (this.items.length) {
        if (typeof this.items === "object") return this.items[this.selectedTab];
        if (typeof this.items === "string") {
          const items = JSON.parse(this.items)[this.selectedTab];
          if (Array.isArray(items)) return items;
        }
      }

      return [];
    }
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
      const value = 0.2 * (index + 1);
      return `animation-delay: ${value.toLocaleString("en-US", {
        maximumFractionDigits: 1,
        minimumFractionDigits: 1
      })}s`;
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
    <card-carousel class="episodes__carousel">
      <card
        v-for="(card, index) in getItems"
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
        hover-icon="clock"
        :hover-text="card.duration"
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
