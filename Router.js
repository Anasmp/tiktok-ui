import React, { Component } from 'react';
import { Router, Scene,Stack } from 'react-native-router-flux'
import SplashScreen from './src/SplashScreen'
import Comments from './src/components/Comments';



    const Routes = () => (
        <Router>
          <Scene key = "App" hideNavBar={true} >
                <Scene key="SplashScreen" component={SplashScreen} />
                <Scene key="Comments" component={Comments} />
         </Scene>
        </Router>
      )
      export default Routes
  
