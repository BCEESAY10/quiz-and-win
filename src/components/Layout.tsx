import React from 'react';
import { Outlet } from 'react-router-dom';
import { Brain } from 'lucide-react';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <header className="bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center">
            <Brain className="h-8 w-8 text-yellow-400 mr-2" />
            <h1 className="text-2xl font-bold text-white">Answer Questions And Win Cash</h1>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}