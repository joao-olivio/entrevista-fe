<template>
  <div class="m-tab-container" role="tablist">
    <VTabItem
      v-for="(tab, index) in tabs"
      :key="`${tab.category}-${index}`"
      :label="tab.category"
      @click.native="SET_SELECTED_TAB_CATEGORY(tab.category)"
    />
  </div>
</template>

<script>
import VTabItem from '@/components/atoms/VTabItem'

import { mapState, mapMutations } from 'vuex'

export default {
  name: 'VTabContainer',

  components: {
    VTabItem
  },

  computed: {
    ...mapState('episodes', [
      'tabs'
    ])
  },

  methods: {
    ...mapMutations('episodes', [
      'SET_SELECTED_TAB_CATEGORY'
    ])
  }
}
</script>
