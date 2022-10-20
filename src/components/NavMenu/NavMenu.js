import { React, useState } from 'react';
import { useUser } from '../../context/UserContext';
import { signOut } from '../../services/auth';
import './NavMenu.css';

export function NavMenu() {
  const { setUser } = useUser();
  const [navOpen, setNavOpen] = useState(true);

  const handleToggle = () => {
    setNavOpen((prev) => !prev);
  };

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
      <label className="menu-button-container" htmlFor="menu-toggle" onClick={handleToggle}>
        <div className="menu-button">{navOpen}</div>
      </label>
      <ul className="menu">
        <li className={`${navOpen ? 'menu-links-open' : 'menu-links'}`}>
          <a className={`${navOpen ? 'menu-links-open' : 'menu-links'}`} href="/campfire">
            Home
          </a>
        </li>
        <li className={`${navOpen ? 'menu-links-open' : 'menu-links'}`}>
          <a className={`${navOpen ? 'menu-links-open' : 'menu-links'}`} href="/the-posse">
            Meet the Posse
          </a>
        </li>
        <li className={`${navOpen ? 'menu-links-open' : 'menu-links'}`} onClick={handleLogout}>
          Sign Out
        </li>
      </ul>
    </section>
  );
}
