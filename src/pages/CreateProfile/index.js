// val to populate
import { React, useState, useEffect } from 'react';
import styles from './createprofile.module.css';
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
import { Button, Form, Input, Select, Layout, notification, ConfigProvider } from 'antd';
import { useAuth0 } from '@auth0/auth0-react';
import { SmileOutlined, FrownOutlined } from '@ant-design/icons';
import { UploadWidget } from './UploadWidget';
import axios from 'axios';
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import MRT from '../EditProfile/MRT';

export function CreateProfile() {
  // const { TextArea } = Input;
  // const { Option } = Select;

  let { user_id } = useParams();
  const navigate = useNavigate();
  const { getAccessTokenSilently, user } = useAuth0();
  const [accessToken, setAccessToken] = useState(null);
  const [formValues, setFormValues] = useState({});
  const [api, contextHolder] = notification.useNotification();
  const msg = {
    to: `${formValues.email}`, // Change to your recipient
    from: 'frostarcher7@gmail.com', // Change to your verified sender
    subject: 'Give&Take - Your account has been created!',
    text: `Hi ${formValues.username}, Thank you for creating an account with Give&Take! You may start putting your listings!`,
    html: `<img alt="" width="300" src="https://res.cloudinary.com/dwgeik14h/image/upload/v1675348723/give_and_take_logo.png" /><br></br><h2>Hi ${formValues.username}!</h2><br></br><p>Thank you for creating an account with Give&Take! You may start putting your listings!</p><br></br><p>Login now by clicking <a href="http://localhost:3001">here</a>!</p><br></br><p>Regards,</p></br><p>Give & Take team</p>`
  };
  const openSuccessNotification = (placement) => {
    api.info({
      message: `Yippee!`,
      description: 'Create profile successful! Welcome to Give&Take!',
      placement,
      icon: (
        <SmileOutlined
          style={{
            color: 'green'
          }}
        />
      )
    });
    axios
      .post('http://localhost:3000/sendgrid', msg, configs)
      .then(function (response) {
        console.log(response);
        axios
          .get(`http://localhost:3000/${user.email}`, configs)
          .then(function (response) {
            console.log(response);
            navigate(`/${response.data.id}/homepage`);
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const openFailureNotification = (placement) => {
    api.info({
      message: `Oh no!`,
      description:
        'Create profile unsuccessful! Be sure to check that all fields are filled correctly!',
      placement,
      icon: (
        <FrownOutlined
          style={{
            color: 'red'
          }}
        />
      )
    });
  };

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
    console.log(formValues);
  };

  const handleMRTChange = (e) => {
    setFormValues({ ...formValues, mrt: e });
    console.log(formValues);
  };

  const onSearch = (value) => {
    console.log('search:', value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:3000/createuser`, formValues, configs)
      .then(function (response) {
        console.log(response);
        openSuccessNotification('top');
      })
      .catch(function (error) {
        console.log(error);
        openFailureNotification('top');
      });
  };

  useEffect(() => {
    if (user) {
      setFormValues({
        email: user.email,
        last_name: user.family_name,
        first_name: user.given_name,
        username: user.nickname,
        profile_photo: user.picture
      });
    }
  }, [user]);

  useEffect(() => {
    if (user && !accessToken) {
      getAccessTokenSilently().then((jwt) => setAccessToken(jwt));
    }
  }, [user, accessToken]);
  console.log(accessToken);

  const configs = {};
  if (accessToken) configs.headers = { Authorization: `Bearer ${accessToken}` };

  return (
    <div>
      {contextHolder}
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#ff7e55'
          }
        }}>
        {/* <br></br> */}
        <Layout>
          <Sider width={250} style={siderStyle}>
            <Navbar />
            <Footer style={replicateFooterStyle}>--</Footer>
          </Sider>
          <Layout>
            <Content style={contentStyle}>
              <div className={styles.container}>
                <div className={styles.content}>
                  {user && (
                    <Form
                      labelCol={{
                        span: 10
                      }}
                      wrapperCol={{
                        span: 20
                      }}
                      layout="horizontal"
                      style={{
                        maxWidth: 800
                      }}>
                      <Form.Item label="Current Profile Photo" name="profile_photo">
                        <img alt="" src={formValues.profile_photo} width="200" />
                        <br></br>
                        <UploadWidget setFormValues={setFormValues} formValues={formValues} />
                      </Form.Item>
                      <Form.Item
                        label="Username"
                        name="username"
                        onChange={handleInputChange}
                        defaultValue={user.nickname}>
                        <Input
                          placeholder={user.nickname}
                          // defaultValue={user.nickname}
                        />
                      </Form.Item>
                      <Form.Item label="First Name" name="first_name" onChange={handleInputChange}>
                        <Input placeholder={formValues.first_name} />
                      </Form.Item>
                      <Form.Item label="Last Name" name="last_name" onChange={handleInputChange}>
                        <Input placeholder={formValues.last_name} />
                      </Form.Item>
                      <Form.Item label="Email" name="email" onChange={handleInputChange}>
                        <Input placeholder={formValues.email} />
                      </Form.Item>

                      <Form.Item
                        name="phone_number"
                        label="Phone Number"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your phone number!'
                          }
                        ]}
                        onChange={handleInputChange}>
                        <Input addonBefore="+65" placeholder={formValues.phone_number} />
                      </Form.Item>
                      <Form.Item label="Address" name="address" onChange={handleInputChange}>
                        <Input placeholder={formValues.address} />
                      </Form.Item>
                      <Form.Item
                        label="Postal Code"
                        name="postal_code"
                        onChange={handleInputChange}>
                        <Input placeholder={formValues.postal_code} />
                      </Form.Item>
                      <Form.Item label="Nearest MRT" name="mrt" onChange={handleInputChange}>
                        <Select
                          showSearch
                          onSearch={onSearch}
                          onChange={handleMRTChange}
                          filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                          }
                          placeholder={formValues.mrt}
                          options={MRT}
                        />
                        {/* <Input placeholder={formValues.mrt} /> */}
                      </Form.Item>

                      <Form.Item>
                        <Button
                          type="primary"
                          htmlType="submit"
                          style={{
                            marginRight: '20px'
                          }}
                          onClick={handleSubmit}>
                          Save Changes
                        </Button>
                      </Form.Item>
                    </Form>
                  )}
                </div>
              </div>
            </Content>
            <Footer style={footerStyle}>Copyright © Give & Take 2023</Footer>
          </Layout>
        </Layout>
      </ConfigProvider>
    </div>
  );
}

export default CreateProfile;
