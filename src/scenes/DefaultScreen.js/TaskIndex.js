import React from 'react';

import PropTypes from 'prop-types';

import { theme } from '../../../themes';

import { Container, Gradient, Title } from './styled';
import TabTaskNavigator from '../../../screens/TabTask/TabTaskScreen';
import { View , SafeAreaView} from 'react-native';

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
  