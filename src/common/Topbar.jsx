import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Topbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('logged'));

  const handleClick = async () => {
    try {
      localStorage.removeItem('logged');
      let res = await axios.get('/api/v1/user/logout');
      if (res.status === 201 || 304) {
        toast.success('LogOut success',{
            position:"top-center"
        });
        setIsLoggedIn(false); // Update isLoggedIn state
      }
    } catch (error) {
      toast.error('Error logging out');
    }
  };

  console.log(isLoggedIn);

  return (
    <>
      <nav className='topBar bg-dark col-lg-12 col-sm-12'>
        <h1>Password Reset</h1>
        {isLoggedIn ? (
          <button onClick={handleClick}>Log out</button>
        ) : (
          <button onClick={() => navigate('/login')}>Log In</button>
        )}
      </nav>
    </>
  );
}

export default Topbar;
