import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import userProfile from '../views/userProfile';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user/:userId',
    name: 'userProfile',
    component: userProfile
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to : RouteLocationNormalized, from : , next) => {
  const isAdmin = true;
  const requiersAdmin = to.matched.some(record => record.meta.requiersAdmin);
})

export default router