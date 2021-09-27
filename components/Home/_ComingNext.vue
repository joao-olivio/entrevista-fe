<template>
  <section id="coming-next" class="o-section">
    <div class="o-coming-next">
      <div class="o-container">
        <div class="o-coming-next__column">
          <nuxt-picture
            class="o-coming-next__img"
            format="webp"
            :src="`/images/${attributes.image}`"
            :alt="attributes.alt"
            loading="lazy"
          />

          <div class="o-coming-next__job-info">
            <span class="o-coming-next__white-oval"></span>
            <span class="o-coming-next__job-position">{{
              attributes.jobPosition
            }}</span>
            <h2 class="o-coming-next__name">{{ attributes.name }}</h2>
          </div>
        </div>

        <div class="o-coming-next__column">
          <div class="o-coming-next__blue-smudge"></div>
          <h2 class="o-coming-next__title">{{ attributes.title }}</h2>
          <p
            v-for="(text, index) in attributes.description"
            :key="index"
            class="o-coming-next__description"
          >
            {{ text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ComingNext',

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
        name: {
          type: String,
          default: '',
        },
        jobPosition: {
          type: String,
          default: '',
        },
      }),
    },
  },
}
</script>
