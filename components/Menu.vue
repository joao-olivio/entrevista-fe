<template>
  <transition @after-enter="showContent = true">
    <div class="c-menu">
      <transition name="slide-from-left" @after-leave="close">
        <div v-if="showContent" class="c-menu__container">
          <nuxt-picture
            class="c-menu__logo"
            :src="`/images/${attributes.logo.default}`"
            :srcset="`/images/${attributes.logo.twoTimes} 2x`"
            :alt="attributes.logo.alt"
            loading="lazy"
          />

          <h2 class="c-menu__title">{{ attributes.title }}</h2>

          <nav class="c-menu__items">
            <nuxt-link
              v-for="(item, index) in attributes.menuItems"
              :key="index"
              class="c-menu__link"
              :to="item.url"
              :exact="item.exact"
            >
              {{ item.name }}
            </nuxt-link>
          </nav>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    attributes: {
      type: Object,
      required: true,
      default: () => ({
        menuItems: {
          type: Array,
          required: true,
          default: () => [],
        },
        title: {
          type: String,
          default: '',
        },
        logo: {
          type: Object,
          default: () => {},
        },
        alt: {
          type: String,
          default: '',
        },
      }),
    },
    showContent: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>
