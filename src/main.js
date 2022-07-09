import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import MyAdd from '@/views/MyAdd.vue';
import MyDPP from '@/views/MyDPP.vue';
import MyIndex from '@/views/MyIndex.vue';
import MyOEE from '@/views/MyOEE.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/add',
    component: MyAdd,
  },
  {
    path: '/dpp',
    component: MyDPP,
  },
  {
    path: '/index',
    component: MyIndex,
  },
  {
    path: '/oee',
    component: MyOEE,
  },
];

const router = new VueRouter({ routes });

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
