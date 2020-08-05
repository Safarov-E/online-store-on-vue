import Vue from 'vue';
import App from './App.vue';
import {store} from './store';
import {router} from './router/index';
import VueResource from 'vue-resource';

Vue.use(VueResource)
Vue.http.options.root = 'http://the-majesty-of-vuejs-2/new/vuebackend/products.php';

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
