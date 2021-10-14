import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
