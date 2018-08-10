/**弹幕和视频预览 */
import { pvideoApi } from 'src/bajax/ajax'
import * as TYPE from '../../mutationName/pdanmuName'
const state = {
	pvideoData: {}
}

const getters = {
	pvideoData: state => state.pvideoData
}

const mutations = {
	[TYPE.PVIDEO_LIST_REQUEST] (state) {

	},
	[TYPE.PVIDEO_LIST_SUCCESS] (state, pvideoData) {
		state.pvideoData = pvideoData
	},
	[TYPE.PVIDEO_LIST_FAILURE] (state) {

	}
}
const actions = {
	pvideoData({commit, state, rootState}, params) {
		rootState.requesting = true
		commit(TYPE.PVIDEO_LIST_REQUEST)
		console.log('good')
		pvideoApi.pvideo(params).then((response) => {
			rootState.requesting = false
			commit(TYPE.PVIDEO_LIST_SUCCESS, response.data)
		}).catch((error) => {
			rootState.requesting = false
			rootState.error = error
			commit(TYPE.PVIDEO_LIST_FAILURE)
		})
	}
}


export default {
	state,
	getters,
	actions,
	mutations
}