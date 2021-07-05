import React from 'react';
import {
   SafeAreaView,
   StatusBar,
 } from 'react-native';
import Routes from './src/routes/routes';

 const App = () => {
   return (
     <SafeAreaView style={{ flex: 1 }}>
       <StatusBar barStyle='dark-content' backgroundColor="#f2f2f2"/>
       <Routes />
     </SafeAreaView>
   );
 };

 export default App;
