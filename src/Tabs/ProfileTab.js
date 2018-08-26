import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


 
export default class ProfileTab extends Component{

    state = {
        resetmain : true
    }

    static navigationOptions = {
        tabBarOnPress: () => {
         
        },
        tabBarIcon: ({focused,tintColor}) => (
            focused
            ? <Icon name="user" size={28} color={tintColor}  />
            : <Icon name="user-o" size={25} color={tintColor}  />
            
        )
    }


        render(){
            
                return (
                  <Text>profile</Text>
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