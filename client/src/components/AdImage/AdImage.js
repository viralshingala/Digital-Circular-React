import React, { useState } from 'react'
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
			<Card className='ad-image-card'>
				<CardMedia className='ad-image' image={imageSrc} component='img' onClick={onImageClick} />
			</Card>
			<div className='ad-popup'>
				<PopupWindow open={showPopUp} onClose={() => setShowPopUp(false)} size='lg'>
					<SkuList list={config.popUp} />
				</PopupWindow>
			</div>
		</>
	)
}
