import React from 'react';

import {
    //SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image
} from 'react-native';

import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import SafeAreaView from 'react-native-safe-area-view';




export default class AddTask extends React.Component {

    render() {
        return(
            <View style={styles.container}>
                <Text>Add Task Here</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        
        backgroundColor: "#fff",

    },
});

