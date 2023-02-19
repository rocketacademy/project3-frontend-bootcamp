// user profile page
import React from 'react';
import './userprofile.css';
import { UsersProfile } from './UsersProfile.js';
import { UserListings } from './UserListings';
import profilepic from '../../assets/images/profilepic.jpeg';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import book from '../../assets/images/book.webp';
import { Card, Button, Tag, Layout } from 'antd';
import {
  Sider,
  Footer,
  Content,
  siderStyle,
  contentStyle,
  footerStyle,
  replicateFooterStyle
} from '../globalstyles.js';
import { Navbar } from '../../commoncomponents/Navbar/Navbar';

const { Meta } = Card;

export function UserProfile() {
  return (
    <>
      <Layout>
        <Sider width={300} style={siderStyle}>
          <Navbar />
          <Footer style={replicateFooterStyle}> </Footer>
        </Sider>
        <Layout>
          <Content style={contentStyle}>
            {/* @val I removed this to standardize the navbar + remove the space between the navbar & content container */}
            {/* <div className="content"> */}
            <div className="content">
              {UsersProfile.map((item, index) => {
                return (
                  <div className="userName" key={index}>
                    <div className="userDescription">
                      <div className="profile">
                        <div className="photo">
                          {/* <img src={item.photo} alt={item.alt} /> */}
                          <img src={profilepic} alt={item.alt} />
                        </div>
                        <h1>{item.username}</h1>
                      </div>
                      <h2>Joined on {item.dateJoined}</h2>
                      <h2>Nearest MRT station:</h2>
                      <div>{item.mrtStation}</div>
                      <h2>Bio:</h2> <div>{item.bio}</div>
                    </div>
                    <Button className="btn">
                      <a href="settings">Update Profile</a>
                    </Button>
                  </div>
                );
              })}
            </div>
            <h3 className="content">Listings</h3>
            <div className="listingFilters">
              <Button className="btn">
                <a href="/">Free</a>
              </Button>

              <Button className="btn">
                <a href="/">Wanted</a>
              </Button>
            </div>
            <div className="listings">
              {UserListings.map((listing, index) => {
                return (
                  <Card
                    key={index}
                    hoverable
                    style={{
                      width: 300,
                      marginRight: 10,
                      marginBottom: 20,
                      display: 'inline-block',
                      wordWrap: 'break-word'
                    }}
                    cover={<img alt={listing.alt} src={book} />}
                    actions={[<EditOutlined key="edit" />, <DeleteOutlined key="delete" />]}>
                    <Meta
                      style={{ wordWrap: 'break-word' }}
                      title={listing.title}
                      description={listing.description}
                    />
                    <br></br>
                    <Tag color={listing.color}>{listing.condition}</Tag>
                  </Card>
                );
              })}
            </div>
            {/* </div> */}
            <Footer style={footerStyle}> Copyright© G&T 2023</Footer>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default UserProfile;
