import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import Colors from './src/constants/Colors';
import Routes from './src/navigation/Routes';
import { AuthProvider } from './src/screens/auth/AuthProvider';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={Colors.THEME} barStyle="light-content" />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  )
}

export default App