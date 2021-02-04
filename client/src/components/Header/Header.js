import React, { useContext } from 'react'
import Grid from '@material-ui/core/Grid'
import AdMenu from './AdMenu'
import ViewPages from './ViewPages'
import { FilterContext } from '../FilterContextProvider'
import CategoryFilter from './CategoryFilter'
import './Header.scss'

export const Header = ({ adMenu, config }) => {
	const [state, dispatch] = useContext(FilterContext)
	const { selectedMenu } = state
	return (
		<div>
			<Grid container spacing={0}>
				<AdMenu adMenu={adMenu} />
				<div className='validity'>{selectedMenu ? selectedMenu.validity : null}</div>
				<ViewPages adConfig={config} />
				<CategoryFilter />
			</Grid>
		</div>
	)
}
