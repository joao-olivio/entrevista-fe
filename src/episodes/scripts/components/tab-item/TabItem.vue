<script>
export default {
  name: "tab-item",
  props: {
    selected: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<template>
  <a
    ref="tabLink"
    :class="['tab-item', selected ? 'tab-item--selected' : '']"
    @click="$emit('select-tab')"
    tabindex="0"
    @keydown.enter="$emit('select-tab')"
  >
    <slot />
  </a>
</template>
