import React, { useRef, useState } from 'react'
import classNames from 'classnames'
import URL_CONFIG from '../../data/urlConfig'
import './AdMenuItem.scss'
import { Grid } from '@material-ui/core'
import { getTokenKey } from '../../utils/utility'

export const AdMenuItem = ({ menu }) => {
	// https://s7d2.scene7.com/is/image/PetSmart/US-202101-P3-Index-Thumbnail

	/*
	return (
		<Grid item lg={12} md={12} sm={12} className='thumbnail-popover'>
			<Grid container spacing={0}>
				{menu.thumbnails.map((thumbnail) => {
					return (
						<Grid item key={getTokenKey()}>
							<img src={`${URL_CONFIG.baseUrl}${thumbnail}`} />
						</Grid>
					)
				})}
			</Grid>
		</Grid>
    )
    */

	return menu && menu.thumbnails ? (
		<Grid item lg={12} md={12} sm={12} className='thumbnail-popover'>
			<Grid container spacing={0}>
				{menu.thumbnails.map((thumbnail) => {
					return (
						<Grid item lg={2} md={2} key={getTokenKey()}>
							<img src={`${URL_CONFIG.baseUrl}${thumbnail}`} />
						</Grid>
					)
				})}
			</Grid>
		</Grid>
	) : null
}
