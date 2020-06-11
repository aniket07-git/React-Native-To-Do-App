import React from 'react';


import { View, SafeAreaView, Text, StyleSheet } from 'react-native';

import AddTask from '../../../screens/TabTask/AddTask';

export default class DefaultScreen extends React.Component {
	render() {
		return (
			<SafeAreaView style={styles.container}>
				<AddTask />
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#EAF0F1'
	}
});
