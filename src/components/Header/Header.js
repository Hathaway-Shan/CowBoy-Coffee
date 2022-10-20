import { useUser } from '../../context/UserContext';

import { NavLink } from 'react-router-dom';

import './Header.css';
import { NavMenu } from '../NavMenu/NavMenu';

export default function Header() {
  const { user } = useUser();

  let username;
  if (user) {
    [username] = user.email.split('@');
  }

  return (
    <div>
      {!user && (
        <div className="header-wrapper">
          <h2>Cowboy Coffee</h2>
          <div>
            <NavLink className="loginout" to="/auth/sign-in">
              Sign In
            </NavLink>
            <NavLink className="loginout" to="/auth/sign-up">
              Sign Up
            </NavLink>
          </div>
        </div>
      )}
      {user && (
        <div className="header-wrapper">
          <div>
            <h2>
              Welcome {username}, to Cowboy Coffee
            </h2>
          </div>
          <NavMenu />
        </div>
      )}
    </div>
  );
}
