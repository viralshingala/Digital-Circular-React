import React, { useReducer, createContext } from 'react'
import { ALL, LOCAL } from '../utils/appConstants'

export const FilterContext = React.createContext([{}, function () {}])

const initialState = {
	filter: ALL,
	adType: LOCAL
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
		default:
			throw new Error()
	}
}

export const FilterContextProvider = (props) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	return <FilterContext.Provider value={[state, dispatch]}>{props.children}</FilterContext.Provider>
}
