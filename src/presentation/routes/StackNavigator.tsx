import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home/Home';
import ProductsList from '../screens/Products/ProductsList';
import Settings from '../screens/Settings/Settings';
import Product from '../screens/Products/Product';

const Stack = createStackNavigator<RootStackParams>();

export type RootStackParams = {
  Home: undefined;
  Product: {id: number; name: string};
  Products: undefined;
  Settings: undefined;
};

export function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {elevation: 50, shadowColor: 'transparent'},
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Products" component={ProductsList} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
