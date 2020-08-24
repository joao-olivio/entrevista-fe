<template>
  <div class="the-podcast-component" ref="podcast">
    <form>
      <slot />
    </form>
  </div>
</template>

<script>
export default {
  name: "the-podcast-component",
  props: {
    apiUrl: { type: String, required: true }
  },
  data() {
    return {
      message: "",
      messageDirty: false,
      answer: ""
    };
  },
  computed: {
    messageError() {
      return this.message === "" && this.messageDirty;
    }
  },
  mounted() {
    const trigger = this.$refs.podcast.querySelector(".btn");
    trigger.addEventListener("click", e => {
      e.preventDefault();
      this.submit();
    });
  },
  methods: {
    submit() {
      this.messageDirty = true;

      if (this.messageError) {
        return;
      }

      fetch(`${this.apiUrl}?message=${this.message}`, {
        method: "GET",
        headers: { "Content-Type": "application/jsoncharset=utf-8" },
        credentials: "same-origin"
      })
        .then(this.parseJSON)
        .then(data => {
          this.answer = data.answer;
        })
        .catch(error => {
          console.error("Could not load answer", error); // eslint-disable-line no-console
        });
    },
    dirtyMessage() {
      this.messageDirty = true;
    },
    parseJSON(response) {
      return response.json();
    }
  }
};
</script>
