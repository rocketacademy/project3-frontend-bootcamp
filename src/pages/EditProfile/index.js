// users can edit the details of their profile on this page
import { React, useState, useEffect } from "react";
import "./editprofile.css";
import { Navbar } from "../../commoncomponents/Navbar/Navbar";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, TreeSelect, Upload, Select, Layout } from "antd";
import { useAuth0 } from "@auth0/auth0-react";
// import { MRTstations } from './MRTstations';
// import { useState } from 'react';
import {
  Footer,
  Sider,
  Content,
  siderStyle,
  contentStyle,
} from "../globalstyles";

export function EditProfile() {
  const { TextArea } = Input;
  const { Option } = Select;

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="65">+65</Option>
        <Option value="66">+66</Option>
      </Select>
    </Form.Item>
  );

  const footerStyle = {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#303841",
    position: "fixed",
    bottom: 0,
    width: "100%",
  };

  const replicateFooterStyle = {
    left: 0,
    bottom: 0,
    width: "100%",
    // position: 'absolute',
    backgroundColor: "#303841",
    position: "fixed",
  };

  const { getAccessTokenSilently, user } = useAuth0();
  const { accessToken, setAccessToken } = useState(null);

  useEffect(() => {
    if (user && !accessToken) {
      getAccessTokenSilently().then((jwt) => setAccessToken(jwt));
    }
  }, [user, accessToken]);
  console.log(accessToken);

  return (
    <div>
      <Layout>
        <Sider width={300} style={siderStyle}>
          <Navbar />
          <Footer style={replicateFooterStyle}> </Footer>
        </Sider>
        <Layout>
          <Content style={contentStyle}>
            <div>
              <Form
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 20,
                }}
                layout="horizontal"
                // onValuesChange={onFormLayoutChange}
                // disabled={componentDisabled}
                style={{
                  maxWidth: 800,
                }}
              >
                <Form.Item label="Profile" valuePropName="fileList">
                  <Upload action="/upload.do" listType="picture-card">
                    <div>
                      <PlusOutlined />
                      <div
                        style={{
                          marginTop: 8,
                        }}
                      ></div>
                    </div>
                  </Upload>
                </Form.Item>
                <Form.Item label="Username">
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  name="phone"
                  label="Phone Number"
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number!",
                    },
                  ]}
                >
                  <Input
                    addonBefore={prefixSelector}
                    style={{ width: "100%" }}
                  />
                </Form.Item>

                <Form.Item label="Nearest MRT station">
                  <TreeSelect
                    treeData={[
                      {
                        title: "North",
                        value: "north",
                        children: [
                          {
                            title: "Woodlands",
                            value: "woodlands",
                          },
                          {
                            title: "Bishan",
                            value: "bishan",
                          },
                        ],
                      },
                    ]}
                  />
                </Form.Item>
                <Form.Item label="Bio">
                  <TextArea rows={4} />
                </Form.Item>

                <Form.Item>
                  <Button>Save</Button>
                  <Button>Cancel</Button>
                </Form.Item>
              </Form>
              {/* <Logout /> */}
            </div>
          </Content>
          <Footer style={footerStyle}></Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default EditProfile;
