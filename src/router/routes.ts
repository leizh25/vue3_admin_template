//对外暴露配置路由 (常量路由)
export const constantRoutes = [
  {
    //登录路由
    path: '/login',
    component: () => import('@/views/Login/Login.vue'),
    name: 'login', //明明路由
  },
  {
    //登录成功以后战术数据的路由
    path: '/',
    component: () => import('@/layout/Layout.vue'),
    name: 'layout',
  },
  {
    //404
    path: '/404',
    component: () => import('@/views/404/404.vue'),
    name: '404',
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'any',
  },
]
