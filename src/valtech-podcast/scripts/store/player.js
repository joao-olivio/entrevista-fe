const state = () => ({
  podcastLoaded: null,
  playerStatus: "idle",
  userPodcastsPlayed: []
});

const mutations = {
  LOAD_PODCAST(state, podcast) {
    state.podcastLoaded = podcast;
  },
  UNLOAD_PODCAST(state) {
    state.podcastLoaded = null;
  },
  SET_STATUS(state, status) {
    state.playerStatus = status;
  },
  UPDATE_USER_WATCHTIME(state, { podcastId, watchedTime }) {
    const haveWatched = state.userPodcastsPlayed
      .map((p, index) => {
        return {
          ...p,
          index
        };
      })
      .filter(p => p.podcastId === podcastId)[0];
    if (!haveWatched) {
      state.userPodcastsPlayed.push({
        podcastId,
        watchedTime
      });
    } else {
      state.userPodcastsPlayed.splice(haveWatched.index, 1, {
        podcastId,
        watchedTime
      });
    }
  }
};

const actions = {
  playPodcast({ commit }, podcast) {
    commit("LOAD_PODCAST", podcast);
    commit("SET_STATUS", "playing");
  },
  stopPodcast({ commit }) {
    commit("UNLOAD_PODCAST");
    commit("SET_STATUS", "idle");
  },
  pausePodcast({ commit }) {
    commit("SET_STATUS", "paused");
  },
  updateUserWatchtime({ commit }, { podcastId, watchedTime }) {
    commit("UPDATE_USER_WATCHTIME", { podcastId, watchedTime });
  }
};

export default {
  namespace: true,
  state,
  mutations,
  actions
};
