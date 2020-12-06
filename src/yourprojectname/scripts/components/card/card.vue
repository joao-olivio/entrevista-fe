<template>
  <div>
    <b-card :title="title" tag="article" class="card-template">
      <h6 class="card-sub-title">{{ subtitle }}</h6>
      <b-card-text>
        {{ text }}
      </b-card-text>
      <div class="footer-card">
        <a href="#">
          <app-icon
            :icon-name="actionicon"
            :width="actioniconwidth"
            :height="actioniconheight"
          >
            <component :is="'icon-' + actionicon"></component>
          </app-icon>
        </a>
        <div class="duration">
          <font-awesome-icon :icon="['far', icon]" width="64" height="64" />
          <span>{{ duration }}</span>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    title: { type: String },
    subtitle: { type: String },
    text: { type: String },
    actionicon: { type: String },
    actioniconwidth: { type: String },
    actioniconheight: { type: String },
    icon: { type: String },
    duration: { type: String },
  },
};
</script>
