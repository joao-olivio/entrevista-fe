<template>
  <div class="card podcast">
    <div class="card-infos">
      <h3 class="card-title">{{ title }}</h3>
      <h6 class="creator-name">{{ creatorName }}</h6>
      <p class="creator-title">{{ creatorTitle }}</p>
    </div>
    <div class="card-actions">
      <play-btn ref="playBtn" />
      <div class="podcast-time">
        <clock-icon :hours="hours" :minutes="minutes" />
        {{ timeFormated }}
      </div>
    </div>
  </div>
</template>

<script>
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
    }
  }
};
</script>
