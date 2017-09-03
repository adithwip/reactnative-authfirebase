import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';

const Spinner = ({ size, feedback }) => {
	const { spinnerStyle, textStyle } = styles

	return (
		<View style={spinnerStyle}>
			<ActivityIndicator
				animating
				size={size || 'large'}
			 />
			 <Text style={textStyle}>{feedback}</Text>
		</View>
	)
}

const styles = {
	spinnerStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	textStyle : {
		marginTop: 5,
		fontSize: 16
	}
}

export { Spinner };