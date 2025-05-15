// app/layout.tsx
import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Fintech App</title>
        <meta name="description" content="Welcome to Fintech App" />
      </head>
      <body
        style={{
          fontFamily: 'Arial, sans-serif',
          margin: 0,
          padding: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          backgroundColor: '#f0f2f5',
        }}
      >
        {children}
      </body>
    </html>
  );
}
