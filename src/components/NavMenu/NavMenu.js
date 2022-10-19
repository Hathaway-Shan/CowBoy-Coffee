import { React } from 'react';
import { useUser } from '../../context/UserContext';
import { signOut } from '../../services/auth';
import './NavMenu.css';

export function NavMenu() {
  const { setUser } = useUser();

  const handleLogout = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e.message);
    }
  };

  return (
    <section className="top-nav">
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className="menu">
        <li className="menu-links">
          <a className="menu-links" href="/campfire">
            Home
          </a>
        </li>
        <li className="menu-links">
          <a className="menu-links" href="/the-posse">
            Meet the Posse
          </a>
        </li>
        <li className="menu-links" onClick={handleLogout}>
          Sign Out
        </li>
      </ul>
    </section>
  );
}
