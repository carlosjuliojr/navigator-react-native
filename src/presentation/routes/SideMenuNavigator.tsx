/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { globalColors } from '../theme/theme';
import { View, useWindowDimensions } from 'react-native';
import { ProductsScreen } from '../screens/products/ProductsScreen';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ButtonTabNavigator } from './BottonTabNavigator';
import { IonIcon } from '../components/shared/IonIcon';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {

  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: dimensions.width >= 768 ? 'permanent' : 'slide',

        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: globalColors.primary,
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 20,
        },

      }}
    >
      <Drawer.Screen name="Tabs" options={{drawerIcon:({color}) => {return <IonIcon name='apps-outline' color={color}/>;}}} component={ButtonTabNavigator} />
      <Drawer.Screen name="Profile" options={{drawerIcon:({color}) => {return <IonIcon name='person-outline' color={color}/>;}}} component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          margin: 30,
          borderRadius: 50,
        }} 
        
      >
      <IonIcon name='person-circle-outline' color={globalColors.primary} size={200}/>

      </View>
      <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  );
};
