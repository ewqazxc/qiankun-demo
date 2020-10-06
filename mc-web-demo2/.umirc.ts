import { defineConfig } from 'umi';

export default defineConfig({
  base: '/sub/demo2/',
  mountElementId: 'demo2',
  publicPath: '/demo2/',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  qiankun: {
    slave: {},
  },
});
