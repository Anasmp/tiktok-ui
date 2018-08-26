import React,{Component} from 'react'
import {View, Animated,Dimensions,Text } from 'react-native'
import SplashView from './SplashView'
import Main from './Main'


export default class SplashScreen extends Component {

    constructor(props){
        super(props)
        this.state = {
         component : <SplashView />
        }
       }
       
       
       componentDidMount(){
       
            // Start counting when the page is loaded
            this.timeoutHandle = setTimeout(()=>{
                 // Add your logic for the transition
                 this.setState({ component: <Main /> })
            }, 3000);
       }
       
       componentWillUnmount(){
            clearTimeout(this.timeoutHandle); 
       }
       
       render() {
       return (
         this.state.component
       );
    }
}