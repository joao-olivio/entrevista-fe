<template>
  <footer class="c-footer">
    <hr class="o-divider" />
    <div class="o-container">
      <nuxt-picture
        class="c-footer__logo"
        :src="`/images/${attributes.logo.default}`"
        :srcset="`/images/${attributes.logo.twoTimes} 2x`"
        :alt="attributes.logo.alt"
        format="webp"
        loading="lazy"
      />

      <nav class="c-footer__items">
        <nuxt-link
          v-for="(item, index) in attributes.menuItems"
          :key="index"
          class="c-footer__link"
          :to="item.url"
        >
          {{ item.name }}
        </nuxt-link>
      </nav>

      <small class="c-footer__copyright">
        2020 Valtech All rights reserved
      </small>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',

  data() {
    return {
      attributes: {
        menuItems: [
          {
            name: 'Home',
            url: '/',
          },
          {
            name: 'The Show',
            url: '/the-show',
          },
          {
            name: 'Episodes',
            url: '/episodes',
          },
          {
            name: 'Contact',
            url: '/contact',
          },
        ],
        logo: {
          default: 'logo-valtech-footer.png',
          twoTimes: 'logo-valtech-footer@2x.png',
          alt: 'Valtech logo',
        },
      },
    }
  },
}
</script>
