import 'react-native-gesture-handler';
import React, { JSXElementConstructor } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Explore from './screens/Explore';
import Favourite from './screens/Favourite';


const Drawer = createDrawerNavigator();

const App = (): JSX.Element => {
  return (
      <NavigationContainer>
       <Explore />
      </NavigationContainer>

  )
}

export default App

const styles = StyleSheet.create({})