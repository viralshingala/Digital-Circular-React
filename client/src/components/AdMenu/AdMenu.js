import React, { useRef, useState } from 'react'

import classNames from 'classnames'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import Popover from '@material-ui/core/Popover'
import SkuList from '../SkuList'
import './AdMenu.scss'
import { getTokenKey } from '../../utils/utility'
import URL_CONFIG from '../../data/urlConfig'
import { Grid, Menu } from '@material-ui/core'
import AdMenuItem from '../AdMenuItem'

export const AdMenu = ({ adMenu }) => {
	const [open, setOpen] = React.useState(null)
	const anchorRef = React.useRef(null)
	const [activeMenu, setActiveMenu] = React.useState(null)
	const [anchorEl, setAnchorEl] = React.useState(null)

	const handleMenuClick = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handleMenuClose = () => {
		setAnchorEl(null)
	}

	const onFilterChange = () => {}

	const onMenuHover = (imageId) => {
		setActiveMenu(imageId)
	}

	return (
		<div className='ad-menu'>
			<Button ref={anchorRef} aria-controls={open ? 'menu-list-grow' : undefined} aria-haspopup='true' onClick={handleMenuClick}>
				Ad:
			</Button>
			<Menu id='simple-menu' anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleMenuClose}>
				<Grid container spacing={0}>
					{Object.keys(adMenu).map((key) => {
						const menuItem = adMenu[key]
						const imageSrc = URL_CONFIG.menuImageUrl.replace('MENU_IMAGE_ID', menuItem.imageId)
						return (
							<>
								<Grid item lg={12} md={12} sm={12}>
									<MenuItem key={getTokenKey()} onClick={() => onFilterChange()} className={classNames('ad-menu-list-item')}>
										<AdMenuItem menuItem={menuItem} imageSrc={imageSrc} onMenuHover={onMenuHover} />
									</MenuItem>
								</Grid>
							</>
						)
					})}
					{/* {activeMenu ? <Grid item>Test</Grid> : null} */}
				</Grid>
			</Menu>
		</div>
	)
}
