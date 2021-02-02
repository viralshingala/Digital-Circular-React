import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable'
import React, { useContext, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from 'react-router-dom'
import AdContainer from 'Components/AdContainer'
import { AD_CONFIG, adMenu } from 'Data/adConfig'
import { FilterContextProvider } from 'Components/FilterContextProvider'
import './index.scss'
import { FilterContext } from './components/FilterContextProvider'

const App = () => {
	const [state, dispatch] = useContext(FilterContext)

	return (
		<div className='ad-app'>
			<Router>
				<FilterContextProvider>
					{/* <ul>
						<li>
							<Link to='/'>Local Ad</Link>
						</li>
						<li>
							<Link to='?ad=localAd'>local</Link>
						</li>
						<li>
							<Link to='?ad=specialty'>specialty</Link>
						</li>
						<li>
							<Link to='?ad=localAd#goto_page11'>#goto_page11</Link>
						</li>
					</ul> */}
					<Switch>
						{/* <Route path={['/', '/local-ad', 'local-ad/?ad=localAd']} component={() => <AdContainer config={AD_CONFIG} adMenu={adMenu} />} /> */}
						<Route exact path='/'>
							<AdContainer config={AD_CONFIG} adMenu={adMenu} />
						</Route>
						<Route path='/local-ad'>
							<AdContainer config={AD_CONFIG} adMenu={adMenu} />
						</Route>
					</Switch>
				</FilterContextProvider>

				{/* <FilterContextProvider>
					<AdContainer config={AD_CONFIG} adMenu={adMenu} />
				</FilterContextProvider> */}
			</Router>
		</div>
	)
}

const Child = () => {
	// We can use the `useParams` hook here to access
	// the dynamic pieces of the URL.
	let { id } = useParams()

	return (
		<div>
			<h3>ID: {id}</h3>
		</div>
	)
}

export default App

ReactDOM.render(<App />, document.querySelector('.main-content'))
