/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
import { Tab2Screen } from '../screens/tabs/Tab2Screen';
import { Tab3Screen } from '../screens/tabs/Tab3Screen';
import { globalColors } from '../theme/theme';
import { Text } from 'react-native';
import { TopTabsNavigator } from './TopTabsNavigator';
import { StackNavigator } from './StackNavigator';
import { IonIcon } from '../components/shared/IonIcon';

const Tab = createBottomTabNavigator();

export const ButtonTabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        
        backgroundColor: globalColors.background,
      }}
      screenOptions={{
        tabBarActiveTintColor:globalColors.primary,
        tabBarLabelStyle: {
        marginBottom: 5,
        },
        headerStyle: {
          elevation: 0,
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}

    >
      <Tab.Screen name="Tab1" options={{title: 'Tab1', tabBarIcon: ({color}) => (<IonIcon name='accessibility' size={30} color = {color} />)}} component={Tab1Screen} />
      <Tab.Screen name="Tab2" options={{title: 'Tab2', tabBarIcon: ({color}) => (<IonIcon name="airplane" size={30} color = {color} />)}} component={TopTabsNavigator} />
      <Tab.Screen name="Tab3" options={{title: 'Tab3', tabBarIcon: ({color}) => (<IonIcon name='home' size={30} color = {color} />)}} component={StackNavigator} />
    </Tab.Navigator>
  );
};
