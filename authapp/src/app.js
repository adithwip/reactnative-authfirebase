import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { 
	Header, 
	Button, 
	CardSection, 
	Spinner 
} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	state = {
		loggedIn: null
	}

	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyAwcUWfZlYO32f-bt4NGiy1Gqn3f3nZY3I',
			authDomain: 'loginappreactnative.firebaseapp.com',
			databaseURL: 'https://loginappreactnative.firebaseio.com',
			projectId: 'loginappreactnative',
			storageBucket: 'loginappreactnative.appspot.com',
			messagingSenderId: '780713378147'
		});

		firebase.auth().onAuthStateChanged((user) => {
			console.log('onAuthStateChanged: ', user);
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		})
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return (
						<CardSection>
							<Button
								onPress={() => firebase.auth().signOut()}
							>
								Log out
							</Button>
						</CardSection>
				)
			case false:
				return <LoginForm />
			default:
				return (
					<CardSection>
						<Spinner size="large" feedback="Doing some stuff for you..." />
					</CardSection>
				)
		}
	}

	render() {
		return(
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		)
	}
}

export default App;