<template>
  <section id="last-episodes" class="o-section">
    <div class="o-last-episodes">
      <div class="o-container">
        <div class="o-last-episodes__blue-circle"></div>
        <h2 class="o-last-episodes__title">Last Episodes</h2>
      </div>

      <div class="o-last-episodes__cards">
        <ul class="o-last-episodes__filters">
          <li
            :class="[
              'o-last-episodes__filter',
              {
                'o-last-episodes__filter--active': filterSelected === 'All',
              },
            ]"
            tabindex="0"
            role="button"
            :aria-pressed="filterSelected === 'All'"
            @click="filter('All')"
            @keyup.enter="filter('All')"
          >
            All
          </li>
          <li
            :class="[
              'o-last-episodes__filter',
              {
                'o-last-episodes__filter--active':
                  filterSelected === 'Development',
              },
            ]"
            tabindex="0"
            role="button"
            :aria-pressed="filterSelected === 'Development'"
            @click="filter('Development')"
            @keyup.enter="filter('Development')"
          >
            Development
          </li>
          <li
            :class="[
              'o-last-episodes__filter',
              {
                'o-last-episodes__filter--active': filterSelected === 'Design',
              },
            ]"
            tabindex="0"
            role="button"
            :aria-pressed="filterSelected === 'Design'"
            @click="filter('Design')"
            @keyup.enter="filter('Design')"
          >
            Design
          </li>
          <li
            :class="[
              'o-last-episodes__filter',
              {
                'o-last-episodes__filter--active': filterSelected === 'PM',
              },
            ]"
            tabindex="0"
            role="button"
            :aria-pressed="filterSelected === 'PM'"
            @click="filter('PM')"
            @keyup.enter="filter('PM')"
          >
            Project Management
          </li>
        </ul>
        <swiper ref="cardsSwiper" :options="swiperOption">
          <SwiperSlide v-for="(card, index) in cardsFiltered" :key="index">
            <Card :attributes="card" />
          </SwiperSlide>
          <div slot="scrollbar" class="swiper-scrollbar"></div>
        </swiper>
      </div>

      <div class="o-container">
        <Button variant="outline">View more</Button>
      </div>
    </div>
  </section>
</template>

<script>
import Button from '@/components/Button.vue'
import Card from '@/components/Card.vue'
import { Swiper, directive, SwiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'LastEpisodes',

  components: {
    Button,
    Card,
    Swiper,
    SwiperSlide,
  },

  directives: {
    swiper: directive,
  },

  props: {
    cards: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      cardsFiltered: [],

      filterSelected: 'All',

      swiperOption: {
        breakpoints: {
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        },
        keyboard: {
          enabled: true,
        },
        mousewheel: true,
        scrollbar: {
          el: '.swiper-scrollbar',
          hide: true,
        },
        slidesPerView: 1,
        spaceBetween: 16,
      },
    }
  },

  computed: {
    swiper() {
      return this.$refs.cardsSwiper.$swiper
    },
  },

  mounted() {
    this.swiper.slideTo(0, 1000, false)

    this.cardsFiltered = this.cards
  },

  methods: {
    filter(currentFilter) {
      if (currentFilter === 'All') {
        this.cardsFiltered = this.cards
        this.filterSelected = currentFilter
        return
      }

      this.cardsFiltered = this.cards.filter(
        (card) => card.area === currentFilter
      )
      this.filterSelected = currentFilter
    },
  },
}
</script>
