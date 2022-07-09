import Vue from 'vue';
import App from './App.vue';

import VueRouter from 'vue-router';
//一级
import Add from '@/views/MyAdd.vue';
import Arr from '@/views/MyArr.vue';
import One from '@/views/MyOne.vue';
//二级
import OneFn from '@/views/Scound/OneFn.vue';
import TwoFn from '@/views/Scound/TwoFn.vue';
import ThreeFn from '@/views/Scound/ThreeFn .vue';
import FourFn from '@/views/Scound/FourFn.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/add',
    component: Add,
  },
  {
    path: '/arr',
    component: Arr,
  },
  {
    path: '/one',
    component: One,
    children: [
      {
        path: 'onefn',
        component: OneFn,
      },
      {
        path: 'twofn',
        component: TwoFn,
      },
      {
        path: 'threeFn',
        component: ThreeFn,
      },
      {
        path: 'fourFn',
        component: FourFn,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
