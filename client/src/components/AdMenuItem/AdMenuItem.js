import React, { useRef, useState } from 'react'
import classNames from 'classnames'
import URL_CONFIG from '../../data/urlConfig'
import './AdMenuItem.scss'
import { Button, Grid } from '@material-ui/core'
import { getTokenKey } from '../../utils/utility'
import { Link } from 'react-router-dom'
import { Item } from './Item'

export const AdMenuItem = ({ list, menuItems, activeMenuKey, colCount, onClick }) => {
	const renderRow = (listItems) => {
		return (
			<section>
				{listItems.map(({ thumbnail, page, ...rest }, index) => (
					<>
						<Item activeMenuKey={activeMenuKey} thumbnail={thumbnail} page={page} {...rest} onClick={onClick} />
						{/* <div class='column'>
							<Link to={`?ad=${activeMenuKey}#goto_page${page}`}>
								<img className='thumbnail-image' src={`${URL_CONFIG.baseUrl}${thumbnail}`} />
							</Link>
							<div className='jump-to'>
								<button>Jump to</button>
							</div>
						</div> */}
					</>
				))}
			</section>
		)
	}

	const getChunks = (array, size) => {
		const chunked_arr = []
		for (let i = 0; i < array.length; i++) {
			const last = chunked_arr[chunked_arr.length - 1]
			if (!last || last.length === size) {
				chunked_arr.push([array[i]])
			} else {
				last.push(array[i])
			}
		}
		return chunked_arr
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
		return <>{chunks.map((chunk) => renderRow(chunk))}</>
	}

	return <div className='sub-menu-items'>{renderChunks()}</div>
}
