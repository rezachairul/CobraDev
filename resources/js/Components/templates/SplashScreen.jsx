import React from 'react';

export default function SplashScreen() {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000', // bisa diganti sesuai brand
      color: '#fff',
      fontSize: '2rem'
    }}>
      Loading...
    </div>
  );
}
