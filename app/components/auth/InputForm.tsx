'use client'

import { useState } from 'react';

const LoginForm = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Username or Email:', usernameOrEmail);
    console.log('Password:', password);
  };

  return (
    <div className="flex w-3/4 items-center">
      <div className="w-full p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="usernameOrEmail" className="flex items-center text-sm font-medium text-Primary font-SofiaProSemiBold">
              Username or Email
            </label>
            <input
              type="text"
              id="usernameOrEmail"
              value={usernameOrEmail}
              onChange={(e) => setUsernameOrEmail(e.target.value)}
              required
              className="block w-full px-3 py-2 mt-1 border rounded-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
            />
          </div>
          <div >
            <label htmlFor="password" className="block text-sm font-medium text-Primary font-SofiaProSemiBold">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
            />
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
