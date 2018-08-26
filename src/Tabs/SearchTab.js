import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/FontAwesome5';


 
export default class SearchTab extends Component{

    state = {
        resetmain : true
    }

    static navigationOptions = {
        tabBarOnPress: () => {
         
        },
        tabBarIcon: ({focused,tintColor}) => (
            focused
            ? <Icon name="search" size={28} color={tintColor}  />
            : <Icon2 name="search" size={25} color={tintColor}  />
            
        )
    }


        render(){
            
                return (
                    <Text>SearchTab</Text>
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