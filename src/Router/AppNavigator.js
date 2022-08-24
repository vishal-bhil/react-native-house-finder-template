import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Color, Screen} from '../Helper';
import {HomeScreen} from '../Screens';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const renderMainStack = () => {
    const initialRouteName = Screen.HomeScreen;
    return (
      <Stack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={Screen.HomeScreen} component={HomeScreen} />
      </Stack.Navigator>
    );
  };

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor={Color.white} />
      <NavigationContainer>{renderMainStack()}</NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigator;
