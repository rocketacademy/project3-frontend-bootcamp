import React from 'react';
import styles from './logout.module.css';
// import { Button } from 'antd';
import { useAuth0 } from '@auth0/auth0-react';
import { LogoutOutlined } from '@ant-design/icons';

export function Logout() {
  const { logout } = useAuth0();
  return (
    <>
      <button className={styles.btn} onClick={logout}>
        <i>
          <LogoutOutlined />
        </i>
        <span className={styles.buttonText}>Log out</span>
      </button>
    </>
  );
}
