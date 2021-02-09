import React, { useContext } from 'react'
import Grid from '@material-ui/core/Grid'
import AdMenu from './AdMenu'
import ViewPages from './ViewPages'
import { FilterContext } from '../FilterContextProvider'
import CategoryFilter from './CategoryFilter'
import './Header.scss'

export const Header = ({ adMenu, config }) => {
	return (
		<div>
			<Grid container spacing={0} className='filtr-nav'>
				<AdMenu adMenu={adMenu} />
				<ViewPages adConfig={config} />
				<CategoryFilter />
			</Grid>
		</div>
	)
}
