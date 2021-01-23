import React from 'react'
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { green, purple } from '@material-ui/core/colors'

const commonButtonStyle = {
	borderRadius: 0,
	textTransform: 'none',
	boxShadow: 'none'
}

export const PrimaryButton = withStyles(() => ({
	root: {
		...commonButtonStyle,
		backgroundColor: '#007DB4',
		'&:hover': {
			backgroundColor: '#007DB4'
		}
	}
}))(Button)

export const SecondaryButton = withStyles(() => ({
	root: {
		...commonButtonStyle,
		backgroundColor: '#4A4A4A',
		'&:hover': {
			backgroundColor: '#4A4A4A'
		}
	}
}))(Button)
