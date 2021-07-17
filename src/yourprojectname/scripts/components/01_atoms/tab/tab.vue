<template>
  <li
    :class="`tab ${active ? 'active' : 'inactive'}`"
    :aria-label="label"
    :aria-selected="active"
  >
    {{ label }}
  </li>
</template>

<script>
export default {
  name: "tab",
  props: ["label", "active"]
};
</script>
