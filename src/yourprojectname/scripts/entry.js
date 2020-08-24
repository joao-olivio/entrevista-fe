import Vue from "vue";

// Import Components
import HireMePlease from "./components/hire-me-please/hire-me-please.vue";
import ThePodcast from "./components/the-podcast/the-podcast.vue";

// Vue Declaration for Components
Vue.component(HireMePlease.name, HireMePlease);
Vue.component(ThePodcast.name, ThePodcast);

// Import Directives
import { backgroundDirective, ellipsis } from "./directives";

// Vue Declaration for Directives
Vue.directive(ellipsis.name, ellipsis);
Vue.directive(backgroundDirective.name, backgroundDirective);

new Vue({
  // eslint-disable-line no-new
  el: "#main-container"
});
