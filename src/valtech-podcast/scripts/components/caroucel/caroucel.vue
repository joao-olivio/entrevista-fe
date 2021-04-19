<template>
  <div class="caroucel">
    <div
      class="caroucel-wrapper"
      :style="[
        {
          width: wrapperWidth ? wrapperWidth + 'px' : '100%',
          height: itemHeight + 'px'
        }
      ]"
    >
      <transition-group name="fade-transition" mode="out-in">
        <div
          v-for="item in items"
          :key="item[uniqueProp]"
          class="caroucel-item"
          :style="[
            { width: itemWidth + 'px' },
            { 'max-width': itemWidth + 'px' },
            { 'margin-right': itemMargin + 'px' }
          ]"
        >
          <slot v-bind="{ item }" />
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "caroucel",
  props: {
    items: {
      type: Array,
      default: () => [{ id: 1 }, { id: 2 }]
    },
    uniqueProp: {
      type: String,
      default: "id"
    },
    itemHeight: {
      type: Number,
      default: 80
    },
    itemWidth: {
      type: Number,
      default: 80
    },
    itemMargin: {
      type: Number,
      default: 16
    }
  },
  computed: {
    wrapperWidth() {
      return this.items.length * (this.itemWidth + this.itemMargin);
    }
  }
};
</script>
