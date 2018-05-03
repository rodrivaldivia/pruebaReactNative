// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Icon } from 'react-native-elements';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { Button, Text, View } from 'react-native';
import  HomeScreen from './screens/HomeScreen'
import  ProveedorNuevoScreen from './screens/ProveedorNuevoScreen'
import  HabilitacionNuevaScreen from './screens/HabilitacionNuevaScreen'
import  HabilitacionesScreen from './screens/HabilitacionesScreen'
import { Proveedores } from './models/Proveedores';
import { Habilitaciones } from './models/Habilitaciones';

proveedores = new Proveedores();
Proveedores.agregar("Onco", "Marchi 245");
habilitaciones = new Habilitaciones();


export default TabNavigator({
  Habilitaciones: {
    screen: HabilitacionesScreen,
    navigationOptions: {
      tabBarLabel: 'Habilitaciones',
      tabBarIcon: ({ tintColor }) => <Icon name="view-headline" size={32} color={tintColor} />
    },
  },
  NewProveedor: {
    screen: ProveedorNuevoScreen,
    navigationOptions: {
      tabBarLabel: 'Proveedor',
      tabBarIcon: ({ tintColor }) => <Icon name="add-box" size={32} color={tintColor} />
    },
  },
  MeAgain: {
    screen: HabilitacionNuevaScreen,
    navigationOptions: {
      tabBarLabel: 'Habilitacion',
      tabBarIcon: ({ tintColor }) => <Icon name="assignment" size={32} color={tintColor} />
    },
  },
});