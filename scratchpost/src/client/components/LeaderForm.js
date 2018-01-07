import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class LeaderForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			sessionNameAttempt: null
		}
	}

	handleChange = (e) => {
		this.setState({sessionNameAttempt: e.target.value})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.setGlobalState({
			session: this.state.sessionNameAttempt
		})
		this.context.router.history.push('/leader');
	}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      	<input
					autoFocus
					type='text'
					onChange={this.handleChange}
					placeholder='Please name your session.' />
      	<input
					type='submit'
					value='Submit'
					disabled={!this.state.sessionNameAttempt} />
      </form>
    );
  }
}

LeaderForm.contextTypes = {
	router: PropTypes.object
}

export default LeaderForm;
