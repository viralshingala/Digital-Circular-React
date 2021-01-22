import React from 'react'
import { Col } from 'react-bootstrap'
import classNames from 'classnames'
import { getTokenKey } from '../../utils/utility'
import ThreeColumn from '../ThreeColumn'
import TwoColumn from '../TwoColumn'
import AdImage from '../AdImage'
import './MultiAd.scss'

export const MultiAd = ({ config }) => {
	return (
		<Col className='multi-ad' lg={3} md={3} sm={4}>
			{config.map((confObj, index) => {
				return Array.isArray(confObj) ? (
					confObj.length === 3 ? (
						<ThreeColumn config={confObj} key={getTokenKey()} />
					) : (
						<TwoColumn config={confObj} key={getTokenKey()} />
					)
				) : (
					<Col className={classNames('px-0', index !== 0 && 'pt-1')} lg={12} md={12} sm={12} key={getTokenKey()}>
						<AdImage config={confObj} />
					</Col>
				)
			})}
		</Col>
	)
}
