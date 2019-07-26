import Home from '@/views/Home'

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Portfolio'),
  },
]
