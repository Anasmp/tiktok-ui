import React, { Component } from 'react';
import { Text,View,StyleSheet,ScrollView,TouchableOpacity,ImageBackground } from 'react-native';
import Header from '../components/Header'
import Video from "react-native-video";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import anim from '../../assets/lottie/play.json';
import Animation from 'lottie-react-native';
import { Actions } from 'react-native-router-flux';


class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            liked: false,
            likecount:200,
            commentcount:9
         };
         this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        this.animation.play();
      }
    handleClick() {
        this.setState({
          liked: !this.state.liked,
          likecount:this.state.likecount + 1
        });
      }

    render() {
        const like = this.state.liked ? 'red' : 'white';
        return (
      <View style={styles.container}>
                <Video  source={require('../video.mp4')} resizeMode="cover" style={StyleSheet.absoluteFill} />
                <View style={styles.full}>
                        <View style={{flex:.5,justifyContent:'flex-end'}}>
                           
                        </View>
                         <View style={{flex:.5,justifyContent:'flex-end',alignItems:'flex-end'}}>
                         <View>
                         <TouchableOpacity>
                                <ImageBackground source={{uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKoh_wxk-fkGGHm4pP_Mwe6v-P6weOYRpuchqAu0K0VYoDj4AVQg'}} style={{ width: 50, height: 50, borderRadius: 25,marginBottom:8 }} imageStyle={{ borderRadius: 25 }}>
                                    <View style={{flex:1,alignItems:'center',justifyContent:'flex-end'}}>
                                    <Icon2 name="add-circle" size={20} color="#fb2956"  />
                                    </View>
                                </ImageBackground>
                        </TouchableOpacity>
                         <TouchableOpacity onPress={this.handleClick}>
                                <Icon name="heart" size={40} color={like}  />
                            </TouchableOpacity>
                            <Text style={styles.likecount}>{this.state.likecount}</Text>
                             <TouchableOpacity onPress={() =>   Actions.Comments()} >
                                <Icon2 name="chat-bubble" size={40} color="white"  />
                            </TouchableOpacity>
                            <Text style={styles.commentcount}>{this.state.commentcount}</Text>
                            <TouchableOpacity>
                                <Icon name="share" size={40} color="white"  />
                            </TouchableOpacity>
                            <Text style={styles.share}>share</Text>
                            </View>
                        </View>
                </View>
                 <View style={{flex:.5,flexDirection:'row'}}>
                    <View style={{flex:.5}}>
                            <View style={styles.tag}>
                                    <Text style={styles.tagtitle}>Thalasseri Biriyanni</Text>
                            </View>
                            <ScrollView showsVerticalScrollIndicator={false}>
                            <Text style={styles.username}>1.Cruch the ginger</Text>
                            <Text style={styles.commentsBottom}>2.Slice Onion</Text>
                            <Text style={styles.commentsBottom}>3.Chop tomatoes</Text>
                            <Text style={styles.commentsBottom}>4.Add dalta</Text>
                            <Text style={styles.commentsBottom}>5.Add Cruched ginergarlic paste</Text>
                            <Text style={styles.commentsBottom}>6.Add lime juice</Text>
                            <Text style={styles.commentsBottom}>7.Add the Ghee</Text>
                            </ScrollView>
                    </View>
                    <View style={{flex:.5,justifyContent:'flex-end'}}>
                    <View style={{margin:12,alignItems:'flex-end',}}>
                              <Animation
                                ref={animation => {
                                this.animation = animation;
                                }}
                                style={{
                                width: 50,
                                height: 50
                                }}
                                loop={true}
                                source={anim}
                            />
                    </View>
                    </View>
                </View>
      </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    full:{
        flex:1,
        flexDirection:'row'
    },
    rightside:{
        flex:1,
        alignItems:'flex-end',
        justifyContent:'flex-end',
        margin:8
    },
    leftside:{
      alignItems:'flex-start'
    },
    rightcontent:{
        alignItems:'center',
        justifyContent:'center'
    },
    likecount:{
        color:'white',
        marginLeft:5,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:8
    },
    commentcount:{
        color:'white',
        marginLeft:10,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:8
    },
    share:{
        color:'white',
        justifyContent:'center',
        alignItems:'center',
    },
    tagtitle:{
       
       padding:10,
       color:'white',
       fontSize:12,
       fontWeight:'bold'
       
    },
    tag:{
        backgroundColor:'#f20b3a',
        margin:10,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8
    },
    username:{
        fontWeight:'bold',
        color:'white',
        marginLeft:8
    },
    commentsBottom:{
        color:'white',
        marginLeft:8
    },
    userimage:{
        width:40,
        height:40,
        borderRadius:40/2
    }
    
   
  });

export default HomeScreen;