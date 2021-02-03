import React from 'react'
import Grid from '@material-ui/core/Grid'
import AdMenu from './AdMenu'
import ViewPages from './ViewPages'
import CategoryFilter from './CategoryFilter'
import './Header.scss'

export const Header = ({ adMenu, config }) => {
	return (
		<div>
			<Grid container spacing={0}>
				<AdMenu adMenu={adMenu} />
				<ViewPages adConfig={config} />
				<CategoryFilter />
			</Grid>
		</div>
	)
}
