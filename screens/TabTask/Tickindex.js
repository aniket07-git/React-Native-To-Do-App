
import React, { useState } from 'react';
//import ToDoItem from './TickBoxes';
import { db } from '../../src/config';
import * as firebase from 'firebase'
import {
  //SafeAreaView,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  Button,
  Alert
} from 'react-native';

import CheckBox from 'react-native-check-box';


export default class Tickindex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: {},
      presentToDo: '',
    };
  }
  componentDidMount() {
    db.ref('/todos').on('value', querySnapShot => {
      let data = querySnapShot.val() ? querySnapShot.val() : {};
      let todoItems = { ...data };
      this.setState({
        todos: todoItems,
      });
    });
  }
  addNewTodo = () => {
    db.ref('/todos').push({
      done: false,
      todoItem: this.state.presentToDo,
    });
    //Alert.alert('Action!', 'A new To-do item was created');
    this.setState({
      presentToDo: '',
    });
  }
  clearTodos() {
    db.ref('/todos').remove();
  }
  render() {
    let todosKeys = Object.keys(this.state.todos);
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}>
     
        <TextInput
          placeholder="Add List Item"
          placeholderTextColor="#6A89CC"
          value={this.state.presentToDo}
          style={styles.textInput}
          onChangeText={e => {
            this.setState({
              presentToDo: e,
            });
          }}
          onSubmitEditing={this.addNewTodo}
        />
         
        <Button
          title="Add new List item"
          onPress={this.addNewTodo}
          color="#26ae60"
          borderRadius="25"
        />

          <View>
          {todosKeys.length > 0 ? (
            todosKeys.map(key => (
              <ToDoItem
                key={key}
                id={key}
                todoItem={this.state.todos[key]}
              />
            ))
          ) : (
              <Text style={{opacity:0.5, fontSize:16}}>No List Item</Text>
            )}
        </View>
        <View style={{ marginTop: 20 }}>
          <Button title="Clear" onPress={this.clearTodos} color="#EA425C" />
        </View>
         
      </ScrollView>
    );
  }
}

 const ToDoItem = ({todoItem: {todoItem: name, done}, id}) => {
  const [doneState, setDone] = useState(done);
  const onCheck = () => {
    setDone(!doneState);
    db.ref('/todos').update({
      [id]: {
        todoItem: name,
        done: !doneState,
      },
    });
  };
  return (
    <SafeAreaView style={styles.todoItem}>
      <CheckBox
        checkBoxColor="#0ABDE3"
        onClick={onCheck}
        isChecked={doneState}
        disabled={doneState}
      />
      <Text style={[styles.todoText, {opacity: doneState ? 0.3 : 1}]}>
        {name}
      </Text>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF0F1',
  },
  contentContainerStyle: {
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 3,
    borderColor: '#F5BCBA',
    width: '80%',
    borderRadius: 25,
    paddingHorizontal: 10,
    marginVertical: 20,
    fontSize: 20,
  },
  todoItem: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  todoText: {
    borderColor: '#afafaf',
    paddingHorizontal: 5,
    paddingVertical: 7,
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    minWidth: '50%',
    textAlign: 'center',
  },
});

//export const ToDoItem;