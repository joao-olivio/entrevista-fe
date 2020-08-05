import Vue from 'vue'
import Vuex from 'vuex'

// import signInStore from './signIn/signIn-store'
import contactStore from './contact/contact-store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    // signInStore,
    contactStore
  }
})
