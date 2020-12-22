import React, { Component } from 'react';
import { ScrollView, Switch, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import PropTypes from 'prop-types';

import BaseIcon from '../components/Icon';
import Chevron from '../components/Chevron';
import InfoText from '../components/InfoText';

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

export default class TabTwoScreen extends React.Component {
   state = {
    pushNotifications: true,
  }

  constructor(props) {
    super(props);
    this.state = {
        email: "jon@doe.com",
        password: "123456",
        name: "Jon Doe",
    };
}

  onPressSetting = () => {
  }

  onChangePushNotifications = () => {
    this.setState(state => ({
      pushNotifications: !state.pushNotifications,
    }))
  };

  render() {
    const { avatar, name, email } = this.state
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.userRow}>
          <View>
            <Text style={{ fontSize: 16 }}>{name}</Text>
            <Text
              style={{
                color: 'gray',
                fontSize: 16,
              }}
            >
              {email}
            </Text>
          </View>
        </View>
        <InfoText text="Your Account" />
        <View>
          <ListItem
            hideChevron
            title="Push Notifications"
            containerStyle={styles.listItemContainer}
            rightElement={
              <Switch
                onValueChange={this.onChangePushNotifications}
                value={this.state.pushNotifications}
              />
            }
            leftIcon={
              <BaseIcon
                containerStyle={{
                  backgroundColor: '#FFADF2',
                }}
                icon={{
                  type: 'material',
                  name: 'notifications',
                }}
              />
            }
          />
          <ListItem
            // chevron
            title="Currency"
            rightTitle="USD"
            rightTitleStyle={{ fontSize: 15 }}
            onPress={() => this.onPressSetting()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <BaseIcon
                containerStyle={{ backgroundColor: '#FAD291' }}
                icon={{
                  type: 'font-awesome',
                  name: 'money',
                }}
              />
            }
            rightIcon={<Chevron />}
          />
          <ListItem
            title="Your Preferred Location"
            rightTitle="San Francisco"
            rightTitleStyle={{ fontSize: 15 }}
            onPress={() => this.onPressSetting()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <BaseIcon
                containerStyle={{ backgroundColor: '#57DCE7' }}
                icon={{
                  type: 'material',
                  name: 'place',
                }}
              />
            }
            rightIcon={<Chevron />}
          />
          <ListItem
            title="Language"
            rightTitle="English"
            rightTitleStyle={{ fontSize: 15 }}
            onPress={() => this.onPressSetting()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <BaseIcon
                containerStyle={{ backgroundColor: '#FEA8A1' }}
                icon={{
                  type: 'material',
                  name: 'language',
                }}
              />
            }
            rightIcon={<Chevron />}
          />
          <ListItem
            title="Password and Security"
            onPress={() => this.onPressSetting()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <BaseIcon
                containerStyle={{ backgroundColor: 'grey' }}
                icon={{
                  type: 'material',
                  name: 'settings',
                }}
              />
            }
            rightIcon={<Chevron />}
          />
        </View>
        <InfoText text="More" />
        <View>
          <ListItem
            title="Terms and Policies"
            onPress={() => this.onPressSetting()}
            containerStyle={styles.listItemContainer}
            badge={{
              value: 564,
              textStyle: { fontSize: 14, color: 'white' },
            }}
            leftIcon={
              <BaseIcon
                containerStyle={{ backgroundColor: 'lightblue' }}
                icon={{
                  type: 'entypo',
                  name: 'info',
                }}
              />
            }
            rightIcon={<Chevron />}
          />
          <ListItem
            title="Share our App"
            onPress={() => this.onPressSetting()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <BaseIcon
                containerStyle={{
                  backgroundColor: '#C47EFF',
                }}
                icon={{
                  type: 'entypo',
                  name: 'share',
                }}
              />
            }
            rightIcon={<Chevron />}
          />
          <ListItem
            title="Rate Us"
            onPress={() => this.onPressSetting()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <BaseIcon
                containerStyle={{
                  backgroundColor: '#FECE44',
                }}
                icon={{
                  type: 'entypo',
                  name: 'star',
                }}
              />
            }
            rightIcon={<Chevron />}
          />
          <ListItem
            title="Contact and Feedback"
            onPress={() => this.onPressSetting()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <BaseIcon
                containerStyle={{
                  backgroundColor: '#00C001',
                }}
                icon={{
                  type: 'materialicon',
                  name: 'feedback',
                }}
              />
            }
            rightIcon={<Chevron />}
          />
        </View>
        <ListItem
            title = "Logout"
            onPress={this.props.onLoggedOut}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <BaseIcon
                containerStyle={{
                  backgroundColor: 'lightgrey',
                }}
                icon={{
                  type: 'materialicon',
                  name: 'eject',
                }}
              />
            }
          />
      </ScrollView>
    )
}
}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: 'white',
  },
  userRow: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 8,
    paddingLeft: 20,
    paddingRight: 15,
    paddingTop: 8,
  },
  listItemContainer: {
    height: 50,
    borderWidth: 0.5,
    borderColor: '#ECECEC',
  },
    separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})