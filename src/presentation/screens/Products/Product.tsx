import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

import {RootStackParams} from '../../routes/StackNavigator';
import {globalStyles} from '../../theme/Theme';

export default function Product() {
  const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;
  const {name} = params;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, []);

  return (
    <View style={globalStyles.container}>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 22,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
});
