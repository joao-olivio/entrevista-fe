<template>
  <div class="d-flex fd-column card-episode" ref="">
    <div class="card-section">
      <span class="card-title">{{ episode.title }}</span>
    </div>
    <div class="card-section">
      <h4 class="card-person-name">{{ episode.name }}</h4>
      <span class="card-job-title">{{ episode.jobTitle }}</span>
    </div>
    <div class="card-section card-footer">
      <div class="card-footer">
        <a aria-label="Play" href="#">
          <img src="../../images/play_circle.svg" />
        </a>
        <div class="d-flex">
          <img
            style="width: 40px; height: 40px"
            src="../../images/clock.png"
            alt="clock icon"
          />
          <span class="as-center" style="padding-left: 10px ;">
            {{ episode.duration }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card-episode",
  props: {
    episode: { type: Object, required: true }
  }
};
</script>
