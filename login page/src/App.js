import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Here you can implement your login logic
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <h2 style={styles.title}>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleLogin} style={styles.button}>Login</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#121212',
  },
  loginBox: {
    backgroundColor: '#1f1f1f',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 0px 20px 0px rgba(255,255,255,0.3)',
    width: '300px',
  },
  title: {
    color: 'white',
    marginBottom: '20px',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#2b2b2b',
    color: 'white',
    outline: 'none',
  },
  button: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#2b2b2b',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
    outline: 'none',
  },
};

export default LoginPage;
