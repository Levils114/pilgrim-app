import React from 'react';
import {
   View,
   StatusBar,
 } from 'react-native';
import Hooks from './src/hooks';
import Routes from './src/routes/routes';

 const App = () => {
   return (
     <View style={{ flex: 1 }}>
       <StatusBar translucent barStyle='dark-content' backgroundColor="transparent"/>
       <Hooks>
          <Routes />
       </Hooks>
     </View>
   );
 };

 export default App;
