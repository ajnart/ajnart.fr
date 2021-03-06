import { BrandGithub, BrandLinkedin } from 'tabler-icons-react';
import { InfoCardProps } from '../components/InfoCard';
import { WorkCardProps as ProjectCardProps } from '../components/WorkCard';
import {
  SiAmazonaws,
  SiCplusplus,
  SiDocker,
  SiFlutter,
  SiPython,
  SiReact,
  SiRust,
  SiTypescript,
} from 'react-icons/si';

export const links = {
  PhoneNumber: '+33677259540',
  Email: 'thomascamlong@gmail.com',
  GithubName: 'ajnart',
  GithubRepo: 'ajnart.fr',
  WebsiteName: 'ajnart.fr',
  LinkedinName: 'thomas-camlong',
  FormSpreeUrl: 'https://formspree.io/f/xqknyydj',
};

export const NavLinks = [
  { label: '/', link: '/' },
  { label: 'my cv', link: 'https://ajnart.github.io/' },
];

export const ProgrammingSkills = [
  {
    name: 'TypeScript',
    icon: SiTypescript,
    description:
      'Third year at Epitech, personal projects using **React**, **NextJS** and **Deno**.',
  },
  {
    name: 'React',
    icon: SiReact,
    description:
      'Several projects using React using various components librarires such as **Material UI**, **Chakra UI** and **Mantine**. React Native projects for my 3rd year at Epitech. **This** website is built using Mantine and NextJS ! Also did a one page serverless application during my internship at Mangrove.',
  },
  {
    name: 'Flutter',
    icon: SiFlutter,
    description:
      'Second and third year at Epitech, personal projects using **Flutter** and **Firebase**, also did a 6-weeks course on Udemy during spring 2021 about building full-stack apps with flutter. Love the framework and hope it continues to grow.',
  },
  {
    name: 'Cloud Computing',
    icon: SiAmazonaws,
    description:
      '6 months part time internship at Mangrove working as a junior AWS Cloud Architect, Epitech projects using **GPC** and **AWS**.',
  },
  {
    name: 'Python',
    icon: SiPython,
    description:
      '6 months as a backend developer using Python, PostgreSQL, Flask, QGIS at LumiTHD, Google Kickstart round 1 and 2 (2021)',
  },
  {
    name: 'DevOps',
    icon: SiDocker,
    description:
      'Raspberry PI home projects (automation mainly). Made a complex stack used to replace various streaming services by automating torrent downloads. CI/CD practices on all projects and docker-ising every project.',
  },
  {
    name: 'C/C++',
    icon: SiCplusplus,
    description:
      "Second year at Epitch, LeetCode algorithm subjects, usage of the language for compettitive programming at BattleDev and Google KickStart. RPG-like game in 2D with using C's SFML bindings. Personal projects embedded programming on Raspberry PI",
  },
  {
    name: 'Rust',
    icon: SiRust,
    description:
      'Language basics but interested in learning more. Did a small hangman cli game and [exercism.io](https://exercism.org/tracks/rust) exercices.',
  },
];

export const Jobs = [
  {
    title: 'Mangrove.ai',
    image: '/images/mangrove.png',
    description: 'AWS Cloud Architect',
    date: 'October 2021 - March 2022',
    link: 'https://mangrove.ai/',
    tags: ['AWS', 'Cloud', 'DevOps', 'Python', 'React'],
  },
  {
    title: 'LumiTHD',
    image: '/images/lumi.png',
    description: 'Python Backend Developer',
    date: 'Jully 2020 - February 2021',
    link: 'https://www.lumithd.fr/',
    tags: ['Python', 'PostgreSQL', 'Flask', 'QGIS', 'DevOps'],
  },
];

export const WhoAmI: InfoCardProps = {
  title: 'Thomas',
  description:
    '21 Year old student studying computer science at EPITECH in Bordeaux, France. I am interested in new programming technologies including but not limited to: Machine Learning, Flutter, DevOps techniques and embedded programming. Currently building Homarr, a homepage for your self-hosted services!',
  location: 'Bordeaux, France',
  imageUrl: 'https://avatars.githubusercontent.com/u/49837342?v=4',
  links: [
    { label: 'github', link: `https://github.com/${links.GithubName}`, icon: BrandGithub },
    {
      label: 'linkedin',
      link: `https://www.linkedin.com/in/${links.LinkedinName}`,
      icon: BrandLinkedin,
    },
  ],
};

export const WorkList: ProjectCardProps[] = [
  {
    title: 'MyNetflix',
    description:
      'Workshop made for Epitech students, explains how to use docker-compose to deploy a stack of containers that can act as a replacement for Netflix.',
    image: 'https://github.com/ajnart/mynetflix/blob/master/assets/mynetflix.png?raw=true',
    link: 'https://github.com/ajnart/mynetflix',
    tags: [
      {
        name: 'Docker',
        color: 'blue',
      },
    ],
  },
  {
    title: 'Simply Interpolated Master Password',
    description: 'Simp is a custom password generator based on an algorithm of your choosing.',
    image: 'https://wetry.tech/assets/img/deno/deno-logo.png',
    link: 'https://github.com/ajnart/simp',
    tags: [
      {
        name: 'TypeScript',
        color: 'blue',
      },
      {
        name: 'Deno',
        color: 'green',
      },
    ],
  },
  {
    title: 'Area',
    description:
      'A cross-platform application that regroups different services such as spotify, deezer and gmail and regroups them.',
    image: 'https://firebase.flutter.dev/img/flutterfire_300x.png',
    link: 'https://github.com/ajnart/area',
    tags: [
      {
        name: 'Flutter',
        color: 'blue',
      },
      {
        name: 'Firebase',
        color: 'red',
      },
    ],
  },
  {
    title: 'Dashboard',
    description:
      'A web application on which you can connect to different services like Spotify, Google and Github to interact with them.',
    image: 'https://www.m-sterspace.io/media/MERN.png',
    link: 'https://github.com/ajnart/dashboard',
    tags: [
      {
        name: 'Express',
        color: 'red',
      },
      {
        name: 'React',
        color: 'blue',
      },
      {
        name: 'NodeJS',
        color: 'green',
      },
    ],
  },
  {
    title: 'Flutter projects',
    description: 'Several Flutter projects made during Jully 2021. All accessible using web',
    image:
      'https://www.appstud.com/wp-content/uploads/2020/01/72AF9324-C50A-42F9-9236-C21DB13B90D9.png',
    link: 'https://ajnart.github.io/flutter/',
    tags: [
      {
        name: 'Flutter',
        color: 'blue',
      },
    ],
  },
];
