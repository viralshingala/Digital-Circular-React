import React, { useRef, useState } from 'react'
import classNames from 'classnames'
import URL_CONFIG from '../../data/urlConfig'
import './AdMenuItem.scss'
import { Grid } from '@material-ui/core'

export const AdMenuItem = ({ menuItem, onMenuHover }) => {
	// const [open, setOpen] = React.useState(null)
	const { imageId, label, validity } = menuItem
	const [anchorEl, setAnchorEl] = React.useState(null)
	// const ref = useRef(null)
	const imageSrc = URL_CONFIG.menuImageUrl.replace('MENU_IMAGE_ID', imageId)

	const handlePopoverOpen = (event) => {
		setAnchorEl(event.currentTarget)
		onMenuHover(imageId)
	}

	const handlePopoverClose = (event) => {
		console.log(event.currentTarget.getAttribute('data-target'))
		// if (event.currentTarget.getAttribute('data-target') !== imageId) {
		// 	onMenuHover(imageId)
		// } else {
		// 	onMenuHover(null)
		// }
		onMenuHover(null)
		setAnchorEl(null)
	}

	const open = Boolean(anchorEl)

	return (
		<>
			<Grid container spacing={0}>
				<Grid item data-target={imageId} onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
					<Grid container spacing={0}>
						<Grid item>
							<img src={imageSrc} className='ad-menu-img' />
						</Grid>
						<Grid item>
							<div className='label'>{label}</div>
							<div className='valid'>{validity}</div>
						</Grid>
					</Grid>
					{/* <div className='ad-menu-list-item-div'>
						<span aria-owns={open ? 'mouse-over-popover' : undefined}>
							<img src={imageSrc} className='ad-menu-img' />
							<span className={classNames('ad-menu-text')}>
								<div className='label'>{label}</div>
								<div className='valid'>{validity}</div>
							</span>
						</span>
					</div> */}
				</Grid>
				{/* {open ? <Grid item>Menu content</Grid> : null} */}
			</Grid>
		</>
	)
}
