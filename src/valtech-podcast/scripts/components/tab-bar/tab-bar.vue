<template>
  <div class="tab-wrapper">
    <a
      v-for="(tab, i) in tabs"
      :key="tab"
      class="tab-item"
      :class="[{ active: currentTab === i }]"
      @click.prevent="currentTab = i"
    >
      {{ tab }}
    </a>
  </div>
</template>

<script>
export default {
  name: "tab-bar",
  props: {
    tabs: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    currentTab: 0
  })
};
</script>
