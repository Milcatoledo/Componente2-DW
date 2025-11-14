import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
// import { getHistory } from '../utils/history';
import Header from '../components/Header';
// import Footer from '../components/Footer';
import Card from '../components/Card';
import '../styles/Profile.css';

const Profile = () => {
    const { user } = useAuth();
    const [profileData, setProfileData] = useState({
        fullname: '',
        username: '',
        email: '',
        sessionTime: ''
    });

    useEffect(() => {
        if (user) {
            let sessionTimeText = '-';
            if (user.loginTime) {
                const loginDate = new Date(user.loginTime);
                sessionTimeText = loginDate.toLocaleString('es-ES');
            }
            setProfileData({
                fullname: user.fullname || 'Administrador',
                username: user.username || 'admin',
                email: user.email || '-',
                sessionTime: sessionTimeText
            });
        }
    }, [user]);

    return (
        <div className="dashboard active">
            <Header />
            <main className="main-content">
                <section className="section active">
                    <div className="profile-container">
                        <div className="profile-left">
                            <img src="/fruits.png" alt="Fresh Fruits and Vegetables" className="fruits-image-profile" />
                        </div>
                        <div className="profile-right">
                            <Card title="Perfil de Usuario">
                                <div className="profile-info-grid">
                                    <div className="info-section">
                                        <h3>Información Personal</h3>
                                        <p><strong>Nombre:</strong> <span>{profileData.fullname}</span></p>
                                        <p><strong>Usuario:</strong> <span>{profileData.username}</span></p>
                                        <p><strong>Correo:</strong> <span>{profileData.email}</span></p>
                                        <p><strong>Sesión iniciada:</strong> <span>{profileData.sessionTime}</span></p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
            {/* Footer eliminado */}
        </div>
    );
};

export default Profile;