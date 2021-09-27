<template>
  <section id="subscribe" class="o-section">
    <div class="o-subscribe">
      <div class="o-container">
        <h2 class="o-subscribe__title">{{ attributes.title }}</h2>
        <p
          v-for="(text, index) in attributes.description"
          :key="index"
          class="o-subscribe__description"
        >
          {{ text }}
        </p>

        <form action="" class="o-subscribe__form">
          <div class="o-subscribe__input-wrapper">
            <input
              id=""
              type="email"
              name=""
              class="o-subscribe__input"
              placeholder="Type your email"
            />

            <img
              src="~assets/icons/_mail.svg"
              class="o-subscribe__mail-icon"
              alt="Email icon"
              loading="lazy"
            />

            <Button variant="primary" is-block>{{ attributes.cta }}</Button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  name: 'Subscribe',

  components: {
    Button,
  },

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
        cta: {
          type: String,
          default: '',
        },
      }),
    },
  },
}
</script>
