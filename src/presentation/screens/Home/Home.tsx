import React, {useEffect} from 'react';
import {Pressable, StyleSheet, View, Text} from 'react-native';
import {
  DrawerActions,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';

import {globalStyles} from '../../theme/Theme';
import PrimaryButton from '../../components/shared/PrimaryButton';
import {RootStackParams} from '../../routes/StackNavigator';

export default function Home() {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => toggleMenuButton(),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleMenuButton = () => (
    <Pressable
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
      <Text>Menu</Text>
    </Pressable>
  );

  return (
    <View style={globalStyles.container}>
      <View style={styles.buttons}>
        <PrimaryButton
          lblText="Products"
          btnStyle="primary"
          onPressFunc={() => navigation.navigate('Products')}
        />

        <PrimaryButton
          lblText="Settings"
          btnStyle="primary"
          onPressFunc={() => navigation.navigate('Settings')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    rowGap: 10,
  },
});
