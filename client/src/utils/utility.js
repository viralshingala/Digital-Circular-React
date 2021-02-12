import React from 'react';
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
		result = result.filter((ad) => ad.categoryFilter.includes(category))
	}

	return result
}

export const localSvg = () => {

	const svgContent = (
		<svg xmlns="http://www.w3.org/2000/svg" width="18.329" height="17.006" viewBox="0 0 18.329 17.006">
		<defs>
			<style>{'.a {fill: none;stroke: #007db4;}'}</style>
		</defs>
		<g transform="translate(-2.882 -4)">
			<path class="a" d="M7.462,4.507c2.255,0,4.168,1.163,4.168,3.417v.667h0V20.423a.082.082,0,0,1-.158.029v0a3.919,3.919,0,0,0-3.43-2.938,5.29,5.29,0,0,0-3.88,1.546.449.449,0,0,1-.275.121H3.7c-.154,0-.317-.113-.317-.254V6.845C3.378,5.507,5.207,4.507,7.462,4.507Z" transform="translate(0 -0.003)" />
			<path class="a" d="M22.871,4.5C20.616,4.5,18.7,5.663,18.7,7.917v.667h0V20.416a.082.082,0,0,0,.158.029v0a3.96,3.96,0,0,1,3.43-2.938,5.281,5.281,0,0,1,3.88,1.546.474.474,0,0,0,.275.121h.188c.154,0,.317-.113.317-.254V6.834C26.955,5.5,25.125,4.5,22.871,4.5Z" transform="translate(-6.24)" />
		</g>
		</svg>
	);
	return svgContent
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
