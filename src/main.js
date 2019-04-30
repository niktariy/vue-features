import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';
import App from './App';
import router from './router';
import store from './store/store';
import BaseInput from './components/UI/BaseInput/BaseInput';
import BaseSectionTemplate from './components/UI/BaseSectionTemplate';

Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.use(Vuex);

Vue.component('c-input', BaseInput);
Vue.component('section-template', BaseSectionTemplate);

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

new Vue({
  router,
  store,
  _,
  el: '#app',
  render: h => h(App),
}).$mount('#app');
