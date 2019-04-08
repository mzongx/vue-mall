import Vuex from 'vuex'
import Vue from 'vue'
import * as getters from './getters'
import * as actions from './actions'
import state from './state'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'
let debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  plugins: debug ? [createLogger()] : [],
  strict: debug
})
