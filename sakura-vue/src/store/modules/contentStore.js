import { contentApi } from 'src/bajax/ajax'
import * as TYPE from '../mutationName/contentName'
import bannerStore from './content_modules/bannerStore'
import rankStore from './content_modules/rankStore'
import popularizeStore from './content_modules/popularizeStore'
import liveStore from './content_modules/liveStore'
import pdanmuStore from './content_modules/pdanmuStore'


// contentId 标示contentKeys 向后端获取rank的data
const state = {
	content: [],
	contentKeys: ['douga', 'bangumi','guochuang', 'music', 'dance', 'game', 'technology', 'life', 'kichiku', 'fashion', 'ad', 'ent', 'movie', 'teleplay'],
	contentId: [1, 13,168, 3, 129, 4, 36, 160, 119, 155, 165, 5, 23, 11],
	contentName: ['动画', '番剧','国创', '音乐', '舞蹈', '游戏', '科技', '生活', '鬼畜', '时尚', '广告', '娱乐', '电影', 'TV剧']
}

const getters = {
	content: state => state.content
}

const mutations = {
	// content info
	[TYPE.CONTENT_REQUEST] (state) {

	},
	[TYPE.CONTENT_SUCCESS] (state, response) {
		for (let i = 0; i < state.contentKeys.length; i++) {
			const contentKey = state.contentKeys[i]
			const contentItem = {
				contentKey: contentKey,
				contentId: state.contentId[i],
				bili_id: `bili_${contentKey}`,
				name: state.contentName[i],
				item: Object.values(response[contentKey])
			}
			state.content.push(contentItem)
		}
	},
	[TYPE.CONTENT_FAILURE] (state) {

	},
	// reorder content
	[TYPE.RE_ORDER_CONTENT] (state, options) {
		state.content.splice(options.currentDrag, 0, state.content.splice(options.dragId, 1)[0])
	}
}
const actions = {
	getContent({commit, state, rootState}) {
		rootState.requesting = true
		commit(TYPE.CONTENT_REQUEST)
		contentApi.content().then((response) => {
			rootState.requesting = false
			commit(TYPE.CONTENT_SUCCESS, response)
		}).catch((error) => {
			rootState.requesting = false
			rootState.error = error
			commit(TYPE.CONTENT_FAILURE)
		})		
	},
	reOrder({commit}, options) {
		commit(TYPE.RE_ORDER_CONTENT, options)
	}
}





export default {
	state,
	getters,
	actions,
	mutations,
	modules: {
		bannerStore,
		rankStore,
		popularizeStore,
		liveStore,
		pdanmuStore
	}
}

