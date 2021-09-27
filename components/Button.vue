<template>
  <button
    :class="['c-btn', variants, sizes, { 'c-btn--block': isBlock }]"
    role="button"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',

  props: {
    variant: {
      type: String,
      required: true,
      default: '',
    },

    size: {
      type: String,
      required: false,
      default: 'medium',
    },

    isBlock: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  computed: {
    variants() {
      return {
        primary: 'c-btn--primary',
        secondary: 'c-btn--secondary',
        outline: 'c-btn--outline',
      }[this.variant]
    },

    sizes() {
      return {
        small: 'c-btn--small',
        medium: 'c-btn--medium',
        big: 'c-btn--big',
      }[this.size]
    },
  },
}
</script>
