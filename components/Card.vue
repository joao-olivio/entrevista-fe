<template>
  <article :key="attributes.title" class="c-card">
    <div class="c-card__body">
      <h3 class="c-card__title">{{ attributes.title }}</h3>
      <span class="c-card__name">{{ attributes.name }}</span>
      <span class="c-card__job-title">{{ attributes.jobTitle }}</span>
    </div>
    <div class="c-card__footer">
      <button class="c-card__play" aria-label="Play episode">
        <Play />
      </button>

      <div class="c-card__time">
        <nuxt-picture
          class="c-card__time-icon"
          src="icons/clock.png"
          alt="Clock icon"
          format="webp"
          loading="lazy"
        ></nuxt-picture>
        <span class="c-card__duration">{{ attributes.duration }}</span>
      </div>
    </div>
  </article>
</template>

<script>
import Play from '~/assets/icons/_play.svg?inline'

export default {
  name: 'Card',
  components: {
    Play,
  },
  props: {
    attributes: {
      type: Object,
      default: () => ({
        title: {
          type: String,
          default: '',
        },
        name: {
          type: String,
          default: '',
        },
        jobTitle: {
          type: String,
          default: '',
        },
        duration: {
          type: String,
          default: '',
        },
      }),
    },
  },
}
</script>
