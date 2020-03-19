import React from 'react';

import DefaultScreen from './DefaultScreen.js';
import DefaScreen from './DefaultScreen.js/index2';
import TabTaskNavigator from './DefaultScreen.js/TaskIndex.js';

export const HomeScreen = props => <DefaultScreen {...props} name="Home" />;
export const SearchScreen = props => <DefaScreen {...props} name="Search" />;

export const SettingsScreen = props => <DefaultScreen {...props} name="Settings" />;
