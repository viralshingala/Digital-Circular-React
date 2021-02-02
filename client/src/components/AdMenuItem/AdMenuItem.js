import React from 'react'
import { getChunks, getTokenKey } from '../../utils/utility'
import { Item } from './Item'
import './AdMenuItem.scss'

export const AdMenuItem = ({ list, menuItems, activeMenuKey, colCount, onClick }) => {
	const renderRow = (listItems) => {
		return (
			<section>
				{listItems.map(({ thumbnail, page, ...rest }) => (
					<Item key={getTokenKey()} activeMenuKey={activeMenuKey} thumbnail={thumbnail} page={page} {...rest} onClick={onClick} />
				))}
			</section>
		)
	}

	const renderChunks = () => {
		let chunks = getChunks(list, colCount)
		if (menuItems && menuItems > 0) {
			chunks.length = menuItems
		}
		chunks = chunks.map((chunk, index) => {
			if (index === chunks.length - 1) {
				let extraPages = 14
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

	return <div className='sub-menu-items'>{renderChunks()}</div>
}
