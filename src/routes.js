import Links from './components/links'
import About from './components/about'

const routes = [
  {
    title: 'Home',
    path: '/',
    component: Links,
    exact: true
  }, {
    title: 'About',
    path: '/about',
    component: About,
    exact: true
  }
]

export default routes;
