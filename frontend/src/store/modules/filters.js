
import { InputFilter as Item } from '../../../../shared/models/InputFilter';
import commonModule from '../mixins/commonModule';

const MODULE_NAME = 'filters';

const state = {};
const getters = {};
const actions = {};
const mutations = {};

export default {
  namespaced: true,
  state: {
    ...commonModule.state,
    ...state,
  },
  getters: {
    ...commonModule.getters,
    ...getters,
  },
  actions: {
    ...commonModule.actions,
    ...actions,
  },
  mutations: {
    ...commonModule.mutations,
    ...mutations,
  },
};
