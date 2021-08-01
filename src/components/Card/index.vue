<template>
  <div class="card-content">
    <div>
      <h2 class="title-card">Data Structures</h2>
      <p class="author-card">Jacqueline Cardoso</p>
      <p class="carrer-card">Front-end Dev Leader</p>
    </div>

    <div class="card-content--play-time">
      <img class="play-card" src="../../assets/img/IconPlay.svg" />

      <div class="card-content--time">
        <i class="clock-card far fa-clock"></i>
        <p class="time-card">28min</p>
        <img class="img-author-card" src="../../assets/img/img-jaccardoso.png" />
      </div>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="css" scoped>
  .card-content {
    display: flex;
    justify-content: space-between;
    align-items: left;
    flex-direction: column;
    width: 176px;
    height: 218px;
    box-shadow: 0px 0px 20px #0000001A;
    padding: 32px;
    margin: 20px 8px;
    background-color: #ffffff;
  }

  .title-card {
    font-weight: 300;
    font-size: 28px;
    line-height: 32px;
    color: #000000;
    text-transform: uppercase;
    margin-bottom: 14px;
  }

  .author-card {
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .carrer-card {
    font-size: 13px;
    line-height: 13px;
    color: #777777;
  }

  .card-content--play-time {
    display: flex;
    margin-top: 72px;
    justify-content: space-between;
    align-items: center;

  }

  .card-content--time {
    display: flex;
  }

  .play-card {
    height: 32px;
    width: 32px;
  }

  .clock-card {
    font-size: 20px;
    margin-right: 10px;
  }

  .time-card {
    font-size: 12px;
    line-height: 19px;
    margin-right: 8px;
  }

  .img-author-card {
    display: none;
  }

  @media (min-width: 480px){
    .card-content {
      width: 198px;
      height: 278px;
    }

    .clock-card, .time-card {
      display: none;
    }

    .img-author-card {
      display: block;
      width: 48px;
    }
  }
</style>