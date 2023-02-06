import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, NewRevenue } from '@/Container'
import { TabBarLabel } from './styles'

const Tab = createBottomTabNavigator()

const MainNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{ headerShown: false, tabBarShowLabel: true }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          title: 'Início',
          tabBarLabel: ({ focused }) => (
            <TabBarLabel color={focused ? '#457B9D' : '#1D3557'}>
              Início
            </TabBarLabel>
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default MainNavigator
