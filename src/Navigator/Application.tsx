import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import { navigationRef } from './Root'
import StackNavigator from './Stack'
import { Colors } from '@/Styles/Colors'

const Stack = createStackNavigator()

const ApplicationNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar
        backgroundColor={Colors.primary}
        barStyle={'light-content'}
      />
      <Stack.Navigator
        detachInactiveScreens={false}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Main" component={StackNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ApplicationNavigator
