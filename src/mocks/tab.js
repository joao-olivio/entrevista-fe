export const developers = [
  {
    title: 'data structures',
    name: 'Jacqueline Cardoso',
    jobTitle: 'Front-end Dev Leader',
    duration: '10 min',
  },
  {
    title: 'tech to watch in 2020',
    name: 'João Olivio',
    jobTitle: 'Front-end Dev Leader',
    duration: '20 min',
  },
  {
    title: 'how to get better at problem solving',
    name: 'Derrick Pierce',
    jobTitle: 'Front-end Dev Leader',
    duration: '30 min',
  },
  {
    title: 'new css logical properties',
    name: 'Amanda Poole',
    jobTitle: 'Front-end Intern',
    duration: '40 min',
  },
]

export const design = [
  {
    title: 'Designer 1',
    name: 'Jacqueline Cardoso',
    jobTitle: 'Designer Leader',
    duration: '10 min',
  },
  {
    title: 'Designer 2',
    name: 'Cardoso 2',
    jobTitle: 'Designer Leader 2',
    duration: '20 min',
  },
  {
    title: 'Designer 3',
    name: 'Jacqueline',
    jobTitle: 'Designer Leader 3',
    duration: '30 min',
  },
  {
    title: 'Designer 4',
    name: 'Hanna',
    jobTitle: 'Designer Leader 4',
    duration: '40 min',
  },
]
export const project = [
  {
    title: 'Project 1',
    name: 'Jacqueline Cardoso',
    jobTitle: 'Designer Leader',
    duration: '10 min',
  },
  {
    title: 'Project WATCH IN 2020',
    name: 'Cardoso 2',
    jobTitle: 'Designer Leader 2',
    duration: '20 min',
  },
  {
    title: 'Project 3',
    name: 'Jacqueline',
    jobTitle: 'Designer Leader 3',
    duration: '30 min',
  },
  {
    title: 'Project 4',
    name: 'Hanna',
    jobTitle: 'Designer Leader 4',
    duration: '40 min',
  },
]

export const tabs = [
  {
    title: 'All',
    content: {
      card: [...developers, ...design, ...project],
    },
  },
  {
    title: 'Developers',
    content: {
      card: developers,
    },
  },
  {
    title: 'design',
    content: {
      card: design,
    },
  },
  {
    title: 'Project Management',
    content: {
      card: project,
    },
  },
]
