import state from './state.js'
import * as actions from './actions.js'
import * as mutations from './mutations.js'
import * as getters from './getters.js'

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
