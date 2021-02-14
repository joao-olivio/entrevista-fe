<template>
  <div>
    <nav>
      <ul class="tabs">
        <li
          tabindex="0"
          class="tab"
          v-for="(category, index) in categories"
          :key="index"
          @click="filterEpisodes(category.value)"
          :class="{ 'active': isSelected(category) }"
        >
          {{ category.text }}
        </li>
      </ul>
    </nav>
    <article>
      <div class="episodes">
        <div class="card" tabindex="0" v-for="(episode, index) in filteredEpisodes" :key="index" >
          <div class="card__header">
            <h3 class="card__title">{{ episode.title }}</h3>
            <h4 class="card__author">{{ episode.author }}</h4>
            <h5 class="card__author-position">{{ episode.authorPosition }}</h5>
          </div>
          <div class="card__footer">
            <svg class="icon-play" aria-label="Play episode" alt="Reproduzir episódio" viewBox="0 0 40 40" tabindex="0">
              <defs>
                <clipPath id="a">
                  <path
                    class="a"
                    d="M20,40A20.005,20.005,0,0,1,12.218,1.573,20,20,0,0,1,27.783,38.428,19.86,19.86,0,0,1,20,40ZM16,11V29l12-9Z"
                  />
                </clipPath>
              </defs>
              <path
                class="a"
                d="M20,40A20.005,20.005,0,0,1,12.218,1.573,20,20,0,0,1,27.783,38.428,19.86,19.86,0,0,1,20,40ZM16,11V29l12-9Z"
              />
            </svg>
            <div class="episode-duration">
              <svg viewBox="0 0 512 512">
                <path d="m256 512c-141.164062 0-256-114.835938-256-256s114.835938-256 256-256 256 114.835938 256 256-114.835938 256-256 256zm0-480c-123.519531 0-224 100.480469-224 224s100.480469 224 224 224 224-100.480469 224-224-100.480469-224-224-224zm0 0"/>
                <path d="m368 394.667969c-4.097656 0-8.191406-1.558594-11.308594-4.695313l-112-112c-3.007812-3.007812-4.691406-7.082031-4.691406-11.304687v-149.335938c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v142.699219l107.308594 107.308594c6.25 6.25 6.25 16.382812 0 22.632812-3.117188 3.136719-7.210938 4.695313-11.308594 4.695313zm0 0"/>
              </svg>
              {{episode.duration}}
            </div>
          </div>
        </div>
        <div class="card-aux"></div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "episodes",
  props: {
    apiUrl: { type: String, required: true }
  },
  computed: {
    filteredEpisodes() {
      return this.allEpisodes.filter((episode) => episode.show);
    },
  },
  data() {
    return {
      allEpisodes: [
        {
          title: "Data structures",
          author: "Jacqueline Cardozo",
          authorPosition: "Front-end Dev Leader",
          alt: "Autor",
          duration: "45 min",
          category: "design",
          show: false,
          new: true,
        },
        {
          title: "Tech to watch in 2020",
          author: "João Olivio",
          authorPosition: "Front-end Dev Leader",
          alt: "Autor",
          duration: "1h 30min",
          category: "development",
          show: false,
          new: true,
        },
        {
          title: "How to get better at problem solving",
          author: "Derrick Pierce",
          authorPosition: "Front-end Developer",
          alt: "Autor",
          duration: "1h 50min",
          category: "project-management",
          show: false,
          new: true,
        },
        {
          title: "New css logical properties",
          author: "Amanda Poole",
          authorPosition: "Front-end Intern",
          alt: "Autor",
          duration: "2h 15min",
          category: "development",
          show: false,
          new: true,
        }
      ],
      categories: [
        {
          value: "new",
          text: "New"
        },
        {
          value: "development",
          text: "Development"
        },
        {
          value: "design",
          text: "Design"
        },
        {
          value: "project-management",
          text: "Project Management"
        }
      ],
      category: "",
    };
  },
  mounted() {
    this.filterEpisodes("new");
  },
  methods: {
    filterEpisodes: function(category) {
      this.category = category;
      this.allEpisodes.forEach(episode => {
        if(category === episode.category) {
          episode.show = true;
        } else if(category === "new") {
          episode.new ? episode.show = true : episode.show = false;
        } else {
          episode.show = false;
        }
      });
    },
    isSelected: function(category) {
      return category.value === this.category;
    }
  }
};
</script>
