import React from 'react';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../redux/slice/cartSlice';
import {useDispatch} from "react-redux"
import { clearWatched } from '../redux/slice/watchedSlice';

function LogoutButton() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  const handleLogout = () => {
    dispatch(clearWatched());
    dispatch(clearCart())
    localStorage.removeItem('loggedIn');
    navigate('/authorization');
  };

  return (
    <button onClick={handleLogout} className="text-white bg-red-800 hover:bg-red-600 p-2 rounded">
      Logout
    </button>
  );
}

export default LogoutButton;