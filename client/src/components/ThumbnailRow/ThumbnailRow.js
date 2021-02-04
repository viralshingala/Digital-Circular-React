import React, { useState } from 'react'
import URL_CONFIG from '../../data/urlConfig'
import { Link } from 'react-router-dom'
import './ThumbnailRow.scss'

export const ThumbnailRow = ({ activeMenuKey, thumbnail, page, isLast, extraPages, onClick }) => {
	const [isHovering, setHovering] = useState(false)

	const handleMouseHover = () => {
		setHovering(!isHovering)
	}

	const handleJumptoHover = () => {
		setHovering(true)
	}

	return (
		<div className='column' onMouseEnter={handleMouseHover} onMouseLeave={handleMouseHover} onClick={onClick}>
			<Link to={`?ad=${activeMenuKey}#goto_page${page}`}>
				<img className={`thumbnail-image ${isHovering && 'thumbnail-image-hover'} ${isLast && 'last-item'}`} src={`${URL_CONFIG.baseUrl}${thumbnail}`} />
				{!isLast && isHovering ? (
					<div className='jump-to' onMouseEnter={handleJumptoHover}>
						Jump to
					</div>
				) : null}
			</Link>

			{isLast ? (
				<div className='show-extra'>
					<Link to={`?ad=${activeMenuKey}#goto_page${page}`} className='more-pages-decor'>{`+${extraPages} more pages`}</Link>
				</div>
			) : null}
		</div>
	)
}
