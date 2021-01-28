import React from 'react'
import Grid from '@material-ui/core/Grid'
import { getTokenKey } from '../../utils/utility'
import AdImage from '../AdImage'
import './FullWidth.scss'

export const FullWidth = React.forwardRef(({ config }, ref) => {
	return (
		<Grid ref={ref} item lg={3} md={3} sm={4}>
			<AdImage config={config} />
		</Grid>

		// <Col className='full-width' lg={3} md={3} sm={4} key={getTokenKey()}>
		// 	<AdImage config={config} />
		// </Col>
	)
})
