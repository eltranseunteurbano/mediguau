import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { ContextProvider } from './context/ContextProvider';

import Header from './components/Header';
import Presentation from './container/Presentation';
import NewFriend from './container/NewFriend';
import Error from './container/Error';

const App = () => {

	return (
		<BrowserRouter>
			<ContextProvider>
				<Header />
				<Switch>
					<Route exact path='/' component={Presentation} />
					<Route exact path='/new' component={NewFriend} />
					<Route component={Error} />
				</Switch>
			</ContextProvider>
		</BrowserRouter>
	);
}

export default App;
