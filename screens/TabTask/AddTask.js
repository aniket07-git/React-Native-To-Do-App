import React from 'react';

import {
    //SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    Button,
    KeyboardAvoidingView,
    TouchableOpacity
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class AddTask extends React.Component {

    render() {
        return (
            
            <View style={styles.container}>
                <View style={styles.childCont_1}>
                    <Text style={styles.TitleTextCont}>Add Notes</Text>
                </View>
                <View style={styles.childCont_2}>
                    <TextInput
                     multiline={true}
                     editable={true}
                     placeholder="Write your Notes here"
                     style={styles.TextInputCont}
                    />
                    
                </View>
                <View style={styles.childCont_3}>
                    <TouchableOpacity
                        style={styles.button}
                    >
                     <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                </View>

            </View>
        

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EAF0F1",
    },
    childCont_1:{
        flex: 0.2
    },
    childCont_2:{
        flex:3
    },
    childCont_3:{
        flex:0.3,
        alignItems:"center",
        marginBottom: 20
    },
    TitleTextCont: {
        fontSize: 22,
        marginVertical: 4,
        paddingHorizontal: 15,
        color: "#4C4B4B",
        fontWeight: "bold",
    },
    TextInputCont: {
        paddingHorizontal: 15,
        fontSize: 18,
        fontWeight: "300",
        color: "#000",
        borderRadius: 25,
        
    },
    button: {
        width: 100,
        backgroundColor: "#74B9FF",
        borderRadius: 25,
        paddingVertical: 10,
        alignItems: "center",
        justifyContent:"center"
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#fff",
        textAlign: "center",

    }
    
});
   
  

