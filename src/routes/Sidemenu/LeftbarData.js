import { Bookmark, ExitToApp, Games, Home, ListAlt, PlayCircleOutline, Settings, TabletMac, ViewCarousel, WbSunny } from "@mui/icons-material";
import NewspaperIcon from '@mui/icons-material/Newspaper';
export const LeftbarData = [
    {
      title: 'Dashboard',
      path: '/dashboard',
      icon: <Home />,
      cName: 'nav-text'
    },
    {
      title: 'News',
      path: '/news',
      icon: <NewspaperIcon />,
      cName: 'nav-text'
    },
    {
      title: 'Weather',
      path: '/weather',
      icon: <WbSunny />,
      cName: 'nav-text'
    },
    {
      title: 'Todo Lists',
      path: '/todo-list',
      icon: <ListAlt />,
      cName: 'nav-text'
    },
    {
      title: 'Slideshow',
      path: '/slideShow',
      icon: <ViewCarousel />,
      cName: 'nav-text'
    },
    {
      title: 'Games',
      path: '/games',
      icon: <Games />,
      cName: 'nav-text'
    },
    {
      title: 'Videos',
      path: '/videos',
      icon: <PlayCircleOutline />,
      cName: 'nav-text'
    },
    {
      title: 'Apps',
      path: '/slider',
      icon: <TabletMac />,
      cName: 'nav-text'
    },
    {
      title: 'Collections',
      path: '/carousel',
      icon: <Bookmark />,
      cName: 'nav-text'
    },
    {
      title: 'Settings',
      path: '/settings',
      icon: <Settings />,
      cName: 'nav-text'
    },
    {
      title: 'Login',
      path: '/login',
      icon: <ExitToApp />,
      cName: 'nav-text'
    },
  ];
