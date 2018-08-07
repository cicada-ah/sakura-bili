import { bannerApi } from 'src/bajax/ajax'
import * as TYPE from '../../mutationName/bannerName'
const state = {
	bannerList: []
}

const getters = {
	bannerList: state => state.bannerList
}
const mutations = {
	[TYPE.BANNER_LIST_REQUEST] (state) {

	},
	[TYPE.BANNER_LIST_SUCCESS] (state, bannerList) {
		state.bannerList = bannerList.data
	},
	[TYPE.BANNER_LIST_FAILURE] (state) {

	}
}

const actions = {
	bannerList({commit, state, rootState}) {
		rootState.requesting = true
		commit(TYPE.BANNER_LIST_REQUEST)
		bannerApi.list().then((response) => {
			rootState.requesting = false
			commit(TYPE.BANNER_LIST_SUCCESS, response)
		}).catch((error) => {
			rootState.requesting = false
			rootState.error = error
			commit(TYPE.BANNER_LIST_FAILURE)
		})
	}
}



export default {
	state,
	getters,
	actions,
	mutations
}