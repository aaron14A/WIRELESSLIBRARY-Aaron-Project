import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {CreateAppContainer} from 'react-navigation';
import {CreateBottomTabNavigator} from 'react-navigation-tabs';
import TransactionScreen from './Screens/BookTransactionScreen';
import SearchScreen from  './Screens/SearchScreen';


export default class App extends React.Component{
  render(){
  return (
   <AppContainer/>
  );
}
}
 const TabNavigator = CreateBottomTabNavigator({
   Transaction : {screen : TransactionScreen},
   Search : {screen : SearchScreen},
 }) ;

 const AppContainer = CreateAppContainer(TabNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
