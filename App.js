
import React from 'react';
import { StyleSheet, Text, View,createBottomTabNavigator} from 'react-native';
import Facebook from "./screens/facebook";
import Instagram from "./screens/insta"
export default class App extends React.Component() {
  render(){
    return (
      <AppNavigtor/>
   );
  }
  
}
const TabNavigator=createBottomTabNavigator({
  Facebook:{screens:Facebook},
  Instagram:{screens:Instagram}
});
const AppNavigtor=createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
