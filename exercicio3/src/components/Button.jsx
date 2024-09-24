import React from 'react';

const Button = ({ text }) => {
  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 25px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
    marginTop: '10px',
  };

  const handleHover = (e) => {
    e.target.style.backgroundColor = '#0056b3';
  };

  const handleOut = (e) => {
    e.target.style.backgroundColor = '#007bff';
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={handleHover}
      onMouseLeave={handleOut}
    >
      {text}
    </button>
  );
};

export default Button;
