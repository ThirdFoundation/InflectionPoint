import React, { Component } from 'react';
import firebase from '../utilities/firebase.js';

class ParticView extends Component {

	constructor(props){
		super(props);
		this.state = {
			username: null,
			response: null
		}
	}

  render() {
    return (
      <p>Zolayvar</p>
    );
  }
}

export default ParticView;
