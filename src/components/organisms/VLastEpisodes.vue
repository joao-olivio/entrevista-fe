<template>
  <section class="o-last-episodes container">
    <VTitleContainer>
      <template #decorative-background-text>
        Episodes
      </template>

      <template #title>
        <span>Last </span>
        <span>Episodes</span>
      </template>

      <template #custom-content>
        <div class="a-title-container__decorative-blue-ball" />
      </template>
    </VTitleContainer>

    <VTabContainer />

    <VEpisodeCardContainer />

    <VButton class="a-button--secondary" to="podcasts">
      View More
    </VButton>
  </section>
</template>

<script>
import VTabContainer from '@/components/molecules/VTabContainer'
import VEpisodeCardContainer from '@/components/molecules/VEpisodeCardContainer'

import VTitleContainer from '@/components/atoms/VTitleContainer'
import VButton from '@/components/atoms/VButton'

export default {
  name: 'VLastEpisodes',
  components: {
    VTitleContainer,
    VButton,
    VTabContainer,
    VEpisodeCardContainer
  }
}
</script>
