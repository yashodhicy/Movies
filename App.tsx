import 'react-native-gesture-handler';
import React, {JSXElementConstructor} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Explore from './screens/Explore';
import Favourite from './screens/Favourite';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Details from './screens/Details';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs" headerMode="none">
        <Stack.Screen
          name="Tabs"
          component={() => (
            <Tab.Navigator initialRouteName="Explore">
              <Tab.Screen
                name="Explore"
                component={Explore}
                options={{
                  headerTitleAlign: 'center',
                  tabBarLabelStyle: {
                    color: 'black', // Text color of the tab label
                  },
                }}
              />
              <Tab.Screen
                name="Favourite"
                component={Favourite}
                options={{
                  headerTitleAlign: 'center',
                }}
              />
            </Tab.Navigator>
          )}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
