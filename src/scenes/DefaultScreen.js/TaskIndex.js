import React from 'react';

import PropTypes from 'prop-types';

import { theme } from '../../../themes';

import { Container, Gradient, Title } from './styled';
import IntroScreen from '../../../screens/IntroScreen';
import TabTaskScreen from '../../../screens/TabTask/TabTaskScreen';
import { View , SafeAreaView} from 'react-native';
//import {ToDoItem} from '../../../screens/TabTask/TickBoxes'

const TabTask = ({ name }) => (
    <SafeAreaView style={{flex:1}}>   
      <TabTaskScreen/>
    </SafeAreaView>
  );

  
  TabTask.propTypes = {
    name: PropTypes.string.isRequired,
  };


  export default TabTask;
  