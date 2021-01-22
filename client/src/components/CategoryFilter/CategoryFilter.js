import React, { useContext, useState } from 'react'
import { Dropdown, FormControl } from 'react-bootstrap'
import { getTokenKey, categoryFilterSorting } from '../../utils/utility'
import { ALL } from '../../utils/appConstants'
import './CategoryFilter.scss'
import { FilterContext } from '../FilterContextProvider'

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
