import React, { useRef, useState } from 'react'
import classNames from 'classnames'
import URL_CONFIG from '../../data/urlConfig'
import './AdMenuItem.scss'
import { Grid } from '@material-ui/core'
import { getTokenKey } from '../../utils/utility'

export const AdMenuItem = ({ menuItem, activeMenu, adConfig }) => {
	const imageSrc = URL_CONFIG.menuImageUrl.replace('MENU_IMAGE_ID', menuItem.imageId)
	return (
		<Grid container spacing={0}>
			<Grid item xs={6}>
				<Grid item>
					<img src={imageSrc} className='ad-menu-img' />
				</Grid>
				<Grid item>
					<div className='label'>{menuItem.label}</div>
					<div className='valid'>{menuItem.validity}</div>
				</Grid>
			</Grid>
			{activeMenu && adConfig ? (
				<Grid item xs={4} data-target='ad-menu' className='thumbnail-popover'>
					<Grid container spacing={1}>
						{adConfig
							.filter((el) => el.type === activeMenu.key)
							.map(({ thumbnail, page }) => {
								return (
									<Grid key={getTokenKey()} item>
										<Link to={`?ad=${activeMenu.key}#goto_page${page}`}>
											<img className='thumbnail-image' src={`${URL_CONFIG.baseUrl}${thumbnail}`} onClick={() => onThumbnailClick(page)} />
										</Link>
									</Grid>
								)
							})}
					</Grid>
				</Grid>
			) : null}
		</Grid>
	)
}
