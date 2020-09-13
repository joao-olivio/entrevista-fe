import Vue from "vue";

// Import Components
import Episodes from "./components/episodes/episodes.vue";
import EpisodesTeste from "./components/episodes-teste/episodes-teste.vue";

// Vue Declaration for Components
Vue.component(Episodes.name, Episodes);
Vue.component(EpisodesTeste.name, EpisodesTeste);

// Import Directives
import { backgroundDirective, ellipsis } from "./directives";

// Vue Declaration for Directives
Vue.directive(ellipsis.name, ellipsis);
Vue.directive(backgroundDirective.name, backgroundDirective);

new Vue({
  // eslint-disable-line no-new
  el: "#main-container"
});
