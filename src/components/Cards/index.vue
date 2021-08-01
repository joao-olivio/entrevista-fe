<template>
    <div class="wrapper-card-component">
        <card />
        <card />
        <card />
        <card />
    </div>
</template>

<script>
import Card from '../Card/index.vue'

export default {
  components: {
    Card
  }
}
</script>

<style scoped>
  .wrapper-card-component {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  
</style>