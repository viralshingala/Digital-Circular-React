import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { getTokenKey } from '../../utils/utility'
import AdImage from '../AdImage'

export const ThreeColumn = ({ config }) => {
	return (
		<Row className='mx-0'>
			{config.map(({ customPadding, ...rest }, index) => {
				return (
					<Col className='px-0' lg={4} md={4} sm={4} xs={4} key={getTokenKey()}>
						<AdImage config={rest} />
					</Col>
				)
			})}
		</Row>
	)
}
