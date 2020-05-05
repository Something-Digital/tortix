import Vue from 'vue';
import Vuex from 'vuex';
import vendors from './modules/vendors';
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
  },
  plugins: [
    reloadVendors,
  ],
});
