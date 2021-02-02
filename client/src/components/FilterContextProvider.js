import React, { useReducer, createContext, useRef } from 'react'
import { AD_CONFIG } from '../data/adConfig'
import { ALL, LOCAL } from '../utils/appConstants'

export const FilterContext = createContext([{}, () => {}])

const initialState = {
	filter: ALL,
	adType: LOCAL,
	scrollRefId: undefined,
	ads: []
}

const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_AD_CONFIG':
			return {
				...state,
				ads: action.payload
			}
		case 'CHANGE_AD_TYPE':
			return {
				...state,
				adType: action.payload
			}
		case 'CHANGE_CATEGORY_FILTER':
			return {
				...state,
				filter: action.payload
			}
		case 'SCROLL_TO_IMAGE':
			return {
				...state,
				scrollRefId: action.payload
			}
		case 'CHANGE_AD_TYPE':
			return {
				...state,
				adType: action.payload
			}
		default:
			return state
	}
}

export const FilterContextProvider = (props) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	return <FilterContext.Provider value={[state, dispatch]}>{props.children}</FilterContext.Provider>
}
