import React, { useContext, useEffect, useState } from 'react'
import Popover from '@material-ui/core/Popover'
import { getAdType, getTokenKey } from '../../../utils/utility'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import URL_CONFIG from '../../../data/urlConfig'
import AdMenuItem from './AdMenuItem'
import { FilterContext } from '../../FilterContextProvider'
import { Link } from 'react-router-dom'
import './AdMenu.scss'
import { ALL } from '../../../utils/appConstants'

export const AdMenu = ({ adMenu }) => {
	const [state, dispatch] = useContext(FilterContext)
	const { ads } = state
	const adType = getAdType()
	const [activeMenu, setActiveMenu] = useState(null)
	const [thumbnail, setThumbnail] = useState()
	const [anchorEl, setAnchorEl] = useState(null)

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

	useEffect(() => {
		dispatch({
			type: 'CHANGE_AD_TYPE',
			payload: adMenu.localAd
		})
	}, [])

	const onFilterChange = (selectedMenu) => {
		dispatch({
			type: 'CHANGE_AD_TYPE',
			payload: selectedMenu
		})
		dispatch({
			type: 'CHANGE_CATEGORY_FILTER',
			payload: ALL
		})
		setActiveMenu(null)
		setAnchorEl(null)
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
			<div className='selected-menu' onClick={handleClick}>
				<span className='selected-menu-label'>{adMenu[adType].label}</span>
				<i className={`arrow ${open ? 'up' : 'down'}`}></i>
				<span className='validity'>{adMenu[adType].validity}</span>
			</div>
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
				<div className='ad-menu-container' onMouseLeave={handlePopoverClose}>
					<div className='ad-menu-items'>
						<List component='nav' aria-label='contacts' className='ad-menu-list'>
							{Object.keys(adMenu).map((key) => {
								const menuItem = adMenu[key]
								const imageSrc = URL_CONFIG.menuImageUrl.replace('MENU_IMAGE_ID', menuItem.imageId)
								return (
									<Link to={`?ad=${menuItem.key}`} key={getTokenKey()} className='list-decortn'>
										<ListItem className='list-hvr-color' onClick={() => onFilterChange(menuItem)} data-target='ad-menu' button onMouseEnter={() => handlePopoverOpen(adMenu[key])} onMouseLeave={handlePopoverClose}>
											<div className='ad-menu-item'>
												<div className='image'>
													<img src={imageSrc} className='ad-menu-img' />
												</div>
												<div className='content'>
													<div className='label'>{menuItem.label}</div>
													<div className='offer'>{menuItem.validity}</div>
													<button className={adType === menuItem.key ? 'btn-disabled' : 'btn-active'}>{adType === menuItem.key ? 'Selected' : 'Select'}</button>
												</div>
											</div>
										</ListItem>
									</Link>
								)
							})}
						</List>
					</div>

					<div className='ad-sub-menu'>{activeMenu && ads ? <AdMenuItem list={ads.filter((el) => el.type === activeMenu.key)} menuItems={2} activeMenuKey={activeMenu.key} colCount={6} onClick={onThumbnailClick} /> : null}</div>
				</div>
			</Popover>
		</div>
	)
}
