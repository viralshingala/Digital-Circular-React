import React, { useContext } from 'react'
import Grid from '@material-ui/core/Grid'
import AdMenu from './AdMenu'
import ViewPages from './ViewPages'
import { FilterContext } from '../FilterContextProvider'
import CategoryFilter from './CategoryFilter'
import './Header.scss'

export const Header = ({ adMenu, config }) => {
	return (
		<div>
			<p>Sign in to Save $5 on select Hill's Science Diet Pet Food with code SAVEONHILLSWM. Offer valid 12/28/2020-3/1/2021 with Treats membership online only at petsmart.com. Must login to your Treats account and enter promo code SAVEONHILLSWM to receive discount. Limit one redemption per Treats customer during the promotion period. Manufacturer’s coupon. Not redeemable for cash, consumer pays any sales tax and/or applicable shipping fees. May not be combinable with other offers or discounts on the same product. While supplies last. Quantities may be limited. Deliveries may be delayed.

30% Autoship - Sign up for Autoship and have products conveniently delivered to you at the frequency you choose! Save 30% on your initial order and 5% on recurring orders. Plus enjoy free shipping on orders over $49.Transaction total is prior to taxes & after discounts are applied. Discounts will automatically apply at checkout once the customer has enrolled. Maximum value $20. Exclusions may apply. Offer not valid on gift cards, gift certificates, previous purchases, or charitable donations and may not be valid on all merchandise. Offer may not be combined with other promotional offers or discounts. Terms and conditions of this offer are subject to change at the sole discretion of PetSmart. Offer valid on PetSmart.com through March 31st, 2021 @ 7:30 am EST.

Free Standard Shipping on orders over $49 - Transaction total is prior to taxes & after discounts are applied. Due to size and/or weight, certain items bear a shipping surcharge or special handling fee, which will still apply. Savings will automatically reflect in shopping cart with the purchase of qualifying merchandise. Maximum value $75. Valid only on orders shipped within the contiguous 48 U.S. states & to military APO/FPO addresses. Offer not valid on products in the following categories: live pets; canned, fresh or frozen foods; select cat litters. Offer may not be combined with other promotional offers or discounts. Terms & conditions of this offer are subject to change at the sole discretion of PetSmart.</p>
			<Grid container spacing={0} className='filtr-nav'>
				<AdMenu adMenu={adMenu} />
				<ViewPages adConfig={config} />
				<CategoryFilter />
			</Grid>
		</div>
	)
}
