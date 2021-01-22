import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import URL_CONFIG from '../../data/urlConfig'
import { FIND_A_STORE, BUY_ONLINE } from '../../utils/appConstants'
import { getTokenKey } from '../../utils/utility'
import './SkuList.scss'

export const SkuList = ({ list }) => {
	const renderBtn = ({ navigation, type }) => {
		const popUpBtnUrl = window.location.href.slice(0,-10)+navigation
		const onClick = () => {
		window.open(
			popUpBtnUrl,
				'_blank' 
			  );
		}

		switch (type) {
			case FIND_A_STORE:
				return (
					<Button variant='secondary' onClick={onClick}>
						Find a Store
					</Button>
				)
			case BUY_ONLINE:
				return (
					<Button variant='primary' onClick={onClick}>
						Buy Online
					</Button>
				)
			default:
				return null
		}
	}

	return list.map((skuItem) => {
		const imageSrc = URL_CONFIG.skuUrl.replace('SKU_ID', skuItem.sku)
		return (
			<Row className='sku-list' key={getTokenKey()}>
				<Col md={4} className='pr-0'>
					<img src={imageSrc} />
				</Col>
				<Col md={6}>
					<h2 className='offer-msg'>{skuItem.offerMessage}</h2>
					<p>
						<strong>{skuItem.offerDescription}</strong>
					</p>
					<p>
						<small>{skuItem.disclaimer}</small>
					</p>
					{skuItem.buttonConf.map((btn) => {
						return <React.Fragment key={getTokenKey()}>{renderBtn(btn)}</React.Fragment>
					})}
				</Col>
			</Row>
		)
	})
}
