import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../Styles'; 

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aqui você pode implementar a lógica de autenticação
    if (username === 'seu_nome_de_usuario' && password === 'sua_senha') {
      alert('Login bem-sucedido!');
    } else {
      alert('Nome de usuário ou senha incorretos.');
    }
  };
  const navigation = useNavigation();

  const handleNavigateToCadastro = () => {
    navigation.navigate('/Cadastro'); // Navegue para a tela de cadastro
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuário ou email"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar sessão</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={handleNavigateToCadastro}>
        <Text>Registre-se aqui</Text>
      </TouchableOpacity>
      
    </View>
  );
}

export default Login;
