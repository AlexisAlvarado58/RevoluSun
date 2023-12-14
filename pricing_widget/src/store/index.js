import Vue from 'vue'
import Vuex from 'vuex'
import roofs from './Modules/roofs'

Vue.use(Vuex)
const store = new Vuex.Store({

  modules: {
    roofs
  }
})
export default store;