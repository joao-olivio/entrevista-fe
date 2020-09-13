<template>
  <div>
    <div class="tabs">
      <a
        v-bind:href="cat.link"
        class="tab"
        v-for="cat in categories"
        v-on:click="filterEpisodes(cat.link)"
        :class="{ 'active': isSelected(cat) }"
      >
        {{ cat.text }}
      </a>
    </div>
    <div class="episodes">
      <article class="card" v-for="it in episodesFilter">
        <div class="top">
          <h3 class="title-card">{{ it.title }}</h3>
          <h4 class="author-card">{{ it.author }}</h4>
          <h5 class="responsability-card">{{ it.responsibility }}</h5>
        </div>
        <div class="bottom">
          <svg class="icon-play" alt="Reproduzir episódio" viewBox="0 0 40 40">
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
          <div class="listen-time">
            <svg viewBox="0 0 512 512">
              <path d="m256 512c-141.164062 0-256-114.835938-256-256s114.835938-256 256-256 256 114.835938 256 256-114.835938 256-256 256zm0-480c-123.519531 0-224 100.480469-224 224s100.480469 224 224 224 224-100.480469 224-224-100.480469-224-224-224zm0 0"/>
              <path d="m368 394.667969c-4.097656 0-8.191406-1.558594-11.308594-4.695313l-112-112c-3.007812-3.007812-4.691406-7.082031-4.691406-11.304687v-149.335938c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v142.699219l107.308594 107.308594c6.25 6.25 6.25 16.382812 0 22.632812-3.117188 3.136719-7.210938 4.695313-11.308594 4.695313zm0 0"/>
            </svg>
            {{it.time}}
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "episodes",
  props: {
    apiUrl: { type: String, required: true }
  },
  data() {
    return {
      allEpisodes: [
        {
          title: "how to get better at problem solving",
          author: "Jacqueline Cardozo",
          responsibility: "Front-end Dev Leader",
          src: "/images/autor.png",
          alt: "Autor",
          time: "45 min",
          category: "design"
        },
        {
          title: "tech to watch in 2020",
          author: "João Olivio",
          responsibility: "Front-end Dev Leader",
          src: "/images/autor.png",
          alt: "Autor",
          time: "50 min",
          category: "development"
        },
        {
          title: "how to get better at problem solving",
          author: "Derrick Pierce",
          responsibility: "Front-end Developer",
          src: "/images/autor.png",
          alt: "Autor",
          time: "5 min",
          category: "project-management"
        },
        {
          title: "new css logical properties",
          author: "Amanda Poole",
          responsibility: "Front-end Intern",
          src: "/images/autor.png",
          alt: "Autor",
          time: "45 min",
          category: "development"
        }
      ],
      categories: [
        {
          link: "all",
          text: "All"
        },
        {
          link: "development",
          text: "Development"
        },
        {
          link: "design",
          text: "Design"
        },
        {
          link: "project-management",
          text: "Project Management"
        }
      ],
      category: "",
      episodesFilter: []
    };
  },
  computed: {},
  mounted() {
    this.episodesFilter = this.allEpisodes;
    this.category = "all";
  },
  methods: {
    filterEpisodes: function(category) {
      event.preventDefault();
      this.category = category;
      if (this.category == "all") {
        this.episodesFilter = this.allEpisodes;
      } else {
        this.episodesFilter = this.allEpisodes.filter(episode => {
          return episode["category"] === this.category;
        });
      }
    },
    isSelected: function(cat) {
      return cat.link === this.category;
    }
  }
};
</script>
