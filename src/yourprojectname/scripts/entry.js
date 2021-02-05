import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueCarousel, { Carousel, Slide } from "vue-carousel";

library.add(faClock);

Vue.use(BootstrapVue);
Vue.use(VueCarousel);

// Import Components
import HireMePlease from "./components/hire-me-please/hire-me-please.vue";
import Card from "./components/card/card.vue";
import AppIcon from "./components/app-icon/app-icon.vue";
import IconPlay from "./components/icons/icon-play.vue";
import CardTabs from "./components/card-tabs/card-tabs.vue";

// Vue Declaration for Components
Vue.component(HireMePlease.name, HireMePlease);
Vue.component(Card.name, Card);
Vue.component(AppIcon.name, AppIcon);
Vue.component(IconPlay.name, IconPlay);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component(Carousel.name, Carousel);
Vue.component(Slide.name, Slide);
Vue.component(CardTabs.name, CardTabs);

// Import Directives
import { backgroundDirective, ellipsis } from "./directives";

// Vue Declaration for Directives
Vue.directive(ellipsis.name, ellipsis);
Vue.directive(backgroundDirective.name, backgroundDirective);

new Vue({
  // eslint-disable-line no-new
  el: "#main-container"
});
