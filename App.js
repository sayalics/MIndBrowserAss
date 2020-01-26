import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import ItemList from './Views/ItemList';
import DetailView from './Views/DetailView';
//import all the screens we are going to switch 
const App = createStackNavigator({
  //Constant which holds all the screens like index of any book 
    ItemList: { screen: ItemList }, 
    //First entry by default be our first screen 
    //if we do not define initialRouteName
    DetailView: { screen: DetailView }, 
  },
  {
    initialRouteName: 'ItemList',
  }
);
export default createAppContainer(App);