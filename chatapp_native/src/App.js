import React from 'react';
import { StatusBar } from 'react-native';

import Navigator from './screens/Navigator';


const App = () => {
  return (
    <>
      <StatusBar barStyle = "light-content" />
      <Navigator />
    </>
  );
};

export default App;
