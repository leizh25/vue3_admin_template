//对外暴露配置路由 (常量路由)
export const constantRoutes = [
  {
    //登录路由
    path: '/login',
    component: () => import('@/views/Login/Login.vue'),
    name: 'login', //明明路由
    meta: {
      title: '登录', //菜单标题
      hidden: true, //路由标题在菜单中是否隐藏,  true:隐藏   false不隐藏
    },
  },
  {
    //登录成功以后战术数据的路由
    path: '/',
    component: () => import('@/layout/Layout.vue'),
    name: 'layout',
    meta: {
      title: 'layout',
      hidden: false,
    },
    children: [
      {
        path: '/home',
        component: () => import('@/views/Home/Home.vue'),
        meta: {
          title: '首页',
          hidden: false,
        },
      },
      {
        path: '/ceshi',
        component: () => import('@/views/Home/Home.vue'),
        meta: {
          title: '测试',
          hidden: false,
        },
      },
    ],
  },
  {
    //404
    path: '/404',
    component: () => import('@/views/404/404.vue'),
    name: '404',
    meta: {
      title: '404',
      hidden: true,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'any',
    meta: {
      title: '任意路由',
      hidden: true,
    },
  },
]
