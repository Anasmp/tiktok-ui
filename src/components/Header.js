import React, { Component } from 'react';
import { Text,View,StyleSheet,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';

const Header = ({title}) => {
    return (
    <View style={styles.header}>
     
     <View style={styles.headerContent}> 
        <TouchableOpacity onPress={() =>   Actions.pop()}>
             <Icon name="ios-arrow-round-back" size={40} color="black"  />
        </TouchableOpacity>
     </View>
        <Text style={styles.headerText}>{title}</Text>

    </View>
    );
}

const styles = StyleSheet.create({
    header:{
        flex:.1,
        flexDirection:'row',
        paddingVertical:5,
        backgroundColor:'white',
      
        alignItems:'center'
    
    },
    headerText:{
        color:'#313643',
        fontSize:20,
        
        
    },
    headerContent:{
        marginLeft:12,
        marginRight:18
    }
})
export default Header;