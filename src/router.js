import { createRouter, createWebHashHistory } from 'vue-router';
import Dashboard from './pages/Dashboard.vue';
import Overview from './pages/Overview.vue';
import Tugas2 from './pages/Tugas2.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/overview',
    name: 'Overview',
    component: Overview
  },
  {
    path: '/tugas2',
    name: 'Tugas2',
    component: Tugas2
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
