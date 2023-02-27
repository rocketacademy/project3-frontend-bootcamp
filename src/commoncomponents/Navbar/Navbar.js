// user profile page
import React from 'react';
import { useState } from 'react';
import logo from '../../assets/images/logo.png';
import giveInfo from '../../assets/images/give-info.png';
import deleteBanner from '../../assets/images/delete-banner.png';
import styles from './navbar.module.css';
import { useAuth0 } from '@auth0/auth0-react';
import { Link, useParams } from 'react-router-dom';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Modal, Tabs, Image } from 'antd';

const { TabPane } = Tabs;

export function Navbar() {
  let { original_id } = useParams();
  const { logout } = useAuth0();

  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('tab1');

  const handleOpenModal = () => {
    setVisible(true);
  };

  const handleCloseModal = () => {
    setVisible(false);
  };

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.menu}>
          <ul>
            <div className={styles.profile}>
              <div className={styles.logo}>
                <Link to={`../../${original_id}/homepage`}>
                  <img src={logo} alt="logo" />
                </Link>
              </div>
            </div>
            <li>
              <Link to={`../../${original_id}/homepage`}>Home</Link>
              {/* <a href="homepage">Home</a> */}
            </li>
            <li>
              {/* <a href="profile">Profile</a> */}
              <Link to={`../../${original_id}/profile`}>Profile</Link>
            </li>
            <li>
              {/* <a href="createlisting">Create Listing</a> */}
              <Link to={`../../${original_id}/createlisting`}>Create Listing</Link>
            </li>
            <li>
              <button className={styles.logout} onClick={logout}>
                Logout
              </button>
            </li>
            <li>
              <button className={styles.btn} onClick={handleOpenModal}>
                <InfoCircleOutlined className={styles.logout} />
              </button>
              <Modal
                visible={visible}
                onCancel={handleCloseModal}
                footer={null}
                style={{ width: '1000px' }}>
                <Tabs activeKey={activeTab} onChange={handleTabChange}>
                  <TabPane tab="Found something you like?" key="tab1">
                    <Image.PreviewGroup>
                      <Image
                        src={giveInfo}
                        alt="guide to contacting givers"
                        style={{ width: '100%' }}
                      />
                    </Image.PreviewGroup>
                  </TabPane>
                  <TabPane tab="Gave something away?" key="tab2">
                    <Image.PreviewGroup>
                      <Image
                        src={deleteBanner}
                        alt="guide to deleting listing"
                        style={{ width: '100%' }}
                      />
                    </Image.PreviewGroup>
                  </TabPane>
                </Tabs>
              </Modal>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
