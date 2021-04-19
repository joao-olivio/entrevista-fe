import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueCarousel, { Carousel, Slide } from "vue-carousel";

library.add(faClock);
Vue.use(BootstrapVue);
Vue.use(VueCarousel);

import HireMePlease from "./components/hire-me-please/hire-me-please.vue";
import AppIcon from "./components/app-icon/app-icon.vue";
import IconPlay from "./components/icons/icon-play.vue";
import Card from "./components/card/card.vue";
import CardTabs from "./components/card-tabs/card-tabs.vue";

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component(HireMePlease.name, HireMePlease);
Vue.component(AppIcon.name, AppIcon);
Vue.component(IconPlay.name, IconPlay);
Vue.component(Card.name, Card);
Vue.component(Carousel.name, Carousel);
Vue.component(Slide.name, Slide);
Vue.component(CardTabs.name, CardTabs);

import { backgroundDirective, ellipsis } from "./directives";

Vue.directive(ellipsis.name, ellipsis);
Vue.directive(backgroundDirective.name, backgroundDirective);

new Vue({
  el: "#main-container"
});
