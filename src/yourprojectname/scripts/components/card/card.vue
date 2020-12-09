<template itemscope itemtype="http://schema.org/Person">
  <b-card :title="title" tag="article" class="card-template">
    <h6 class="card-sub-title" itemprop="name">{{ subtitle }}</h6>
    <b-card-text itemprop="jobTitle">
      {{ text }}
    </b-card-text>
    <div class="footer-card">
      <a href="#" tabindex="0">
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
