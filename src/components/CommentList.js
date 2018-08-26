import React, { Component } from 'react';
import { Text,View ,StyleSheet,Image,ScrollView} from 'react-native';


const CommentList = ({username,hour,comment}) => {
    return(
      

    //     <View style={styles.mainContainer}>
    //     <View style={styles.singleMessage}>
    //             <Image source={{uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKoh_wxk-fkGGHm4pP_Mwe6v-P6weOYRpuchqAu0K0VYoDj4AVQg'}} style={styles.user}/>
    //             <View style={styles.userdataContainer}>
    //                   <View style={styles.commentside}>
    //                       <Text style={styles.username}>{username}</Text>
    //                        <Text style={styles.comment}>{comment}</Text>
    //                     </View>
    //                 <Text>{hour} hr</Text>
    //             </View>   
            
    //      </View>
    //    </View>

    <View>
    <View style={styles.singleMessage}>
        <Image source={{uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKoh_wxk-fkGGHm4pP_Mwe6v-P6weOYRpuchqAu0K0VYoDj4AVQg'}} style={styles.user}/>
        <View style={styles.userdataContainer}>
        <View style={styles.commentside}>
                           <Text style={styles.username}>{username}</Text>
                            <Text style={styles.comment}>{comment}</Text>
                        </View>
        </View>
    </View>
   
    </View>    

    )
}


const styles = StyleSheet.create ({
    mainContainer:{
        flex:1,
        alignItems:'flex-start',
    },
    singleMessage:{
        flexDirection:'row',
       marginVertical:10,
       marginHorizontal:10

        
    },
    user:{
        width:40,
        height:40,
        borderRadius:60/2
    },
    userdataContainer:{
        marginTop:3,
        marginLeft:8
    },
    username:{
        fontWeight:'bold',
        color:'black'
    },
    commentside:{
        flexDirection:'row'
    },
    comment:{
        marginLeft:8
    }
})

export default CommentList