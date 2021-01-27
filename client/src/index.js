import React from 'react'
import ReactDOM from 'react-dom'
import AdContainer from 'Components/AdContainer'
import { AD_CONFIG, adMenu } from 'Data/adConfig'
import { FilterContextProvider } from 'Components/FilterContextProvider'

const App = () => {
	return (
		<div className='App'>
			<FilterContextProvider>
				<AdContainer config={AD_CONFIG} adMenu={adMenu} />
			</FilterContextProvider>
		</div>
	)
}

export default App

ReactDOM.render(<App />, document.querySelector('.main-content'))
