import React, { useRef, useState } from 'react'
import classNames from 'classnames'
import URL_CONFIG from '../../data/urlConfig'
import './AdMenuItem.scss'
import { Button, Grid } from '@material-ui/core'
import { getTokenKey } from '../../utils/utility'
import { Link } from 'react-router-dom'

export const Item = ({ activeMenuKey, thumbnail, page, isLast, extraPages, onClick }) => {
	const [isHovering, setHovering] = useState(false)

	const handleMouseHover = () => {
		setHovering(!isHovering)
	}

	return (
		<>
			<div className='column' onMouseEnter={handleMouseHover} onMouseLeave={handleMouseHover} onClick={onClick}>
				<Link to={`?ad=${activeMenuKey}#goto_page${page}`}>
					<img className={`thumbnail-image ${isLast && 'last-item'}`} src={`${URL_CONFIG.baseUrl}${thumbnail}`} />
					{!isLast && isHovering ? (
						<div className='jump-to'>
							<button>Jump to</button>
						</div>
					) : null}
				</Link>

				{isLast ? (
					<div className='show-extra'>
						<Link to={`?ad=${activeMenuKey}#goto_page${extraPages}`}>{`+${extraPages} more pages`}</Link>
					</div>
				) : null}
			</div>
		</>
	)
}
