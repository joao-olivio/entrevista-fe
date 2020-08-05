<template>
  <form :action="submitUrl" method="POST" class="formtag" v-on:submit.prevent="onSubmit">
    <span role="message"
          :class="['message', {'error': getContactMessage.error, 'success': !getContactMessage.error}]"
          v-if="!getContactFormState.pending && getContactMessage.message">{{getContactMessage.message}}</span>

    <form-input :name="this.form.name.name"
                :label="this.form.name.label"
                :type="this.form.name.type"
                :errorText="this.form.name.error"
                :placeholder="this.form.name.placeholder"
                :isValid="this.form.name.isValid"
                :value="this.form.name.value"
                @input-keyup="onInputChange"></form-input>

    <form-input :name="this.form.email.name"
                :label="this.form.email.label"
                :type="this.form.email.type"
                :errorText="this.form.email.error"
                :placeholder="this.form.email.placeholder"
                :isValid="this.form.email.isValid"
                :value="this.form.email.value"
                @input-keyup="onInputChange"></form-input>

    <form-input :name="this.form.message.name"
                :label="this.form.message.label"
                :type="this.form.message.type"
                :errorText="this.form.message.error"
                :placeholder="this.form.message.placeholder"
                :isValid="this.form.message.isValid"
                :value="this.form.message.value"
                @input-keyup="onInputChange"></form-input>

    <button class="btn"
            :disabled="!isFormValid || formUntouched || getContactFormState.pending"
            type="submit">{{submitButtonText}}</button>

  </form>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import utils from '../../../utils/utils'

export default {
  name: 'contactus',

  props: {
    formFields: {
      type: Object,
      default() { return {} }
    },
    submitUrl: {
      type: String,
      default: '#'
    },
    submitButtonText: {
      type: String,
      default: 'Update'
    }
  },

  data() {
    return {
      form: {
        name: {
          name: this.formFields.name.name,
          error: this.formFields.name.error,
          label: this.formFields.name.label,
          placeholder: this.formFields.name.placeholder,
          value: this.formFields.name.value ? this.formFields.name.value : '',
          isValid: true,
          type: 'text',
        },
        email: {
          name: this.formFields.email.name,
          error: this.formFields.email.error,
          label: this.formFields.email.label,
          placeholder: this.formFields.email.placeholder,
          value: this.formFields.email.value ? this.formFields.email.value : '',
          isValid: true,
          type: 'text',
        },
        message: {
          name: this.formFields.message.name,
          error: this.formFields.message.error,
          label: this.formFields.message.label,
          placeholder: this.formFields.message.placeholder,
          value: this.formFields.message.value ? this.formFields.message.value : '',
          isValid: true,
          type: 'textarea',
        }
      },
      formUntouched: true
    }
  },

  methods: {

    /**
     * On change of any input, run appropriate validation
     * @param input
     */
    onInputChange(input) {
      this.formUntouched = false

      switch (input.name) {
        case 'name':
          this.form.name.isValid = !utils.isEmptyString(input.value)
          this.form.name.value = input.value
          break
        case 'email':
          this.form.email.isValid = utils.isValiedEmail(input.value)
          this.form.email.value = input.value
          break
        case 'message':
          this.form.message.isValid = !utils.isEmptyString(input.value)
          this.form.message.value = input.value
          break
        default:
          break
      }
    },

    onSubmit() {
      if (this.isFormValid) {
        this.contactSubmit({
          name: this.form.name.value,
          email: this.form.email.value,
          message: this.form.message.value
        })
      }
    },


    /*
     * Mapping actions from store
     */
    ...mapActions({
      contactSubmit: 'contactSubmit'
    })
  },

  computed: {
    /**
     * Property, no inputs.
     * Check if form is valid or not
     */
    isFormValid() {
      return this.form.email.value && this.form.email.value.trim().length > 0 &&
        this.form.email.isValid &&
        this.form.name.value && this.form.name.value.trim().length > 0 &&
        this.form.name.isValid &&
        this.form.message.value && this.form.message.value.trim().length > 0 &&
        this.form.message.isValid
    },

    /*
     * Mapping getters from store
     */
    ...mapGetters({
      getContactFormState: 'getContactFormState',
      getContactMessage: 'getContactMessage'
    })
  }
}

</script>
