import Vue from 'vue';
import Vuex from 'vuex';
import contacts from './modules/contacts';

Vue.use(Vuex);

// eslint-disable-next-line no-undef
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    contacts,
  },
  strict: debug,
  plugins: [],
});
