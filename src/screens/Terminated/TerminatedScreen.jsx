import React from 'react';

const TerminatedScreen = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#000',
            color: 'red',
            fontFamily: 'monospace',
            fontSize: '2rem'
        }}>
            APPLICATION TERMINATED
        </div>
    );
};

export default TerminatedScreen;
