import React from 'react'
import Grid from '@material-ui/core/Grid'
import { getTokenKey } from '../../utils/utility'
import AdImage from '../AdImage'

export const TwoColumn = ({ config }) => {
	return (
		<Grid container spacing={1}>
			{config.map(({ customPadding, ...rest }, index) => {
				return (
					<Grid item className='px-0' lg={6} md={6} sm={6} xs={6} key={getTokenKey()}>
						<AdImage config={rest} />
					</Grid>
				)
			})}
		</Grid>
	)
}
