import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Platform,
    Image,
    Dimensions,
    AsyncStorage
} from 'react-native';

import {TabNavigator} from 'react-navigation';
 
import HomeTab from './Tabs/HomeTab';
import SearchTab from './Tabs/SearchTab'
import ChatTab from './Tabs/ChatTab'
import ProfileTab from './Tabs/ProfileTab'
import AddTab from './Tabs/AddTab'


 
export default class Main extends Component {


  
    static navigationOptions ={
          
        header: null
        
      }
    render(){
        return(
            <AppTabNavigator />
            
        );
    }
}

let width = Dimensions.get('window').width;

const AppTabNavigator = TabNavigator({
    HomeTab: {
        screen: HomeTab
    },
    SearchTab:{
        screen: SearchTab
    },
    AddTab:{
        screen: AddTab
    },
    ChatTab: {
        screen: ChatTab
    },
    ProfileTab: {
        screen: ProfileTab
    }
},{
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
        showLabel: false,
        indicatorStyle: {
            opacity: 0
        },
        style:{
            ...Platform.select({
                android:{
                    backgroundColor:'transparent'
                }
            })
        },
        iconStyle: {
            width: width/5,
            height:40,
          },
        activeTintColor: '#618aff',
        inactiveTintColor: '#cdd3dc',
        showIcon: true,
        labelStyle: {
            fontSize: 8,
            fontWeight:'bold',
            color:'#075884'
            
          },
      
    },
 
 
})
 
 
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})