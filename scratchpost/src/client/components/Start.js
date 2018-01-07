import React, { Component } from 'react';
import LeaderForm from './LeaderForm';
import ParticForm from './ParticForm';

class Start extends Component {

	constructor(props) {
		super(props);
		this.state = {
			role: null
		};
	}

	setRole(role) {
		this.setState({
			role
		});
	}

  render() {
   	if (this.state.role==='Leader') {
   		return (
   			<div>
		    	<img src='/static/img/logo.png' />
		 			<LeaderForm setGlobalState={this.props.setGlobalState} />
   			</div>
   		)
   	}

   	if (this.state.role==='Partic') {
   		return (
   			<div>
		    	<img src='/static/img/logo.png' />
		 			<ParticForm setGlobalState={this.props.setGlobalState} />
   			</div>
   		)
   	}

 		return (
 			<div>
 				<img src='/static/img/logo.png' />
 				<button onClick={this.setRole.bind(this, 'Leader')} >Leader</button>
 				<button onClick={this.setRole.bind(this, 'Partic')} >Partic</button>
 			</div>
 		)
  }
}

export default Start;
