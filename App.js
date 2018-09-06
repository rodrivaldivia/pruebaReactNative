import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Icon } from 'react-native-elements';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { Button, Text, View } from 'react-native';

import HomeScreen from './app/screens/HomeScreen'
import SettingsScreen from './app/screens/SettingsScreen'
import ProposalScreen from './app/screens/ProposalScreen'


export default TabNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Inicio',
      // tabBarIcon: ({ tintColor }) => <Icon name="view-headline" size={32} color={tintColor} />
    },
  },
  NewProposal: {
    screen: ProposalScreen,
    navigationOptions: {
      tabBarLabel: 'Proveedor',
      // tabBarIcon: ({ tintColor }) => <Icon name="add-box" size={32} color={tintColor} />
    },
  },
  Info: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarLabel: 'Settings',
      // tabBarIcon: ({ tintColor }) => <Icon name="assignment" size={32} color={tintColor} />
    },
  },
});