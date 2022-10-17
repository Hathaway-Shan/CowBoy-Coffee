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
          <NavLink className="sign-in" to="/auth/sign-in" Sign-in />
          <NavLink className="sign-up" to="/auth/sign-up" Sign-up />
        </div>
      )}
      {user && (
        <div className="header">
          <div>hello {user.email}</div>
          <button className="logout-button" onClick={handleLogout}></button>
        </div>
      )}
    </div>
  );
}
