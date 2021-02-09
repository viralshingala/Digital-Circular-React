import React, { useState, useContext } from 'react'
import Popover from '@material-ui/core/Popover'
import { filterAds, getAdType, getChunks, getTokenKey } from '../../../utils/utility'
import { FilterContext } from '../../FilterContextProvider'
import ThumbnailRow from '../../ThumbnailRow'
import './ViewPages.scss'
import { ALL } from '../../../utils/appConstants'

export const ViewPages = () => {
	const [state, dispatch] = useContext(FilterContext)
	const { ads } = state
	const [anchorEl, setAnchorEl] = useState(null)
	const adType = getAdType()

	const handleMouseHover = (event) => {
		console.log('handleMouseHover')
		setAnchorEl(event.currentTarget)
	}

	const handlePopoverClose = (event) => {
		// if (event.currentTarget.getAttribute('data-target') !== 'view-pgs') {
		// 	setAnchorEl(null)
		// }
		console.log('handlePopoverClose')
		setAnchorEl(null)
	}
	// const onClick = () => {
	// 	setAnchorEl(null)
	// }

	const onThumbnailClick = (selectedFilter) => {
		dispatch({
			type: 'CHANGE_CATEGORY_FILTER',
			payload: selectedFilter
		})
		setAnchorEl(null)
	}

	const renderRow = (listItems) => {
		return (
			<section>
				{listItems.map(({ thumbnail, page, ...rest }) => (
					<ThumbnailRow key={getTokenKey()} activeMenuKey={adType} thumbnail={thumbnail} page={page} {...rest} onClick={()=> onThumbnailClick(ALL)} />
				))}
			</section>
		)
	}
	const renderChunks = () => {
		const filterdAds = filterAds(ads, adType)
		let chunks = getChunks(filterdAds, 8)
		chunks.length = 2
		chunks = chunks.map((chunk, index) => {
			if (index === chunks.length - 1) {
				let extraPages = 10
				return [...chunk.slice(0, chunk.length - 1), { ...chunk[chunk.length - 1], isLast: true, extraPages }]
			} else {
				return chunk
			}
		})
		return (
			<>
				{chunks.map((chunk) => (
					<React.Fragment key={getTokenKey()}> {renderRow(chunk)}</React.Fragment>
				))}
			</>
		)
	}

	const open = Boolean(anchorEl)

	return (
		<div className='view-pages' onMouseEnter={handleMouseHover} onMouseLeave={handlePopoverClose}>
			View Pages
			<Popover
				disableRestoreFocus
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left'
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right'
				}}
				open={open}
				anchorEl={anchorEl}
				className='view-pgs-parent'
			>
				<div className='view-pages-popover' onMouseLeave={handlePopoverClose}>
					{renderChunks()}
				</div>
			</Popover>
		</div>
	)
}
