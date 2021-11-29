<template>
  <component class="a-button" :is="tag" :to="to">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'VButton',

  props: {
    tag: {
      type: String,
      default: 'router-link'
    },
    to: {
      type: String,
      required: false
    }
  }
}
</script>
