<script>
export default {
  name: "Card",
  props: {
    title: {
      type: String,
      default: () => ""
    },
    subtitle: {
      type: String,
      default: () => ""
    },
    text: {
      type: String,
      default: () => ""
    },
    icon: {
      type: String,
      default: () => "play"
    },
    img: {
      type: String,
      default: () => ""
    },
    imgAlt: {
      type: String,
      default: () => ""
    },
    buttonAlt: {
      type: String,
      default: () => ""
    }
  }
};
</script>

<template>
  <article class="card" @click="$emit('card-click')" draggable="false">
    <slot name="card-header">
      <h2 class="card__header">
        {{ title }}
      </h2>
    </slot>
    <slot name="card-body">
      <div class="card__body">
        <strong>
          <p class="card__body__subtitle">{{ subtitle }}</p>
          <span class="card__body__text">{{ text }}</span>
        </strong>
      </div>
    </slot>
    <slot name="card-footer">
      <div class="card__footer">
        <button
          class="card__footer__button"
          @click="$emit('button-click')"
          :alt="buttonAlt"
        >
          <Icon v-if="icon" :icon-name="icon" size="lg" />
        </button>
        <img
          v-if="img"
          :title="imgAlt"
          :src="`../../../images/${img}.png`"
          :alt="imgAlt"
        />
      </div>
    </slot>
  </article>
</template>
