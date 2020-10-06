import { defineConfig } from 'umi';

export default defineConfig({
  base: '/sub/demo1/',
  mountElementId: 'demo1',
  publicPath: '/demo1/',
  // hash: true,
  // outputPath: '../eamweb',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  plugins: [
  ],
  qiankun: {
    slave: {},
  },
});
