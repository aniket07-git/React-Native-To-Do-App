import React from 'react';

import PropTypes from 'prop-types';

import { theme } from '../../../themes';

import { Container, Gradient, Title } from './styled';
import IntroScreen from '../../../screens/IntroScreen';
import TabTaskNavigator from '../../../screens/TabTask/TabTaskScreen';
import { View , SafeAreaView} from 'react-native';
//import {ToDoItem} from '../../../screens/TabTask/TickBoxes'

class TabTask extends React.Component{
  render(){
  return (
    <SafeAreaView style={{flex:1}}>   
      <TabTaskNavigator/>
    </SafeAreaView>
  );
  }
} 

  /*
  TabTask.propTypes = {
    name: PropTypes.string.isRequired,
  };
*/

  export default TabTask;
  