import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import DriverProfile from '../screens/DriverProfile/DriverProfile';
import MainScreen from '../screens/MainScreen/MainScreen';
import RaceProfile from '../screens/RaceProfile/RaceProfile';

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
      <Stack.Screen name="RaceProfile" component={RaceProfile} />
    </Stack.Navigator>
  );
}

export default RootStack;
