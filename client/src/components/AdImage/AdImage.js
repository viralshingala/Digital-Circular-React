import React, { useState } from 'react'
// import { Card, Modal } from 'react-bootstrap'
import URL_CONFIG from '../../data/urlConfig'
import PopupWindow from '../PopupWindow'
import SkuList from '../SkuList'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import './AdImage.scss'

export const AdImage = ({ config }) => {
	const { navigation, imageId, alt } = config
	const imageSrc = URL_CONFIG.baseImageUrl.replace('IMAGE_ID', imageId)
	const [showPopUp, setShowPopUp] = useState()

	const onImageClick = () => {
		if (navigation) {
			window.location.href = window.location.href.slice(0, -10) + navigation
		} else {
			setShowPopUp(true)
		}
	}

	return (
		<>
			{/* <img src={imageSrc} alt={alt} className='ad-image' onClick={onImageClick} /> */}
			<Card>
				<CardMedia image={imageSrc} component='img' />
			</Card>
			{/* <div className='ad-popup'>
				<PopupWindow show={showPopUp} onHide={() => setShowPopUp(false)} size='lg'>
					<SkuList list={config.popUp} />
				</PopupWindow>
			</div> */}
		</>
	)
}
