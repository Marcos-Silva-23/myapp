import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Cadastro from './screens/Cadastro';
import React from 'react';

export function Routes() {
  return (
    <NavigationContainer>
      <Home />
      <Cadastro />
    </NavigationContainer>
  );
}