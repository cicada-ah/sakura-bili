import { popularizeApi } from 'src/bajax/ajax'
import * as TYPE from '../../mutationName/popularizeName'
const state = {
	popularizeList: [],
	popularizeAd: []
}

const getters = {
	popularizeList: state => state.popularizeList,
	popularizeAd: state => state.popularizeAd
}

const mutations = {
	[TYPE.POPULARIZE_LIST_REQUEST] (state) {

	},
	[TYPE.POPULARIZE_LIST_SUCCESS] (state, response) {
		state.popularizeList = response.data
		state.popularizeAd = response.popularizeAd
	},
	[TYPE.POPULARIZE_LIST_FAILURE] (state) {

	}
}
const actions = {
	popularizeList({commit, state, rootState}) {
		rootState.requesting = true
		commit(TYPE.POPULARIZE_LIST_REQUEST)
		popularizeApi.popularize().then((response) => {
			rootState.requesting = false
			commit(TYPE.POPULARIZE_LIST_SUCCESS, response)
		}).catch((error) => {
			rootState.requesting = false
			rootState.error = error
			commit(TYPE.POPULARIZE_LIST_FAILURE)
		})
	}
}


export default {
	state,
	getters,
	actions,
	mutations
}