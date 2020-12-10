import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-native';
import { withNavigation } from 'react-navigation';

import contactData from './contact.json';

import { Nav } from '../Nav';
import Setting from './Setting';

const SettingScreen = (props) => {
  return <Setting {...contactData} {...props} />
}

SettingScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default withNavigation(SettingScreen);
