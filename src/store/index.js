import Vue from 'vue'
import Vuex from 'vuex'

import episodes from './modules/episodes'

Vue.use(Vuex)

const modules = {
  episodes
}

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules,
  strict: debug
})
