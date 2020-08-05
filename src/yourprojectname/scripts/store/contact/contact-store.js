import {
    CONTACT_FORM_SUCCESS,
    CONTACT_FORM_PENDING,
    CONTACT_FORM_ERROR
} from './../types'

import contactForm from '../../services/contact'

const state = {
  form: {
    pending: false,
    success: false,
    error: false,
  },
  server: {
    message: '',
    error: false
  }
}

const actions = {
  /**
   * Submit contact us form
   * @param {Object} context
   * @param {Object} formData
   */
  contactSubmit(context, formData) {
    // Set form state as pending
    context.commit(CONTACT_FORM_PENDING)

    // Send submit form request
    contactForm.submit(formData).then((res) => {
      // Set form state as success
      context.commit(CONTACT_FORM_SUCCESS, res)
    }).catch((err) => {
      // Set form state as error
      context.commit(CONTACT_FORM_ERROR, err)
    })
  }
}

const mutations = {
  [CONTACT_FORM_PENDING]() {
    state.form.pending = true
    state.form.error = false
    state.form.success = false
  },

  [CONTACT_FORM_SUCCESS](st, res) {
    st.form.pending = false
    st.form.error = false
    st.form.success = true
    st.server.message = res.message
    st.server.error = res.error
  },

  /* eslint-disable no-shadow */
  [CONTACT_FORM_ERROR](state, res) {
    state.pending = false
    state.success = false
    state.error = true
    state.server.message = res.message ? res.message : res
    state.server.error = res.error ? res.error : res
  }
}

const getters = {
  /*
  * Return formstate
  */
  getContactFormState() {
    return state.form
  },

  /*
  * Return server messages from API response
  */
  getContactMessage() {
    return state.server
  }
}

export default ({
  state,
  mutations,
  actions,
  getters
})
