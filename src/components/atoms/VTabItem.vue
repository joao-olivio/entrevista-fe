<template>
  <button
    role="tab"
    aria-controls="m-episode-card-container"
    :aria-label="label"
    class="a-tab-item"
    :class="{'a-tab-item--selected': isSelected}"
    :aria-selected="isSelected ? 'true' : 'false'"
    tabindex="0"
  >
    {{ label }}
  </button>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'VTabItem',

  props: {
    label: {
      String,
      default: ''
    }
  },

  computed: {
    ...mapState('episodes', [
      'selectedTabCategory'
    ]),

    isSelected () {
      return this.label === this.selectedTabCategory
    }
  }
}
</script>
