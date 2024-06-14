// pages/login.tsx

import { useState } from 'react';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      router.push('/recipes'); // Redireciona para a página de sucesso
    } else {
      setError('Usuário ou senha incorretos');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Login</h1>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="username">Usuário:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ display: 'block', width: '100%', padding: '8px', fontSize: '16px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ display: 'block', width: '100%', padding: '8px', fontSize: '16px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
      </div>
      <button onClick={handleLogin} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '5px', transition: 'background-color 0.3s' }}>
        Entrar
      </button>
    </div>
  );
};

export default LoginPage;
