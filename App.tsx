import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { Store } from './src/redux-storage/Store';
import BootstrapAuth from './src/data-helper/BootstrapAuth';
import Routes from './src/navigation/Routes';
import SplashScreen from './src/screens/auth/SplashScreen';
import Colors from './src/constants/Colors';
import { StatusBar } from 'react-native';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide splash after 4 seconds
    }, 4000);

    return () => clearTimeout(timer); // Cleanup
  }, []);

  return (
    <>
      <StatusBar backgroundColor={Colors.THEME} />

      <Provider store={Store}>
        {isLoading ? (
          <SplashScreen />
        ) : (
          <BootstrapAuth>
            <Routes />
          </BootstrapAuth>
        )}
      </Provider>
    </>
  );
};

export default App;
