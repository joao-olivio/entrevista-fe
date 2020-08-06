import Vue from 'vue'

// Import Components
// import CookieBanner from './components/02_atoms/cookie-banner/cookie-banner.vue'

// Vue Declaration for Components
// Vue.component(CookieBanner.name, CookieBanner)

// Import Directives
import {
  backgroundDirective,
  ellipsis
} from './directives'

// Vue Declaration for Directives
Vue.directive(ellipsis.name, ellipsis)
Vue.directive(backgroundDirective.name, backgroundDirective)

new Vue({ // eslint-disable-line no-new
  el: '#main-container',
})
