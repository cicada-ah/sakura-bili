import Vue from 'vue'
import Vuex from 'vuex'
import state from './rootState'
import getters from './rootGetters'
import contentStore from './modules/contentStore'
Vue.use(Vuex)


export default new Vuex.Store({
    state,
    getters,
    modules: {
        contentStore
    }
})