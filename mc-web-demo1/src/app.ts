import ReactDOM from 'react-dom';
import * as app from '@/.umi/umi';

// if (!(window as any).isMain) {
//   console.log('app::', app)
//   if (app.bootstrap) {
//     setTimeout(() => {
//       app.bootstrap().then(() => {
//         app.mount();
//       });
//     }, 1000);
//   }
// }
// // 应用加载之前
// export const bootstrap = () => {
//   console.log('bootstrap');
// };
// // 应用 render 之前触发
// export const mount = () => {
//   console.log('mount');

//   // ReactDOM.render(app, document.getElementById('demo1'));
// };
// // 应用卸载之后触发
// export const unmount = () => {
//   console.log('unmount');
//   // ReactDOM.unmountComponentAtNode(document.getElementById('demo1') as Element);
// };
// export const qiankun = {
//   // 应用加载之前
//   async bootstrap() {
//     console.log('bootstrap');
//   },
//   // 应用 render 之前触发
//   async mount() {
//     console.log('mount');
//     // ReactDOM.render(app, document.getElementById('demo1'));
//   },
//   // 应用卸载之后触发
//   async unmount() {
//     console.log('unmount');
//     // ReactDOM.unmountComponentAtNode(document.getElementById('demo1') as Element);
//   },
//   async update(props) {
//     console.log('update props', props);
//   }
// };
// console.log('qiankun::', qiankun);
