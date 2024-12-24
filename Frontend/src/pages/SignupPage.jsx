import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from '../firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth/lite';
import { doc, setDoc } from 'firebase/firestore/lite';

export default function SignupPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Create user in Firebase Auth
            const userCredential = await createUserWithEmailAndPassword(
                auth, 
                formData.email, 
                formData.password
            );

            // Add user details to Firestore
            await setDoc(doc(db, 'users', userCredential.user.uid), {
                name: formData.name,
                email: formData.email,
                createdAt: new Date().toISOString()
            });

            // Store user ID in session
            sessionStorage.setItem('userId', userCredential.user.uid);
            
            // Navigate to shop page
            navigate('/shop');
        } catch (err) {
            setError(err.message);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

  return (
    <div className="flex h-screen">
      {/* Left side - Image */}
      <div className="hidden lg:block lg:w-1/2">
        <img 
          src="public/Image.png" 
          alt="Fashion" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right side - Sign Up Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24">
        <div className="max-w-md w-full mx-auto">
          <h1 className="text-3xl font-semibold mb-2">Sign Up</h1>
          <p className="text-gray-600 mb-8">Sign up for free to access to in any of our products</p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="space-y-2">
              <label className="block text-gray-700">
                Full Name
              </label>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-gray-700">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="designer@gmail.com"
                required
              />
              <p className="text-red-500 text-sm hidden">Error Message</p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="block text-gray-700">Password</label>
                <button 
                  type="button"
                  className="text-sm text-gray-500"
                >
                  Hide
                </button>
              </div>
              <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Enter your password"
                required
              />
              <p className="text-gray-500 text-sm">Use 8 or more characters with a mix of letters, numbers & symbols</p>
            </div>

            <div className="space-y-4">
              <label className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  required
                />
                <span className="text-gray-600">
                  Agree to our{' '}
                  <a href="#" className="text-purple-600 hover:underline">Terms of use</a>
                  {' '}and{' '}
                  <a href="#" className="text-purple-600 hover:underline">Privacy Policy</a>
                </span>
              </label>

              <label className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                />
                <span className="text-gray-600">Subscribe to our monthly newsletter</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded hover:bg-purple-700 transition-colors"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-8 text-center text-gray-600">
            Already have an account?{' '}
            <a href="/signin" className="text-purple-600 hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
