import React, { ChangeEvent, useState, useEffect } from 'react'

import { Link, useNavigate } from "react-router-dom";

function LoginPage({}) {

  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is already logged in
    if (localStorage.getItem('loggedIn') === 'true') {
      navigate('/userpage');
    }
  }, [navigate]);


  const loginChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  const passwordChangeHandler = (e : ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSignIn = (e : React.FormEvent) => {
    e.preventDefault();
    if (login && password) {
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('loginEmail', login);
      navigate('/userpage', { state: { login } });
    } else {
      alert('Please fill in all fields');
    }
  };


  return (
    <div className='h-full w-full bg-gradient-to-r from-[#654ea3] to-[#eaafc8] bg-red-500'>
      <div>
        <div className="flex flex-col items-center justify-center px-6 mx-auto h-screen  lg:py-0">
      <div className="w-full bg-gradient-to-r from-[#371412] to-[#0a0a0a] rounded-lg md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-2 sm:p-8">
              <h1 className="text-xl font-bold justify-center items-center text-center md:text-2xl text-white">
                  Sign In
              </h1>
              <form onSubmit={handleSignIn} action="">
                  <div>
                      <label htmlFor="email" className="block mb-2 text-lg font-medium text-white">Email</label>
                      <input value={login} onChange={loginChangeHandler} type="email" name="email" id="email" className="rounded-lg w-full p-2.5 bg-gray-700 text-white" placeholder="name@mail.com" required={true}/>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-lg font-medium text-white mt-4">Password</label>
                      <input value={password} onChange={passwordChangeHandler} type="password" name="password" id="password" placeholder="••••••" className="rounded-lg w-full p-2.5 bg-gray-700 text-white" required={true}/>
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5 mt-8">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border rounded duration-300 accent-rose-500" required={false}/>
                          </div>
                          <div className="ml-3 text-sm mt-8">
                            <label htmlFor="remember" className="text-gray-200">Remember me</label>
                          </div>
                      </div>
                  </div>
                  <button className="mt-4 w-full text-white bg-red-800 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                  <Link to="/signup">
                  <p className="text-sm font-light text-gray-300 mt-4">
                      Don’t have an account yet? <button className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</button>
                  </p>
                  </Link>
                  <p className="text-sm font-light text-gray-300 mt-2">
                    <p className="hover:underline cursor-pointer">Forgot the password?</p>
                  </p>
                
              </form>
          </div>
      </div>
      </div>
  </div>
    </div>
  )
}

export default LoginPage