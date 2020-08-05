import Vue from 'vue'

import 'picturefill'
import 'lazysizes'

// Import Components
import CookieBanner from './components/02_atoms/cookie-banner/cookie-banner.vue'
import FormInput from './components/02_atoms/formelements/form-input.vue'
import ContactUs from './components/03_molecules/contactus/contactus.vue'

// Vue Declaration for Components
Vue.component(CookieBanner.name, CookieBanner)
Vue.component(FormInput.name, FormInput)
Vue.component(ContactUs.name, ContactUs)

// Import Directives
import {
  backgroundDirective,
  loadscript,
  clickextension,
  ellipsis
} from './directives'

// Vue Declaration for Directives
Vue.directive(ellipsis.name, ellipsis)
Vue.directive(backgroundDirective.name, backgroundDirective)
Vue.directive('loadscript', loadscript)
Vue.directive('clickextension', clickextension)

// Import Store
import store from './store'

new Vue({ // eslint-disable-line no-new
  el: '#main-container',
  store,
  data() {
    return {
    }
  },
  mounted() {
    this.$nextTick(function () {
      if (document.readyState !== 'loading') {
        this.domReady()
      } else if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', () => {
          this.domReady()
        })
      } else {
        document.attachEvent('onreadystatechange', () => {
          if (document.readyState === 'complete') {
            this.domReady()
          }
        })
      }
    })
  },
  methods: {
    domReady() {
      document.querySelector('body').classList.add('page-loaded')
    }
  }
})
