import Vue from 'vue';
import Vuex from 'vuex';
import contacts from './modules/contacts';
import trainingRequest from './modules/trainingRequest';

Vue.use(Vuex);

// eslint-disable-next-line no-undef
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    trainingRequest,
    contacts,
  },
  strict: debug,
  plugins: [],
});
