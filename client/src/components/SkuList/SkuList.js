import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import URL_CONFIG from '../../data/urlConfig'
import { FIND_A_STORE, BUY_ONLINE, BOOK_NOW } from '../../utils/appConstants'
import { getTokenKey, btnNavigationPriority } from '../../utils/utility'
import './SkuList.scss'
import { PrimaryButton, SecondaryButton } from '../Button'

export const SkuList = ({ list }) => {
	const renderBtn = ({ navigation, type }) => {
		//const popUpBtnUrl = window.location.href.slice(0, -10) + navigation
		const onClick = () => {
			window.open(navigation, '_blank')
		}

		switch (type) {
			case FIND_A_STORE:
				return (
					<SecondaryButton variant='contained' color='primary' onClick={onClick}>
						Find a Store
					</SecondaryButton>
				)
			case BUY_ONLINE:
				return (
					<PrimaryButton variant='contained' color='primary' onClick={onClick}>
						Buy Online
					</PrimaryButton>
				)
				case BOOK_NOW:
				return (
					<PrimaryButton variant='contained' color='primary' onClick={onClick}>
						Book Now
					</PrimaryButton>
				)
			default:
				return null
		}
	}

	const onImageClick = (skuItem) => {
		const navigation = skuItem.buttonConf.sort((a, b) => {
			return btnNavigationPriority[a.type] - btnNavigationPriority[b.type]
		})[0].navigation
		if (navigation) {
			//const popUpBtnUrl = navigation
			window.open(navigation, '_blank')
		}
	}

	return (
		<div className='sku-list'>
			{list.map((skuItem) => {
				const imageSrc = URL_CONFIG.skuUrl.replace('SKU_ID', skuItem.sku)
				return (
					<Grid  container key={getTokenKey()}>
						<Grid className="sku-img-align" item md={5}>
							<img style={{ cursor: 'pointer' }} src={imageSrc} onClick={() => onImageClick(skuItem)} />
						</Grid>
						<Grid item md={7}>
							<h2 className='offer-msg'>{skuItem.offerMessage}</h2>
							<p>
								<strong>{skuItem.offerDescription}</strong>
							</p>
							<p className='ofr-disclaimer'>
								<small>{skuItem.disclaimer}</small>
							</p>
							<p>
							{skuItem.buttonConf.map((btn) => {
								return <React.Fragment key={getTokenKey()}>{renderBtn(btn)}</React.Fragment>
							})}{' '}
							</p>
						</Grid>
					</Grid>
				)
			})}
		</div>
	)
}
