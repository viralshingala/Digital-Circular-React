import React, { useContext, useEffect, useRef, useState } from 'react'

import classNames from 'classnames'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import Popover from '@material-ui/core/Popover'
import SkuList from '../SkuList'
import './AdMenu.scss'
import { getAdType, getTokenKey } from '../../utils/utility'
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
	const anchorRef = React.useRef(null)
	const adType = getAdType()
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
		setActiveMenu(null)
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
			<div onClick={handleClick}>{adType}</div>
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
				className='ad-menu-popover'
			>
				<div className='ad-menu-container'>
					<div className='ad-menu-items'>
						<List component='nav' aria-label='contacts' className='ad-menu-list'>
							{Object.keys(adMenu).map((key) => {
								const menuItem = adMenu[key]
								const imageSrc = URL_CONFIG.menuImageUrl.replace('MENU_IMAGE_ID', menuItem.imageId)
								return (
									<Link to={`?ad=${menuItem.key}`} key={getTokenKey()} className="list-decortn">
										<ListItem className="list-hvr-color" onClick={() => onFilterChange(menuItem.label)} data-target='ad-menu' button onMouseEnter={() => handlePopoverOpen(adMenu[key])} onMouseLeave={handlePopoverClose}>
											<div className='ad-menu-item'>
												<div className='image'>
													<img src={imageSrc} className='ad-menu-img' />
												</div>
												<div className='content'>
													<div className='label'>{menuItem.label}</div>
													<div className='offer'>{menuItem.validity}</div>
													<button className='btn-class-stly'>Select</button>
												</div>
											</div>
										</ListItem>
									</Link>
								)
							})}
						</List>
					</div>
					<div className='ad-sub-menu'>
						{activeMenu && adConfig ? (
							<div>
								<Grid container spacing={2} data-target='ad-menu' className='thumbnail-popover'>
									{adConfig
										.filter((el) => el.type === activeMenu.key)
										.map(({ thumbnail, page }, index) => {
											return index <= 11 ? (
												<Grid xs={2} key={getTokenKey()} item>
													<Link to={`?ad=${activeMenu.key}#goto_page${page}`}>
														<img className='thumbnail-image' src={`${URL_CONFIG.baseUrl}${thumbnail}`} onClick={() => onThumbnailClick(page)} />
													</Link>
												</Grid>
											) : null
										})}
								</Grid>
							</div>
						) : null}
					</div>
				</div>
			</Popover>
		</div>
	)
}
