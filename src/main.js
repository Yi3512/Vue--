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
//三级
import BlogFn from '@/views/Scound/Three/BlogFn.vue';
import FaxFn from '@/views/Scound/Three/FaxFn.vue';

Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    redirect:'/add'
  },
  {
    path: '/add',
    name:'add',
    component: Add,
  },
  {
    path: '/arr',
    name:'arr',
    component: Arr,
  },
  {
    path: '/one',
    name:'one',
    component: One,
    children: [
      {
        path: 'onefn',
        name:'onefn',
        component: OneFn,
      },
      {
        path: 'twofn',
        name:'twofn',
        component: TwoFn,
      },
      {
        path: 'threefn',
        name:'threefn',
        component: ThreeFn,
        children: [
          {
            path:'blog',
            component: BlogFn,
          },
          {
            path:'fax',
            component: FaxFn,
          }
        ],
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
