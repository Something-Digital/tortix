import api from '@/api';
import { Vendor } from '../../../../shared/models/Vendor';

export const initialState = {
  items: [],
  isLoading: false,
};

export const getters = {
  // activeMessages: state => state.items.filter(message => message.alert),
};

export const actions = {
  async loadVendors({ commit }, { reload }) {
    try {
      commit('setLoading', true);
      if (reload) commit('clearVendors');
      const response = await api.get_vendors();
      if (response?.data?.length > 0) {
        response.data.forEach((item) => commit('addVendor', item));
      }
    } catch (e) {
      // TODO: Add proper handling using dispatch
    } finally {
      commit('setLoading', false);
    }
  },
  reloadVendors({ dispatch }) {
    dispatch('loadVendors', { reload: true });
  },
  initialLoadVendors({ dispatch }) {
    dispatch('loadVendors', { reload: true });
  },
};

export const mutations = {
  addVendor(state, payload) {
    state.items.push(Vendor.createVendor(payload));
  },

  clearVendors(state) {
    state.items = initialState.items;
  },

  setLoading(state, value) {
    state.isLoading = value;
  },
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
