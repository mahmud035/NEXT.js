'use client';

import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const ProfilePage = () => {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      const response = await axios.get('/api/users/logout');
      console.log(response.data);
      router.push('/login');
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl">Profile Page</h1>

      <button
        onClick={handleLogout}
        className="p-2  border border-red-300 rounded-lg mt-4 focus:outline-none focus:border-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;
