import Vue from "vue";

// Import Components
import HireMePlease from "./components/hire-me-please/hire-me-please.vue";
import CardEpisode from "./components/card-episode/card-episode.vue";
import EpisodesTitleSection from "./components/episodes-title-section/episodes-title-section.vue";
import EpisodesSection from "./components/episodes-section/episodes-section.vue";
import TabPanel from "./components/tab-panel/tab-panel.vue";

// Vue Declaration for Components
Vue.component(HireMePlease.name, HireMePlease);
Vue.component(CardEpisode.name, CardEpisode);
Vue.component(EpisodesTitleSection.name, EpisodesTitleSection);
Vue.component(EpisodesSection.name, EpisodesSection);
Vue.component(TabPanel.name, TabPanel);

// Import Directives
import { backgroundDirective, ellipsis } from "./directives";

// Vue Declaration for Directives
Vue.directive(ellipsis.name, ellipsis);
Vue.directive(backgroundDirective.name, backgroundDirective);

new Vue({
  // eslint-disable-line no-new
  el: "#main-container"
});
