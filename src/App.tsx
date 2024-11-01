import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './presentation/routes/StackNavigator';
import './gesture-handler';
import {SideMenuNavigator} from './presentation/routes/SideMenuNavigator';

export default function App() {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <SideMenuNavigator />
    </NavigationContainer>
  );
}
