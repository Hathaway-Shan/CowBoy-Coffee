import { useUser } from '../../context/UserContext';
import { signOut } from '../../services/auth';
import { NavLink } from 'react-router-dom';

import './Header.css';

export default function Header() {
  const { user, setUser } = useUser();
  //build a handle logout function
  const handleLogout = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e.message);
    }
  };
  //if user is true return jsx

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
            <NavLink className="loginout" to="/auth/sign-in">Sign In</NavLink>
            <NavLink className="loginout" to="/auth/sign-up">Sign Up</NavLink>
          </div>
        </div>
      )}
      {user && (
        <div className="header-wrapper">
          <div>Welcome {username}, to Cowboy Coffee</div>
          <button className="logout-button" onClick={handleLogout}>Sign Out</button>
        </div>
      )}
    </div>
  );
}
