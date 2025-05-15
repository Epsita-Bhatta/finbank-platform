'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignUpPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Here you would call your API to create the user
    // For demo, we simulate success with timeout
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Redirect to login page after sign up
    router.push('/login');
  }

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', padding: '1rem', border: '1px solid #ccc', borderRadius: 8 }}>
      <h1 style={{ textAlign: 'center', color: '#0070f3' }}>Sign Up</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ padding: 8, borderRadius: 4, border: '1px solid #ddd' }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          style={{ padding: 8, borderRadius: 4, border: '1px solid #ddd' }}
        />
        <button
          type="submit"
          style={{ padding: 10, backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: 5, cursor: 'pointer' }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
