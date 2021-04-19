<template>
  <div class="container podcast-list">
    <tab-bar v-if="screenHeight >= 1024" v-model="tab" :tabs="tabs" />
    <Caroucel
      :items="podcasts"
      :item-width="itemWidth"
      :item-margin="itemMargin"
    >
      <template v-slot:default="{ item }">
        <podcast-card v-bind="item" />
      </template>
    </Caroucel>
    <div class="row justify-center cta">
      <button class="btn">
        view more
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import PodcastCard from "../podcast-card/podcast-card.vue";
import TabBar from "../tab-bar/tab-bar.vue";
import Caroucel from "../caroucel/caroucel.vue";
export default {
  name: "podcast-list",
  components: {
    PodcastCard,
    TabBar,
    Caroucel
  },
  data: () => ({
    tab: 0,
    error: false,
    errorMsg: null,
    podcasts: []
  }),
  computed: {
    ...mapState(["screenWidth", "screenHeight"]),
    tabs() {
      return ["all", "development", "design", "project management"];
    },
    itemWidth() {
      return this.screenWidth < 1024 ? 240 : 262;
    },
    itemMargin() {
      return this.screenWidth < 1024 ? 16 : 32;
    }
  },
  watch: {
    tab(val) {
      this.makeRequest(this.tabs[val]);
    }
  },
  created() {
    this.makeRequest();
  },
  methods: {
    ...mapActions(["findPodcasts"]),
    makeRequest(tag = "all") {
      this.error = false;
      this.errorMsg = null;
      this.podcasts = [];
      this.findPodcasts(tag)
        .then(response => {
          const podcasts = response.map(r => {
            return {
              ...r,
              url:
                "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_2MG.mp3",
              creatorName: r.creator.name,
              creatorTitle: r.creator.title
            };
          });
          if (podcasts.length > 0) {
            let count = 0;
            const pushPodcast = () => {
              const delay = count ? 200 : 0;
              const timeout = setTimeout(() => {
                this.podcasts.push(podcasts[count]);
                count++;
                if (podcasts[count]) {
                  pushPodcast();
                }
                clearTimeout(timeout);
              }, delay);
            };
            pushPodcast();
          }
        })
        .catch(err => {
          this.error = true;
          this.errorMsg = err.message;
        });
    }
  }
};
</script>
