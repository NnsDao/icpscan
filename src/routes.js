import Home from './views/Home.vue'
import About from './views/About.vue'
import Detail from './views/Detail.vue'
import Project from './views/Project.vue'
import Rank from './views/Rank.vue'
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
    path: '/detail',
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
  { path: '/:path(.*)', component: NotFound },
]
