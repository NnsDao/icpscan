import Home from './views/Home.vue'
import About from './views/About.vue'
import Detail from './views/Detail.vue'
import Project from './views/Project.vue'
import Rank from './views/Rank.vue'
import Account from './views/Account.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { 
    path: '/', 
    component: Home, 
    meta: { title: 'Home' } 
  
  },
  {
    path: '/about',
    meta: { title: 'About' },
    component: About,
  },
  {
    path: '/detail/:id',
    meta: { title: 'Detail' },
    component: Detail,
  },
  {
    path: '/project',
    meta: { title: 'Project' },
    component: Project,
  },
  {
    path: '/rank',
    meta: { title: 'Rank' },
    component: Rank,
  },
  {
    path: '/account/:id',
    meta: { title: 'Account' },
    component: Account,
  },
  { path: '/:path(.*)', component: NotFound },
]
