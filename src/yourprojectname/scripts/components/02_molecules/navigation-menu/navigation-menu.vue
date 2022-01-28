<template>
  <nav class="navbar" ref="navigation">
    <slot/>
  </nav>
</template>
<script>
export default {
  name: "navigation-menu",
  mounted() {
    const navlinks = this.$refs.navigation.querySelectorAll(".navlink");
    navlinks[0].ariaSelected = true;
    navlinks.forEach(link => {      
      link.addEventListener("click", e => {
        this.$store.commit("CHANGE_TAG", e.target.dataset.tag);
        navlinks.forEach(navlink => navlink.ariaSelected = false);
        e.target.ariaSelected = true;
      });
    });
  }
};
</script>