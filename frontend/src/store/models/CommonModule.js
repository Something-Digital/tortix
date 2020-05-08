import api from '@/api';

const getInitialState = () => ({
  items: [],
  isLoading: false,
});

export default class CommonModule {
  constructor({ moduleName, itemClass }) {
    this.state = getInitialState();

    this.getters = {};

    this.actions = {
      async loadItems({ commit }, { reload }) {
        try {
          commit('setLoading', true);
          if (reload) commit('clearItems');
          const response = await api[`get_${moduleName}`]();
          if (response?.length > 0) {
            response.forEach((item) => commit('addItem', item));
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
    };

    this.mutations = {
      addItem(state, payload) {
        console.log('add', itemClass.create);
        state.items.push(itemClass.create(payload));
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
    };
  }

  static create(rawData) {
    // TODO: Add checks and exceptions
    return new this(rawData);
  }
}
