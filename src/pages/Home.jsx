import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
// import Footer from '../components/Footer';
import Card from '../components/Card';
import Loader from '../components/Loader';
import '../styles/Home.css';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="dashboard active">
            <Header />
            <main className="main-content">
                <section className="section active">
                    <div className="home-hero">
                        <div className="home-left-section">
                            <img src="/fruits.png" alt="Fresh Fruits and Vegetables" className="fruits-image-home" />
                        </div>
                        <div className="hero-content">
                            <div className="hero-icon">🥦🍎🥕🍊</div>
                            <h1 className="hero-title">Fresh Vegetable and Fruit Detection</h1>
                            <p className="hero-subtitle">Sistema Inteligente de Clasificación de Frutas y Verduras</p>
                            <button className="btn-hero" onClick={() => navigate('/datatest')}>Comenzar Análisis</button>
                            <div className="stat-item">
                                <div className="stat-number">99%</div>
                                <div className="stat-label">Precisión</div>
                            </div>
                            {/* ...aquí puedes agregar otros elementos si lo necesitas... */}
                        </div>
                    </div>
                </section>
            </main>
            {/* Footer eliminado */}
        </div>
    );
};

export default Home;