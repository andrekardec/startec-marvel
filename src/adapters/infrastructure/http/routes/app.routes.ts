import IRoute from '@adapters/infrastructure/http/contracts/IRoute';
import CharacterPage from '@presentation/pages/CharacterPage';
import CharactersPage from '@presentation/pages/CharactersPage';
import ComicPage from '@presentation/pages/ComicPage';
import ComicsPage from '@presentation/pages/ComicsPage';
import HomePage from '@presentation/pages/HomePage';

const appRoutes: IRoute[] = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    exact: true,
  },
  {
    path: '/comics',
    name: 'show.comics',
    component: ComicsPage,
    exact: true,
  },
  {
    path: '/comics/:id',
    name: 'show.comic',
    component: ComicPage,
    exact: true,
  },
  {
    path: '/characters',
    name: 'show.characters',
    component: CharactersPage,
    exact: true,
  },
  {
    path: '/characters/:id',
    name: 'show.character',
    component: CharacterPage,
    exact: true,
  },
];

export default appRoutes;
