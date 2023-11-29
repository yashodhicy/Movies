import 'react-native-gesture-handler';
import React, { JSXElementConstructor } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Explore from './screens/Explore';
import Favourite from './screens/Favourite';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Screen } from 'react-native-screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

const App = (): JSX.Element => {
  return (
      <NavigationContainer>
         <Tab.Navigator initialRouteName = 'Explore'>
           <Tab.Screen name='Explore' component={Explore}/>
           <Tab.Screen name='Favourite' component={Favourite}/> 
          </Tab.Navigator>
      </NavigationContainer>

  )
}

export default App

const styles = StyleSheet.create({})