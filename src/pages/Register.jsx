import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Register.css';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setError('');
        setSuccess('');
        
        const result = register(
            formData.username.trim(),
            formData.email.trim(),
            formData.password.trim(),
            formData.confirmPassword.trim()
        );
        
        if (result.success) {
            setSuccess('¡Registro exitoso! Redirigiendo al inicio de sesión...');
            setFormData({
                username: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
            
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        } else {
            setError(result.error);
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h1>Fresh Vegetable and Fruit Detection</h1>
                
                <form onSubmit={handleSubmit}>
                    <h2 className="form-title">Crear Cuenta</h2>
                    
                    <div className="input-group">
                        <label htmlFor="username">Usuario</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Ingrese su usuario"
                            value={formData.username}
                            onChange={handleChange}
                            required
                            minLength="4"
                        />
                    </div>
                    
                    <div className="input-group">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Ingrese su correo electrónico"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    <div className="input-group">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Ingrese su contraseña"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            minLength="4"
                        />
                    </div>
                    
                    <div className="input-group">
                        <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Confirme su contraseña"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            minLength="4"
                        />
                    </div>
                    
                    <button type="submit" className="btn-login">Registrarse</button>
                    
                    {error && (
                        <div className="error-message show">
                            {error}
                        </div>
                    )}
                    
                    {success && (
                        <div className="success-message show">
                            {success}
                        </div>
                    )}
                    
                    <div className="link-section">
                        <p>¿Ya tienes una cuenta? <Link to="/login" className="link-highlight">Iniciar Sesión</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;