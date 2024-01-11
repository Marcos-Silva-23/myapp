import React from 'react';
import { View, Text } from 'react-native';
import Login from '../Login'; // Importe o componente Login
import styles from '../Styles'; 
import Cadastro from '../Cadastro';

function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Página Inicial</Text>
      {/* Renderize os componentes Login e Cadastro aqui, se necessário */}
      <Login />
    </View>
  );
}

export default Home;
