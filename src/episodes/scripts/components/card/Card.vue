<script>
import truncate from "lodash/truncate";
export default {
  name: "card",
  props: {
    id: {
      type: Number,
      required: true
    },
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
    hoverText: {
      type: String,
      default: () => ""
    },
    hoverIcon: {
      type: String,
      default: () => "clock"
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
  },
  computed: {
    isTouchDevice() {
      return "ontouchstart" in window;
    }
  },
  data() {
    return {
      onHover: false
    };
  },
  methods: {
    // Mirroring the ellipsis directive implementation
    // so that it won't lose reactivity by replacing innerHTML.
    truncateString(string, limit = 50) {
      const dots = "...";
      return string.length > limit
        ? truncate(string, {
            length: limit - dots.length,
            omission: dots
          })
        : string;
    }
  }
};
</script>

<template>
  <article
    class="card"
    @click="$emit('card-click', id)"
    draggable="false"
    @mouseenter="onHover = true"
    @mouseleave="onHover = false"
  >
    <slot name="card-header">
      <div class="card__header">
        <h2 class="card__header__text" :title="title">
          {{ truncateString(title, 35) }}
        </h2>
      </div>
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
          @click.stop="$emit('button-click', id)"
          :alt="buttonAlt"
        >
          <icon v-if="icon" :icon-name="icon" size="lg" />
        </button>
        <transition name="spin" mode="out-in">
          <img
            v-if="img && !onHover && !isTouchDevice"
            :title="imgAlt"
            :src="`../../../images/${img}.png`"
            :alt="imgAlt"
          />
          <div class="card__footer__icon" v-else>
            <icon icon-name="clock" />
            <span>{{ hoverText }}</span>
          </div>
        </transition>
      </div>
    </slot>
  </article>
</template>
