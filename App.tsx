/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from './src/theme/ThemeContext';
import {LandingStack} from './src/navigation/LandingStack';
import {AuthStack} from './src/navigation/AuthStack';

function App(): React.JSX.Element {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <NavigationContainer>
      <ThemeProvider>
        {isAuthenticated ? <AuthStack /> : <LandingStack />}
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
