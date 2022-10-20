import React, { useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { authUser } from '../../services/auth';

import './Auth.css';

export default function Auth() {
  const [error, setError] = useState(null);
  const { user, setUser } = useUser();
  const { type } = useParams();
  const typeName = type === 'sign-in' ? 'sign-in' : 'sign-up';  

  const handleSubmitAuth = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    try {
      const currentUser = await authUser(formData.get('email'), formData.get('password'), type);
      setUser(currentUser);
    } catch (e) {
      setError(e.message);
    }
  }; 

  if (user) return <Redirect to={'/campfire'} />;

  return (
    <div className='auth-form-container'>
      <form className='auth-form' onSubmit={handleSubmitAuth}>
        <label htmlFor='email'> Email:</label>
        <input name='email'/>
        <label htmlFor='password'> Password:</label>
        <input type='password' name='password'/>
        <button>{typeName}</button>
      </form>
      {error && <h2>{error}</h2>}
    </div>
  );
}
