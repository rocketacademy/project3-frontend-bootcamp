// user profile page
import React from "react";
// import styles from "../pages/ProfilePage/profile.module.css";
import logo from "../../assets/images/logo.png";
import styles from "./navbar.module.css";

export function Navbar() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.menu}>
          <ul>
            <div className={styles.profile}>
              <div className={styles.logo}>
                <img src={logo} alt="logo" />
              </div>
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
              <a href="logout">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
