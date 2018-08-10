import * as url from '../configs/urlConfigs'
import { AXIOS_DEFAULT_CONFIG } from '../configs'
import axios from 'axios'

const $axios = axios.create(AXIOS_DEFAULT_CONFIG)

// get main content
export const contentApi = {
	content() {
		return $axios.get(url.contet).then((response) => {
			return response.data
		})
	}
}

// get carousel pic
export const bannerApi = {
	list() {
		return $axios.get(url.banner).then((response) => {
			return response.data
		})
	}
}

// get rankList
export const rankApi = {
	rank3() {
		return $axios.get(url.rank3).then((response) => {
			return response.data
		})
	}
}

// get popularizeList
export const popularizeApi = {
	popularize() {
		return $axios.get(url.popularize).then((response) => {
			return response.data
		})
	}
}

// get liveing
export const liveApi = {
	live() {
		return $axios.get(url.live).then((response) => {
			return response.data
		})
	}
}

// get three days rank
export const contentrankApi = {
	contentrank(param) {
		return $axios.post(url.contentrank, param).then((response) => {
			return response.data
		})

	},
	contentrankweek(param) {
		return $axios.post(url.contentrankweek, param).then((response) => {
			return response.data
		})

	}
}

//get danmu and pvideo
export const pvideoApi = {
	pvideo(param) {
		return $axios.post(url.pvideo, param).then((response) => {
			return response.data
		})
	},
	danmu(param) {
		return $axios.post(url.danmu, param).then((response) => {
			return response.data
		})
	}	
}