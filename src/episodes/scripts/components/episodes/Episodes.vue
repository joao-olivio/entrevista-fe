<script>
export default {
  name: "episodes",
  props: {
    items: {
      type: [Array, String],
      default: () => []
    }
  },
  methods: {
    goToPodcast(/* id */) {
      // pretending we have a navigation here,
      // there would be something like:
      // this.$router.push({ name: "podcast", params: { id } })
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
    <card-carousel
      class="episodes__carousel"
      v-if="Array.isArray(JSON.parse(items))"
    >
      <card
        v-for="(card, index) in JSON.parse(items)"
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
      <button class="btn btn--primary">View more</button>
    </div>
  </section>
</template>
