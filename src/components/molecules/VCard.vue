<template>
  <div class="m-card">
    <header class="m-card__header">
      <h3 class="m-card__title">{{ card.title }}</h3>

      <h4 class="m-card__name">{{ card.author }}</h4>
      <h5 class="m-card__caption">{{ card.author_role }}</h5>
    </header>

    <footer class="m-card__footer">
      <button class="m-card__footer__play-button" aria-label="Play Button">
        <VIconPlayButton aria-hidden="true" />
        <span class="sr-only">Play Button</span>
      </button>

      <div class="m-card__footer__time">
        <VClock :hours="hours" :minutes="minutes" />
        <time>{{ podcastDuration }}</time>
      </div>
    </footer>
  </div>
</template>

<script>
import VClock from '@/components/atoms/VClock'
import VIconPlayButton from '@/components/atoms/VIconPlayButton'

export default {
  name: 'VCard',

  components: {
    VClock,
    VIconPlayButton
  },

  props: {
    card: {
      type: Object,
      required: true
    }
  },

  data: () => ({
    hours: 0,
    minutes: 0
  }),

  created () {
    const seconds = parseInt(this.card.duration)
    this.hours = Math.floor(seconds / 3600)
    this.minutes = Math.floor((seconds - (this.hours * 3600)) / 60)
  },

  computed: {
    podcastDuration () {
      if (this.hours > 0) {
        return `${this.hours}h ${this.minutes}min`
      }

      return `${this.minutes}min`
    }
  }
}
</script>
