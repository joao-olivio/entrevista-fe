<template>
  <button class="btn-play" :aria-label="`Play ${title}`"></button>
</template>

<script>
  export default {
    props: ["title"],
  };
</script>