
import React, { useState } from 'react';
import {
    //SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image
} from 'react-native';
import {db} from '../../src/config';

import CheckBox from 'react-native-check-box';



const ToDoItem = ({todoItem: {todoItem: name, done}, id}) => {
    const [doneState, setDone] = useState(done);
    const onCheck = () => {
      setDone(!doneState);
    };
    return (
      <View style={styles.todoItem}>
        <CheckBox
          checkBoxColor="skyblue"
          onClick={onCheck}
          isChecked={doneState}
          disabled={doneState}
        />
        <Text style={[styles.todoText, {opacity: doneState ? 0.2 : 1}]}>
          {name}
        </Text>
      </View>
    );
  };

const styles = StyleSheet.create({
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
        minWidth: "50%",
        textAlign: "center"
    },
});



