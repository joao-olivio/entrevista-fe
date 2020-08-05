<template>
  <div class="form-element">
    <div class="input-wrapper">
      <span class="input-label">{{ label }}</span>
      <!--text input-->
      <input v-if="inputType == 'text'" type="text" class="inputText" :class="{'empty' : isEmpty, 'error': !isValid, 'dark': dark}" :name="name" title="name" @keyup="onKeyUp()" @blur="onKeyUp()" v-model="inputValue" :aria-label="ariaLabel" :placeholder="placeholder" autocomplete="off"/>
      <!--password input-->
      <textarea v-if="inputType == 'textarea'" class="inputText inputArea" :class="{'empty' : isEmpty, 'error': !isValid, 'dark': dark}" :name="name" title="name" @keyup="onKeyUp()" @blur="onKeyUp()" v-model="inputValue" :aria-labelledby="ariaLabel" :placeholder="placeholder"  autocomplete="off"/></textarea>
    </div>
    <span class="error-message" :class="{'show': !isValid}">{{ errorText }}</span>
  </div>
</template>
<script>
export default {
  name: 'form-input',

  props: {
    name: {
      type: String,
      required: true
    },
    errorText: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    isValid: {
      type: Boolean,
      default: true
    },
    label: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      isEmpty: true,
      inputValue: ''
    }
  },

  methods: {
    /**
     * On blur, emit event to parent so parent can validate input
     */
    onKeyUp() {
      this.$emit('input-keyup', {
        name: this.name,
        value: this.inputValue
      })
    }

  },

  watch: {
    /**
     * When input value is changed, check if empty or not to trigger correct label styling
     * @param {String} val
     */
    inputValue(val) {
      this.isEmpty = val.length === 0
    }
  },

  computed: {
    /**
     * Toggle input type
     * @returns {String} - input field type
     */
    inputType() {
      return this.type
    },

    ariaLabel() {
      return this.name.trim()
    }
  }
}

</script>
