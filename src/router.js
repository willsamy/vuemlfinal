import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('./views/InicialPage.vue'),
  },
  {
    path: '/select-session',
    component: () => import('./views/SelectSession.vue'),
  },
  {
    path: '/dash-board-adv',
    component: () => import('./views/DashBoardAdv.vue'),
  },
  // Outras definições de rotas aqui
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;