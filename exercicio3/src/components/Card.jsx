import React from 'react';

const Card = ({ children }) => {
  const cardStyle = {
    border: '1px solid #ddd',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    borderRadius: '12px',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '350px',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
  };

  return <div style={cardStyle}>{children}</div>;
};

export default Card;
