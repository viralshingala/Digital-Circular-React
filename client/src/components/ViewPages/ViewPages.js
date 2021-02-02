import React, { useState, useContext } from 'react'
import Popover from '@material-ui/core/Popover'
import { filterAds, getAdType, getChunks, getTokenKey } from '../../utils/utility'
import { FilterContext } from '../FilterContextProvider'
import { Item } from '../AdMenuItem/Item'
import './ViewPages.scss'

export const ViewPages = () => {
	const [state, dispatch] = useContext(FilterContext)
	const { ads } = state
	const [anchorEl, setAnchorEl] = useState(null)
	const adType = getAdType()

	const handleMouseHover = (e) => {
		setAnchorEl(event.currentTarget)
	}

	const handlePopoverClose = (event) => {
		setAnchorEl(null)
	}

	const onClick = () => {
		setAnchorEl(null)
	}

	const renderRow = (listItems) => {
		return (
			<section>
				{listItems.map(({ thumbnail, page, ...rest }) => (
					<Item key={getTokenKey()} activeMenuKey={adType} thumbnail={thumbnail} page={page} {...rest} onClick={onClick} />
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

	const handleClose = () => {
		setAnchorEl(null)
	}

	const open = Boolean(anchorEl)
	const id = open ? 'simple-popover' : undefined

	return (
		<div className='view-pages' onMouseEnter={handleMouseHover} onMouseLeave={handlePopoverClose}>
			View Pages
			<Popover id={id} open={open} anchorEl={anchorEl} onClose={handleClose}>
				<div className='view-pages-popover'>{renderChunks()}</div>
			</Popover>
		</div>
	)
}
