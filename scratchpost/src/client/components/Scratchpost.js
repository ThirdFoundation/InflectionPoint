import Start from './Start';
import LeaderView from './LeaderView';
import ParticView from './ParticView';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class Scratchpost extends Component {

	constructor(props) {
		super(props);
		this.state = {
			session: null,
			user: null
		}
	}

	setGlobalState = (obj) => {
		this.setState(obj);
	}

	getGlobalState = (key) => {
		return (this.state[key])
	}

	render() {
		return (
			<BrowserRouter>
		    <Switch>
		    	<Route exact path='/start' render={() => (
		    		<Start setGlobalState={this.setGlobalState} />
		    	)} />
		    	<Route path='/leader' render={() => (
		    		<LeaderView  getGlobalState={this.getGlobalState} />
		    	)} />
		    	<Route path='/partic' render={() => (
		    		<ParticView  getGlobalState={this.getGlobalState} />
		    	)} />
		    </Switch>
		  </BrowserRouter>
		)
	}
}

export default Scratchpost
