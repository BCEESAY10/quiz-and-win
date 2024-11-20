import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../store';
import { KeyRound, User } from 'lucide-react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const login = useStore((state) => state.login);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Welcome Back!</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-200">Username</label>
            <div className="mt-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-white/5 block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-md leading-5 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your username"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-200">Password</label>
            <div className="mt-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <KeyRound className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white/5 block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-md leading-5 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign In
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-300">
          Don't have an account?{' '}
          <Link to="/register" className="font-medium text-blue-400 hover:text-blue-300">
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
}