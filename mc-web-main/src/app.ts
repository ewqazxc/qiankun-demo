
import { registerMicroApps, start } from 'qiankun';
const isDev = process.env.NODE_ENV === 'development';

console.log(process.env.NODE_ENV, 'isDev::', isDev)

registerMicroApps([
  {
    name: 'demo1', // app name registered
    entry: '//localhost:8001',
    container: '#demo1',
    activeRule: '/sub/demo1',
  },
  {
    name: 'demo2',
    // entry: { scripts: ['//localhost:8002/main.js'] },
    entry: '//localhost:8002',
    container: '#demo2',
    activeRule: '/sub/demo2',
  },
]);
start();