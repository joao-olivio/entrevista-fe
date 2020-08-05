<template>
  <div v-show="showBanner" class="cookie-banner">
    <div class="cookie-banner__close" @click="closeBannerSetCookie()">
      <svg class="icon is-large"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#close"></use></svg>
    </div>

    <div class="cookie-banner__content">
      <slot name="cookie-banner-text"></slot>
      <button class="cookie-submit-button" @click="closeBannerSetCookie()">{{buttonText}}</button>
    </div>

  </div>
</template>

<script>
  import utils from '../../../utils/utils'

  export default {
    name: 'cookie-banner',

    props: {
      buttonText: {
        type: String,
        required: true
      }
    },

    data() {
      return {
        showBanner: true
      }
    },

    /**
     * If banner cookie set, then don't render the banner
     */
    created() {
      if (utils.getCookie('cookie-notification')) {
        this.showBanner = false
      }
    },

    methods: {
      /**
       * Close banner and set cookie to not show it
       */
      closeBannerSetCookie() {
        this.showBanner = false
        utils.setCookie('cookie-notification', 1, 365)
      }
    }
  }
</script>
