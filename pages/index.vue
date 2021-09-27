<template>
  <main>
    <Hero :attributes="heroOptions" />

    <LastEpisodes :cards="cards" />

    <About :attributes="aboutOptions" />

    <ComingNext :attributes="comingNextOptions" />

    <Subscribe :attributes="subscribeOptions" />
  </main>
</template>

<script>
import Hero from '@/components/Home/_Hero.vue'
import LastEpisodes from '@/components/Home/_LastEpisodes.vue'
import About from '@/components/Home/_About.vue'
import ComingNext from '@/components/Home/_ComingNext.vue'
import Subscribe from '@/components/Home/_Subscribe.vue'

export default {
  name: 'Home',

  components: {
    About,
    ComingNext,
    Hero,
    LastEpisodes,
    Subscribe,
  },

  data() {
    return {
      cards: [
        {
          title: 'Data Structures',
          name: 'Jacqueline Cardozo',
          jobTitle: 'Front-end Dev Leader',
          duration: '28 min',
          area: 'Development',
        },
        {
          title: 'tech to watch in 2020',
          name: 'João Olivio',
          jobTitle: 'Front-end Dev Leader',
          duration: '15 min',
          area: 'Development',
        },
        {
          title: 'how to get better at problem solving',
          name: 'Derrick Pierce',
          jobTitle: 'Front-end Developer',
          duration: '58 min',
          area: 'Development',
        },
        {
          title: 'new css logical properties',
          name: 'Amanda Poole',
          jobTitle: 'Front-end Intern',
          duration: '99 min',
          area: 'Development',
        },
        {
          title: 'Data Structures',
          name: 'Jacqueline Cardozo',
          jobTitle: 'Product Design Leader',
          duration: '64 min',
          area: 'Design',
        },
        {
          title: 'Lorem Ipsum',
          name: 'Jacqueline Cardozo',
          jobTitle: 'Product Design Leader',
          duration: '64 min',
          area: 'Design',
        },
        {
          title: 'Mussum Ipsum',
          name: 'Jacqueline Cardozo',
          jobTitle: 'Product Design Leader',
          duration: '64 min',
          area: 'PM',
        },
      ],

      heroOptions: {
        title: 'The Podcast',
        cta: 'Learn more',
      },

      aboutOptions: {
        title: 'About the show',
        description: [
          'So they stick around, kicking out feedback and I entertain it as if I need that',
          'I had a talk with my uncle and he agreed that my privacy about the only thing.',
        ],
        image: 'guy.png',
        alt: 'A guy smiling',
      },

      comingNextOptions: {
        title: 'Coming next',
        description: [
          'Body placeholder for text paragraph. A paragraph is a self-contained unit of text dealing with a particular point or idea is a self-contained unit of text dealing with a particular point or idea.',
        ],
        image: 'woman.png',
        alt: 'A woman smiling holding a smartphone',
        name: 'Danny Baker',
        jobPosition: 'Fake Company CTO',
      },

      subscribeOptions: {
        title: 'Subscribe',
        description: [
          'Subscribe to our newsletter, to be always aware of our company events.',
          'We build the most powerful and flexible tools for internet commerce.',
        ],
        cta: 'Send',
      },
    }
  },

  mounted() {
    document.title = 'The Podcast - Valtech'
  },
}
</script>
