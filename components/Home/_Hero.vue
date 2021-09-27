<template>
  <section id="hero" class="o-section">
    <div class="c-hero">
      <div class="c-hero__container">
        <nuxt-picture
          class="c-hero__logo"
          src="/images/logo-valtech-black.svg"
          alt="Valtech logo"
          format="webp"
        />
        <h1 class="c-hero__title">{{ attributes.title }}</h1>
        <Button variant="secondary" @click="goToSection">{{
          attributes.cta
        }}</Button>
      </div>
      <button
        role="button"
        class="c-hero__go-down"
        aria-label="Click to go down"
        @click="goDown"
      >
        <MouseIcon />
        <ArrowDownIcon />
      </button>
    </div>
  </section>
</template>

<script>
import Button from '@/components/Button.vue'
import ArrowDownIcon from '~/assets/icons/_arrow-down.svg?inline'
import MouseIcon from '~/assets/icons/_mouse.svg?inline'

export default {
  name: 'Hero',

  components: {
    ArrowDownIcon,
    Button,
    MouseIcon,
  },

  props: {
    attributes: {
      type: Object,
      default: () => ({
        cta: {
          type: String,
          required: true,
          default: '',
        },
        title: {
          type: String,
          required: true,
          default: '',
        },
      }),
    },
  },

  methods: {
    goDown() {
      document
        .querySelector('#last-episodes')
        .scrollIntoView({ behavior: 'smooth' })
    },

    goToSection() {
      console.log('vai')
      document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })
    },
  },
}
</script>
