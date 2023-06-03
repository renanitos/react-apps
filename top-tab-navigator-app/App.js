import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
 
import Exp from './src/pages/Exp';
import Formacao from './src/pages/Formacao';
import Pessoal from './src/pages/Pessoal';
 
const Tab = createMaterialTopTabNavigator();
 
export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Pessoal' component={Pessoal} />
        <Tab.Screen name='Formacao' component={Formacao} />
        <Tab.Screen name='Experiencia' component={Exp} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
