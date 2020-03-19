import React from 'react';


import { View, SafeAreaView, Text , StyleSheet} from 'react-native';
//import {ToDoItem} from '../../../screens/TabTask/';
import CardView from 'react-native-cardview';

export default class DefaultScreen extends React.Component {

  render() {
    const { navigation } = this.props;
    const add_notes = navigation.getParam('addNotes');
    const present_notes = navigation.getParam('presentNote');
    return (
      <SafeAreaView style={styles.container}>
        <CardView
          cardElevation={2}
          cardMaxElevation={2}
          cornerRadius={5}>
        <Text>{JSON.stringify(add_notes)}</Text>
        <Text>Parameters:{JSON.stringify(present_notes)}</Text>
        </CardView>
      </SafeAreaView>
    );
  }

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }


})
