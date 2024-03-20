/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */

import { DrawerActions, NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Pressable, Text } from 'react-native';
import { RootStackParams } from '../../routes/StackNavigator';

export const HamburguerMenu = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerLeft: () => (
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <Text>Menu</Text>
        </Pressable>
      ),
    });
  }, []);

  return (
   <></>
  );
};

