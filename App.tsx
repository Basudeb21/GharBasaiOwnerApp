import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import Colors from './src/constants/Colors';
import Routes from './src/navigation/Routes';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={Colors.THEME} barStyle="light-content" />
      <Routes />
    </>
  )
}

export default App