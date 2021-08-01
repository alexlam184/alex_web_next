import { nanoid } from 'nanoid';
import profilePic from '../public/icon/profile.jpg'
import teeaiprojectPic from '../public/project/teeai_01.png'

// HEAD DATA
export const headData = {
  title: 'Alex Lam - Story writer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Alex Lam',
  subtitle: 'Life as a comedian to code',
  cta: 'About me',
};

// ABOUT DATA
export const aboutData = {
  img: profilePic,
  paragraphOne: "Hey! I'm Alex from Hong Kong",
  paragraphTwo: 'I graduated from HKUST Computer Science.',
  paragraphThree: 'Welcome to my website! :) I am PC gamer,currently playing AOE 2. I love interacting with people & making others happy. So come say hi!',
  resume: 'https://drive.google.com/file/d/184H8MjF6B0pkFBXBeKpycBK-l1im89cP/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: teeaiprojectPic,
    title: 'Tee.AI',
    info: 'Blockly platform for Kids STEM education',
    info2: '',
    url: 'https://www.youtube.com/watch?v=M-sK2zdT6jM',
    repo: '', // if no repo, the button will not show up
  },

  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: '', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: 'Keep in touch with me',
  btn: 'Email',
  email: 'lamalex0211@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/alex-lam-724992152/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/alexlam184',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
