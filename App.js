import React from 'react';

import NewsScreens from './src/Screens/NewsScreens';
import RequestScreen from './src/Screens/RequestScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faReact} from '@fortawesome/free-brands-svg-icons/faReact';
import {faUbuntu} from '@fortawesome/free-brands-svg-icons';
import {faAddressCard} from '@fortawesome/free-solid-svg-icons';
import ProfileScreen from './src/Screens/ProfileScreen';
const Tab = createBottomTabNavigator();

const myConfigTabScrenNews = {
  tabBarIcon: ({color, size}) => (
    <FontAwesomeIcon icon={faReact} size={size} color={color} />
  ),
};
const myConfigTabScrenRequest = {
  tabBarIcon: ({color, size}) => (
    <FontAwesomeIcon icon={faUbuntu} size={size} color={color} />
  ),
};
const myConfigTabScreenProfile = {
  tabBarIcon: ({color, size}) => (
    <FontAwesomeIcon icon={faAddressCard} size={size} color={color} />
  ),
};

const screenOptions = {
  headerShown: false,
  tabBarActiveBackgroundColor: '#feb72b',
  tabBarInactiveBackgroundColor: '#527318',
  tabBarActiveTintColor: '#FFF',
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="News" screenOptions={screenOptions}>
        <Tab.Screen
          name="Request"
          component={RequestScreen}
          options={myConfigTabScrenRequest}
        />
        <Tab.Screen
          name="News"
          component={NewsScreens}
          options={myConfigTabScrenNews}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={myConfigTabScreenProfile}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
