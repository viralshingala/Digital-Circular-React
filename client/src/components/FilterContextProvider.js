import React, { useReducer, createContext } from 'react'
import { ALL, LOCAL } from '../utils/appConstants'

export const FilterContext = createContext([{}, () => {}])

const initialState = {
	filter: ALL,
	adType: LOCAL,
	scrollRefId: undefined
}

const reducer = (state, action) => {
	switch (action.type) {
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
		default:
			throw new Error()
	}
}

export const FilterContextProvider = (props) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	return <FilterContext.Provider value={[state, dispatch]}>{props.children}</FilterContext.Provider>
}
