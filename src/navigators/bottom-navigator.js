import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Videos from '../screens/Videos'
import VideoStack from './stack-navigator'
import MusicStack from './music-stack-navigator'


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator  headerMode='none'
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
        } else if (route.name === 'Music') {
          iconName = focused ? 'ios-musical-notes' : 'ios-musical-note';
        }
        else if (route.name === 'Videos') {
          iconName = focused ?  'ios-play-circle':'ios-play' ;
        }
        // size=24;
         color="black"
        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
    }})}
        >
      <Tab.Screen  name="Home" component={Home} />
      <Tab.Screen  name="Music" component={MusicStack} />
      <Tab.Screen  name="Videos" component={VideoStack} />
    </Tab.Navigator>
  );
}

export default MyTabs;