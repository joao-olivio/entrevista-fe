import Vue from "vue";

// Import Components
import Card from "./components/card/Card.vue";
import Icon from "./components/icon/Icon.vue";

// Vue Declaration for Components
Vue.component(Card.name, Card);
Vue.component(Icon.name, Icon);

// Import Directives
import { backgroundDirective, ellipsis } from "./directives";

// Vue Declaration for Directives
Vue.directive(ellipsis.name, ellipsis);
Vue.directive(backgroundDirective.name, backgroundDirective);

new Vue({
  // eslint-disable-line no-new
  el: "#main-container"
});
