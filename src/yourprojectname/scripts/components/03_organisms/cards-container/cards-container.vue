<template>
  <main class="cards-container">
    <article class="card" v-for="card in cardsFiltered">
      <div class="card-header">
        <h2 class="heading2">{{card[0]}}</h2>
        <h3 class="heading3">{{card[1]}}</h3>
        <h4 class="heading4">{{card[2]}}</h4>
      </div>
      <div class="card-footer">
        <slot/>
        <Duration v-bind:podcast-duration="card[3]"/>
      </div>
    </article>
  </main>
</template>

<script>

export default {
  name: "cards-container",
  props: {
    cardsInfo: { type: String, required: true }
  },
  data() {
    return {
      cardsArray: [],
      cardsFiltered: [],
      currentTag: "all"
    };
  },
  watch: {
    "$store.state.selectedTag": function() {
      if (this.$store.state.selectedTag != "all") {
        this.cardsFiltered = this.cardsArray.filter(card => card[4] == this.$store.state.selectedTag);
      } else {
        this.cardsFiltered = [...this.cardsArray];
      };
      this.isBiggerThanFour();
    }
  },
  methods: {    
    isBiggerThanFour: function () {
      if (this.cardsFiltered.length > 4) {
        this.cardsFiltered.length = 4;
      }
    }
  },
  created() {
    this.cardsArray = JSON.parse(this.cardsInfo.replace("],]", "]]"));
    this.cardsFiltered = [...this.cardsArray];
    this.isBiggerThanFour();
  }
};
</script>
