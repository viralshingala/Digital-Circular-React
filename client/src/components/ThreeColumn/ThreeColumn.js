import React from 'react'
import Grid from '@material-ui/core/Grid'
import { getTokenKey } from '../../utils/utility'
import AdImage from '../AdImage'

export const ThreeColumn = ({ config }) => {
	return (
		<Grid container spacing={1}>
			{config.map(({ customPadding, ...rest }, index) => {
				return (
					<Grid className='px-0' lg={4} md={4} sm={4} xs={4} key={getTokenKey()}>
						<AdImage config={rest} />
					</Grid>
				)
			})}
		</Grid>
	)
}
