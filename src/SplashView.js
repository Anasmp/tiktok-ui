import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Animation from 'lottie-react-native';
import anim from '../assets/lottie/splash.json';

export default class App extends Component {

  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <LinearGradient colors={['#f2514c', '#f63c65', '#fa3270']} style={styles.container}>
       <StatusBar
     backgroundColor="#ec332d"
     barStyle="light-content"
   />
    <View style={{flex:1,justifyContent:'flex-end'}}>
     <View style={styles.circle}>
        <Icon name="food-fork-drink" size={60} color="#f8413e" />
        <Text style={{color:'#f8413e',fontSize:22,fontWeight:'bold'}}>FOOD</Text>
     </View>
     </View>

     <View style={{flex:1,justifyContent:'flex-end',alignItems:'flex-end'}}>
     <Animation
            ref={animation => {
              this.animation = animation;
            }}
            style={{
              width: 80,
              height: 80
            }}
            loop={true}
            source={anim}

          />
        </View>
     </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 150/2,
    backgroundColor:'white',
    elevation:9,
    justifyContent:'center',
    alignItems:'center'
 }
});
