<template>
  <div class="hire-me-please" ref="hire">
    <form>
      <label for="message">
        Why do you want to get hired?
      </label>
      <input
        v-model="message"
        type="text"
        name="message"
        id="message"
        aria-describedby="message-errors"
        placeholder="Tell me, fren!"
        @change="dirtyMessage">
      <div class="errors-log" v-if="messageError">
        <span id="message-errors">Please, choose your words carefully!</span>
      </div>
      <slot/>
    </form>

    <div class="answer" aria-live="polite">{{answer}}</div>
  </div>
</template>

<script>
  export default {
    name: 'hire-me-please',
    props: {
      apiUrl: { type: String, required: true }
    },
    data() {
      return {
        message: '',
        messageDirty: false,
        answer: ''
      }
    },
    computed: {
      messageError() {
        return this.message === '' && this.messageDirty
      },
    },
    mounted() {
      const trigger = this.$refs.hire.querySelector('.btn')
      trigger.addEventListener('click', (e) => {
        e.preventDefault()
        this.submit()
      })
    },
    methods: {
      submit() {
        this.messageDirty = true

        if (this.messageError) {
          return
        }

        fetch(`${this.apiUrl}?message=${this.message}`,
          {
            method: 'GET',
            headers: { 'Content-Type': 'application/jsoncharset=utf-8' },
            credentials: 'same-origin',
          })
          .then(this.parseJSON)
          .then(data => {
            this.answer = data.answer
          })
          .catch(error => {
            console.error('Could not load answer', error) // eslint-disable-line no-console
          })
      },
      dirtyMessage() {
        this.messageDirty = true
      },
      parseJSON(response) {
        response.json()
      }
    }
  }
</script>
