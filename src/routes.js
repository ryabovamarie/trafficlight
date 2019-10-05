import VueRouter from 'vue-router';
import Lights from './pages/Lights';

export default new VueRouter({
  routes: [{
      path: '/:color(red|yellow|green)',
      component: Lights
    },
    {
      path: '/',
      redirect: '/red'
    }
  ],
  mode: 'history'
});
