import React from 'react'
import classNames from 'classnames'

import './PopupWindow.scss'

export const PopupWindow = ({ show, onHide, children, ...other }) => {
	return (
		<Modal show={show} onHide={onHide} animation={false} {...other}>
			<Modal.Header className={classNames('pupup-header', 'p-0')} closeButton></Modal.Header>
			<Modal.Body>{children}</Modal.Body>
		</Modal>
	)
}
