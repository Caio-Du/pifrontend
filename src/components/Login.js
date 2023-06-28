import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import './Login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    if (username && password) {
      try {
        await firebase.auth().signInWithEmailAndPassword(username, password);
        onLogin();
      } catch (error) {
        console.error(error);
        alert('Falha na autenticação. Verifique suas credenciais.');
      }
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (username && password) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(username, password);
        alert('Usuário cadastrado com sucesso!');
        setUsername('');
        setPassword('');
      } catch (error) {
        console.error(error);
        alert('Falha no cadastro. Verifique suas credenciais.');
      }
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Usuário"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
        />        
          <button type="submit">Entrar</button>
          <button onClick={handleSignUp}>Cadastrar</button>        
      </form>
    </div>
  );
};

export default Login;
