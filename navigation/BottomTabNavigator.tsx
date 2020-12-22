import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import {useState, useRef} from 'react';

// import our predefined colors and schemes for nice design:
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

//importing different components that needs to be added to our the bottom navigation bar
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import TabThreeScreen from '../screens/TabThreeScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList, TabThreeParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {

    const colorScheme = useColorScheme();
    const [token, setToken] = useState(null);

    // render tags of bottom navigator:
    return (
        <BottomTab.Navigator
            initialRouteName="TabOne"
            tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
        >
            {
                !token &&
                <BottomTab.Screen
                    name="Home"
                    children={() => {
                        return (
                            <TabOneNavigator
                                setToken={setToken}
                            />
                        );
                    }}
                    options={{
                        tabBarIcon: ({ color }) => <TabBarIcon name="ios-home" color={color} />,
                    }}
                />
            }
            {
                token &&
                <BottomTab.Screen
                    name="Map"
                    component={TabThreeNavigator}
                    options={{
                        tabBarIcon: ({ color }) => <TabBarIcon name="ios-map" color={color} />,
                    }}
                />
            }
            {
                token &&
                <BottomTab.Screen
                    name="Settings"
                    children={() => {
                        return (
                            <TabTwoNavigator
                                setToken={setToken}
                                token={token}
                            />
                        );
                    }}
                    options={{
                        tabBarIcon: ({ color }) => <TabBarIcon name="ios-options" color={color} />,
                    }}
                />
            }
    </BottomTab.Navigator>
  );
}

// More built-in icon families and icons can be found at: https://icons.expo.fyi/
// the icons ar erendered in the bottom bar and use the props
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// We use react-navigation/stack:
// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator(props) {
    return (
        <TabOneStack.Navigator>
            <TabOneStack.Screen
                name="TabOneScreen"
                options={{ headerTitle: 'Home' }}
                children={() => {
                    return (
                        <TabOneScreen
                            key={"TabOneScreen"}
                            onLoggedIn={(token) => {
                                props.setToken(token);
                            }}
                        />
                    );
                }}
            />
        </TabOneStack.Navigator>
    );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator(props) {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        options={{ headerTitle: 'Profile and Settings' }}
        children={() => {
            return (
                <TabTwoScreen
                    key={"TabTwoScreen"}
                    onLoggedOut={() => {
                        props.setToken(null);
                    }}
                    token={props.token}
                />
            );
        }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="TabThreeScreen"
        component={TabThreeScreen}
        options={{ headerTitle: 'Map' }}
      />
    </TabThreeStack.Navigator>
  );
}