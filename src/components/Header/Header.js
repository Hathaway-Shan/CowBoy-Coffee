import { useUser } from '../../context/UserContext';
import { signOut } from '../../services/auth';
import { NavLink } from 'react-router-dom';

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

  return (
    <div className="header-wrapper">
      {!user && (
        <div>
          <NavLink className="sign-in" to="/auth/sign-in">Sign In</NavLink>
          <NavLink className="sign-up" to="/auth/sign-up">Sign Up</NavLink>
        </div>
      )}
      {user && (
        <div className="header">
          <div>Welcome {user.email}, to Cowboy Coffee</div>
          <button className="logout-button" onClick={handleLogout}>Sign Out</button>
        </div>
      )}
    </div>
  );
}
