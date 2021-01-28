import React, { useContext, useEffect, useRef, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import { getTokenKey } from '../../utils/utility'
import FullWidth from '../FullWidth'
import CategoryFilter from '../CategoryFilter'
import { FilterContext } from '../FilterContextProvider'
import { ALL } from '../../utils/appConstants'
import MultiAd from '../MultiAd'
import AdMenu from '../AdMenu'

export const AdContainer = ({ config, adMenu }) => {
	const [state, dispatch] = useContext(FilterContext)
	const { adType, filter, scrollRefId } = state
	const [ads, setAds] = useState([])

	const refAds = config.map((adConfig) => {
		return { ...adConfig, ref: useRef() }
	})

	useEffect(() => {
		if (scrollRefId) {
			const scrollEl = refAds.find((el) => el.thumbnail === scrollRefId)
			if (scrollEl) {
				scrollEl.ref.current.scrollIntoView()
				dispatch({
					type: 'SCROLL_TO_IMAGE',
					payload: undefined
				})
			}
		}
	}, [scrollRefId])

	return (
		<>
			<Grid container spacing={1}>
				<AdMenu adMenu={adMenu} />
				<CategoryFilter config={config} />
			</Grid>
			<Grid container spacing={1}>
				{refAds
					.filter((ad) => filter === ALL || ad.categoryFilter.includes(filter))
					.map((adConf) => {
						return Array.isArray(adConf.config) ? <MultiAd ref={adConf.ref} config={adConf.config} key={getTokenKey()} /> : <FullWidth ref={adConf.ref} config={adConf.config} key={getTokenKey()} />
					})}
			</Grid>
		</>
	)
}
