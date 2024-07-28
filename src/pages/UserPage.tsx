import React from 'react'

import {useLocation, Link} from "react-router-dom"
import LogoutButton from '../components/Logout';
import WatchedList from '../components/WatchedList';

import {Figures} from "../data"

import UserCart from '../components/UserCart';


function UserPage() {

  const figures = Figures
  const location = useLocation();
  const loginEmail = localStorage.getItem('loginEmail') || '';
  const loginName = loginEmail ? loginEmail.split('@')[0] : '';

  return (
    <div className='bg-[#111111] h-full w-full'>
      <div className='flex justify-between items-center h-full pt-8 mx-8'>
      <Link to="/">
            <div className="text-white xl:text-3xl md:text-2xl text-lg mr-2 md:mr-8 font-semibold">
              Rudyanya Shop
            </div>
          </Link>
          <LogoutButton/>
      </div>
      <p className='text-5xl text-white mt-12 ml-24'>Hello, {loginName}!</p>
      <div>
        <hr className='mt-4'/>
        <p className='text-4xl text-white mt-12 ml-12 mb-4'>Your Cart:</p>
        <UserCart/>
        </div>
        <div>
        <hr className='mt-4'/>
        <p className='text-4xl text-white mt-12 ml-12 mb-4'>Viewed Items:</p>
        <WatchedList/>
        </div>
    </div>
  )
}

export default UserPage