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
    value: {
      type: Number,
      default: 0
    },
    tabs: {
      type: Array,
      default: () => ["all", "development", "design", "project management"]
    }
  },
  data: () => ({
    currentTab: 0
  }),
  watch: {
    currentTab(val) {
      this.$emit("input", val);
    }
  },
  created() {
    if (this.value) {
      this.currentTab = this.value;
    }
  }
};
</script>
