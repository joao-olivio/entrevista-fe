<template>
  <transition name="slide-up-transition">
    <div v-if="!!podcastLoaded" class="podcast-player">
      <div class="left-side">
        <play-btn size="60px" :state="buttonState" @click.native="togglePlay" />
      </div>
      <div class="right-side">
        <waveform
          :audio-url="this.podcastLoaded.url"
          :progress="progress"
          @seek="updateTime"
        />
        <div class="podcast-info">
          <span class="title">
            {{ computedInfo }}
          </span>
          <span class="time">
            {{ computedTime }}
          </span>
        </div>
      </div>
      <audio
        ref="audioPlayer"
        autoplay
        style="display: none;"
        @timeupdate="timeUpdate"
        @loadeddata="loadedData"
        @ended="stopPodcast"
      >
        <source :src="podcastLoaded.url" type="audio/mp3" />
      </audio>
    </div>
  </transition>
</template>

<script>
import { mapActions, mapState } from "vuex";
import PlayBtn from "../play-btn/play-btn.vue";
import Waveform from "../waveform/waveform.vue";

export default {
  name: "podcast-player",
  components: {
    PlayBtn,
    Waveform
  },
  data: () => ({
    loadedAudioLenght: 0,
    timePlayed: 0
  }),
  computed: {
    ...mapState("player", [
      "podcastLoaded",
      "playerStatus",
      "userPodcastsPlayed"
    ]),
    computedInfo() {
      if (!this.podcastLoaded) {
        return "";
      } else {
        return `${this.podcastLoaded.title} - ${this.podcastLoaded.creatorName}`;
      }
    },
    computedTime() {
      if (!this.podcastLoaded) {
        return "";
      } else {
        return `${this.formatTime(this.timePlayed)} / ${this.formatTime(
          this.podcastLoaded.time / 1000
        )}`;
      }
    },
    buttonState() {
      if (this.playerStatus === "playing") {
        return "pause";
      } else if (this.playerStatus === "paused") {
        return "play";
      }
    },
    progress() {
      return this.timePlayed / this.loadedAudioLenght;
    },
    haveBeenPlayed() {
      if (this.podcastLoaded) {
        return this.userPodcastsPlayed.filter(
          p => p.podcastId === this.podcastLoaded.id
        )[0];
      } else {
        return null;
      }
    }
  },
  watch: {
    playerStatus(val) {
      if (val === "idle") {
        this.timePlayed = 0;
      }
    }
  },
  methods: {
    ...mapActions("player", [
      "playPodcast",
      "stopPodcast",
      "pausePodcast",
      "updateUserWatchtime"
    ]),
    formatTime(time) {
      const hours = Math.floor(time / (60 * 60));
      const minutes = Math.floor(time / 60) % 60;
      const seconds = Math.floor(time) % 60;
      return `${hours ? hours + ":" : ""}${
        minutes ? `${minutes < 10 ? "0" : ""}` + minutes + ":" : "00:"
      }${seconds < 10 ? "0" + seconds : seconds}`;
    },
    timeUpdate() {
      if (this.playerStatus !== "idle") {
        this.timePlayed = this.$refs.audioPlayer.currentTime;
      }
      if (this.podcastLoaded) {
        this.updateUserWatchtime({
          podcastId: this.podcastLoaded.id,
          watchedTime: this.timePlayed * 1000
        });
      }
    },
    togglePlay() {
      if (this.buttonState === "play") {
        this.$refs.audioPlayer.play();
        this.playPodcast();
      } else {
        this.$refs.audioPlayer.pause();
        this.pausePodcast();
      }
    },
    loadedData() {
      this.loadedAudioLenght = this.$refs.audioPlayer.duration;
      if (this.haveBeenPlayed) {
        const time = this.haveBeenPlayed.watchedTime / 1000;
        this.$refs.audioPlayer.currentTime = time;
      }
    },
    updateTime(time) {
      const diff = Math.abs(this.progress - time);
      if (diff > 0.01) {
        this.$refs.audioPlayer.currentTime = this.loadedAudioLenght * time;
      }
    }
  }
};
</script>
