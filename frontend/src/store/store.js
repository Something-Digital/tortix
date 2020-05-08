import Vue from 'vue';
import Vuex from 'vuex';
import vendors from './modules/vendors';
import filters from './modules/filters';
import reloadVendors from './plugins/reloadVendors';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    vendors,
    filters,
  },
  plugins: [
    reloadVendors,
  ],
});
