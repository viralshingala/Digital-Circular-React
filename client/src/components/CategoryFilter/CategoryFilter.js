import React, { useContext, useState } from 'react'
import Button from '@material-ui/core/Button'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import { makeStyles } from '@material-ui/core/styles'
import { getTokenKey, categoryFilterSorting } from '../../utils/utility'
import { ALL } from '../../utils/appConstants'
import { FilterContext } from '../FilterContextProvider'
import './CategoryFilter.scss'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex'
	},
	paper: {
		marginRight: theme.spacing(2)
	}
}))

export const CategoryFilter = ({ config }) => {
	const classes = useStyles()
	const [open, setOpen] = React.useState(false)
	const anchorRef = React.useRef(null)
	const [state, dispatch] = useContext(FilterContext)
	const [filter, setfilter] = useState(ALL)

	let filterValues = config
		.map(({ categoryFilter }) => categoryFilter)
		.reduce((acc, val) => acc.concat(val), [])
		.reduce((unique, item) => (unique.includes(item) ? unique : [...unique, item]), [])
		.sort((a, b) => {
			return categoryFilterSorting[a] - categoryFilterSorting[b]
		})
	filterValues.push(ALL)

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
				<Button ref={anchorRef} aria-controls={open ? 'menu-list-grow' : undefined} aria-haspopup='true' onClick={handleToggle}>
					Category: {filter}
				</Button>
				<Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
					{({ TransitionProps, placement }) => (
						<Grow {...TransitionProps} style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}>
							<Paper>
								<ClickAwayListener onClickAway={handleClose}>
									<MenuList autoFocusItem={open} id='menu-list-grow' onKeyDown={handleListKeyDown}>
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

/*
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
	<a
		href=''
		ref={ref}
		onClick={(e) => {
			e.preventDefault()
			onClick(e)
		}}
	>
		{children}
		&#x25bc;
	</a>
))

const CustomMenu = React.forwardRef(({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
	const [value, setValue] = useState('')

	return (
		<div ref={ref} style={style} className={className} aria-labelledby={labeledBy}>
			<ul className='list-unstyled'>{React.Children.toArray(children).filter((child) => !value || child.props.children.toLowerCase().startsWith(value))}</ul>
		</div>
	)
})

export const CategoryFilter = ({ config }) => {
	const [state, dispatch] = useContext(FilterContext)
	const [filter, setfilter] = useState(ALL)
	let filterValues = config
		.map(({ categoryFilter }) => categoryFilter)
		.reduce((acc, val) => acc.concat(val), [])
		.reduce((unique, item) => (unique.includes(item) ? unique : [...unique, item]), [])
		.sort((a, b) => {
			return categoryFilterSorting[a] - categoryFilterSorting[b]
		})
	filterValues.push(ALL)

	const onFilterChange = (filterValue) => {
		setfilter(filterValue)
		dispatch({
			type: 'CHANGE_CATEGORY_FILTER',
			payload: filterValue
		})
	}

	return (
		<Dropdown className='category-filter'>
			<Dropdown.Toggle as={CustomToggle} id='dropdown-custom-components'>
				Category: {filter}
			</Dropdown.Toggle>

			<Dropdown.Menu as={CustomMenu}>
				{filterValues.map((filterValue) => (
					<Dropdown.Item key={getTokenKey()} eventKey={filterValue} onClick={() => onFilterChange(filterValue)}>
						{filterValue}
					</Dropdown.Item>
				))}
			</Dropdown.Menu>
		</Dropdown>
	)
}
*/
