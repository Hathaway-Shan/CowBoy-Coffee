import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { authUser } from '../../services/auth';

export default function Auth() {
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
      // eslint-disable-next-line no-console
      console.log(e);
    }
  }; 

  if (user) return <Redirect to={'/campfire'} />;

  return (
    <div>
      <div>
        <form onSubmit={handleSubmitAuth}>
          <label> Email:
            <input name='email'/>
          </label>
          <label> Password:
            <input type='password' name='password'/>
          </label>
          <button>{typeName}</button>
        </form>
      </div>
    </div>
  );
}
