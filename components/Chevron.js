import React from 'react'
import { Icon } from 'react-native-elements'
import { Colors } from '../constants'

// create a chevron that is used in the settings screen
const Chevron = () => (
  <Icon
    name="chevron-right"
    type="entypo"
    color={Colors.lightGray2}
    containerStyle={{ marginLeft: -15, width: 20 }}
  />
)

export default Chevron
