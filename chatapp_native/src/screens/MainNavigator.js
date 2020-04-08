import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import IntroduceContainer from '../containers/introduce/IntroduceContainer';
import SwipeContainer from '../containers/swipe/SwipeContainer';
import TalkScreen from './talk/TalkScreen';
import FeedNavigator from './FeedNavigator';
import ChatNavigator from './ChatNavigator';
import SettingScreen from './setting/SettingScreen';


const Tab = createBottomTabNavigator();
const MainNavigator = () => (
  <Tab.Navigator>
      <Tab.Screen name='Introduce' component={SwipeContainer}/>
      {/* <Tab.Screen name='Introduce' component={IntroduceContainer}/> */}
      <Tab.Screen name='Talk' component={TalkScreen}/>
      <Tab.Screen name='Feed' component={FeedNavigator}/>
      <Tab.Screen
        name='ChatNav'
        component={ChatNavigator}
        
      />
      <Tab.Screen name='Setting' component={SettingScreen}/>
  </Tab.Navigator>
)

export default MainNavigator;