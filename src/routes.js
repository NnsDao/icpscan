import Home from './views/Home.vue'
import About from './views/About.vue'
import Detail from './views/Detail.vue'
import Project from './views/Project.vue'
import Rank from './views/Rank.vue'
import Account from './views/Account.vue'
import NotFound from './views/NotFound.vue'
import Chart from './views/Chart.vue'
import Canisters from './views/Canisters.vue'
import Neurons from './views/Neurons.vue'
import Subnet from './views/Subnet.vue'
import Principals from './views/Principals.vue'
import Line from './views/Line.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { 
    path: '/', 
    component: Home, 
    meta: { title: 'Home',local:'home' } 
  
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
  {
    path: '/chart',
    meta: { title: 'Chart' },
    component: Chart,
  },
  {
    path: '/canisters',
    meta: { title: 'canisters' },
    component: Canisters,
  },
  {
    path: '/subnet',
    meta: { title: 'subnet' },
    component: Subnet,
  },
  {
    path: '/principals',
    meta: { title: 'principal' },
    component: Principals,
  },
  {
    path: '/neurons',
    meta: { title: 'neurons' },
    component: Neurons,
  },
  {
    path: '/line',
    meta: { title: 'Chart' },
    component: Line,
  },
  { path: '/:path(.*)', component: NotFound },
]
