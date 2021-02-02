import React, { useContext, useEffect, useRef } from 'react'
import Grid from '@material-ui/core/Grid'
import { filterAds, getAdType, getTokenKey } from '../../utils/utility'
import FullWidth from '../FullWidth'
import CategoryFilter from '../CategoryFilter'
import ViewPages from '../ViewPages'
import { FilterContext } from '../FilterContextProvider'
import MultiAd from '../MultiAd'
import AdMenu from '../AdMenu'

export const AdContainer = ({ config, adMenu }) => {
	const adType = getAdType()
	const [state, dispatch] = useContext(FilterContext)
	const { ads, filter } = state

	const refAds = config.map((adConfig) => {
		return { ...adConfig, ref: useRef() }
	})

	useEffect(() => {
		dispatch({
			type: 'SET_AD_CONFIG',
			payload: refAds
		})
	}, [])

	const jumpToHash = () => {
		if (window.location.hash) {
			const pageId = parseInt(window.location.hash.split('#goto_page')[1])
			if (!isNaN(pageId) && pageId > 0) {
				const scrollEl = ads.find((el) => el.page === pageId)
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
				<AdMenu adMenu={adMenu} />
				<ViewPages adConfig={config} />
				<CategoryFilter />
			</Grid>
			<Grid container spacing={1}>
				{filterAds(ads, adType, filter).map((adConf) => {
					return Array.isArray(adConf.config) ? <MultiAd ref={adConf.ref} config={adConf.config} key={getTokenKey()} /> : <FullWidth ref={adConf.ref} config={adConf.config} key={getTokenKey()} />
				})}
			</Grid>
		</>
	)
}
