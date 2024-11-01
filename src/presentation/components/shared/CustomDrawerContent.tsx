import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {globalColors} from '../../theme/Theme';

export default function CustomDrawerContent(
  props: DrawerContentComponentProps,
) {
  return (
    <DrawerContentScrollView style={styles.container}>
      <View style={styles.heading} />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  heading: {
    height: 200,
    backgroundColor: globalColors.primary,
    padding: 0,
    borderRadius: 25,
    marginBottom: 30,
  },
});
