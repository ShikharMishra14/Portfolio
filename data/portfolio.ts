import type { NavLink, Stat, SkillGroup, ExperienceItem, Project, Award, ContactLink } from '../types';

export const navLinks: NavLink[] = [
  { label: 'about', href: '#about' },
  { label: 'skills', href: '#skills' },
  { label: 'experience', href: '#experience' },
  { label: 'projects', href: '#projects' },
  { label: 'education', href: '#education' },
  { label: 'contact', href: '#contact' },
];

export const heroStats: Stat[] = [
  { value: '5+', label: 'years exp' },
  { value: '40%', label: 'perf boost' },
  { value: '4+', label: 'devs mentored' },
  { value: 'AWS', label: 'certified' },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages & Databases',
    skills: ['Python', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SQL', 'MySQL', 'PostgreSQL'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React.js', 'React Native', 'Redux', 'Node.js', 'Flask', 'FastAPI', 'Apollo GraphQL', 'Vite'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS S3', 'AWS Lambda', 'DynamoDB', 'API Gateway', 'EC2', 'CloudWatch', 'Docker', 'Kubernetes'],
  },
  {
    title: 'Testing & Practices',
    skills: ['Jest', 'Pytest', 'CI/CD', 'Jenkins', 'GitHub Actions', 'Git', 'System Design', 'Agile'],
  },
];

export const experiences: ExperienceItem[] = [
  {
    role: 'Module Lead, Full Stack Developer',
    company: 'Sopra Steria',
    location: 'Noida, India',
    duration: 'July 2021 — Present',
    bullets: [
      'Designed and developed scalable React.js applications using TypeScript, Redux, and modern UI libraries, improving performance by 40% while building secure interfaces with DOMPurify, Chart.js, and React DnD.',
      'Developed and maintained Python (Flask)-based microservices and REST/GraphQL APIs using SQLAlchemy ORM, implementing JWT-based authentication, RBAC, and robust backend architecture.',
      'Implemented and optimized CI/CD pipelines using Jenkins and GitHub Actions, deployed on AWS (EC2, S3, Lambda, API Gateway) with CloudWatch monitoring — improving deployment efficiency by 25% and code quality by 20%.',
      'Mentored 4+ junior developers, fostering engineering best practices and elevating team technical standards.',
    ],
  },
];

export const projects: Project[] = [
  {
    icon: '⚡',
    title: 'Scalable Real-Time Social Platform',
    description:
      'A full-stack web application supporting 1000+ concurrent users with real-time features, JWT authentication, optimized APIs, and secure session management.',
    stack: ['React.js', 'Redux Toolkit', 'TypeScript', 'Flask', 'GraphQL', 'MySQL', 'SocketIO', 'AWS EC2', 'JWT'],
  },
  {
    icon: '☁️',
    title: 'Microservices AWS Architecture',
    description:
      'Cloud-native microservices on AWS using EC2, S3, Lambda, and API Gateway. Integrated CloudWatch monitoring and automated CI/CD pipelines for continuous delivery.',
    stack: ['AWS EC2', 'AWS Lambda', 'API Gateway', 'CloudWatch', 'Jenkins', 'GitHub Actions', 'Docker'],
  },
];

export const awards: Award[] = [
  { title: 'Pinnacle Award — Sopra Steria' },
  { title: 'KALAM Award — Excellence recognition' },
  { title: 'SPOT Awards (×2) — Outstanding delivery' },
  { title: 'Falcon Team Excellence Award' },
];

export const contactLinks: ContactLink[] = [
  {
    icon: '✉',
    label: 'Email',
    value: 'shikharm14@gmail.com',
    href: 'mailto:shikharm14@gmail.com',
  },
  {
    icon: 'in',
    label: 'LinkedIn',
    value: 'linkedin.com/in/shikhar-mishra-366933174',
    href: 'https://linkedin.com/in/shikhar-mishra-366933174',
  },
  {
    icon: '☎',
    label: 'Phone · Sultanpur, UP',
    value: '+91 92649 67525',
    href: 'tel:+919264967525',
  },
];
