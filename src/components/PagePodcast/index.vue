<template>
    <div class="container">
        <Title />
        <div class="container-cards">
            <div class="wrapper-cards">
                <Cards />
            </div>
        </div>
        <Button />
    </div>
</template>

<script>
import Cards from '../Cards/index.vue'
import Button from '../Button/index.vue'
import Title from '../Title/index.vue'

export default {
  components: {
    Cards,
    Button,
    Title
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');

  h2, p, span, li {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
    text-align: left;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .container-cards {
    position: relative;
  }

  .wrapper-cards {
    width: 50vh;
    overflow-x: scroll;
  }

    @media (min-width: 480px) {
        .container-cards {
            position: static;
        }

        .wrapper-cards {
            width: 100%;
            overflow-x: auto;
        }
    }

</style>