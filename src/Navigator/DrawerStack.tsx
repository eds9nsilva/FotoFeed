import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MainNavigator from './Main'
import DrawerContent from './DrawerContent'

const Drawer = createDrawerNavigator()

const DrawerContainer = () => (
  <Drawer.Navigator
    drawerContent={props => <DrawerContent {...props} />}
    screenOptions={{ headerShown: false }}
  >
    <Drawer.Screen name="Main" component={MainNavigator} />
  </Drawer.Navigator>
)

export default DrawerContainer
