// user profile page
import React from 'react';
// import styles from "../pages/ProfilePage/profile.module.css";
import logo from '../../assets/images/logo.png';
import styles from './navbar.module.css';
import { useAuth0 } from '@auth0/auth0-react';

export function Navbar() {
  const { logout } = useAuth0();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.menu}>
          <ul>
            <div className={styles.profile}>
              <a href="homepage">
                <div className={styles.logo}>
                  <img src={logo} alt="logo" />
                </div>
              </a>
            </div>
            <li>
              <a href="homepage">Home</a>
            </li>
            <li>
              <a href="profile">Profile</a>
            </li>
            <li>
              <a href="createlisting">Create Listing</a>
            </li>
            <li>
              <a href="/">
                <div onClick={logout}>Logout</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
