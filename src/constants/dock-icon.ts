import { PATHS } from '../constants/paths';

export const DOCK_ICONS = [
  {
    path: PATHS.home,
    bgColor: 'bg-purple',
    className: 'hover:bg-purple animate-icon-load opacity-0',
    tooltip: 'Home',
    icon: 'House',
    type: 'icon',
    isExternalLink: false,
    animationDelay: '300ms',
  },
  {
    path: PATHS.projects,
    bgColor: 'bg-orange-400',
    className: 'hover:bg-orange-400 animate-icon-load opacity-0',
    tooltip: 'Project',
    icon: 'BriefcaseBusiness',
    type: 'icon',
    isExternalLink: false,
    animationDelay: '350ms',
  },
  {
    path: PATHS.about,
    bgColor: 'bg-blue-700',
    className: 'hover:bg-blue-700 animate-icon-load opacity-0',
    tooltip: 'About',
    icon: 'CircleUserRound',
    type: 'icon',
    isExternalLink: false,
    animationDelay: '400ms',
  },
  {
    path: PATHS.spellbook,
    bgColor: 'bg-spellbook',
    className: 'hover:bg-spellbook animate-icon-load opacity-0',
    tooltip: 'SpellBook',
    icon: 'BookMarked',
    type: 'icon',
    isExternalLink: true,
    animationDelay: '550ms',
  },

  {
    type: 'divider',
    className: 'hidden md:block h-6 w-[2px] animate-icon-load opacity-0',
  },
  {
    path: PATHS.mailto,
    bgColor: 'bg-red-500',
    className: 'hover:bg-red-500 hidden md:block animate-icon-load opacity-0',
    tooltip: 'jaypancholi94@gmail.com',
    icon: 'Mail',
    type: 'icon',
    isExternalLink: true,
    animationDelay: '450ms',
  },
  {
    path: PATHS.linkedin,
    bgColor: 'bg-linkedin',
    className: 'hover:bg-linkedin hidden md:block animate-icon-load opacity-0',
    tooltip: 'Linkedin',
    icon: 'Linkedin',
    type: 'icon',
    isExternalLink: true,
    animationDelay: '500ms',
  },
  {
    path: PATHS.github,
    bgColor: 'bg-github',
    className: 'hover:bg-github hidden md:block animate-icon-load opacity-0',
    tooltip: 'Github',
    icon: 'Github',
    type: 'icon',
    isExternalLink: true,
    animationDelay: '550ms',
  },
];
