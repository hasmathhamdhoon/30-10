export const profile = {
  name: 'Alex Morgan',
  role: 'Software Engineer & Independent Builder',
  location: 'Brooklyn, NY',
  email: 'hello@example.com',
  image:
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=85',
  intro:
    'I turn thoughtful ideas into useful, beautifully engineered digital products.',
  about:
    'I’m a software engineer who enjoys working where product thinking meets the details of implementation. From the first sketch to the final interaction, I care about building experiences that feel clear, useful, and a little bit delightful.',
  interests:
    'Lately, I’ve been exploring creative tools, the future of independent software, and how small teams can make a meaningful impact. Away from the screen, I’m usually looking for a new coffee spot or a good trail.',
  goal:
    'My next chapter: collaborating with curious people on products that make everyday work feel more human.',
}

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/', short: 'GH' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', short: 'in' },
  { label: 'X / Twitter', href: 'https://x.com/', short: 'X' },
]

export const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'CSS / Sass', 'Accessibility'],
  },
  {
    title: 'Backend & data',
    skills: ['Node.js', 'REST APIs', 'PostgreSQL', 'GraphQL', 'Python'],
  },
  {
    title: 'Product & craft',
    skills: ['UI engineering', 'Design systems', 'Prototyping', 'Figma', 'Git'],
  },
]

export const projects = [
  {
    number: '01',
    name: 'Fieldnotes',
    category: 'Productivity · Concept project',
    description:
      'A calm, flexible space for collecting ideas and connecting the dots between them.',
    stack: ['React', 'TypeScript', 'CSS'],
    theme: 'fieldnotes',
    mark: 'F.',
    repo: 'https://github.com/',
    demo: 'https://example.com/',
  },
  {
    number: '02',
    name: 'Goodfolk',
    category: 'Community · Concept project',
    description:
      'A small-business directory concept designed to make discovering local makers feel personal.',
    stack: ['Next.js', 'Node.js', 'PostgreSQL'],
    theme: 'goodfolk',
    mark: 'g',
    repo: 'https://github.com/',
    demo: 'https://example.com/',
  },
  {
    number: '03',
    name: 'Tempo',
    category: 'Developer tools · Concept project',
    description:
      'An approachable dashboard concept for making personal project rhythms easier to understand.',
    stack: ['React', 'D3', 'Tailwind'],
    theme: 'tempo',
    mark: 't.',
    repo: 'https://github.com/',
    demo: 'https://example.com/',
  },
]

export const experience = [
  {
    type: 'experience',
    period: '2022 — Present',
    title: 'Software Engineer',
    organization: 'Independent / Sample Studio',
    description:
      'Building web products with a focus on thoughtful interfaces, reliable systems, and close collaboration.',
  },
  {
    type: 'experience',
    period: '2020 — 2022',
    title: 'Frontend Developer',
    organization: 'Sample Digital Co.',
    description:
      'Worked across design and engineering to deliver responsive web experiences and reusable UI patterns.',
  },
  {
    type: 'education',
    period: '2016 — 2020',
    title: 'B.S. in Computer Science',
    organization: 'Example University',
    description:
      'Coursework in software engineering, human-computer interaction, and data structures.',
  },
]
