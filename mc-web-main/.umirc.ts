import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', component: '@/pages/Index' },
        // { path: '/bar', component: '@/pages/Bar' },
        // { path: '/news', component: '@/pages/News' },
      ]
    },
  ],
});
