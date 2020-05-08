import api from '@/api';

const getInitialState = () => ({
  items: [],
  isLoading: false,
});

const getApiMethod = (moduleName) => api[moduleName];

const getItemClass = (c) => c;

export default {
  state: getInitialState(),
  getters: {},
  actions: {
    async loadItems({ commit }, { reload }) {
      try {
        commit('setLoading', true);
        if (reload) commit('clearItems');
        const response = await getApiMethod()();
        if (response?.data?.length > 0) {
          response.data.forEach((item) => commit('addItem', item));
        }
      } catch (e) {
        // TODO: Add proper handling using dispatch
      } finally {
        commit('setLoading', false);
      }
    },
    reloadItems({ dispatch }) {
      dispatch('loadItems', { reload: true });
    },
    initialLoadItems({ dispatch }) {
      dispatch('loadItems', { reload: true });
    },
  },
  mutations: {
    addItem(state, payload) {
      state.items.push(getItemClass().create(payload));
    },
    clearItems(state) {
      state.items = getInitialState().items;
    },
    setLoading(state, value) {
      state.isLoading = value;
    },
    resetState(state) {
      Object.assign(state, getInitialState());
    },
  },
};
