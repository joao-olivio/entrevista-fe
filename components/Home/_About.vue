<template>
  <section id="about" class="o-section">
    <div class="o-about">
      <div class="o-container">
        <div class="o-about__column">
          <h2 class="o-about__title">{{ attributes.title }}</h2>
          <p
            v-for="(text, index) in attributes.description"
            :key="index"
            class="o-about__description"
          >
            {{ text }}
          </p>
        </div>

        <div class="o-about__column">
          <nuxt-picture
            class="o-about__img"
            format="webp"
            :src="`/images/${attributes.image}`"
            :alt="attributes.alt"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',

  props: {
    attributes: {
      type: Object,
      required: true,
      default: () => ({
        title: {
          type: String,
          default: '',
        },
        description: {
          type: Array,
          default: () => [],
        },
        image: {
          type: String,
          default: '',
        },
        alt: {
          type: String,
          default: '',
        },
      }),
    },
  },
}
</script>
