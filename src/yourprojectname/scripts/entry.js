import Vue from "vue";
import store from "./store.js";
// Import Components
import Duration from "./components/02_molecules/duration/duration.vue";
import NavigationMenu from "./components/02_molecules/navigation-menu/navigation-menu.vue";
import CardsContainer from "./components/03_organisms/cards-container/cards-container.vue";



// Vue Declaration for Components

Vue.component(CardsContainer.name, CardsContainer);

Vue.component(Duration.name, Duration);

Vue.component(NavigationMenu.name, NavigationMenu);

// Import Directives
import { backgroundDirective, ellipsis } from "./directives";

// Vue Declaration for Directives
Vue.directive(ellipsis.name, ellipsis);
Vue.directive(backgroundDirective.name, backgroundDirective);

new Vue({
  store,
  // eslint-disable-line no-new
  el: "#main-container"
});
