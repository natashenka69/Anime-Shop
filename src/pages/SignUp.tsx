import React, { ChangeEvent, useState } from 'react'

import { Link, useNavigate } from "react-router-dom";

function SignUp( ) {

  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("");
  const [showList, setShowList] = useState(true)
  const navigate = useNavigate();

  const loginChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  const passwordChangeHandler = (e : ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSignIn = (e : React.FormEvent) => {
    e.preventDefault();
    if (login && password) {
      setShowList(false);
    }
  };


  return (
    <div className='h-full w-full bg-gradient-to-r from-[#7F7FD5] to-[#91EAE4]'>
{showList ? 
        <div className="flex flex-col items-center justify-center px-6 mx-auto h-screen lg:py-0">
      <div className="w-full bg-gradient-to-r from-[#371412] to-[#0a0a0a] rounded-lg md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-2 sm:p-8">
              <h1 className="text-xl font-bold justify-center items-center text-center md:text-2xl text-white">
                  Sign Up
              </h1>
              <form onSubmit={handleSignIn} action="">
                  <div>
                      <label htmlFor="email" className="block mb-2 text-lg font-medium text-white">Email</label>
                      <input value={login} onChange={loginChangeHandler} type="email" name="email" id="email" className="rounded-lg w-full p-2.5 bg-gray-700 text-white" placeholder="name@mail.com" required={true}/>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-lg font-medium text-white mt-4">Password</label>
                      <input value={password} onChange={passwordChangeHandler} type="password" name="password" id="password" placeholder="••••••" className="rounded-lg w-full p-2.5 bg-gray-700 text-white mb-[20px]" required={true}/>
                  </div>
                  <button className="mt-4 w-full text-white bg-red-800 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                  <Link to="/authorization">
                  <p className="text-sm font-light text-gray-300 mt-4">
                      Have an account? <button className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign In</button>
                  </p>
                  </Link>
              </form>
          </div>
      </div>
  </div>
  : 
  <div>
    <div className="flex flex-col items-center justify-center px-6 mx-auto h-screen lg:py-0">
        <p>List has been sent</p>
    </div>
  </div>
  }
    </div>
  )
}

export default SignUp