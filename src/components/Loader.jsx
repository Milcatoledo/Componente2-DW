import React from 'react';
import '../styles/Loader.css';

const Loader = () => (
    <div className="loader" aria-label="Cargando">
        <div className="spinner"></div>
        <span className="loader-text">Cargando...</span>
    </div>
);

export default Loader;
