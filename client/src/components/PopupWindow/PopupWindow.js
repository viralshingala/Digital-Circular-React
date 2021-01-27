import React, { useEffect } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import './PopupWindow.scss'

const styles = (theme) => ({
	root: {
		margin: 0,
		padding: theme.spacing(2)
	},
	closeButton: {
		position: 'absolute',
		right: theme.spacing(1),
		top: theme.spacing(1),
		color: theme.palette.grey[500]
	}
})

const DialogTitle = withStyles(styles)((props) => {
	const { children, classes, onClose, ...other } = props
	return (
		<MuiDialogTitle disableTypography className={classes.root} {...other}>
			{onClose ? (
				<IconButton aria-label='close' className={classes.closeButton} onClick={onClose}>
					<CloseIcon />
				</IconButton>
			) : null}
		</MuiDialogTitle>
	)
})

const DialogContent = withStyles((theme) => ({
	root: {
		padding: theme.spacing(2),
		maxWidth: '700px !important'
	}
}))(MuiDialogContent)

export const PopupWindow = ({ open = false, onClose, children, ...other }) => {
	useEffect(() => {
		document.querySelector('body').style.overflow = 'auto!important'
	})
	return (
		<Dialog className='ad-modal' onClose={onClose} aria-labelledby='customized-dialog-title' open={open}>
			<DialogTitle onClose={onClose} />
			<DialogContent>{children}</DialogContent>
		</Dialog>
	)
}
