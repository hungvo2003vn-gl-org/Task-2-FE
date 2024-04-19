import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import handleLogin from '../api/handleLogin.js';

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    // Call the handleRegister function with the form data
    await handleLogin({ email, password, onLogin });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center flex-col">
      <div>
        <h1 className="font-bold mb-4 text-7xl p-5">Welcome Back</h1>
      </div>
      
      <div className="max-w-md w-full px-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 mb-4"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 mb-4"
          />
          <button onClick={handleSubmit} className="w-full bg-blue-500 text-white rounded-lg px-4 py-2">
            Login
          </button>

          {/* Signup link */}
          <p className="text-center mt-4">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
