// src/Login.js
import '../body.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLoginClick = (e) => {
    e.preventDefault();


    if (!email || !password) {
      setError('Lütfen tüm alanları doldurun.');
      return;
    }
    setError('');
    alert('Giriş başarılı!');
    navigate('/'); 
  };

  return (
    <div className='Login'>
      <form onSubmit={handleLoginClick}>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="floatingInput">Email Girin</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="floatingPassword">Şifre Girin</label>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className="login-button">
          <button type="submit" className="uye-ol">Giriş Yap</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
