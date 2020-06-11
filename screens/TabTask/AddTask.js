import React from 'react';

import {
  //SafeAreaView,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  View,
  Text,
  StatusBar,
  Image,
  Button,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {db} from '../../src/config';

export default class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AllNotes: {},
      Current_Notes: '',
    };
  }

  componentDidMount() {
    db.ref('/AllNotes').on('value', querySnapShot => {
      let NotesData = querySnapShot.val() ? querySnapShot.val() : {};
      let NotesItems = {...NotesData};
      this.setState({
        AllNotes: NotesItems,
      });
    });
  }

  addNewNotes = () => {
    db.ref('/AllNotes').push({
      notesItem: this.state.Current_Notes.trim(),
    });
    this.setState({
      Current_Notes: '',
    });
  };

  clearNotes = () => {
    db.ref('/AllNotes').remove();
  };

  render() {
    // const {navigate} = this.props.navigation;
    let NoteKeys = Object.keys(this.state.AllNotes);
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.childCont_1}>
            <Text style={styles.TitleTextCont}>Add Notes</Text>
          </View>
          <View style={styles.childCont_2}>
            <TextInput
              multiline
              //numberOfLines={4}
              editable={true}
              placeholder="Write your Notes here"
              style={styles.TextInputCont}
              value={this.state.Current_Notes}
              onChangeText={e => {
                this.setState({
                  Current_Notes: e,
                });
              }}
              // onSubmitEditing={this.addNewNotes}
              onSubmitEditing={() => {
                if (!this.state.Current_Notes.endsWith('\n')) {
                  let Current_Notes = this.state.Current_Notes;
                  Current_Notes = Current_Notes + '\n';
                  this.setState({Current_Notes: Current_Notes});
                }
              }}
            />
          </View>
          <View style={styles.childCont_3}>
            <TouchableOpacity
              style={styles.button}
              //onPress={this.addNewNotes}
              onPress={() => {
                this.props.navigation.navigate('NewHome', {
                  //addNotesToHome: this.state.Current_Notes
                  add: this.addNewNotes(),
                });
              }}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.clearButton}
              onPress={this.clearNotes}>
              <Text style={styles.buttonText}>Clear</Text>
            </TouchableOpacity>
          </View>

          <View>
            {NoteKeys.length > 0 ? (
              NoteKeys.map(key => (
                <Note_Item
                  key={key}
                  id={key}
                  notesItem={this.state.AllNotes[key]}
                />
              ))
            ) : (
              <Text style={{opacity: 0.5, fontSize: 16, alignSelf: 'center'}}>
                No List Item
              </Text>
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const Note_Item = ({notesItem: {notesItem: name}, id}) => {
  db.ref('/AllNotes').update({
    [id]: {
      notesItem: name,
    },
  });

  return (
    <View
    //style={styles.todoItem}
    // style={{flexWrap: 'wrap'}}
    //style={{ borderWidth: 1 }}
    // style={{width:"50%", }}
    >
      <Text style={styles.todoText}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF0F1',
    //flexDirection:"row"
  },
  childCont_1: {
    flex: 0.2,
  },
  childCont_2: {
    flex: 3,
  },
  childCont_3: {
    flex: 0.3,
    // alignItems: "center"
    paddingHorizontal: 100,
    marginBottom: 20,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  TitleTextCont: {
    fontSize: 22,
    marginVertical: 4,
    paddingHorizontal: 15,
    color: '#4C4B4B',
    fontWeight: 'bold',
  },
  TextInputCont: {
    paddingHorizontal: 15,
    fontSize: 18,
    fontWeight: '300',
    color: '#000',
    borderRadius: 25,
  },
  button: {
    width: 100,
    backgroundColor: '#10A881',
    borderRadius: 25,
    paddingVertical: 10,
    marginEnd: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearButton: {
    width: 100,
    backgroundColor: '#EA425C',
    borderRadius: 25,
    paddingVertical: 10,
    marginEnd: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    flexDirection: 'row',
    color: '#fff',
    textAlign: 'center',
  },

  todoText: {
    // flexDirection: 'row',
    //flex:1,
    //flexWrap:"wrap",
    elevation: 5,
    fontWeight: 'bold',
    margin: 7,
    padding: 25,
    //width:'50%',
    height: 'auto',
    shadowOffset: {width: 2, height: 2},
    shadowColor: '#929292',
    shadowOpacity: 1,
    borderRadius: 7,
    backgroundColor: '#F5F5F5',
    //flexWrap:"wrap"
  },
});
