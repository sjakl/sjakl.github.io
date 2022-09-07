
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/isHomePage.vue') },
      { path: '/isDesignCenter', component: () => import('pages/isDesignCenter.vue') },
      { path: '/isReports', component: () => import('pages/isReports.vue') },
      { path: '/isSettings', component: () => import('pages/isSettings.vue') },
      { path: '/isCustomers', component: () => import('pages/isCustomers.vue') },
      { path: '/help', component: () => import('pages/Help.vue') },
      { path: '/Todo', component: () => import('pages/Todo.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
