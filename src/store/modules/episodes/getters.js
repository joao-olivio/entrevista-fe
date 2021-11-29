export function visibleEpisodes (state, getters) {
  return getters.episodesByCategory.slice(0, 4)
}

export function episodesByCategory (state, getters) {
  return state.episodes.filter(episode => episode.category.includes(state.selectedTabCategory))
}
