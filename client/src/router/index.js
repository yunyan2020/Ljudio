import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../pages/LandingPage.vue';
import HomePage from '../pages/HomePage.vue';
import RegisterPage from '../pages/RegisterPage.vue';
import LoginPage from '../pages/LoginPage.vue';
import SearchPage from '../pages/SearchPage.vue';
import Playlists from '../pages/Playlists.vue';
import SinglePlaylist from '../pages/SinglePlaylist.vue'

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/Home',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/Register',
    name: 'Register',
    component: RegisterPage
  },
  {
    path: '/Login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    name: 'SearchPage',
    path: '/search',
    component: SearchPage
  },
  {
    path: '/playlists',
    name: 'Playlists',
    component: Playlists
  },
  {
    path: '/playlists/:id',
    name: 'SinglePlaylist',
    component: SinglePlaylist
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;