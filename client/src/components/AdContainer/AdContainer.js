import React, { useContext } from 'react'
import Grid from '@material-ui/core/Grid'
import { Container, Row } from 'react-bootstrap'
import { getTokenKey } from '../../utils/utility'
import FullWidth from '../FullWidth'
import CategoryFilter from '../CategoryFilter'
import { FilterContext } from '../FilterContextProvider'
import { ALL } from '../../utils/appConstants'
import MultiAd from '../MultiAd'

export const AdContainer = ({ config }) => {
	const [state, dispatch] = useContext(FilterContext)
	const { adType, filter } = state

	return (
		<Grid container spacing={1}>
			{config
				// .filter((ad) => filter === ALL || ad.categoryFilter.includes(filter))
				.map((adConf) => {
					return Array.isArray(adConf.config) ? null : <FullWidth config={adConf.config} key={getTokenKey()} />
				})}
		</Grid>
		// <Container fluid className='ad-container'>
		// 	<Row>
		// 		{/* <CategoryFilter config={config} /> */}
		// 	</Row>
		// 	<Row>
		// 		{config
		// 			// .filter((ad) => filter === ALL || ad.categoryFilter.includes(filter))
		// 			.map((adConf) => {
		// 				return Array.isArray(adConf.config) ? <MultiAd config={adConf.config} key={getTokenKey()} /> : <FullWidth config={adConf.config} key={getTokenKey()} />
		// 			})}
		// 	</Row>
		// </Container>
	)
}
