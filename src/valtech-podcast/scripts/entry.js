import Vue from "vue";
import Vuex from "vuex";

// Import Store
import StoreConfig from "./store/index.js";

// Import Components
import PlayBtn from "./components/play-btn/play-btn.vue";
import ClockIcon from "./components/clock-icon/clock-icon.vue";
import Caroucel from "./components/caroucel/caroucel.vue";
import TabBar from "./components/tab-bar/tab-bar.vue";
import PodcastCard from "./components/podcast-card/podcast-card.vue";
import PodcastList from "./components/podcast-list/podcast-list.vue";
import PodcastPlayer from "./components/podcast-player/podcast-player.vue";
import Waveform from "./components/waveform/waveform.vue";

// Create Store
Vue.use(Vuex);
const store = new Vuex.Store(StoreConfig);

// Vue Declaration for Components
Vue.component(PlayBtn.name, PlayBtn);
Vue.component(ClockIcon.name, ClockIcon);
Vue.component(Caroucel.name, Caroucel);
Vue.component(TabBar.name, TabBar);
Vue.component(PodcastCard.name, PodcastCard);
Vue.component(PodcastList.name, PodcastList);
Vue.component(PodcastPlayer.name, PodcastPlayer);
Vue.component(Waveform.name, Waveform);

// Import Directives
import { backgroundDirective, ellipsis } from "./directives";

// Vue Declaration for Directives
Vue.directive(ellipsis.name, ellipsis);
Vue.directive(backgroundDirective.name, backgroundDirective);

new Vue({
  // eslint-disable-line no-new
  el: "#main-container",
  store
});
