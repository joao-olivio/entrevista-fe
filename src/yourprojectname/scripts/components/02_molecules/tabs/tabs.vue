<template>
  <ul class="tabs">
    <tab
      v-for="(tab, index) in tabs"
      :key="index"
      :label="tab"
      :active="active === tab"
      @click.native="handleChange(tab)"
    />
  </ul>
</template>

<script>
import Tab from "../../01_atoms/tab/tab.vue";
export default {
  name: "tabs",
  components: {
    Tab
  },
  data() {
    return {
      tabs: ["New", "Development", "Design", "Project Management"],
      active: "New"
    };
  },
  methods: {
    handleChange(tab) {
      this.active = tab;
      this.$emit("tab-change", tab);
    }
  }
};
</script>
