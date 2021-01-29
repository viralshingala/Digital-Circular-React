import React, { useContext, useEffect, useRef, useState } from 'react'

import classNames from 'classnames'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import Popover from '@material-ui/core/Popover'
import SkuList from '../SkuList'
import './AdMenu.scss'
import { getTokenKey } from '../../utils/utility'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import URL_CONFIG from '../../data/urlConfig'
import { Box, Grid, Menu } from '@material-ui/core'
import AdMenuItem from '../AdMenuItem'
import { FilterContext } from '../FilterContextProvider'
import { Link } from 'react-router-dom'

export const AdMenu = ({ adMenu, adConfig }) => {
	// const [open, setOpen] = React.useState(null)
	const [state, dispatch] = useContext(FilterContext)
	const { adType } = state
	const anchorRef = React.useRef(null)
	const [activeMenu, setActiveMenu] = React.useState(null)
	const [thumbnail, setThumbnail] = React.useState()
	const [anchorEl, setAnchorEl] = React.useState(null)

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}

	useEffect(() => {
		if (thumbnail) {
			dispatch({
				type: 'SCROLL_TO_IMAGE',
				payload: thumbnail
			})
		}
	}, [thumbnail])

	const handleMenuClose = () => {
		setAnchorEl(null)
	}

	const onFilterChange = (adType) => {
		dispatch({
			type: 'CHANGE_AD_TYPE',
			payload: adType
		})
		setActiveMenu(null)
		setAnchorEl(null)
	}

	const onMenuHover = (imageId) => {
		setActiveMenu(imageId)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const handlePopoverOpen = (adMenu) => {
		setActiveMenu(adMenu)
	}

	const onThumbnailClick = (page) => {
		setActiveMenu(null)
		setAnchorEl(null)
		// history.pushState(null, null, `#goto_page${page}`)
		// setThumbnail(thumbnail)
	}

	const handlePopoverClose = (event) => {
		if (event.currentTarget.getAttribute('data-target') !== 'ad-menu') {
			setActiveMenu(null)
		}
	}

	const open = Boolean(anchorEl)
	const id = open ? 'simple-popover' : undefined

	return (
		<div className='ad-menu'>
			<Button aria-describedby={id} variant='contained' color='primary' onClick={handleClick}>
				Ad:
			</Button>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center'
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center'
				}}
			>
				<Grid container spacing={1} onMouseLeave={handlePopoverClose} className='ad-menu-block'>
					{/* onMouseLeave={handlePopoverClose} */}
					<Grid container item xs={4} spacing={1}>
						<List component='nav' aria-label='contacts' className='ad-menu-list'>
							{Object.keys(adMenu).map((key) => {
								const menuItem = adMenu[key]
								const imageSrc = URL_CONFIG.menuImageUrl.replace('MENU_IMAGE_ID', menuItem.imageId)
								return (
									<Link to={`?ad=${menuItem.key}`} key={getTokenKey()}>
										<ListItem onClick={() => onFilterChange(menuItem.label)} data-target='ad-menu' button onMouseEnter={() => handlePopoverOpen(adMenu[key])} onMouseLeave={handlePopoverClose}>
											<Grid item lg={12} md={12} sm={12}>
												<Grid container spacing={0}>
													<Grid item>
														<img src={imageSrc} className='ad-menu-img' />
													</Grid>
													<Grid item>
														<div className='label'>{menuItem.label}</div>
														<div className='valid'>{menuItem.validity}</div>
													</Grid>
												</Grid>
											</Grid>
										</ListItem>
									</Link>
								)
							})}
						</List>
					</Grid>
					{activeMenu && adConfig ? (
						<Grid container item xs={7} spacing={1} data-target='ad-menu' className='thumbnail-popover'>
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
			</Popover>
		</div>
	)
}
