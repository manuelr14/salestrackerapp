import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/homePage';
import Profile from './pages/profile';
import Sales from './pages/sales';
import Newsale from './pages/newsale';


class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Navbar />

					{/* <Switch>
						<Route exact path={[ '/' ]}>
							<HomePage />
						</Route>
						<Route exact path={[ '/newsale' ]}>
							<Newsale />
						</Route>
						<Route exact path={[ '/sales' ]}>
							<Sales />
						</Route>
						<Route exact path={[ '/profile' ]}>
							<Profile />
						</Route>
					</Switch> */}
				</div>
			</Router>
		);
	}
}

export default App;
