import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../Screens/HomeScreen'


 
export default class HomeTab extends Component{

    state = {
        resetmain : true
    }

    static navigationOptions = {
        tabBarOnPress: () => {
         
        },
        tabBarIcon: ({focused,tintColor}) => (
            focused
            ? <Icon name="home" size={28} color={tintColor} />
            : <Icon name="home-outline" size={25} color={tintColor}  />
            
        )
    }


        render(){
            
                return (
                   <HomeScreen />
                )
        }


    }




 
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    row:{
        flex:2,
        flexDirection:'row',


    },
    border :{
        flex:1,
        borderColor:'#d2d2d2',
        borderWidth:.5,
        alignItems:'center',
        justifyContent:'center'
    },
    textStyle:{
        color:'#075884',
        fontSize:10
    }
   
})