import React from 'react';
import Card from './components/Card';
import Button from './components/Button';


const App = () => {
  return (
    <div style={styles.appContainer}>
      <Card>
        <h2 style={styles.cardTitle}>Título do Card</h2>
        <p style={styles.cardText}>Exemplo de cartão estilizado React.</p>
        <Button text="Clique Aqui" />
      </Card>
    </div>
  );
};

const styles = {
  appContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f2f5',
    margin: '0',
    padding: '0',
  },
  cardTitle: {
    margin: '0 0 10px 0',
    fontSize: '24px',
    color: '#333',
  },
  cardText: {
    margin: '0 0 20px 0',
    fontSize: '16px',
    color: '#555',
  },
};

export default App;