import {View, Text} from 'react-native';
import React from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native-gesture-handler';

import {globalStyles} from '../../theme/Theme';
import PrimaryButton from '../../components/shared/PrimaryButton';
import type {RootStackParams} from '../../routes/StackNavigator';

const Products = [
  {id: 1, name: 'Product 1'},
  {id: 2, name: 'Product 2'},
  {id: 3, name: 'Product 3'},
  {id: 4, name: 'Product 4'},
  {id: 5, name: 'Product 5'},
  {id: 6, name: 'Product 6'},
];

export default function ProductsList() {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.textHeading}>Products</Text>

      <FlatList
        data={Products}
        renderItem={({item}) => (
          <PrimaryButton
            lblText={item.name}
            btnStyle="primary"
            onPressFunc={() =>
              navigation.navigate('Product', {
                id: item.id,
                name: item.name,
              })
            }
          />
        )}
      />

      <PrimaryButton
        lblText="Settings"
        btnStyle="primary"
        onPressFunc={() => navigation.navigate('Settings')}
      />
    </View>
  );
}
