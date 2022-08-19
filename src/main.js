// (async function () {
//     const {bootstrap, mount, unmount} = await import('./bootstrap1')
//     export {bootstrap, mount, unmount}
// })()

// import('./bootstrap1').then(()=> {
//     export {bootstrap, mount, unmount}
// })
    
const {bootstrap, mount, unmount} = await import('./bootstrap1')
export {bootstrap, mount, unmount}

// import './public-path';
// import Vue from 'vue';
// import VueRouter from 'vue-router';
// import App from './App.vue';
// import routes from './router';
// import microStore from './store';
// // import store from './store';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// import axios from './axios'
// // import Vuex from 'vuex'

// // Vue.use(Vuex);
// // import VueAxios from 'vue-axios'
// Vue.prototype.microStore = microStore;
// Vue.prototype.$axios = axios;

// Vue.config.productionTip = false;
// Vue.use(ElementUI);

// let router = null;
// let instance = null;
// function render(props = {}) {
//   const { container, store} = props;
// //   const { container} = props;
//   Vue.prototype.$store = store;
//     console.log("\\\\\\\\\\\\\\=========子接收到store：", container, store)
//   router = new VueRouter({
//     base: window.__POWERED_BY_QIANKUN__ ? '/outpNurse/' : '/',
//     mode: 'history',
//     routes,
//   });

//   instance = new Vue({
//     router,
//     store,
//     render: (h) => h(App),
//   }).$mount(container ? container.querySelector('#app1') : '#app1');
//   Vue.observable(store)
// }

// // 独立运行时
// if (!window.__POWERED_BY_QIANKUN__) {
//   render();
// }

// export async function bootstrap(props = {}) {
//     // props.store
//   console.log('app1 [vue] vue app bootstraped');
// }
// export async function mount(props) {
//   console.log('app1 [vue] props from main framework');
//   props.onGlobalStateChange((state, prev) => {
//     // state: 变更后的状态; prev 变更前的状态
//     console.log('子组件：', state, prev);
//   });

//   render(props);
// }
// export async function unmount() {
//   instance.$destroy();
//   instance.$el.innerHTML = '';
//   instance = null;
//   router = null;
// }