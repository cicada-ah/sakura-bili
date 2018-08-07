import { rankApi } from 'src/bajax/ajax'
import * as TYPE from '../../mutationName/rankName'
const state = {
	rankList: []
}

const getters = {
	rankList: state => state.rankList
}

const mutations = {
	[TYPE.RANK_LIST_REQUEST] (state) {

	},
	[TYPE.RANK_LIST_SUCCESS] (state, rankList) {
		state.rankList = rankList.recommend.list
	},
	[TYPE.RANK_LIST_FAILURE] (state) {

	}
}
const actions = {
	rankList({commit, state, rootState}) {
		rootState.requesting = true
		commit(TYPE.RANK_LIST_REQUEST)
		rankApi.rank3().then((response) => {
			rootState.requesting = false
			commit(TYPE.RANK_LIST_SUCCESS, response)
		}).catch((error) => {
			rootState.requesting = false
			rootState.error = error
			commit(TYPE.RANK_LIST_FAILURE)
		})
	}
}


export default {
	state,
	getters,
	actions,
	mutations
}