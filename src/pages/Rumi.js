import React from 'react';

const Rumi = () => {
  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '30px auto',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <header
        style={{
          backgroundColor: '#76b7fc',
          color: 'white',
          padding: '12px 20px',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        Chat with Rumi 💬
      </header>

      <iframe
        src="https://www.chatbase.co/chatbot-iframe/vC1c4f54ZHIK6PT4pTe2o"
        width="100%"
        style={{ flex: 1, border: 'none' }}
        title="Rumi Chatbot"
      ></iframe>
    </div>
  );
};

export default Rumi;
