import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Presentation from './container/Presentation';
import NewFriend from './container/NewFriend';
import Error from './container/Error';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route exact path='/' component={Presentation} />
				<Route exact path='/new' component={NewFriend} />
				<Route component={Error} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
