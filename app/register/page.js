'use client';

import { registerUser } from '@redux/slices/authSlice';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const INITIAL_STATE =  {
  email: '',
  password: '',
  username: '',
}

const Register = () => {
  const [userData, setUserData] = useState({...INITIAL_STATE});

  const dispatch = useDispatch();
  const router = useRouter();

  const authState = useSelector(state => state.auth);

  const handleRegister = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };


  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (userData.username && userData.email && userData.password) {
      dispatch(registerUser(userData));
    }

    if (authState.status === 'fulfilled') {
      setUserData({ ...INITIAL_STATE });
      router.push('/login', {scroll: false})
    }
    
  }

  console.log(authState);



  return (
    <div className="mt-10">
      <div className="w-full bg-[#3C1FF4]  py-12">
        <p className="w-9/12 m-auto pl-4 text-white text-lg">register</p>
      </div>

      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            Sign up
          </h1>

          <form
            onSubmit={handleFormSubmit}
            action=""
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg border border-blue-700 sm:p-6 lg:p-8"
          >
            <p className="text-center text-lg font-medium">
              Sign up to New account
            </p>

            <div>
              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-lg border-gray-200 outline-blue-700 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email number"
                  name="email"
                  value={userData.email}
                  onChange={handleRegister}
                />
              </div>
            </div>

            <div>
              <div className="relative">
                <input
                  type="password"
                  className="w-full rounded-lg border-gray-200 outline-blue-700 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter password"
                  name="password"
                  value={userData.password}
                  onChange={handleRegister}
                />
              </div>
            </div>

            <div>
              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-lg border-gray-200 outline-blue-700 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter your name"
                  name="username"
                  value={userData.username}
                  onChange={handleRegister}
                />
              </div>
            </div>

            <button
              type="submit"
              className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            >
              Sign up
            </button>

            <p className="text-center text-sm text-gray-500">
              Have an account?
              <Link className="underline" href="/login">
                  Login in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
