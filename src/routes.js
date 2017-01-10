import About from './components/about'
import Blog from './components/Blog'
import Friends from './components/Friends'

export default [
  {
    path: '/',
    redirect: '/about'
  },
  {
    name: 'ABOUT',
    path: '/about',
    component: About
  },
  {
    name: 'BLOG',
    path: '/blog',
    component: Blog
  },
  {
    name: 'FRIENDS',
    path: '/friends',
    component: Friends
  }
]