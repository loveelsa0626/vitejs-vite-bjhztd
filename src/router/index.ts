import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path : "/",
    redirect : {name : "login"}
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/components/Login.vue'),
    meta: {
      hidden: true,
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});


export default router;
