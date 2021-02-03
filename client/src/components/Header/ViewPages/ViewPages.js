import React, { useState, useContext } from 'react'
import Popover from '@material-ui/core/Popover'
import { filterAds, getAdType, getChunks, getTokenKey } from '../../../utils/utility'
import { FilterContext } from '../../FilterContextProvider'
import ThumbnailRow from '../../ThumbnailRow'
import './ViewPages.scss'

export const ViewPages = () => {
	const [state, dispatch] = useContext(FilterContext)
	const { ads } = state
	const [anchorEl, setAnchorEl] = useState(null)
	const adType = getAdType()

	const handleMouseHover = (event) => {
		console.log('handleMouseHover')
		setAnchorEl(event.currentTarget)
	}

	const handlePopoverClose = () => {
		console.log('handlePopoverClose')
		setAnchorEl(null)
	}

	const onClick = () => {
		setAnchorEl(null)
	}

	const renderRow = (listItems) => {
		return (
			<section>
				{listItems.map(({ thumbnail, page, ...rest }) => (
					<ThumbnailRow key={getTokenKey()} activeMenuKey={adType} thumbnail={thumbnail} page={page} {...rest} onClick={onClick} />
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
		<div className='view-pages' onMouseEnter={handleMouseHover}>
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
			>
				<div className='view-pages-popover' onMouseLeave={handlePopoverClose}>
					{renderChunks()}
				</div>
			</Popover>
		</div>
	)
}
