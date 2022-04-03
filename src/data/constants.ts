import { BrandGithub, BrandLinkedin } from 'tabler-icons-react';
import { InfoCardProps } from '../components/InfoCard';
import { WorkCardProps } from '../components/WorkCard';

export const links = {
  PhoneNumber: '+33677259540',
  Email: 'thomascamlong@gmail.com',
  GithubName: 'ajnart',
  GithubRepo: 'ajnart.fr',
  WebsiteName: 'ajnart.fr',
  LinkedinName: 'thomas-camlong',
};

export const NavLinks = [
  { label: '/', link: '/' },
  { label: 'about me', link: '/about' },
  { label: 'portfolio', link: '/work' },
  { label: 'cv', link: 'https://ajnart.github.io/' },
];

export const WhoAmI: InfoCardProps = {
  title: 'Thomas',
  description: 'Je suis turbo méga',
  location: 'Bordeaux, France',
  imageUrl: 'https://avatars.githubusercontent.com/u/49837342?v=4',
  links: [
    { label: 'github', link: `https://github.com/${links.GithubName}`, icon: BrandGithub },
    { label: 'linkedin', link: `https://www.linkedin.com/in/${links.LinkedinName}`, icon: BrandLinkedin },
  ],
};

export const WorkList: WorkCardProps[] = [
  {
    title: 'MyNetflix',
    description:
      'Workshop made for Epitech students, explains how to make a Docker-compose to deploy a stack of containers that can act as a replacement for Netflix.',
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
];
