/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {View, Text} from 'react-native';
import { RootStackParams } from '../../routes/StackNavigator';
import { globalStyles } from '../../theme/theme';

export const ProductScreen = () => {

  const {id, name} = useRoute<RouteProp<RootStackParams, 'Product'>>().params;
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, []);


  return (
    <View style={globalStyles.container}>
      <Text>Product Screen</Text>
      <Text style={{
        fontSize: 20,
        marginTop: 20,
        textAlign: 'center',
      }}>
        {id} - {name}
      </Text>
    </View>
  );
};
