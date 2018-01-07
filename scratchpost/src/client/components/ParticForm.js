import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class ParticForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			sessionNameAttempt: null,
			userNameAttempt: null
		}
	}

	handleSessionChange = (e) => {
		this.setState({ sessionNameAttempt: e.target.value });
	}

	handleUserChange = (e) => {
		this.setState({ userNameAttempt: e.target.value });
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.setGlobalState({
			session: this.state.sessionNameAttempt,
			user: this.state.userNameAttempt
		})
		this.context.router.history.push('/partic');
	}

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
        	<input
						autoFocus
						type='text'
						name='sessid'
						placeholder='Session name.'
						onChange={this.handleSessionChange} />
        	<input
						type='text'
						name='userid'
						placeholder='Your name.'
						onChange={this.handleUserChange} />
        	<input
						type='submit'
						value='Submit'
						disabled={!this.state.sessionNameAttempt} />
        </form>
    );
  }
}

ParticForm.contextTypes = {
	router: PropTypes.object
}

export default ParticForm;
