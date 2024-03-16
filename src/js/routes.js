
import HomePage from '../pages/home.t4';
import EditorPage from '../pages/editor.t4';
import MessagesPage from '../pages/messages.t4';
import FriendshipPage from '../pages/friendship.t4';
import SettingsPage from '../pages/settings.t4';
import ProfilePage from '../pages/profile.t4';
import NotFoundPage from '../pages/404.t4';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/editor/',
    component: EditorPage,
  },
  {
    path: '/messages/',
    component: MessagesPage,
  },
  {
    path: '/friendship/',
    component: FriendshipPage,
  },
  {
    path: '/settings/',
    component: SettingsPage,
  },
  {
    path: '/profile/',
    component: ProfilePage
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;