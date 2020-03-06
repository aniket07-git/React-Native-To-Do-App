import React from 'react';
import PropTypes from 'prop-types';

import Icons from 'react-native-vector-icons/Ionicons';

const TabIcon = ({ tintColor, iconName }) => <Icons name={iconName} size={20} color={tintColor} />;

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
};

export default TabIcon;