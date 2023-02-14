import React, { useEffect } from 'react';
import styles from './navbar.module.css';
import logo from '../g&t.png';
import { NavbarData } from './NavbarData';
import { useAuth0 } from '@auth0/auth0-react';

export function Navbar() {
  const { loginWithRedirect, user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  console.log(user, isAuthenticated);
  useEffect(() => {
    if (user) {
      getAccessTokenSilently().then((jwt) => {
        console.log(jwt);
      });
    }
  });
  return (
    <div>
      {/* <p>Give & Take</p> */}

      <nav className={styles.navbar}>
        <h1 className={styles.name}>
          <img src={logo} className={styles.logo} alt="logo" />
        </h1>

        <ul className={styles.navMenu}>
          {NavbarData.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url}>
                  <i>{item.icon}</i> {item.title}
                </a>
              </li>
            );
          })}
          <li className={styles.dropdown}>
            <button className={styles.dropbtn}>Login/ Sign up</button>
            <div className={styles.dropdownContent}>
              <a href="login" onClick={loginWithRedirect}>
                Login
              </a>
              <a href="signup">Sign up</a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
