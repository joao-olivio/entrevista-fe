<template>
    <div class="menu">
        <ul class="menu--ul">
            <li>
              <input type="radio" id="all" name="category" value="all" @click="updateActiveCards('all')">
              <label for="all">All</label>
            </li>
            <li>
              <input type="radio" id="development" name="category" value="development" @click="updateActiveCards('development')">
              <label for="development">Development</label>
            </li>
            <li>
              <input type="radio" id="design" name="category" value="design" @click="updateActiveCards('design')">
              <label for="design">Design</label>
            </li>
            <li>
              <input type="radio" id="projectmanagement" name="category" value="project-management" @click="updateActiveCards('projectmanagement')">
              <label for="projectmanagement">Project Management</label>
            </li>
        </ul>
    </div>

    <div class="wrapper-card-component">
        <CardsFactory
        v-for="card in filterCards"
        :key="card.title"
        :data="card"
        :active-cards="activeCards"
        />
    </div>
</template>

<script>
import CardsFactory from '../CardsFactory/index.vue'

const cards = [
        {title: 'Data Structures', author: 'Jacqueline Cardoso', carrer: 'Front-end Dev Leader', pic:'img-jacquelinecardoso.png', tags: ['all', 'development', 'projectmanagement']},
        {title: 'Tech to watch in 2020', author: 'João Olivio', carrer: 'Front-end Dev Leader', pic:'img-joaoolivio.png', tags: ['all', 'development']},
        {title: 'How to get better at problem solving', author: 'Derrick Pierce', carrer: 'Front-end Developer', pic:'img-derrickpierce.png', tags: ['all', 'development', 'projectmanagement']},
        {title: 'New css logical properties', author: 'Amanda Poole', carrer: 'Front-end Dev Intern', pic:'img-amandapoole.png', tags: ['all', 'development', 'design']}
];

export default {
  components: {
    CardsFactory
  },

  data () {
    return {
      cards,
      activeCards: 'all'
    }
  },

  methods: {
    updateActiveCards(id) {
      this.activeCards = id;
    }
  },

  computed: {
    filterCards() {
      const filteredCards = [];
      cards.forEach((card) => {
        const tags = card.tags;
        if (tags.indexOf(this.activeCards) > -1) {
          filteredCards.push(card);
          console.log(filteredCards)
        }
      });
      return filteredCards;
    }
  }

}
</script>

<style scoped>
  .wrapper-card-component {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .menu {
    display: none;
  }

  @media (min-width: 1024px) {
    .menu {
        display: flex;
        margin-bottom: 0px;
        justify-content: center;
    }

    .menu--ul {
        display: flex;
        list-style: none;
    }

    .menu--ul li {
        margin: 0px 10px;
        text-transform: uppercase;
        font-size: 15px;
        line-height: 20px;
        letter-spacing: 2.31px;
        font-weight: 700;
        border-bottom: 3px solid transparent;
        padding-bottom: 10px;
    }

    input[type='radio']{
      display: none;
    }

    label {
      cursor: pointer;
    }

    input[type="radio"]:hover+label {
        border-bottom: 3px solid lightgray;
        padding-bottom: 10px;
    }

    input[type="radio"]:checked+label {
        border-bottom: 3px solid #000000;
        padding-bottom: 10px;
    }
  }
  
</style>