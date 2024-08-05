// src/Uyelik.js
import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../body.css';

function Uyelik() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleButtonClick = (e) => {
        e.preventDefault();

        // Form doğrulama
        if (!email || !password || !confirmPassword) {
            setError('Lütfen tüm alanları doldurun.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Şifreler eşleşmiyor.');
            return;
        }

        // Başarıyla işlenmişse yönlendirme
        setError('');
        alert('Üyelik işlemi başarılı!');
        navigate('/'); // Ana sayfaya yönlendirir
    };

    return (
        <div className='uyelik'>
            <form onSubmit={handleButtonClick}>
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
                <div className="form-floating">
                    <input
                        type="password"
                        className="form-control"
                        id="floatingPasswordConfirm"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <label htmlFor="floatingPasswordConfirm">Şifreyi Tekrar Girin</label>
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <div className="uyelik-button">
                    <button type="submit" className="uye-ol">Üye Ol</button>
                </div>
            </form>
            <div className='uyelik-link'>
                <Link to='/Login' className="link">Giriş yapmak için tıklayın</Link>
            </div>
        </div>
    );
}

export default Uyelik;
