'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function HomePage() {
  const [hovered, setHovered] = useState(false);

  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif', 
      padding: '2rem', 
      textAlign: 'center', 
      backgroundColor: '#f0f4ff', 
      minHeight: '100vh' 
    }}>
      <h1 style={{ color: '#0033cc' }}>Welcome to Fintech App Home</h1>
      <p style={{ fontSize: '18px', color: '#333' }}>
       🎉 Hooray! Your Fintech journey starts here!
      </p>

      <div style={{ marginTop: '2rem' }}>
        <Link href="/login">
          <button
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
            style={{
              backgroundColor: hovered ? '#0055ff' : '#0070f3',
              color: 'white',
              padding: '10px 20px',
              marginRight: '1rem',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              transition: 'background-color 0.3s ease',
            }}
          >
            Login
          </button>
        </Link>

        <Link href="/signup">
          <button
            style={{
              backgroundColor: '#00aaff',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}
