// Keep the initial and default state just in case
const defaultState = () => ({
  selectedTabCategory: 'New',
  tabs: [
    {
      category: 'New'
    },
    {
      category: 'Development'
    },
    {
      category: 'Design'
    },
    {
      category: 'Project Management'
    }
  ],
  episodes: [
    {
      category: [
        'New',
        'Development'
      ],
      title: 'Data Structures',
      author: 'Jacqueline Cardozo',
      author_role: 'Front-end Dev Leader',
      link: '1-data-structures',
      duration: 60 * 45
    },
    {
      category: [
        'New',
        'Development'
      ],
      title: 'Tech to watch in 2020',
      author: 'João Olívio',
      author_role: 'Front-end Dev Leader',
      link: '2-tech-to-watch-in-2020',
      duration: 60 * 75
    },
    {
      category: [
        'New',
        'Design'
      ],
      title: 'How to keep your design consistent',
      author: 'Thomas Cardoso',
      author_role: 'Designer',
      link: '3-how-to-keep-your-design-consistent',
      duration: 60 * 110
    },
    {
      category: [
        'New',
        'Development'
      ],
      title: 'How to get better at problem solving',
      author: 'Derrick Pierce',
      author_role: 'Front-end Dev Leader',
      link: '4-how-to-get-better-at-problem-solving',
      duration: 60 * 155
    },
    {
      category: [
        'Development'
      ],
      title: 'New logical CSS properties',
      author: 'Amanda Poole',
      author_role: 'Front-end Intern',
      link: '5-new-logical-css-properties',
      duration: 60 * 110
    }
  ]
})

const state = { ...defaultState() }

export default state
