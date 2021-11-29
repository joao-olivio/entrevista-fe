<template>
  <div class="a-title-container">
    <div class="a-title-container__decorative-background-text" aria-hidden="true">
      <slot name="decorative-background-text" />
    </div>

    <slot name="custom-content" />

    <h2 class="a-title-container__title">
      <slot name="title" />
    </h2>
  </div>
</template>

<script>
export default {
  name: 'VTitleContainer',

  props: {

  }
}
</script>
