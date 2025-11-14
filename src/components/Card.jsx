import React from 'react';
import '../styles/Card.css';

const Card = ({ title, description, children }) => {
    return (
        <div className="info-card">
        {title && <h2>{title}</h2>}
        {children}
        </div>
    );
};

export default Card;