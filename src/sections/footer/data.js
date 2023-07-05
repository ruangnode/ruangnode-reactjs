import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaTiktok } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { FaYoutube } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';
import { BsMedium } from 'react-icons/bs';

export const links = [
  { id: 1, link: '#', title: 'Home' },
  // { id: 2, link: '#about', title: 'Why Ruangnode ?' },
  { id: 3, link: '#services', title: 'Services' },
  { id: 4, link: '#portfolio', title: 'Networks' },
  { id: 5, link: '#contact', title: 'Contact' },
];

export const socials = [
  { id: 1, link: 'https://instagram.com/lh.habibie', icon: <AiOutlineInstagram /> },
  { id: 2, link: 'https://twitter.com/@ruangnode', icon: <AiOutlineTwitter /> },
  { id: 3, link: 'https://www.tiktok.com/@ruangnode', icon: <FaTiktok /> },
  { id: 4, link: 'https://github.com/ruangnode', icon: <AiFillGithub /> },
  { id: 5, link: 'https://youtube.com/@ruangnode', icon: <FaYoutube /> },
  { id: 6, link: 'https://t.me/+QX9rBlMCmwA2ZGY1', icon: <FaTelegram /> },
  { id: 7, link: 'https:ruangnode.medium.com', icon: <BsMedium /> },
];
