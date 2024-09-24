import React from 'react';

const TextoEstilizado = () => {
  const paragraphStyle = {
    backgroundColor: '#e3f2fd', 
    color: '#0d47a1',           
    padding: '20px',            
    fontFamily: 'Verdana, Geneva, sans-serif', 
    fontSize: '18px',           
    borderRadius: '10px',       
    lineHeight: '1.6',         
    maxWidth: '600px',          
    margin: '30px auto',        
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)', 
    textAlign: 'center',        
    transition: 'transform 0.2s ease-in-out', 
  };

  return (
    <p style={paragraphStyle}>
      Este é um texto estilizado usando inline styles em React.
    </p>
  );
};

export default TextoEstilizado;
