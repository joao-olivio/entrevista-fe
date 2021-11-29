<template>
  <div id="m-episode-card-container" class="m-episode-card-container" role="tabpanel">
    <template v-if="visibleEpisodes.length">
      <VCard
        v-for="(episode, index) in visibleEpisodes"
        :key="`${episode.title}-${index}`"
        :card="episode"
      />
    </template>

    <p v-else>No episodes for this category</p>
  </div>
</template>

<script>
import VCard from '@/components/molecules/VCard'

import { mapGetters } from 'vuex'

export default {
  name: 'VEpisodeCardContainer',

  components: {
    VCard
  },

  computed: {
    ...mapGetters('episodes', [
      'visibleEpisodes'
    ])
  }
}
</script>
