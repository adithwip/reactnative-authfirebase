import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyAwcUWfZlYO32f-bt4NGiy1Gqn3f3nZY3I',
			authDomain: 'loginappreactnative.firebaseapp.com',
			databaseURL: 'https://loginappreactnative.firebaseio.com',
			projectId: 'loginappreactnative',
			storageBucket: 'loginappreactnative.appspot.com',
			messagingSenderId: '780713378147'
		});
	}

	render() {
		return(
			<View>
				<Header headerText="Authentication" />
				<LoginForm />
			</View>
		)
	}
}

export default App;