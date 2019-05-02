const CLEAR_FIELDS = 'CLEAR_FIELDS';
const INCREMENT_STEP = 'INCREMENT_STEP';
const DECREMENT_STEP = 'DECREMENT_STEP';

const state = {
  courses: [
    {
      id: 'basic',
      title: 'Basic',
      selected: false,
      available: true
    },
    {
      id: 'comfort',
      title: 'Comfort',
      selected: true,
      available: true
    },
    {
      id: 'all_included',
      title: 'All included',
      selected: false,
      available: true
    },
  ],
  selectedCourse: '',
  name: '',
  email: '',
  requestStep: 1,
  requestSubmitted: false
};

// getters
const getters = {
  getAvailableCourses: state => {
    return state.courses.filter(course => course.available);
  },
  getSelectedCourse: state => {
    return state.courses.filter(course => course.selected).pop();
  },
  getCourseById: (state) => (id) => {
    return state.courses.find(course => course.id === id);
  },
  requestSubmitted: state => {
    return state.requestSubmitted;
  }
};

// actions
const actions = {
  clearFields: ({commit}) => {
    commit(CLEAR_FIELDS);
  },
};

// mutations
const mutations = {
  submitForm: (state) => {
    this.name = state.name;
  },
  [INCREMENT_STEP]: state => {
    if (state.requestStep < 2) {
      state.requestStep++;
    } else {
      state.requestSubmitted = true;
    }
  },
  [DECREMENT_STEP]: state => {
    if (state.requestStep < 2) {
      return;
    }
    state.requestStep--;
  },
  [CLEAR_FIELDS]: () => {
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
