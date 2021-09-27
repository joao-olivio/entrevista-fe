<template>
  <header class="c-header">
    <button
      :class="[
        'c-hamburger-icon',
        {
          'c-hamburger-icon--opened': openedMenu,
        },
      ]"
      @click="toggleMenu"
    >
      <span class="c-hamburger-icon__line"></span>
      <span class="c-hamburger-icon__line"></span>
      <span class="c-hamburger-icon__line"></span>
    </button>
    <Menu
      v-show="openedMenu"
      :show-content="openedMenu"
      :attributes="menuAttributes"
      @close="openedMenu = false"
    />
  </header>
</template>

<script>
import Menu from './Menu.vue'

export default {
  name: 'Header',
  components: {
    Menu,
  },
  data: () => ({
    openedMenu: false,
    menuAttributes: {
      menuItems: [
        {
          name: 'Home',
          url: '/',
          exact: true,
        },
        {
          name: 'The Show',
          url: '/the-show',
          exact: false,
        },
        {
          name: 'Episodes',
          url: '/episodes',
          exact: false,
        },
        {
          name: 'Contact',
          url: '/contact',
          exact: false,
        },
      ],
      title: 'The Podcast',
      logo: {
        default: 'logo-valtech-white.png',
        twoTimes: 'logo-valtech-white@2x.png',
        alt: 'Valtech logo',
      },
    },
  }),
  methods: {
    toggleMenu() {
      this.openedMenu = !this.openedMenu
      const body = document.querySelector('body')

      if (this.openedMenu) {
        body.classList.add('menu-opened')
      } else {
        body.classList.remove('menu-opened')
      }
    },
  },
}
</script>
