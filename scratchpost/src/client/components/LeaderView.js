import React, { Component } from 'react';
import firebase from '../utilities/firebase.js';

class LeaderView extends Component {

	constructor(props){
		super(props);
		this.state = {
			sessionID: this.props.getGlobalState('session'),
			currentPrompt: null
		}

		alert('The session ID is ' + this.state.sessionID + '!');

		this.data = firebase.database().ref(this.state.sessionID);
		this.data.push(this.state.sessionID);
		this.data.onDisconnect().remove();
	}

	handlePromptChange = (e) => {
		this.setState({ currentPrompt: e.target.value });
	}

	handleSubmit = (e) => {
		e.preventDefault();
		alert(this.state.currentPrompt);
	}

  render() {
  	return (
			<div>
				<p>Session ID: {this.state.sessionID}</p>
      	<input type="checkbox" />Hide Names
				<input type="checkbox" />Hide Answers
				<input type="checkbox" />Randomize
				<input type="checkbox" />Freeze submissions
				<form onSubmit={this.handleSubmit}>
					<input
						autoFocus
						type='textarea'
						name='prompt'
						placeholder='Please enter a prompt to be pushed to the group.'
						onChange={this.handlePromptChange} />
					<input type='submit' value='Submit' disabled={!this.state.currentPrompt} />
				</form>
			</div>
    );
  }
}

export default LeaderView;
