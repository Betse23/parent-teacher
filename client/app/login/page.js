"use client"
import Image from 'next/image'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaUser } from "react-icons/fa";
import Navbar from '../components/Navbar';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const loginUser = async () => {
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      if (!response.ok) {
        throw new Error('Login failed');
      }
      const data = await response.json();
      localStorage.setItem('token', data.token);
      const result = await fetch('http://localhost:5000/protected', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${data.token}`
            }
          });
      
      // Redirect based on user role
      if(result.ok){
      const role = data.user.role;
      switch (role) {
        case 'admin':
          router.push('/admin');
          break;
        case 'parent':
          router.push('/parent');
          break;
        case 'teacher':
          router.push('/teacher');
          break;
        default:
          throw new Error('Invalid role');
      }
    }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
<>
<Navbar/>
  <div className='bg-white min-h-screen flex items-center justify-center mt-4'>
        <div className='bg-gray-200 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center'>
          <div className='sm:w-1/2 px-8 my-24 flex flex-col'>
             <div className='flex-row items-center justify-center'>
                <div className="flex items-center justify-center text-blue-800 ">
                    <FaUser size={50} />
                  </div>
                  <h2 className='font-bold text-center text-2xl text-blue-800 '>Login</h2>
             </div>
              <form className='flex flex-col gap-4' onSubmit={(e) => { e.preventDefault(); loginUser(); }}>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="mt-6 p-2 w-full border rounded-xl boarder"
                        placeholder='Username'
                        required
                      />
                      <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-2 rounded-xl "
                    placeholder='Password'
                    required
                  />
                  <button
                    type="submit"
                    className="bg-blue-800  text-white py-2 rounded-md">
                        Login
                  </button>
              </form>
          </div>
          <div className='w-1/2 sm:block hidden'>
              <Image 
                  src="/image/home.png"
                  alt="Login Image"
                  width={600}
                  height={500}
                  className='rounded-lg '
              />
          </div> 
        </div>
  </div>
  </>
  );
}

export default Login;


