import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedTag: "all"
  },
  mutations: {
    CHANGE_TAG(state, payload) {
      state.selectedTag = payload;
    }
  }
});