import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const session = localStorage.getItem('fruveg_session');
        if (session) {
            setUser(JSON.parse(session));
        }
        setLoading(false);
    }, []);

    const login = (username, password) => {
        let isValid = false;
        let userData = null;
        
        if (username === 'admin' && password === '1234') {
            isValid = true;
            userData = {
                username: username,
                fullname: 'Administrador',
                email: 'admin@fruveg.com',
                loginTime: new Date().toISOString()
            };
        } else {
            const users = JSON.parse(localStorage.getItem('fruveg_users') || '[]');
            const user = users.find(u => u.username === username && u.password === password);
            
            if (user) {
                isValid = true;
                userData = {
                    username: user.username,
                    fullname: user.username,
                    email: user.email,
                    loginTime: new Date().toISOString()
                };
            }
        }
        
        if (isValid) {
            localStorage.setItem('fruveg_session', JSON.stringify(userData));
            setUser(userData);
            return { success: true };
        }
        
        return { success: false, error: 'Usuario o contraseña incorrectos' };
    };

    const register = (username, email, password, confirmPassword) => {
        if (username.length < 4) {
            return { success: false, error: 'El usuario debe tener al menos 4 caracteres' };
        }
        
        if (password.length < 4) {
            return { success: false, error: 'La contraseña debe tener al menos 4 caracteres' };
        }
        
        if (password !== confirmPassword) {
            return { success: false, error: 'Las contraseñas no coinciden' };
        }
        
        const users = JSON.parse(localStorage.getItem('fruveg_users') || '[]');
        const userExists = users.some(user => user.username === username || user.email === email);
        
        if (userExists) {
            return { success: false, error: 'El usuario o correo electrónico ya está registrado' };
        }
        
        const newUser = {
            username: username,
            email: email,
            password: password,
            registeredAt: new Date().toISOString()
        };
        
        users.push(newUser);
        localStorage.setItem('fruveg_users', JSON.stringify(users));
        
        return { success: true };
    };

    const logout = () => {
        localStorage.removeItem('fruveg_session');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};