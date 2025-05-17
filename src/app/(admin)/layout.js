'use client';

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import AdminSidebar from '@/components/admin/Sidebar';

function AdminLayout({ children }) {
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);

  // Function to check if the user has the allowed role
  const allowedRoles = ['admin', 'agent'];

  useEffect(() => {
    if (!user) {
      // Not logged in → go to login
      router.push('/login');
    } else if (!allowedRoles.includes(user.role)) {
      // Logged in but not authorized → go to unauthorized page
      router.push('/dashboard');
    }
  }, [user, router]);

  return (
    <div className="relative min-h-screen">
      <AdminSidebar />
      <main className="pl-64 p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
        {children}
      </main>
    </div>
  );
}

export default AdminLayout;
