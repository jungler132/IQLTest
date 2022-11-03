import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import DriverProfile from '../screens/DriverProfile/DriverProfile';
import MainScreen from '../screens/MainScreen/MainScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'MainScreen'}>
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="DriverProfile" component={DriverProfile} />
    </Stack.Navigator>
  );
}

export default RootStack;
