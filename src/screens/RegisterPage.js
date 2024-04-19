import React, { useState } from 'react';
import handleRegister from '../api/handleRegister.js';
import { Link } from 'react-router-dom';

function RegisterPage({ onRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const handleSubmit = async () => {
    // Call the handleRegister function with the form data
    await handleRegister({ username, password, email, birthdate, onRegister, setEmail, setPassword, setUsername, setBirthdate });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-md w-full px-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Register</h2>

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

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 mb-4"
          />
          
          <input
            type="date"
            placeholder="Birthdate"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 mb-4"
          />

          <button onClick={handleSubmit} className="w-full bg-blue-500 text-white rounded-lg px-4 py-2">
            Register
          </button>

          {/* Signin link */}
          <p className="text-center mt-4">
            Already have an account?{' '}
            <Link to="/" className="text-blue-500 hover:underline">
              Sign in
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
