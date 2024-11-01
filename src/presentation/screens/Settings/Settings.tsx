import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {globalStyles} from '../../theme/Theme';
import PrimaryButton from '../../components/shared/PrimaryButton';
import {StackActions, useNavigation} from '@react-navigation/native';

export default function Settings() {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text style={styles.text}>Settings Screen</Text>

      <PrimaryButton
        lblText="Go Back"
        onPressFunc={() => navigation.goBack()}
      />

      <PrimaryButton
        lblText="Root"
        onPressFunc={() => navigation.dispatch(StackActions.popToTop())}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 20,
  },
});
