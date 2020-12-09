<template>
  <div class="container">
    <ul class="nav nav-tabs justify-content-center">
      <li class="nav-item" v-for="tab in tabs" :key="tab.key">
        <a
          class="nav-link"
          @click.prevent="setActive(tab.key)"
          :class="{ active: isActive(tab.key) }"
          >{{ tab.name }}</a
        >
      </li>
    </ul>
    <div class="tab-content py-3" id="myTabContent">
      <div
        class="tab-pane fade"
        v-for="tab in tabs"
        :key="tab.key"
        :class="{ 'active show fadingEffect d-inline-flex': isActive(tab.key) }"
        :id="tab.key"
      >
        <card
          class="m-3"
          v-for="card in tab.cards"
          :key="card.title"
          :title="card.title"
          :subtitle="card.name"
          :text="card.jobTitle"
          :actionicon="card.actionicon"
          :actioniconwidth="card.actioniconwidth"
          :actioniconheight="card.actioniconheight"
          :icon="card.icon"
          :duration="card.duration"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card-tabs",
  props: {
    tabs: {
      type: Array,
    },
  },
  data() {
    return {
      activeItem: this.tabs[0].key,
    };
  },
  methods: {
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      this.activeItem = menuItem;
    },
  },
};
</script>
