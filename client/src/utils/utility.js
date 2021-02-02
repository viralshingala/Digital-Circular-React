import { ALL } from './appConstants'

export const getTokenKey = () => {
	return Math.random().toString(36).substr(2)
}

export const getAdType = () => {
	const adType = new URLSearchParams(window.location.search).get('ad')
	return adType !== null ? adType : 'localAd'
}

export const getChunks = (array, size) => {
	const chunked_arr = []
	for (let i = 0; i < array.length; i++) {
		const last = chunked_arr[chunked_arr.length - 1]
		if (!last || last.length === size) {
			chunked_arr.push([array[i]])
		} else {
			last.push(array[i])
		}
	}
	return chunked_arr
}

export const filterAds = (ads, type, category) => {
	let result = ads

	if (type !== 'localAd') {
		result = ads.filter((ad) => ad.type === type)
	}

	if (category && category !== ALL) {
		result = ads.filter((ad) => ad.categoryFilter.includes(category))
	}

	return result
}

export const categoryFilterSorting = {
	Dog: 0,
	Cat: 1,
	Fish: 2,
	Bird: 3,
	Reptile: 4,
	Smallpet: 5,
	Services: 6,
	Events: 7,
	All: 8
}

export const btnNavigationPriority = {
	bookNow: 0,
	buyOnline: 1,
	findStore: 2
}
