import { getField, updateField } from 'vuex-map-fields';

const CLEAR_FIELDS = 'CLEAR_FIELDS';

const state = {
  name: '',
  email: '',
};

// getters
const getters = {
  getField,
};

// actions
const actions = {
  // sendFormData() {
  //
  // },
  clearFields({ commit }) {
    commit(CLEAR_FIELDS);
  },
};

// mutations
const mutations = {
  updateField,

  [CLEAR_FIELDS]() {
    state.name = '';
    state.email = '';
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
