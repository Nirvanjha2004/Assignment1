import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function SigninPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/auth/signin', {email, password})
    .then((res) => {
      sessionStorage.setItem('userId', res.data.userId);
      navigate('/');
    })
    .catch((err) => {
      console.log(err);
    })
  }
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      {/* Left side - Image */}
      <div className="hidden lg:block lg:w-1/2">
        <img 
          src="public/Image.png" 
          alt="Fashion" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right side - Sign In Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 md:px-16 lg:px-24 py-8">
        <div className="max-w-md w-full mx-auto space-y-6">
          <h1 className="text-2xl md:text-3xl font-semibold mb-2">Sign In</h1>
          <p className="text-gray-600 mb-8">Sign in to access your account</p>

          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="block text-gray-700">
                User name or email address
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Enter your email"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="block text-gray-700">Password</label>
                <a href="#" className="text-sm text-purple-600 hover:underline">
                  Forget your password?
                </a>
              </div>
              <div className="relative">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Enter your password"
                />
                <button 
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  Hide
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded hover:bg-purple-700 transition-colors"
            >
              Sign In
            </button>
          </form>

          <p className="mt-8 text-center text-gray-600">
            Don't have an account?{' '}
            <a href="/signup" className="text-purple-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

