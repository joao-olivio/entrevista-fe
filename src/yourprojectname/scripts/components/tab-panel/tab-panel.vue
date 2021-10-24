<template>
  <div>
    <ul class="nav nav-tabs">
      <li
        v-for="(category, index) in categoryList"
        :key="index"
        class="nav-item"
      >
        <a
          :aria-label="category.name"
          class="nav-link"
          @click.prevent="setActive(category.value)"
          :class="{ active: isActive(category.value) }"
          href="#new"
          >{{ category.name }}</a
        >
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <template v-for="(category, i) in categoryList">
        <div
          :key="i"
          v-show="isActive(category.value)"
          class="tab-pane"
          id="new"
        >
          <card-episode
            v-for="(episode, e) in filteredEpisodesList(category.value)"
            :key="e"
            :episode="episode"
            class="animateCard"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "tab-panel",
  data() {
    return {
      categoryList: [
        { name: "New", value: "new" },
        { name: "Development", value: "development" },
        { name: "Design", value: "design" },
        { name: "Project Management", value: "projectManagement" }
      ],
      episodesList: [
        {
          title: "Data structures",
          name: "Jacqueline Cardozo",
          jobTitle: "Front-end Dev Leader",
          duration: "45 min",
          category: "development"
        },
        {
          title: "Tech to watch in 2020",
          name: "João Olivio",
          jobTitle: "Front-end Dev Leader",
          duration: "1h 15 min",
          category: "development"
        },
        {
          title: "How to get better at problem solving",
          name: "Derrick Pierce",
          jobTitle: "Front-end Developer",
          duration: "2h 35 min",
          category: "development"
        },
        {
          title: "New CSS logical properties",
          name: "Amanda Poole",
          jobTitle: "Front-end Intern",
          duration: "1h 50 min",
          category: "development"
        },
        {
          title: "How to keep your design consistent",
          name: "Thomas Cardoso",
          jobTitle: "Designer",
          duration: "1h 50 min",
          category: "design"
        },
        {
          title: "How to improve your project",
          name: "John Silver",
          jobTitle: "Front-end Dev Leader",
          duration: "1h",
          category: "projectManagement"
        }
      ],
      activeItem: "new"
    };
  },
  methods: {
    filteredEpisodesList(category) {
      if (category === "new") {
        return this.episodesList;
      } else {
        return this.episodesList.filter(ep => ep.category === category);
      }
    },
    parseJSON(response) {
      response.json();
    },
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      this.activeItem = menuItem;
    }
  }
};
</script>

<style lang="scss">
.nav {
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 32px;
  @media only screen and (max-width: 1020px) {
    display: none;
  }
}

.tab-pane {
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding-bottom: 20px;
  width: 100%;
  margin-top: 20px;
  flex-wrap: nowrap;
  overflow-x: scroll;
}

.nav-link {
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 2px;
  color: black;
  text-decoration: none;
  &:hover {
    color: black;
  }
}
.animateCard {
  animation-name: fadeIn;
  animation-duration: 2s;
  // animation-fill-mode: forwards;
}
.active {
  border-bottom: 2px solid black;
  padding-bottom: 3px;
  animation-name: fadeBorder;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeBorder {
  0% {
    border-color: rgba($color: #000000, $alpha: 0);
  }
  100% {
    border-color: rgba($color: #000000, $alpha: 1);
  }
}
</style>
