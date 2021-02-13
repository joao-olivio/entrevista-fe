<script>
export default {
  name: "tab-bar",
  props: {
    items: {
      type: Array,
      default: () => []
    },
    default: {
      type: String,
      default: () => ""
    }
  },
  data() {
    return {
      selected: null
    };
  },
  mounted() {
    if (this.default) this.selected = this.default;
  }
};
</script>

<template>
  <div class="tab-bar">
    <tab-item
      class="tab-bar__items"
      v-for="(item, index) in items"
      :selected="selected === item"
      :key="index"
      @select-tab="
        selected = item;
        $emit('selected-tab', item);
      "
    >
      {{ item }}
    </tab-item>
  </div>
</template>
