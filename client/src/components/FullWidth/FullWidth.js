import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Col } from 'react-bootstrap'
import { getTokenKey } from '../../utils/utility'
import AdImage from '../AdImage'
import './FullWidth.scss'

export const FullWidth = ({ config }) => {
	return (
		<Grid item lg={3} md={3} sm={4}>
			<AdImage config={config} />
		</Grid>

		// <Col className='full-width' lg={3} md={3} sm={4} key={getTokenKey()}>
		// 	<AdImage config={config} />
		// </Col>
	)
}
