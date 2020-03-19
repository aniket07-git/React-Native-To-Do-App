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

import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import AddTask from './AddTask';
import Tickindex from './Tickindex';



const TabTaskNavigator = createMaterialTopTabNavigator(
    {

        AddTask: 
        {
            screen: AddTask,
           
        },
        TickBoxes: 
        {
            screen: Tickindex,
        },



    },
    {
        initialRouteName: 'AddTask',
        //tabBarPosition: 'top'
        //tabBarComponent: () => null
         
        
    },
    

)

export default createAppContainer(TabTaskNavigator);

