import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';


import Exp from './src/pages/Exp';
import Formacao from './src/pages/Formacao';
import Pessoal from './src/pages/Pessoal';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const icons = {
  Exp: {
    name: 'ios-book'
  },
  Formacao:{
    name: 'ios-school'
  },
  Pessoal:{
    name: 'ios-people'
  }
};


function Tabs(){
  return(
      <Tab.Navigator
      screenOptions={ ({route}) => ({
        tabBarIcon: ({ color, size}) => {
          const { name } = icons[route.name];
          return <Icon name={name} color={color} size={size} />
        } 
      }) }
      tabBarOptions={{
        style:{
          backgroundColor: '#121212'
        },
        inactiveTintColor: 'blue',
        activeBackgroundColor: 'lightgray',
        activeTintColor: 'dark'
      }}
      >
        <Tab.Screen name="Pessoal" component={Pessoal} />
        <Tab.Screen name="Formacao" component={Formacao} />
        <Tab.Screen name="Exp" component={Exp} />
      </Tab.Navigator>
  );
}

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Pessoal" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="Formacao" component={Formacao} />
        <Stack.Screen name="Exp" component={Exp}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

