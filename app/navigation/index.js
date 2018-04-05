import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import screens from '../screens';

const {
  Auth,
  Login,
  Leads,
  LeadForm,
  SignUp,
  Search,
  Settings,
} = screens;

const HomeNavigator = TabNavigator(
  {
    Leads: {
      screen: Leads,
      navigationOptions: {
        gesturesEnabled: false,
        tabBarLabel: 'Leads',
        tabBarIcon: () => (
          <Icon name="list" size={20}/>
        ),
      },
    },
    Search: {
      screen: Search,
      navigationOptions: {
        gesturesEnabled: false,
        tabBarLabel: 'Search',
        tabBarIcon: () => (
          <Icon name="search" size={20}/>
        ),
      },
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        gesturesEnabled: false,
        tabBarLabel: 'Settings',
        tabBarIcon: () => (
          <Icon name="cog" size={20}/>
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    animationEnabled: true,
  },
);

const MainNavigator = StackNavigator(
  {
    Auth: {
      screen: Auth,
    },
    Home: {
      screen: HomeNavigator,
    },
  },
  {
    initialRouteName: 'Auth',
    headerMode: 'none',
  },
);

export default StackNavigator(
  {
    Main: {
      screen: MainNavigator,
    },
    Login: {
      screen: Login,
    },
    LeadForm: {
      screen: LeadForm,
    },
    SignUp: {
      screen: SignUp,
    },
  },
  {
    mode: 'modal',
    initialRouteName: 'Main',
  },
);
