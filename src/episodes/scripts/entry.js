import Vue from "vue";

// Import Components
import Card from "./components/card/Card.vue";
import Icon from "./components/icon/Icon.vue";
import Episodes from "./components/episodes/Episodes.vue";
import PageTitle from "./components/page-title/PageTitle.vue";
import CardCarousel from "./components/card-carousel/CardCarousel.vue";
import TabItem from "./components/tab-item/TabItem.vue";
import TabBar from "./components/tab-bar/TabBar.vue";

// Vue Declaration for Components
Vue.component(Card.name, Card);
Vue.component(Icon.name, Icon);
Vue.component(Episodes.name, Episodes);
Vue.component(PageTitle.name, PageTitle);
Vue.component(CardCarousel.name, CardCarousel);
Vue.component(TabItem.name, TabItem);
Vue.component(TabBar.name, TabBar);

// Import Directives
import { backgroundDirective, ellipsis } from "./directives";

// Vue Declaration for Directives
Vue.directive(ellipsis.name, ellipsis);
Vue.directive(backgroundDirective.name, backgroundDirective);

new Vue({
  // eslint-disable-line no-new
  el: "#main-container"
});
