<template>
  <div class="card podcast">
    <div class="card-infos">
      <h3 class="card-title">{{ title }}</h3>
      <h6 class="creator-name">{{ creatorName }}</h6>
      <p class="creator-title">{{ creatorTitle }}</p>
    </div>
    <div class="card-actions">
      <play-btn
        ref="playBtn"
        size="32px"
        :state="buttonStatus"
        :have-progress="!!haveBeenPlayed"
        :progress="progress"
        @click.native="togglePlay"
      />
      <div class="podcast-time">
        <clock-icon :hours="hours" :minutes="minutes" size="13.33px" />
        <span class="podcast-duration">
          {{ timeFormated }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import PlayBtn from "../play-btn/play-btn.vue";
import ClockIcon from "../clock-icon/clock-icon.vue";
export default {
  name: "podcast-card",
  components: {
    PlayBtn,
    ClockIcon
  },
  props: {
    id: {
      type: Number
    },
    title: {
      type: String
    },
    time: {
      type: Number,
      default: 0
    },
    url: {
      type: String,
      default:
        "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_2MG.mp3"
    },
    creatorName: {
      type: String,
      default: "Anonimous"
    },
    creatorTitle: {
      type: String,
      default: "Colaborator"
    }
  },
  computed: {
    ...mapState("player", [
      "podcastLoaded",
      "playerStatus",
      "userPodcastsPlayed"
    ]),
    buttonStatus() {
      if (
        this.podcastLoaded &&
        this.podcastLoaded.id === this.id &&
        ["playing", "paused"].includes(this.playerStatus)
      ) {
        return "stop";
      } else {
        return "play";
      }
    },
    hours() {
      return Math.floor(this.time / (1000 * 60 * 60));
    },
    minutes() {
      return Math.floor(this.time / (1000 * 60));
    },
    hoursFormated() {
      if (this.hours > 0) {
        return this.hours + "h ";
      } else {
        return "";
      }
    },
    minutesFormated() {
      const remainingMinutes = this.minutes % 60;
      return remainingMinutes + "min";
    },
    timeFormated() {
      return `${this.hoursFormated}${this.minutesFormated}`;
    },
    haveBeenPlayed() {
      return this.userPodcastsPlayed.filter(p => p.podcastId === this.id)[0];
    },
    progress() {
      if (!this.haveBeenPlayed) {
        return 0;
      } else {
        return ((this.haveBeenPlayed.watchedTime * 100) / this.time) * 100;
      }
    }
  },
  methods: {
    ...mapActions("player", ["playPodcast", "stopPodcast"]),
    togglePlay() {
      if (this.buttonStatus === "stop") {
        this.stopPodcast();
      } else {
        this.playPodcast({
          id: this.id,
          title: this.title,
          creatorName: this.creatorName,
          creatorTitle: this.creatorTitle,
          url: this.url,
          time: this.time
        });
      }
    }
  }
};
</script>
