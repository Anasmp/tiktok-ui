import React, { Component } from 'react';
import { Text,View,StyleSheet,Image,ScrollView ,TextInput,TouchableOpacity} from 'react-native';
import Header from './Header'
import CommentList from './CommentList'


class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            comment: ''
         };
    }
    handleComment = (text) => {
        this.setState({ comment: text })
     }
    render() {
        return (
            <View style={styles.container}>
                 <Header title="Comments" />
                 
                 <ScrollView style={{flex:1}}>
                    <CommentList username="Anas" hour="3" comment="hai"/>
                    <CommentList username="user1" hour="4" comment="😍"/>
                    <CommentList username="User2" hour="5" comment="😍 😍 "/>
                    <CommentList username="User3" hour="6" comment="hai" />
                    <CommentList username="User4" hour="7" comment="hai 😊" />
                    <CommentList username="Anas" hour="3" comment="hai"/>
                    <CommentList username="user1" hour="4" comment="😍"/>
                    <CommentList username="User2" hour="5" comment="😍 😍 "/>
                    <CommentList username="User3" hour="6" comment="hai" />
                    <CommentList username="User4" hour="7" comment="hai 😊" />
                    <CommentList username="Anas" hour="3" comment="hai"/>
                    <CommentList username="user1" hour="4" comment="😍"/>
                    <CommentList username="User2" hour="5" comment="😍 😍 "/>
                    <CommentList username="User3" hour="6" comment="hai" />
                    <CommentList username="User4" hour="7" comment="hai 😊" />
                    <CommentList username="Anas" hour="3" comment="hai"/>
                    <CommentList username="user1" hour="4" comment="😍"/>
                    <CommentList username="User2" hour="5" comment="😍 😍 "/>
                    <CommentList username="User3" hour="6" comment="hai" />
                    <CommentList username="User4" hour="7" comment="hai 😊" />
                    <CommentList username="Anas" hour="3" comment="hai"/>
                    <CommentList username="user1" hour="4" comment="😍"/>
                    <CommentList username="User2" hour="5" comment="😍 😍 "/>
                    <CommentList username="User3" hour="6" comment="hai" />
                    <CommentList username="User4" hour="7" comment="hai 😊" />

                </ScrollView>
                    
              
                 <View style={styles.messagebox}>
                <Text style={{marginLeft:8}}>
                    Add comment
                </Text>
                       <TouchableOpacity>
                           <Text style={{marginRight:15,color:'blue'}}>
                               POST
                           </Text>
                       </TouchableOpacity>
                 </View>
           </View>
         
        );
    }
}

const styles = StyleSheet.create ({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    messagebox:{
        flex:.14,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        elevation:1,
      

    }
})

export default Comments;