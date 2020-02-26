import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';


const slides = [
    {
        key: 's1',
        title: 'Welcome to Notes',
        text: 'Click Next to have a quick look',
        image: {
            uri: "https://cdn0.iconfinder.com/data/icons/online-education-butterscotch-vol-2/512/Student_Notes-512.png",
        },
        backgroundColor: '#26ae60'
    },
    {
        key: 's2',
        title: 'Discover',
        text: 'Discover and search your Notes',
        image: {
            uri: 'https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/6248613481579605853-256.png',
        },
        backgroundColor: '#EA7773'
    },
    {
        key: 's3',
        title: 'Manage your Notes',
        text: 'Manage your Notes all in one place',
        image: {
            uri: 'https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/19304086221580121299-256.png',
        },
        backgroundColor: '#8B78E6'
    },

];

export default class IntroScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Show_HomeScreen: false
        };
    }

    static navigationOptions = {
        title:"Splash Screen",
        headerShown: false
    };
    //onDone={Handler for done button click}
    Done_Method = () => {
        this.setState({ Show_HomeScreen: true })
    }

    //onSkip={Handler for skip button click}
    Skip_Screen = () => {
        this.setState({ Show_HomeScreen: true })
    }

    //renderItem={Provide item to render like FlatList}
    Render_Item = ({ item }) => {
        return (
            <View style = {{
                flex:1,
                backgroundColor: item.backgroundColor,
                justifyContent: 'space-around',
                alignItems: "center"
            }}> 
                <Text style={styles.title}>{item.title}</Text>
                <Image style={styles.imageCont} source = {item.image} />
                <Text style={styles.textCss}>{item.text}</Text>
                
            </View>
        );
    }

    render() {
       
        if (this.state.Show_HomeScreen) {
            return (
                <View style = {styles.container}>
                    <Text style={styles.textCss}>This is the Home Screen</Text>
                </View>
            );
        }
        else {
            return (
                <AppIntroSlider
                    slides={slides}
                    renderItem={this.Render_Item}
                    showSkipButton={true}
                    skip={this.Skip_Screen}
                    finish={this.Done_Method}
                />
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 50,
        backgroundColor: '#fff'
        
    },
    title:{
        fontSize:24,
        fontWeight: "bold",
        color: '#fff'
    },
    textCss:{
        fontSize:20,
        fontWeight: "500",
        color: '#fff',
        //paddingVertical:50
        paddingBottom: 50
    },
    imageCont:{
        //flex: 1,
        width: 350,
        height:350
    }
});
