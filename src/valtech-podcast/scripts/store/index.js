import player from "./player.js";

const state = () => ({
  menuOpened: false
});

const actions = {
  findPodcasts(context, tag = "all") {
    let podcasts = [
      {
        id: 1,
        title: "Data structures",
        time: 1000 * 60 * 48,
        tags: ["development"],
        creator: {
          name: "Jacqueline Cardoso",
          title: "Front-end Dev Leader"
        },
        createdAt: "2021-04-10"
      },
      {
        id: 2,
        title: "Tech to watch in 2020",
        time: 1000 * 60 * 60 + 1000 * 60 * 15,
        tags: ["development"],
        creator: {
          name: "Jacqueline Cardoso",
          title: "Front-end Dev Leader"
        },
        createdAt: "2020-06-10"
      },
      {
        id: 3,
        title: "How to keep your design consistent",
        time: 1000 * 60 * 60 + 1000 * 60 * 56,
        tags: ["design", "project management"],
        creator: {
          name: "Thomas Cardoso",
          title: "Designer"
        },
        createdAt: "2021-01-10"
      },
      {
        id: 4,
        title: "How to get better at problem solving",
        time: 1000 * 60 * 60 + 1000 * 60 * 56,
        tags: ["project management"],
        creator: {
          name: "Derrick Pierce",
          title: "Front-end Dev Leader"
        },
        createdAt: "2020-12-10"
      },
      {
        id: 5,
        title: "How to create audio waveform",
        time: 1000 * 60 * 60 + 1000 * 60 * 56,
        tags: ["development", "design"],
        creator: {
          name: "Gustavo Junqueira",
          title: "Front-end Developer"
        },
        createdAt: "2021-05-01"
      }
    ];
    if (tag !== "all") {
      podcasts = podcasts.filter(p => p.tags.includes(tag));
    }
    if (podcasts.length > 0) {
      podcasts = podcasts.sort((a, b) => {
        const aTime = new Date(a.createdAt).getTime();
        const bTime = new Date(b.createdAt).getTime();
        return aTime > bTime ? 1 : -1;
      });
    }
    setTimeout(() => {
      return podcasts.filter((p, i) => i < 4);
    }, 500);
  }
};

export default {
  state,
  actions,
  modules: {
    player
  }
};
