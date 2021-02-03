import React, { useContext, useState } from 'react'
import Button from '@material-ui/core/Button'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import { makeStyles } from '@material-ui/core/styles'
import { getTokenKey, categoryFilterSorting, getAdType, filterAds } from '../../../utils/utility'
import { ALL } from '../../../utils/appConstants'
import { FilterContext } from '../../FilterContextProvider'
import './CategoryFilter.scss'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex'
	},
	paper: {
		marginRight: theme.spacing(2)
	},
	customWidth: {
		'& div': {
			// this is just an example, you can use vw, etc.
			width: '350px'
		}
	}
}))

export const CategoryFilter = () => {
	const classes = useStyles()
	const adType = getAdType()
	const [open, setOpen] = React.useState(false)
	const anchorRef = React.useRef(null)
	const [state, dispatch] = useContext(FilterContext)
	const { ads } = state
	const [filter, setfilter] = useState(ALL)

	let filterValues = filterAds(ads, adType)
		.map(({ categoryFilter }) => categoryFilter)
		.reduce((acc, val) => acc.concat(val), [])
		.reduce((unique, item) => (unique.includes(item) ? unique : [...unique, item]), [])
		.sort((a, b) => {
			return categoryFilterSorting[a] - categoryFilterSorting[b]
		})
	if (!filterValues.includes(ALL)) filterValues.push(ALL)

	const onFilterChange = (filterValue) => {
		setfilter(filterValue)
		dispatch({
			type: 'CHANGE_CATEGORY_FILTER',
			payload: filterValue
		})
		setOpen(false)
	}

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen)
	}

	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return
		}

		setOpen(false)
	}

	function handleListKeyDown(event) {
		if (event.key === 'Tab') {
			event.preventDefault()
			setOpen(false)
		}
	}

	// return focus to the button when we transitioned from !open -> open
	const prevOpen = React.useRef(open)
	React.useEffect(() => {
		if (prevOpen.current === true && open === false) {
			anchorRef.current.focus()
		}
		prevOpen.current = open
	}, [open])

	return (
		<div className={classes.root} className='category-filter'>
			<>
				<div className='catgry-text' ref={anchorRef} aria-controls={open ? 'menu-list-grow' : undefined} aria-haspopup='true' onClick={handleToggle}>
					Category: {filter}
				</div>
				<Popper className='catgry-box-shd' open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
					{({ TransitionProps, placement }) => (
						<Grow {...TransitionProps} style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}>
							<Paper>
								<ClickAwayListener onClickAway={handleClose}>
									<MenuList autoFocusItem={open} id='menu-list-grow' onKeyDown={handleListKeyDown} className={classes.customWidth}>
										{filterValues.map((filterValue) => (
											<MenuItem key={getTokenKey()} onClick={() => onFilterChange(filterValue)}>
												{filterValue}
											</MenuItem>
										))}
									</MenuList>
								</ClickAwayListener>
							</Paper>
						</Grow>
					)}
				</Popper>
			</>
		</div>
	)
}
