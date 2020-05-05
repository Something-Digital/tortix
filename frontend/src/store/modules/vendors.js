/* eslint-disable camelcase */
import api from '@/api';

export class Vendor {
  constructor({
    id, vendor_name, vendor_city, vendor_rating, types, delivery, cake_photo_id,
  }) {
    this.id = id;
    this.vendorName = vendor_name;
    this.vendorCity = vendor_city;
    this.vendorRating = vendor_rating;
    this.types = types;
    this.delivery = delivery;
    this.cakePhotoId = cake_photo_id;
  }

  static createVendor(rawData) {
    // TODO: Add checks and exceptions
    return new this(rawData);
  }
}

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
      const response = await api.getVendors();
      console.log('response', response);
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
