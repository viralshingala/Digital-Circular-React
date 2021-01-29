import React, { useContext, useEffect, useRef, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import { getAdType, getTokenKey } from '../../utils/utility'
import FullWidth from '../FullWidth'
import CategoryFilter from '../CategoryFilter'
import { FilterContext } from '../FilterContextProvider'
import { ALL } from '../../utils/appConstants'
import MultiAd from '../MultiAd'
import AdMenu from '../AdMenu'

export const AdContainer = ({ config, adMenu }) => {
	const adType = getAdType()
	const [state, dispatch] = useContext(FilterContext)
	const { filter } = state
	const refAds = config.map((adConfig) => {
		return { ...adConfig, ref: useRef() }
	})
	const [ads, setAds] = useState(refAds)

	useEffect(() => {
		let result = [...refAds]
		if (adType !== null) {
			result = refAds.filter((ad) => ad.type === adType)
		}
		setAds(result)
	}, [adType])

	const jumpToHash = () => {
		if (window.location.hash) {
			const pageId = parseInt(window.location.hash.split('#goto_page')[1])
			if (!isNaN(pageId) && pageId > 0) {
				const scrollEl = refAds.find((el) => el.page === pageId)
				if (scrollEl && scrollEl.ref && scrollEl.ref.current !== null) {
					scrollEl.ref.current.scrollIntoView({
						behavior: 'smooth',
						block: 'start'
					})
				}
			}
		}
	}

	useEffect(() => {
		jumpToHash()
	})

	return (
		<>
			<Grid container spacing={1}>
				<AdMenu adMenu={adMenu} adConfig={config} />
				<CategoryFilter config={config} />
			</Grid>
			<Grid container spacing={1}>
				{ads
					.filter((ad) => (filter && filter === ALL) || ad.categoryFilter.includes(filter))
					.map((adConf) => {
						return Array.isArray(adConf.config) ? <MultiAd ref={adConf.ref} config={adConf.config} key={getTokenKey()} /> : <FullWidth ref={adConf.ref} config={adConf.config} key={getTokenKey()} />
					})}
			</Grid>
		</>
	)
}
