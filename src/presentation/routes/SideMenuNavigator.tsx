import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import Profile from '../screens/Profile/Profile';
import {globalColors} from '../theme/Theme';
import CustomDrawerContent from '../components/shared/CustomDrawerContent';
import {useWindowDimensions} from 'react-native';

const Drawer = createDrawerNavigator();

export function SideMenuNavigator() {
  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: dimensions.width >= 700 ? 'permanent' : 'slide',
        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: globalColors.primary,
        drawerItemStyle: {
          borderRadius: 5,
          paddingHorizontal: 10,
        },
      }}>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}
