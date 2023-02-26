import React from 'react';
import { Layout, Button, Input, ConfigProvider, Row, Col, Menu } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Sider,
  Footer,
  Content,
  siderStyle,
  contentStyle,
  footerStyle,
  replicateFooterStyle
} from '../globalstyles.js';
import { useAuth0 } from '@auth0/auth0-react';
import { Navbar } from '../../commoncomponents/Navbar/Navbar';
import styles from './likedlistings.module.css';

export default function LikedListings() {
  const navigate = useNavigate();
  const { user_id } = useParams();

  const { getAccessTokenSilently, user, loginWithRedirect, logout } = useAuth0();
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    if (user && !accessToken) {
      getAccessTokenSilently().then((jwt) => {
        setAccessToken(jwt);
      });
    }
  }, [user, accessToken]);
  console.log(accessToken);

  const configs = {};
  if (accessToken) configs.headers = { Authorization: `Bearer ${accessToken}` };
  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#ff7e55'
          }
        }}>
        <Layout>
          <Sider width={250} style={siderStyle}>
            <Navbar />

            <Footer style={replicateFooterStyle}>{' _'}</Footer>
          </Sider>
          <Layout>
            <Content style={contentStyle}></Content>
            <Footer style={footerStyle}>Copyright © Give & Take 2023</Footer>
          </Layout>
        </Layout>
      </ConfigProvider>
    </div>
  );
}
