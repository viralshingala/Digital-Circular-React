import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import ReactDOM from 'react-dom'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AdContainer from 'Components/AdContainer'
import { AD_CONFIG, adMenu } from 'Data/adConfig'
import { FilterContextProvider } from 'Components/FilterContextProvider'
import './index.scss'

const App = () => {
	return (
		<div className='ad-app'>
			<Router>
				<FilterContextProvider>
						<AdContainer config={AD_CONFIG} adMenu={adMenu} />
				</FilterContextProvider>
			</Router>
		</div>
	)
}

export default App

ReactDOM.render(<App />, document.querySelector('.main-content'))
