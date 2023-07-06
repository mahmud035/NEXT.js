'use client';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [user, setUser] = React.useState({
    email: '',
    password: '',
  });

  const handleLogin = () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Login</h1>
      <hr />

      <label htmlFor="n">email</label>
      <input
        className="p-2 text-black border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        type="email"
        id="email"
        placeholder="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <label htmlFor="n">password</label>
      <input
        className="p-2 text-black border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        type="password"
        id="password"
        placeholder="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />

      <button
        onClick={handleLogin}
        className="p-2  border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        Login here
      </button>
      <Link href="/signup">Visit signup page</Link>
    </div>
  );
};

export default LoginPage;
