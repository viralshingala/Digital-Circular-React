import React, { useContext, useRef, useState } from 'react'

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

export const AdMenu = ({ adMenu }) => {
	// const [open, setOpen] = React.useState(null)
	const [state, dispatch] = useContext(FilterContext)
	const anchorRef = React.useRef(null)
	const [activeMenu, setActiveMenu] = React.useState(null)
	const [anchorEl, setAnchorEl] = React.useState(null)

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handleMenuClose = () => {
		setAnchorEl(null)
	}

	const onFilterChange = () => {}

	const onMenuHover = (imageId) => {
		setActiveMenu(imageId)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const handlePopoverOpen = (adMenu) => {
		setActiveMenu(adMenu)
	}

	const onThumbnailClick = (thumbnail) => {
		console.log(thumbnail)
		dispatch({
			type: 'SCROLL_TO_IMAGE',
			payload: thumbnail
		})
	}

	const handlePopoverClose = (event) => {
		console.log(event.currentTarget.getAttribute('data-target'))
		if (event.currentTarget.getAttribute('data-target') !== 'ad-menu') {
			setActiveMenu(null)
		}
	}

	const open = Boolean(anchorEl)
	const id = open ? 'simple-popover' : undefined

	return (
		<div className='ad-menu'>
			{/* <Button ref={anchorRef} aria-controls={open ? 'menu-list-grow' : undefined} aria-haspopup='true' onClick={handleMenuClick}>
				Ad:
			</Button> */}
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
				<div>
					{/* onMouseLeave={handlePopoverClose} */}
					<List component='nav' aria-label='contacts' className='ad-menu-list'>
						{Object.keys(adMenu).map((key) => {
							const menuItem = adMenu[key]
							const imageSrc = URL_CONFIG.menuImageUrl.replace('MENU_IMAGE_ID', menuItem.imageId)
							return (
								<ListItem data-target='ad-menu' button key={getTokenKey()} onMouseEnter={() => handlePopoverOpen(adMenu[key])} onMouseLeave={handlePopoverClose}>
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
							)
						})}
					</List>
					{activeMenu && activeMenu.thumbnails ? (
						<div data-target='ad-menu' onMouseLeave={handlePopoverClose} className='thumbnail-popover'>
							<Grid container justify='center' spacing={1}>
								{activeMenu.thumbnails.map((thumbnail) => {
									return (
										<Grid key={getTokenKey()} item>
											<img className='thumbnail-image' src={`${URL_CONFIG.baseUrl}${thumbnail}`} onClick={() => onThumbnailClick(thumbnail)} />
										</Grid>
									)
								})}
							</Grid>
						</div>
					) : // <Box component='span' m={1} data-target='ad-menu' onMouseLeave={handlePopoverClose}>
					// 	<Grid item lg={12} md={12} sm={12} className='thumbnail-popover'>
					// 		<Grid container spacing={0}>

					// 		</Grid>
					// 	</Grid>
					// </Box>
					null}
				</div>
			</Popover>
		</div>
	)
}
