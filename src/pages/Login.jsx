import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const result = login(username.trim(), password.trim());
        
        if (result.success) {
            navigate('/home');
        } else {
            setError(result.error);
            setPassword('');
            
            setTimeout(() => {
                setError('');
            }, 3000);
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h1>Fresh Vegetable and Fruit Detection</h1>
                
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">Usuario</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Ingrese su usuario"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    
                    <div className="input-group">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Ingrese su contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    
                    <button type="submit" className="btn-login">Iniciar Sesión</button>
                    
                    {error && (
                        <div className="error-message show">
                            {error}
                        </div>
                    )}
                    
                    <div className="link-section">
                        <p>¿No tienes una cuenta? <Link to="/register" className="link-highlight">Regístrate</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;