import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Learn, Setting} from '../../screens';
import {Images} from '../../theme';
import {Image} from 'react-native';
import {screenOptions} from './screenOption';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Image source={Images.ichome2} style={{width: 35, height: 35}} />
          ),
          tabBarLabel: 'Home',
          tabBarLabelStyle: {
            fontSize: 15,
            fontWeight: '900',
            margin: 10,
          },
        }}
      />

      <Tab.Screen
        name="Learn"
        component={Learn}
        options={{
          tabBarIcon: ({color}) => (
            <Image source={Images.icLearn} style={{width: 35, height: 35}} />
          ),
          tabBarLabel: 'Learn',
          tabBarLabelStyle: {
            fontSize: 15,
            fontWeight: '900',
            margin: 10,
          },
        }}
      />

      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({color}) => (
            <Image source={Images.icSetting} style={{width: 35, height: 35}} />
          ),
          tabBarLabel: 'Setting',
          tabBarLabelStyle: {
            fontSize: 15,
            fontWeight: '900',
            margin: 10,
          },
        }}
      />
    </Tab.Navigator>
  );
}
