
import InputFilter from '../../../../shared/models/InputFilter';
import CommonModule from '../models/CommonModule';

const MODULE_NAME = 'filters';

const commonModule = CommonModule.create({
  moduleName: MODULE_NAME,
  itemClass: InputFilter,
});

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
