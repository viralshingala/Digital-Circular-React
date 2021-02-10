import React, { useState } from 'react'
import URL_CONFIG from '../../data/urlConfig'
import { Link } from 'react-router-dom'
import './ThumbnailRow.scss'
import { CONTENT } from '../../utils/appConstants'

export const ThumbnailRow = ({ activeMenuKey, thumbnail, page, isLast, extraPages, imageFrom, onClick }) => {
	const [isHovering, setHovering] = useState(false)

	const handleMouseHover = () => {
		setHovering(!isHovering)
	}

	const handleJumptoHover = () => {
		setHovering(true)
	}
	var imageSrc= null;
	if(imageFrom === CONTENT){
	imageSrc = `${URL_CONFIG.baseContentUrl}${thumbnail}`
	}
	else{
		imageSrc = `${URL_CONFIG.baseUrl}${thumbnail}`
	}

	return (
		<div className='thumbnail-column-ad' onMouseEnter={handleMouseHover} onMouseLeave={handleMouseHover} onClick={onClick} >
			<Link to={`?ad=${activeMenuKey}#goto_page${page}`}>
				<img className={`thumbnail-image ${isHovering && 'thumbnail-image-hover'} ${isLast && 'last-item'}`} src={imageSrc} />
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
