import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { getTokenKey } from '../../utils/utility'
import AdImage from '../AdImage'

export const TwoColumn = ({ config }) => {
	return (
		<Row className='mx-0'>
			{config.map(({ customPadding, ...rest }, index) => {
				return (
					<Col className='px-0' lg={6} md={6} sm={6} xs={6} key={getTokenKey()}>
						<AdImage config={rest} />
					</Col>
				)
			})}
		</Row>
	)
}
