import {View, Text, StyleSheet, Platform} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import PrimaryButton from '../../components/shared/PrimaryButton';
import {DrawerActions, useNavigation} from '@react-navigation/native';

export default function Profile() {
  const {bottom, left, right, top} = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View
      style={{
        ...styles.container,
        marginTop: Platform.OS === 'ios' ? top : top + 20,
      }}>
      <Text style={styles.text}>Profile</Text>

      <PrimaryButton
        lblText="Menu"
        onPressFunc={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: '900',
    marginBottom: 20,
    textTransform: 'uppercase',
  },
});
