export const adMenu = {
	local: {
		label: 'Local Ad',
		validity: 'Valid Dec 28 - Jan 31',
		imageId: 'US_202101_PLNR_CIRC-Thumbnail_x2'
	},
	specialty: {
		label: 'Specialty Ad',
		validity: 'Valid Dec 28 - Jan 31',
		imageId: 'US_202101_PLNR_SP_CIRC-Thumbnail'
	}
}

export const AD_CONFIG = [
	{
		pageNo: 1,
		type: 'Local Ad',
		categoryFilter: ['Dog'],
		thumbnail: 'US-202101-P1-Index-Thumbnail_x2',
		config: {
			imageId: 'US-202101_pg1_ad1_x3',
			alt: 'dog_image_1',
			popUp: [
				{
					offerMessage: 'starting at $5.99',
					offerDescription: "entire stock Valentine's Day dog treats",
					disclaimer: 'Valid without Treats™ membership.',
					sku: '5303924',
					buttonConf: [
						{ type: 'findStore', navigation: '/store-locator/' },
						{ type: 'buyOnline', navigation: '/featured-shops/valentines-day/top-paw/?pmin=0.00&srule=best-sellers' }
					]
				},
				{
					offerMessage: 'starting at $2.99',
					offerDescription: 'Top Paw® spring toys',
					disclaimer: 'Valid without Treats™ membership.',
					sku: '5303960',
					buttonConf: [
						{ type: 'findStore', navigation: '/store-locator/' },
						{ type: 'buyOnline', navigation: '/dog/toys/top-paw/?pmin=0.00&srule=best-sellers' }
					]
				}
			]
		}
	},
	{
		pageNo: 2,
		type: 'Local Ad',
		categoryFilter: ['Dog'],
		thumbnail: 'US-202101-P2-Index-Thumbnail',
		config: {
			imageId: 'US-202101_pg2_ad1',
			alt: 'dog_image_2',
			popUp: [
				{
					offerMessage: 'buy 1, get the 2nd  25% off',
					offerDescription: 'dog treats & chews  exclusions apply',
					disclaimer: 'Offer valid 12/28/20-1/31/21 with Treats™ membership. Discount taken on lowest priced qualifying item(s) purchased. Must be signed in to your Treats account prior to purchase or use Treats membership ID in stores at checkout. Prices & selection may vary by store & online. While supplies last. Mix & match allowed. Excludes WHIMZEES® bulk dental treats, NUTRO™, Greenies® & Pedigree®DENTASTIX™ dog treats.',
					sku: '5303745',
					buttonConf: [
						{ type: 'findStore', navigation: '/store-locator/' },
						{ type: 'buyOnline', navigation: '/dog/treats/#page_name=flyout&category=dog&cta=treats' }
					]
				}
			]
		}
	},
	{
		pageNo: 3,
		categoryFilter: ['Dog'],
		thumbnail: 'US-202101-P3-Index-Thumbnail',
		type: 'Local Ad',
		config: [
			{
				imageId: 'US-202101_pg3_ad1',
				alt: 'dog_image_3-1',
				navigation: '/store-locator/'
			},
			[
				{
					imageId: 'US-202101_pg3_ad2',
					alt: 'dog_image_3-2',
					navigation: '/store-locator/'
				},
				{
					imageId: 'US-202101_pg3_ad3',
					alt: 'dog_image_3-3',
					navigation: '/store-locator/'
				},
				{
					imageId: 'US-202101_pg3_ad4',
					alt: 'dog_image_3-4',
					navigation: '/featured-brands/nutro/dog/dry-food/?pmin=0.00&srule=best-sellers'
				}
			],
			[
				{
					imageId: 'US-202101_pg3_ad5',
					alt: 'dog_image_3-5',
					navigation: '/store-locator/'
				},
				{
					imageId: 'US-202101_pg3_ad6',
					alt: 'dog_image_3-6',
					navigation: '/featured-brands/simply-nourish/dry-food/dog/?pmin=0.00&srule=best-sellers&prefn1=customSeries&prefv1=Simply%20Nourish%20Natural%20Solutions'
				},
				{
					imageId: 'US-202101_pg3_ad7',
					alt: 'dog_image_3-7',
					navigation: '/store-locator/'
				}
			]
		]
	},
	{
		pageNo: 4,
		categoryFilter: ['Dog'],
		thumbnail: 'US-202101-P4-Index-Thumbnail',
		type: 'Local Ad',
		config: [
			{
				imageId: 'US-202101_pg4_ad1',
				alt: 'dog_image_4-1',
				navigation: '/store-locator/'
			},
			[
				{
					imageId: 'US-202101_pg4_ad2',
					alt: 'dog_image_4-2',
					navigation: '/store-locator/'
				},
				{
					imageId: 'US-202101_pg4_ad3',
					alt: 'dog_image_4-3',
					navigation: '/featured-brands/authority/dry-food/dog/?pmin=0.00&srule=best-sellers'
				},
				{
					imageId: 'US-202101_pg4_ad4',
					alt: 'dog_image_4-4',
					navigation: '/featured-brands/purina-one/dog/dry-food/?pmin=0.00&srule=best-sellers'
				}
			],
			{
				imageId: 'US-202101_pg4_ad5',
				alt: 'dog_image_4-5',
				navigation: '/store-locator/'
			}
		]
	},
	{
		pageNo: 5,
		categoryFilter: ['Dog'],
		thumbnail: 'US-202101-P5-Index-Thumbnail',
		type: 'Local Ad',
		config: [
			{
				imageId: 'US-202101_pg5_ad1',
				alt: 'dog_image_5-1',
				popUp: [
					{
						offerMessage: 'buy 2, get the 3rd 50% off',
						offerDescription: 'entire stock toppers, mixers & broths, .75 oz.-2 lb. pkgs.',
						disclaimer: 'Offer valid 12/28/20-1/31/21 with Treats™ membership. Discount taken on lowest priced qualifying item(s) purchased. Must be signed in to your Treats account prior to purchase or use Treats membership ID in stores at checkout. Prices & selection may vary by store & online. While supplies last. Mix & match allowed.',
						sku: '5279933',
						buttonConf: [
							{ type: 'findStore', navigation: '/store-locator/' },
							{ type: 'buyOnline', navigation: '/dog/food/food-toppers/#page_name=flyout&category=dog&cta=foodtoppers' }
						]
					}
				]
			},
			[
				{
					imageId: 'US-202101_pg5_ad2',
					alt: 'dog_image_5-2',
					popUp: [
						{
							offerMessage: 'sale 4 / $6',
							offerDescription: 'entire stock Wellness® dog food, 3 oz. pouches & tubs',
							disclaimer: 'Must buy 4 to receive discount.',
							sku: '5220091',
							buttonConf: [{ type: 'findStore', navigation: '/store-locator/' }]
						}
					]
				},
				{
					imageId: 'US-202101_pg5_ad3',
					alt: 'dog_image_5-3',
					popUp: [
						{
							offerMessage: 'sale 8 / $14',
							offerDescription: 'select Purina® Pro Plan® dog food, 13 oz. cans',
							disclaimer: 'Must buy 8 to receive discount.',
							sku: '5067191',
							buttonConf: [{ type: 'findStore', navigation: '/store-locator/' }]
						}
					]
				},
				{
					imageId: 'US-202101_pg5_ad4',
					alt: 'dog_image_5-4',
					popUp: [
						{
							offerMessage: 'sale 4 / $10',
							offerDescription: 'entire stock Bil-Jac® dog food, 13 oz. cans',
							disclaimer: 'Must buy 4 to receive discount.',
							sku: '5266784',
							buttonConf: [{ type: 'findStore', navigation: '/store-locator/' }]
						}
					]
				}
			],
			[
				{
					imageId: 'US-202101_pg5_ad5',
					alt: 'dog_image_5-5',
					popUp: [
						{
							offerMessage: 'spend $20, get $5 off now',
							offerDescription: 'entire stock Rachael Ray™ Nutrish® dog food, 3.5-48 oz. tubs, cups, cans, & variety packs',
							disclaimer: 'Offer valid 12/28/20-1/31/21 in stores only with Treats™ membership. Transaction total prior to taxes & after discounts are applied. Max value: $5. While supplies last. Prices & selection may vary by store. Excludes services.',
							sku: '5277822',
							buttonConf: [{ type: 'findStore', navigation: '/store-locator/' }]
						}
					]
				},
				{
					imageId: 'US-202101_pg5_ad6',
					alt: 'dog_image_5-6',
					popUp: [
						{
							offerMessage: 'sale 7 / $10',
							offerDescription: 'entire stock Purina® ONE® dog food, 13 oz. cans',
							disclaimer: 'Must buy 7 to receive discount.',
							sku: '5127457',
							buttonConf: [
								{ type: 'findStore', navigation: '/store-locator/' },
								{ type: 'buyOnline', navigation: '/featured-brands/purina-one/dog/canned-food/?pmin=0.00&srule=best-sellers' }
							]
						}
					]
				},
				{
					imageId: 'US-202101_pg5_ad7',
					alt: 'dog_image_5-7',
					popUp: [
						{
							offerMessage: 'sale 8 / $11',
							offerDescription: 'entire stock Authority® dog food, 13 oz. cans',
							disclaimer: 'Must buy 8 to receive discount.',
							sku: '5278696',
							buttonConf: [
								{ type: 'findStore', navigation: '/store-locator/' },
								{ type: 'buyOnline', navigation: '/featured-brands/authority/canned-food/dog/?pmin=0.00&srule=best-sellers' }
							]
						}
					]
				}
			]
		]
	},
	{
		pageNo: 6,
		type: 'Local Ad',
		categoryFilter: ['Dog'],
		thumbnail: 'US-202101-P6-Index-Thumbnail',
		config: {
			imageId: 'US-202101_pg6_ad1',
			alt: 'dog_image_6',
			popUp: [
				{
					offerMessage: 'starting at $12.99',
					offerDescription: 'Top Paw® collars, leads, harnesses & accessories',
					disclaimer: 'Valid without Treats™ membership.',
					sku: '5304468',
					buttonConf: [
						{ type: 'findStore', navigation: '/store-locator/' },
						{ type: 'buyOnline', navigation: '/dog/collars-harnesses-and-leashes/top-paw/?pmin=0.00&srule=best-sellers' }
					]
				},
				{
					offerMessage: 'starting at $9.99',
					offerDescription: 'entire stock toppers, mixers & broths, .75 oz.-2 lb. pkgs.',
					disclaimer: 'Valid without Treats™ membership.',
					sku: '5304319',
					buttonConf: [
						{ type: 'findStore', navigation: '/store-locator/' },
						{ type: 'buyOnline', navigation: '/dog/clothing-and-shoes/top-paw/?pmin=0.00&srule=best-sellers' }
					]
				},
				{
					offerMessage: 'starting at $14.99',
					offerDescription: 'entire stock toppers, mixers & broths, .75 oz.-2 lb. pkgs.',
					disclaimer: 'Valid without Treats™ membership.',
					sku: '5302334',
					buttonConf: [
						{ type: 'findStore', navigation: '/store-locator/' },
						{ type: 'buyOnline', navigation: '/dog/clothing-and-shoes/sweaters-and-coats/top-paw/?pmin=0.00&srule=best-sellers' }
					]
				}
			]
		}
	},
	{
		pageNo: 7,
		type: 'Local Ad',
		categoryFilter: ['Dog'],
		thumbnail: 'US-202101-P7-Index-Thumbnail',
		config: [
			{
				imageId: 'US-202101_pg7_ad1',
				alt: 'dog_image_7-1'
			},
			{
				imageId: 'US-202101_pg7_ad2',
				alt: 'dog_image_7-2'
			}
		]
	},
	{
		page: 8,
		type: 'Local Ad',
		categoryFilter: ['Dog'],
		thumbnail: 'US-202101-P8-Index-Thumbnail',
		config: [
			{
				imageId: 'US-202101_pg8_ad1',
				alt: 'dog_image8-1'
			},
			[
				{
					imageId: 'US-202101_pg8_ad2',
					alt: 'dog_image8-2'
				},
				{
					imageId: 'US-202101_pg8_ad3',
					alt: 'dog_image8-3'
				},
				{
					imageId: 'US-202101_pg8_ad4',
					alt: 'dog_image8-4'
				}
			]
		]
	},
	{
		page: 9,
		type: 'Local Ad',
		categoryFilter: ['Dog', 'Services'],
		thumbnail: 'US-202101-P9-Index-Thumbnail',
		config: [
			{
				imageId: 'US-202101_SERV_pg9_Header',
				alt: 'dog_image8-1'
			},
			{
				imageId: 'US-202101_SERV_pg9_ad1',
				alt: 'dog_image8-1'
			},
			{
				imageId: 'US-202101_SERV_pg9_ad2',
				alt: 'dog_image8-1'
			},
			{
				imageId: 'US-202101_SERV_pg9_ad3',
				alt: 'dog_image8-1'
			},
			{
				imageId: 'US-202101_SERV_pg9_Footer',
				alt: 'dog_image8-1'
			}
		]
	},
	{
		page: 10,
		type: 'Local Ad',
		categoryFilter: ['Cat'],
		thumbnail: 'US-202101-P10-Index-Thumbnail',
		config: [
			{
				imageId: 'US-202101_pg10_ad1',
				alt: 'dog_image8-1'
			},
			[
				{
					imageId: 'US-202101_pg10_ad2',
					alt: 'dog_image8-1'
				},
				{
					imageId: 'US-202101_pg10_ad3',
					alt: 'dog_image8-1'
				},
				{
					imageId: 'US-202101_pg10_ad4',
					alt: 'dog_image8-1'
				}
			],
			[
				{
					imageId: 'US-202101_pg10_ad5',
					alt: 'dog_image8-1'
				},
				{
					imageId: 'US-202101_pg10_ad6',
					alt: 'dog_image8-1'
				},
				{
					imageId: 'US-202101_pg10_ad7',
					alt: 'dog_image8-1'
				}
			]
		]
	},
	{
		page: 11,
		type: 'Local Ad',
		categoryFilter: ['Cat'],
		thumbnail: 'US-202101-P11-Index-Thumbnail',
		config: [
			[
				{
					imageId: 'US-202101_pg11_ad1',
					alt: 'dog_image8-1'
				},
				{
					imageId: 'US-202101_pg11_ad2',
					alt: 'dog_image8-1'
				},
				{
					imageId: 'US-202101_pg11_ad3',
					alt: 'dog_image8-1'
				}
			],
			[
				{
					imageId: 'US-202101_pg11_ad4',
					alt: 'dog_image8-1'
				},
				{
					imageId: 'US-202101_pg11_ad5',
					alt: 'dog_image8-1'
				},
				{
					imageId: 'US-202101_pg11_ad6',
					alt: 'dog_image8-1'
				}
			],
			[
				{
					imageId: 'US-202101_pg11_ad7',
					alt: 'dog_image8-1'
				},
				{
					imageId: 'US-202101_pg11_ad8',
					alt: 'dog_image8-1'
				},
				{
					imageId: 'US-202101_pg11_ad9',
					alt: 'dog_image8-1'
				}
			]
		]
	},
	{
		page: 12,
		type: 'Local Ad',
		categoryFilter: ['Cat'],
		thumbnail: 'US-202101-P12-Index-Thumbnail',
		config: [
			[
				{
					imageId: 'US-202101_pg12_ad1',
					alt: 'dog_image8-1'
				},
				{
					imageId: 'US-202101_pg12_ad2',
					alt: 'dog_image8-1'
				},
				{
					imageId: 'US-202101_pg12_ad3',
					alt: 'dog_image8-1'
				}
			],
			[
				{
					imageId: 'US-202101_pg12_ad4',
					alt: 'dog_image8-1'
				},
				{
					imageId: 'US-202101_pg12_ad5',
					alt: 'dog_image8-1'
				},
				{
					imageId: 'US-202101_pg12_ad6',
					alt: 'dog_image8-1'
				}
			],
			[
				{
					imageId: 'US-202101_pg12_ad7',
					alt: 'dog_image8-1'
				},
				{
					imageId: 'US-202101_pg12_ad8',
					alt: 'dog_image8-1'
				},
				{
					imageId: 'US-202101_pg12_ad9',
					alt: 'dog_image8-1'
				}
			]
		]
	},
	{
		page: 13,
		type: 'Local Ad',
		categoryFilter: ['Cat'],
		thumbnail: 'US-202101-P13-Index-Thumbnail',
		config: [
			[
				{
					imageId: 'US-202101_pg13_ad1',
					alt: 'dog_image8-1'
				},
				{
					imageId: 'US-202101_pg13_ad2',
					alt: 'dog_image8-1'
				},
				{
					imageId: 'US-202101_pg13_ad3',
					alt: 'dog_image8-1'
				}
			],
			[
				{
					imageId: 'US-202101_pg13_ad4',
					alt: 'dog_image8-1'
				},
				{
					imageId: 'US-202101_pg13_ad5',
					alt: 'dog_image8-1'
				},
				{
					imageId: 'US-202101_pg13_ad6',
					alt: 'dog_image8-1'
				}
			],
			[
				{
					imageId: 'US-202101_pg13_ad7',
					alt: 'dog_image8-1'
				},
				{
					imageId: 'US-202101_pg13_ad8',
					alt: 'dog_image8-1'
				},
				{
					imageId: 'US-202101_pg13_ad9',
					alt: 'dog_image8-1'
				}
			]
		]
	},
	{
		page: 14,
		type: 'Local Ad',
		categoryFilter: ['Cat'],
		thumbnail: 'US-202101-P14-Index-Thumbnail',
		config: [
			{
				imageId: 'US-202101_pg14_ad1',
				alt: 'dog_image8-1'
			},
			[
				{
					imageId: 'US-202101_pg14_ad2',
					alt: 'dog_image8-1'
				},
				{
					imageId: 'US-202101_pg14_ad3',
					alt: 'dog_image8-1'
				}
			]
		]
	},
	{
		page: 15,
		type: 'Specialty Ad',
		categoryFilter: ['Fish'],
		thumbnail: 'US-202101-P15-Index-Thumbnail',
		config: [
			{
				imageId: 'US-202101_pg15_ad1',
				alt: 'dog_image8-1'
			},

			{
				imageId: 'US-202101_pg15_ad2',
				alt: 'dog_image8-1'
			}
		]
	},
	{
		page: 16,
		type: 'Specialty Ad',
		categoryFilter: ['Reptile'],
		thumbnail: 'US-202101-P16-Index-Thumbnail',
		config: [
			{
				imageId: 'US-202101_pg16_ad1',
				alt: 'dog_image8-1'
			},
			[
				{
					imageId: 'US-202101_pg16_ad2',
					alt: 'dog_image8-2'
				},
				{
					imageId: 'US-202101_pg16_ad3',
					alt: 'dog_image8-3'
				},
				{
					imageId: 'US-202101_pg16_ad4',
					alt: 'dog_image8-4'
				}
			],
			[
				{
					imageId: 'US-202101_pg16_ad5',
					alt: 'dog_image8-2'
				},
				{
					imageId: 'US-202101_pg16_ad6',
					alt: 'dog_image8-3'
				}
			]
		]
	},
	{
		page: 17,
		type: 'Specialty Ad',
		categoryFilter: ['Smallpet', 'Bird'],
		thumbnail: 'US-202101-P17-Index-Thumbnail',
		config: [
			{
				imageId: 'US-202101_pg17_ad1',
				alt: 'dog_image8-1'
			},
			[
				{
					imageId: 'US-202101_pg17_ad2',
					alt: 'dog_image8-1'
				},
				{
					imageId: 'US-202101_pg17_ad3',
					alt: 'dog_image8-1'
				}
			],
			[
				{
					imageId: 'US-202101_pg17_ad4',
					alt: 'dog_image8-1'
				},
				{
					imageId: 'US-202101_pg17_ad5',
					alt: 'dog_image8-1'
				}
			]
		]
	},
	{
		page: 18,
		type: 'Local Ad',
		categoryFilter: ['Dog', 'Events'],
		config: [
			{
				imageId: 'US-202101_DDC_pg18_Header',
				alt: 'dog_image8-1'
			},
			{
				imageId: 'US-202101_DDC_pg18_ad1',
				alt: 'dog_image8-1'
			},
			{
				imageId: 'US-202101_DDC_pg18_ad2',
				alt: 'dog_image8-1'
			},
			{
				imageId: 'US-202101_DDC_pg18_ad3',
				alt: 'dog_image8-1'
			},
			{
				imageId: 'US-202101_DDC_pg18_Footer',
				alt: 'dog_image8-1'
			}
		]
	},
	{
		pageNo: 19,
		type: 'Local Ad',
		categoryFilter: ['Dog'],
		config: {
			imageId: 'US-202101_pg19_ad1',
			alt: 'dog_image_19'
		}
	},
	{
		pageNo: 20,
		type: 'Local Ad',
		categoryFilter: ['Dog'],
		config: {
			imageId: 'US-202101_pg20_ad1',
			alt: 'dog_image_20'
		}
	},
	{
		pageNo: 21,
		type: 'Local Ad',
		categoryFilter: ['Dog'],
		config: {
			imageId: 'US-202101_pg21_ad1',
			alt: 'dog_image_21'
		}
	},
	{
		pageNo: 22,
		type: 'Local Ad',
		categoryFilter: ['Dog'],
		config: {
			imageId: 'US-202101_pg22_ad1',
			alt: 'dog_image_22'
		}
	},
	{
		pageNo: 23,
		type: 'Local Ad',
		categoryFilter: ['Dog', 'Cat'],
		config: {
			imageId: 'US-202101_pg23_ad1',
			alt: 'dog_image_23'
		}
	},
	{
		pageNo: 24,
		type: 'Local Ad',
		categoryFilter: ['Dog'],
		config: {
			imageId: 'US-202101_pg24_ad1',
			alt: 'dog_image_24'
		}
	},
	{
		pageNo: 25,
		type: 'Local Ad',
		categoryFilter: ['Dog', 'Cat'],
		config: {
			imageId: 'US-202101_pg25_ad1',
			alt: 'dog_image_25'
		}
	},
	{
		pageNo: 26,
		type: 'Specialty Ad',
		categoryFilter: ['Dog', 'Cat', 'Fish', 'Reptile', 'Bird', 'Smallpet', 'Services', 'Events'],
		thumbnail: 'US-202101-P26-Index-Thumbnail',
		config: [
			{
				imageId: 'US-202101_BACK_pg26_ad1_v2',
				alt: 'dog_image_25'
			},
			{
				imageId: 'US-202101_BACK_pg26_ad2',
				alt: 'dog_image_25'
			},
			[
				{
					imageId: 'US-202101_BACK_pg26_ad3',
					alt: 'dog_image_25',
					customPadding: true
				},
				{
					imageId: 'US-202101_BACK_pg26_ad4',
					alt: 'dog_image_25',
					customPadding: true
				},
				{
					imageId: 'US-202101_BACK_pg26_ad5',
					alt: 'dog_image_25',
					customPadding: true
				}
			],
			{
				imageId: 'US-202101_BACK_pg26_Footer-1',
				alt: 'dog_image_25'
			},
			{
				imageId: 'US-202101_BACK_pg26_Footer-2',
				alt: 'dog_image_25'
			}
		]
	}
]
