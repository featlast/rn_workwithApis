import React from 'react';

import NewsScreens from './src/Screens/NewsScreens';
import RequestScreen from './src/Screens/RequestScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="News" component={NewsScreens} />
        <Tab.Screen name="Request" component={RequestScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
