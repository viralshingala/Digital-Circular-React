import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import URL_CONFIG from '../../data/urlConfig'
import { FIND_A_STORE, BUY_ONLINE } from '../../utils/appConstants'
import { getTokenKey, btnNavigationPriority } from '../../utils/utility'
import './SkuList.scss'
import { PrimaryButton, SecondaryButton } from '../Button'

export const SkuList = ({ list }) => {
	const renderBtn = ({ navigation, type }) => {
		const popUpBtnUrl = window.location.href.slice(0, -10) + navigation
		const onClick = () => {
			window.open(popUpBtnUrl, '_blank')
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
			default:
				return null
		}
	}

	const onImageClick = (skuItem) => {
		const navigation = skuItem.buttonConf.sort((a, b) => {
			return btnNavigationPriority[a.type] - btnNavigationPriority[b.type]
		})[0].navigation
		if (navigation) {
			const popUpBtnUrl = window.location.href.slice(0, -10) + navigation
			window.open(popUpBtnUrl, '_blank')
		}
	}

	return list.map((skuItem) => {
		const imageSrc = URL_CONFIG.skuUrl.replace('SKU_ID', skuItem.sku)
		return (
			<Grid container key={getTokenKey()}>
				<Grid item md={4}>
					<img style={{ cursor: 'pointer' }} src={imageSrc} onClick={() => onImageClick(skuItem)} />
				</Grid>
				<Grid item md={6}>
					<h2 className='offer-msg'>{skuItem.offerMessage}</h2>
					<p>
						<strong>{skuItem.offerDescription}</strong>
					</p>
					<p>
						<small>{skuItem.disclaimer}</small>
					</p>
					{skuItem.buttonConf.map((btn) => {
						return <React.Fragment key={getTokenKey()}>{renderBtn(btn)}</React.Fragment>
					})}{' '}
				</Grid>
			</Grid>
		)
	})
}
